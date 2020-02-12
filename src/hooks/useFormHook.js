import { useCallback, useEffect, useMemo, useState } from 'react'
import { Keyboard } from 'react-native'

import { useDebounceHook, useCustomStateHook } from '.'

export function useFormHook({ refs, validationRules, initialState, onFocus, onUnfocus, onSubmit }) {
  const [state, dispatch] = useCustomStateHook(initialState)
  const [editing, setEditing] = useState(false)
  const [valid, setValid] = useState(false)
  const editingDebounced = useDebounceHook(editing, 100)

  const onFieldChange = useCallback(fieldName => value => dispatch({ [fieldName]: value }), [
    dispatch,
  ])

  const onInputsChangeHandler = useMemo(
    () => Object.keys(initialState).map(fieldName => onFieldChange(fieldName)),
    [initialState, onFieldChange],
  )

  const onSubmitEditingHandler = useCallback(() => {
    const focusedInputIndex = refs.findIndex(ref => ref.current.isFocused())

    const nextInputIndex = focusedInputIndex + 1
    if (nextInputIndex < refs.length) {
      refs[nextInputIndex].current.focus()
    }
  }, [refs])

  const onFocusHandler = useCallback(() => {
    if (onFocus) {
      onFocus()
      setEditing(true)
    }
  }, [onFocus])

  const onBlurHandler = useCallback(() => {
    setEditing(false)
  }, [])

  useEffect(() => {
    if (!editingDebounced && onUnfocus) {
      onUnfocus()
    }
  }, [editingDebounced, onUnfocus])

  useEffect(() => {
    const validForm = validationRules.every(([ruleKey, ruleFunc]) => ruleFunc(state[ruleKey]))
    setValid(validForm)
  }, [state, validationRules])

  const onSubmitFormHandler = useCallback(() => {
    setEditing(false)
    Keyboard.dismiss()

    if (valid) {
      onSubmit({ ...state })
    }
  }, [valid, onSubmit, state])

  return {
    onInputsChangeHandler,
    onSubmitEditingHandler,
    onSubmitFormHandler,
    onFocusHandler,
    onBlurHandler,
    state,
  }
}

import { useCallback, useEffect, useMemo, useState } from 'react'
import { Keyboard } from 'react-native'

import { useDebounce } from './useDebounce'
import { useCustomState } from './useCustomState'

export function useForm({
  refs,
  validationRules,
  initialErrorState,
  initialState,
  onFocus,
  onUnfocus,
  onSubmit,
}) {
  const [errorState, errorDispatch] = useCustomState(initialErrorState)
  const [state, dispatch] = useCustomState(initialState)
  const [editing, setEditing] = useState(false)
  const editingDebounced = useDebounce(editing, 10)

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

  const validate = useCallback(() => {
    return Object.keys(validationRules).reduce((newErrorState, validatorKey) => {
      newErrorState[validatorKey] = !validationRules[validatorKey](state[validatorKey])
      return newErrorState
    }, {})
  }, [state, validationRules])

  const checkFormValidity = useCallback(
    newErrorState => !Object.values(newErrorState).find(error => error),
    [],
  )

  const onSubmitFormHandler = useCallback(() => {
    setEditing(false)
    Keyboard.dismiss()

    const newErrorState = validate()

    if (checkFormValidity(newErrorState)) {
      errorDispatch(initialErrorState)
      onSubmit({ ...state })
    } else {
      errorDispatch(newErrorState)
    }
  }, [validate, checkFormValidity, initialErrorState, errorDispatch, onSubmit, state])

  return {
    onInputsChangeHandler,
    onSubmitEditingHandler,
    onSubmitFormHandler,
    onFocusHandler,
    onBlurHandler,
    state,
    errorState,
  }
}

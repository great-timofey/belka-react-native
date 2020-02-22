import React, { memo } from 'react'
import { View } from 'react-native'

import { useForm } from '@hooks'

import { BelkaInput } from '../BelkaInput'

import styles from './styles'

export const Form = memo(function({
  inputs,
  onFocus,
  onUnfocus,
  onSubmit,
  additionalElements,
  formControls,
  refs,
  validationRules,
  initialState,
  initialErrorState,
}) {
  const {
    state,
    errorState,
    onInputsChangeHandler,
    onSubmitEditingHandler,
    onSubmitFormHandler,
    onFocusHandler,
    onBlurHandler,
  } = useForm({
    refs,
    validationRules,
    initialState,
    initialErrorState,
    onFocus,
    onUnfocus,
    onSubmit,
  })

  return (
    <>
      {inputs.map((input, index) => (
        <BelkaInput
          key={input.id}
          containerAdditionalStyles={input.styles}
          startIcon={input.startIcon}
          placeholder={input.placeholder}
          onChangeText={onInputsChangeHandler[index]}
          errorText={input.errorText}
          error={errorState[input.name]}
          value={state[input.name]}
          passwordWithToggleIcon={input.passwordWithToggleIcon}
          inputAdditionalProps={{
            ...input.additionalProps,
            ...{
              onSubmitEditing:
                index === inputs.length - 1 ? onSubmitFormHandler : onSubmitEditingHandler,
              onFocus: onFocusHandler,
              ref: refs[index],
              onBlur: onBlurHandler,
            },
          }}
        />
      ))}
      {additionalElements && <View style={styles.controlsContainer}>{additionalElements}</View>}
      <View
        style={[
          styles.controlsContainer,
          React.Children.count(formControls) === 1 && styles.controlsContainerSingleControl,
        ]}
      >
        {React.Children.map(formControls, item => {
          if (!item.props.onPress && onSubmitFormHandler) {
            return React.cloneElement(item, {
              onPress: onSubmitFormHandler,
            })
          }
          return item
        })}
      </View>
    </>
  )
})

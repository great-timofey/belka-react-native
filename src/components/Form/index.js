import React, { memo } from 'react'
import { View } from 'react-native'

import { useFormHook } from '@hooks'

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
}) {
  const {
    state,
    onInputsChangeHandler,
    onSubmitEditingHandler,
    onSubmitFormHandler,
    onFocusHandler,
    onBlurHandler,
  } = useFormHook({
    refs,
    validationRules,
    initialState,
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
          value={state[input.name]}
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
          if (!item.props.onPress) {
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

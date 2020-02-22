export function getInitialFormState(inputsData) {
  return inputsData.reduce(
    (acc, field) => {
      const { name, validate } = field
      acc.initialState[name] = ''
      acc.initialErrorState[name] = false
      acc.rules[name] = validate
      return acc
    },
    { initialState: {}, initialErrorState: {}, rules: {} },
  )
}

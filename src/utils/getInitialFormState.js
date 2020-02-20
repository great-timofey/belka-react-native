export function getInitialFormState(inputsData) {
  return inputsData.reduce(
    (acc, field) => {
      const { name, validate } = field
      acc.initialState[name] = ''
      acc.rules.push([name, validate])
      return acc
    },
    { initialState: {}, rules: [] },
  )
}

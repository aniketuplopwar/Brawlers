export const getFormErrors = (formConfig, formValue) => {
  const errors = {}
  Object.keys(formConfig).forEach((fieldName) => {
    if (formConfig[fieldName].validation.includes('isRequired') && !formValue[fieldName]) {
      errors[fieldName] = `${formConfig[fieldName].label} is required`
      return
    }
    if (
      formConfig[fieldName].validation.includes('isNumeric') &&
      !isNumeric(formValue[fieldName])
    ) {
      errors[fieldName] = `${formConfig[fieldName].label} should be numeric`
      return
    }
  })
  return errors
}

function isNumeric(str) {
  if (typeof str != 'string') return false
  return !isNaN(str) && !isNaN(parseFloat(str))
}

export const getFormErrors = (formConfig, formValue) => {
  const errors = {}
  Object.keys(formConfig).forEach((fieldName) => {
    if (formConfig[fieldName].validation.includes('isRequired') && !formValue[fieldName]) {
      errors[fieldName] = `${formConfig[fieldName].label} is required`
    }
  })
  return errors
}

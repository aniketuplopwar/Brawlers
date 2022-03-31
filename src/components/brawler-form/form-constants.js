export const brawlerFormFields = {
  name: {
    type: 'text',
    label: 'Name',
    validation: ['isRequired']
  },
  type: {
    type: 'text',
    label: 'Type',
    validation: ['isRequired']
  },
  health: {
    type: 'number',
    label: 'Health',
    validation: ['isRequired', 'isNumeric']
  },
  power: {
    type: 'number',
    label: 'Power',
    validation: ['isRequired', 'isNumeric']
  }
}

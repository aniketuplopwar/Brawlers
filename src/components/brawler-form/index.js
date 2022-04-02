import { useState } from 'react'
import PropTypes from 'prop-types'
import { TextField } from '../text-field'
import { getFormErrors } from './validation-helper'
import { brawlerFormFields } from './form-constants'
import './brawler-form.scss'
import { Button } from '../button'

export const BrawlerForm = ({ brawler = {}, formConfig = brawlerFormFields, onSave, onCancel }) => {
  const [_brawler, setBrawler] = useState(brawler)
  const [errors, setErrors] = useState({})

  const onSubmit = (e) => {
    e.preventDefault()
    const errors = getFormErrors(formConfig, _brawler)
    if (Object.keys(errors).length > 0) {
      setErrors(errors)
    } else {
      onSave(_brawler)
    }
  }

  return (
    <form onSubmit={onSubmit} className="BrawlerForm">
      <ul>
        {Object.keys(formConfig).map((fieldName) => (
          <li key={fieldName}>
            <TextField
              name={fieldName}
              label={brawlerFormFields[fieldName].label}
              value={_brawler[fieldName] || ''}
              type={brawler.type}
              onChange={(e) => {
                setErrors({ ...errors, [fieldName]: undefined })
                setBrawler({ ..._brawler, [fieldName]: e.target.value })
              }}
              errorMessage={errors[fieldName]}
            />
          </li>
        ))}
      </ul>
      <div className="BrawlerForm__Actions">
        <Button>Save</Button>
        <Button styleType="Secondary" onClick={onCancel} type="button">
          Cancel
        </Button>
      </div>
    </form>
  )
}

BrawlerForm.propTypes = {
  brawler: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    health: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    power: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }),
  formConfig: PropTypes.object,
  onSave: PropTypes.func,
  onCancel: PropTypes.func
}

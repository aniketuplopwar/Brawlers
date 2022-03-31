import PropTypes from 'prop-types'
import './text-field.scss'

export const TextField = ({ name, label, errorMessage, ...restProps }) => {
  return (
    <div className="TextField">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} name={name} {...restProps} />
      <p>{errorMessage}</p>
    </div>
  )
}

TextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  errorMessage: PropTypes.string
}

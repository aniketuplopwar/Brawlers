import PropTypes from 'prop-types'
import './button.scss'
export const Button = ({ styleType = 'Primary', children, ...restProps }) => {
  return (
    <button className={`Button-${styleType} Button`} {...restProps}>
      {children}
    </button>
  )
}

Button.propTypes = {
  styleType: PropTypes.oneOf(['Primary', 'Secondary', 'Danger']),
  children: PropTypes.node
}

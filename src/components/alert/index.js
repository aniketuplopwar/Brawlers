import PropTypes from 'prop-types'
import './alert.scss'

export const Alert = ({ type, children }) => {
  return <p className={`Alert Alert-${type}`}>{children}</p>
}

Alert.propTypes = {
  type: PropTypes.oneOf(['Error', 'Success']),
  children: PropTypes.node
}

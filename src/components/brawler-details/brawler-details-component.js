import PropTypes from 'prop-types'
import { brawlerFormFields } from '../brawler-form/form-constants'

export const BrawlerDetailsComponent = ({ brawler }) => {
  return (
    <ul>
      {Object.keys(brawler)
        .filter((key) => key !== 'id')
        .map((fieldName) => (
          <li key={fieldName} className="BrawlerDetails__Field">
            <span className="BrawlerDetails__Field__Name">
              {brawlerFormFields[fieldName].label}
            </span>
            <span className="BrawlerDetails__Field__Value">{brawler[fieldName]}</span>
          </li>
        ))}
    </ul>
  )
}

BrawlerDetailsComponent.propTypes = {
  brawler: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    health: PropTypes.number,
    power: PropTypes.power
  })
}

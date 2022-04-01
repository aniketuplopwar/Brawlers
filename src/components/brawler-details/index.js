import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { mockBrawlers } from '../../mocks/mock-brawlers'
import { BrawlerForm } from '../brawler-form'
import { brawlerFormFields } from '../brawler-form/form-constants'
import { Button } from '../button'
import './brawler-details.scss'

export const BrawlerDetails = () => {
  const { id } = useParams()
  const [brawler] = useState(mockBrawlers[0])
  const [isEditMode, setEditMode] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="BrawlerDetails">
      <h1>Brawler #{id}</h1>
      {isEditMode ? (
        <BrawlerForm brawler={brawler} onCancel={() => setEditMode(false)} />
      ) : (
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
      )}
      <hr />
      <div className="BrawlerDetails__ActionContainer">
        <Button styleType="Secondary" onClick={() => navigate('/brawlers')}>
          {' '}
          Go Back
        </Button>
        {!isEditMode && (
          <Button styleType="Primary" onClick={() => setEditMode(true)}>
            Edit
          </Button>
        )}
      </div>
    </div>
  )
}

import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../../common/http-utils'
import { BrawlerForm } from '../brawler-form'
import { Button } from '../button'
import { BrawlerDetailsComponent } from './brawler-details-component'
import './brawler-details.scss'

export const BrawlerDetails = () => {
  const { id } = useParams()
  const [brawler, setBrawler] = useState(null)
  const [apiCallInProgress, setApiCallInProgress] = useState(true)
  const [isEditMode, setEditMode] = useState(false)
  const navigate = useNavigate()

  const updateBrawler = async (brawler) => {
    setApiCallInProgress(true)
    const _brawler = await api(`brawlers/${id}`, {
      method: 'PUT',
      body: JSON.stringify(brawler)
    })
    setBrawler(_brawler)
    setApiCallInProgress(false)
    setEditMode(false)
  }

  useEffect(async () => {
    setApiCallInProgress(true)
    const _brawler = await api(`brawlers/${id}`, {
      method: 'GET'
    })
    setBrawler(_brawler)
    setApiCallInProgress(false)
  }, [])

  return (
    <div className="BrawlerDetails">
      <h1>Brawler #{id}</h1>
      {apiCallInProgress && <p>Loading...</p>}
      {!apiCallInProgress && !isEditMode && <BrawlerDetailsComponent brawler={brawler} />}
      {!apiCallInProgress && isEditMode && (
        <BrawlerForm brawler={brawler} onCancel={() => setEditMode(false)} onSave={updateBrawler} />
      )}
      <hr />
      <div className="BrawlerDetails__ActionContainer">
        <Button styleType="Secondary" onClick={() => navigate('/brawlers')}>
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

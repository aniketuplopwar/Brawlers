import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../common/http-utils'
import { Alert } from '../alert'
import { BrawlerForm } from '../brawler-form'
import './create-brawler.scss'

export const CreateBrawler = () => {
  const navigate = useNavigate()
  const [apiCallInProgress, setApiCallInProgress] = useState(false)
  const [alert, setAlert] = useState(null)

  const redirectToHome = () => {
    navigate('/brawlers')
  }

  const onSave = async (brawler) => {
    try {
      setApiCallInProgress(true)
      await api('brawlers', {
        method: 'POST',
        body: JSON.stringify({ ...brawler })
      })
      setAlert({ type: 'Success', message: 'Record saved successfully!' })
      setTimeout(redirectToHome, 2000)
    } catch (e) {
      setAlert({ type: 'Error', message: 'Something went wrong! please try again later' })
    }
    setApiCallInProgress(false)
  }

  return (
    <div className="CreateBrawler">
      <h1> Create Brawler</h1>
      {alert && <Alert type={alert.type}>{alert.message}</Alert>}
      {apiCallInProgress ? (
        <p>Saving...</p>
      ) : (
        <BrawlerForm onCancel={redirectToHome} onSave={onSave}></BrawlerForm>
      )}
    </div>
  )
}

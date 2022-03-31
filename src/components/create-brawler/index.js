import { useNavigate } from 'react-router-dom'
import { BrawlerForm } from '../brawler-form'
import './create-brawler.scss'

export const CreateBrawler = () => {
  const navigate = useNavigate()

  const onCancel = () => {
    navigate('/brawlers')
  }
  return (
    <div className="CreateBrawler">
      <h1> Create Brawler</h1>
      <BrawlerForm onCancel={onCancel}></BrawlerForm>
    </div>
  )
}

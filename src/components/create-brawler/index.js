import { BrawlerForm } from '../brawler-form'
import './create-brawler.scss'

export const CreateBrawler = () => {
  const brwaler = {
    name: 'Aniket',
    type: 'hero'
  }
  return (
    <div className="CreateBrawler">
      <h1> Create Brawler</h1>
      <BrawlerForm brawler={brwaler} onSave={(brawler) => console.log(brawler)}></BrawlerForm>
    </div>
  )
}

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../common/http-utils'
import { Button } from '../button'
import './brawler-listing.scss'

export const BrawlerListing = () => {
  const [brawlers, setBrawlers] = useState([])
  const [apiCallInProgress, setApiCallInProgress] = useState(true)

  const getBrawlers = async () => {
    const _brawlers = await api('brawlers', {
      method: 'GET'
    })
    setBrawlers(_brawlers)
  }

  const onDelete = (id) => async () => {
    setApiCallInProgress(true)
    await api(`brawlers/${id}`, {
      method: 'DELETE'
    })
    await getBrawlers()
    setApiCallInProgress(false)
  }

  useEffect(async () => {
    setApiCallInProgress(true)
    await getBrawlers()
    setApiCallInProgress(false)
  }, [])

  return (
    <div className="BrawlerListing">
      <h1>Brawlers List</h1>
      <Link to="/brawlers/create">Create Brawler</Link>
      <div className="BrawlerListing__Container">
        <ul>
          <li className="BrawlerListing__Header">
            <span className="BrawlerListing__Header__Id">#Id</span>
            <span className="BrawlerListing__Header__Name">Name</span>
            <span className="BrawlerListing__Header__Actions">Actions</span>
          </li>
          {!apiCallInProgress &&
            brawlers.length > 0 &&
            brawlers.map((brawler) => (
              <li key={brawler.id} className="BrawlerListing__Item">
                <span className="BrawlerListing__Item__Id" title={brawler.id}>
                  {brawler.id}
                </span>
                <span className="BrawlerListing__Item__Name">
                  <Link to={`details/${brawler.id}`}>{brawler.name}</Link>
                </span>
                <span className="BrawlerListing__Item__Action">
                  <Button
                    styleType="Danger"
                    onClick={onDelete(brawler.id)}
                    data-testid={`delete-${brawler.id}`}
                  >
                    X
                  </Button>
                </span>
              </li>
            ))}
          {!apiCallInProgress && brawlers.length == 0 && (
            <li className="BrawlerListing__Item">
              <div className="BrawlerListing__NoRecord">No Brawlers added yet</div>
            </li>
          )}
          {apiCallInProgress && <p className="BrawlerListing__Loader"> Loading...</p>}
        </ul>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../button'
import './brawler-listing.scss'
import { mockBrawlers } from './mock-brawlers'

export const BrawlerListing = () => {
  const [brawlers] = useState(mockBrawlers)
  const onDelete = (id) => () => console.log(id)

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
          {brawlers.length > 0 ? (
            brawlers.map((brawler) => (
              <li key={brawler.id} className="BrawlerListing__Item">
                <span className="BrawlerListing__Item__Id">{brawler.id}</span>
                <span className="BrawlerListing__Item__Name">
                  <Link to={`brawler/details/${brawler.id}`}>{brawler.name}</Link>
                </span>
                <span className="BrawlerListing__Item__Action">
                  <Button styleType="Danger" onClick={onDelete(brawler.id)}>
                    X
                  </Button>
                </span>
              </li>
            ))
          ) : (
            <li className="BrawlerListing__Item">
              <div className="BrawlerListing__NoRecord">No Brawlers added yet</div>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

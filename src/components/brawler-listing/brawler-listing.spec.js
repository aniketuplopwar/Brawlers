import { act } from 'react-dom/test-utils'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrawlerListing } from '.'
import { api } from '../../common/http-utils'
import { mockBrawlers } from '../../mocks/mock-brawlers'
jest.mock('../../common/http-utils')
describe('components/brawler-listing', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should fetch and render the brawlers when brawlers are present', async () => {
    api.mockResolvedValue(mockBrawlers)
    await act(async () => {
      render(
        <Router>
          <BrawlerListing />
        </Router>
      )
    })
    expect(api).toHaveBeenNthCalledWith(1, `brawlers`, {
      method: 'GET'
    })
    expect(screen.getByText(mockBrawlers[0].name)).toBeInTheDocument()
    expect(screen.getByText(mockBrawlers[1].name)).toBeInTheDocument()
  })

  it('should display message when no brawler found', async () => {
    api.mockResolvedValue([])
    await act(async () => {
      render(
        <Router>
          <BrawlerListing />
        </Router>
      )
    })
    expect(api).toHaveBeenNthCalledWith(1, `brawlers`, {
      method: 'GET'
    })
    expect(screen.getByText('No Brawlers added yet')).toBeInTheDocument()
  })

  it('should delete brawler when delete button is clicked', async () => {
    api.mockResolvedValue(mockBrawlers)
    await act(async () => {
      render(
        <Router>
          <BrawlerListing />
        </Router>
      )
    })

    await act(async () => {
      fireEvent.click(screen.getByTestId(`delete-${mockBrawlers[0].id}`))
    })

    expect(api).toHaveBeenNthCalledWith(2, `brawlers/${mockBrawlers[0].id}`, {
      method: 'DELETE'
    })
    expect(api).toHaveBeenNthCalledWith(3, `brawlers`, {
      method: 'GET'
    })
  })
})

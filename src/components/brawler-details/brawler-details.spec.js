import { act } from 'react-dom/test-utils'
import { BrowserRouter as Router } from 'react-router-dom'

import { render, screen, fireEvent } from '@testing-library/react'

import { api } from '../../common/http-utils'
import { mockBrawlers } from '../../mocks/mock-brawlers'
import { BrawlerDetails } from '.'

jest.mock('../../common/http-utils')
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    id: '1'
  })
}))

describe('components/brawler-details', () => {
  it('should get the brawler detail, once the component is loaded', async () => {
    api.mockResolvedValue(mockBrawlers[0])
    await act(async () => {
      render(
        <Router>
          <BrawlerDetails />
        </Router>
      )
    })
    expect(api).toHaveBeenNthCalledWith(1, `brawlers/1`, {
      method: 'GET'
    })
    expect(screen.getByText(mockBrawlers[0].name)).toBeInTheDocument()
    expect(screen.getByText(mockBrawlers[0].type)).toBeInTheDocument()
    expect(screen.getByText(mockBrawlers[0].health)).toBeInTheDocument()
    expect(screen.getByText(mockBrawlers[0].power)).toBeInTheDocument()
  })
  it('should render form when edit button is clicked', async () => {
    api.mockResolvedValue(mockBrawlers[0])
    await act(async () => {
      render(
        <Router>
          <BrawlerDetails />
        </Router>
      )
    })
    await act(async () => {
      fireEvent.click(screen.getByText('Edit'))
    })

    expect(api).toHaveBeenNthCalledWith(1, `brawlers/1`, {
      method: 'GET'
    })
    expect(screen.getByDisplayValue(mockBrawlers[0].name)).toBeInTheDocument()
    expect(screen.getByDisplayValue(mockBrawlers[0].type)).toBeInTheDocument()
    expect(screen.getByDisplayValue(mockBrawlers[0].health)).toBeInTheDocument()
    expect(screen.getByDisplayValue(mockBrawlers[0].power)).toBeInTheDocument()
  })
})

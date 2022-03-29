import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import {NavBar} from './index'

describe('components/nav-bar', () => {
    it('should render the links as provided', () => {
        const links = [
            {
                href: '/foo',
                label: 'Foo'
            },
            {
                href: '/bar',
                label: 'Bar'
            },
        ]
        const {container} =render(<Router>
            <NavBar links={links} /></Router>)      

        expect(screen.getByText(/Foo/i)).toBeInTheDocument()
        expect(screen.getByText(/Bar/i)).toBeInTheDocument()
        expect(container.querySelectorAll('.NavBar__MenuButton').length).toBe(1)
        expect(container.querySelectorAll('.NavBar__Links').length).toBe(1)
        expect(container.querySelectorAll('.NavBar__Links--active').length).toBe(0)
    })

    it('should open the menu when the menu button is clicked, given the menu is intially closed', () => {
        const links = [
            {
                href: '/foo',
                label: 'Foo'
            },
            {
                href: '/bar',
                label: 'Bar'
            },
        ]
        const {container} =render(<Router>
            <NavBar links={links} /></Router>) 

        //Given
        expect(container.querySelectorAll('.NavBar__Links--active').length).toBe(0)

        //When
        fireEvent.click(container.querySelector('.NavBar__MenuButton'))

        //Then
        expect(container.querySelectorAll('.NavBar__Links--active').length).toBe(1)
    })

    it('should close the menu when the menu button is clicked, given the menu is intially closed', () => {
        const links = [
            {
                href: '/foo',
                label: 'Foo'
            },
            {
                href: '/bar',
                label: 'Bar'
            },
        ]
        const {container} =render(<Router>
            <NavBar links={links} /></Router>) 

        //Given
        fireEvent.click(container.querySelector('.NavBar__MenuButton'))
        expect(container.querySelectorAll('.NavBar__Links--active').length).toBe(1)

        //When
        fireEvent.click(container.querySelector('.NavBar__MenuButton'))

        //Then
        expect(container.querySelectorAll('.NavBar__Links--active').length).toBe(0)
    })
})

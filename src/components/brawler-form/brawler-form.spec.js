import { render, screen, fireEvent } from '@testing-library/react'
import { BrawlerForm } from './'
describe('components/brawler-form', () => {
  let formConfig

  beforeEach(() => {
    formConfig = {
      name: {
        type: 'text',
        label: 'Name:',
        validation: ['isRequired']
      },
      type: {
        type: 'text',
        label: 'Type:',
        validation: ['isRequired']
      }
    }
  })

  it('should render the form as per the form field provided', () => {
    const { container } = render(<BrawlerForm formConfig={formConfig} onSave={() => {}} />)

    const nameInput = container.querySelector('#name')
    const typeInput = container.querySelector('#type')

    expect(nameInput).toBeInTheDocument()
    expect(typeInput).toBeInTheDocument()
    expect(nameInput.value).toBe('')
    expect(typeInput.value).toBe('')
  })

  it('should initialise the form field provided brawler', () => {
    const { container } = render(
      <BrawlerForm
        formConfig={formConfig}
        brawler={{ name: 'Brawler 1', type: 'Super hero' }}
        onSave={() => {}}
      />
    )

    expect(container.querySelector('#name').value).toBe('Brawler 1')
    expect(container.querySelector('#type').value).toBe('Super hero')
  })

  it('should update the field values on change', () => {
    const { container } = render(<BrawlerForm formConfig={formConfig} onSave={() => {}} />)

    const nameInput = container.querySelector('#name')
    const typeInput = container.querySelector('#type')
    fireEvent.change(nameInput, { target: { value: 'Brawler 2' } })
    fireEvent.change(typeInput, { target: { value: 'Super hero 2' } })

    expect(nameInput.value).toBe('Brawler 2')
    expect(typeInput.value).toBe('Super hero 2')
  })

  it('should show error when form is submitted with invalid values', () => {
    const { container } = render(<BrawlerForm formConfig={formConfig} onSave={() => {}} />)

    //given
    const nameInput = container.querySelector('#name')
    const typeInput = container.querySelector('#type')
    fireEvent.change(nameInput, { target: { value: '' } })
    fireEvent.change(typeInput, { target: { value: 'Super hero 2' } })

    //when
    fireEvent.submit(container.querySelector('form'))

    //then
    expect(screen.getByText(/name is required/i)).toBeInTheDocument()
    expect(nameInput.value).toBe('')
  })

  it('should save the form when form has valid values', () => {
    const onSave = jest.fn()
    const { container } = render(<BrawlerForm formConfig={formConfig} onSave={onSave} />)

    //given
    const nameInput = container.querySelector('#name')
    const typeInput = container.querySelector('#type')
    fireEvent.change(nameInput, { target: { value: 'Brawler 2' } })
    fireEvent.change(typeInput, { target: { value: 'Super hero 2' } })

    //when
    fireEvent.submit(container.querySelector('form'))

    //then
    expect(onSave.mock.calls.length).toBe(1)
    expect(onSave.mock.calls[0][0]).toEqual({ name: 'Brawler 2', type: 'Super hero 2' })
  })
  it('should take required action on cancel', () => {
    const onCancel = jest.fn()
    render(<BrawlerForm formConfig={formConfig} onCancel={onCancel} />)

    //when
    fireEvent.click(screen.getByText(/Cancel/))

    //then
    expect(onCancel.mock.calls.length).toBe(1)
  })
})

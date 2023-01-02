import { screen, render, fireEvent } from '@testing-library/react-native'
import { CloseButton } from './CloseButton';
const mockHandleClose = jest.fn()

describe('Close Button', () => {
  it('should call handle close function on press', ()=>{
    render(<CloseButton handleClose={mockHandleClose}/>)
    const button = screen.getByRole('button')

    fireEvent.press(button)
    expect(mockHandleClose).toHaveBeenCalledTimes(1)
  })

  it('should have an accesible label', ()=>{
    render(<CloseButton handleClose={mockHandleClose}/>)
    const button = screen.getByRole('button')
    expect(button).toHaveAccessibilityValue(/close modal/i)
  })

  it('should have an accesible hint', ()=>{
    render(<CloseButton handleClose={mockHandleClose}/>)
    screen.getByAccessibilityHint(/click to close modal/i)
  })

  test('text should have color style equal to color prop', ()=>{
    render(<CloseButton handleClose={mockHandleClose} color='red'/>)
    const text = screen.getByText(/x/i)
    expect(text).toHaveStyle({color:'red'})
  })
});
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import ForwardRefDemo, { FancyInput, ControlledInput } from './index'

// Mock console.log for testing
const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {})

describe('ForwardRef Demo', () => {
  afterEach(() => {
    mockConsoleLog.mockClear()
  })

  afterAll(() => {
    mockConsoleLog.mockRestore()
  })

  test('renders ForwardRef demo components', () => {
    render(<ForwardRefDemo />)

    expect(screen.getByText('ForwardRef Demo')).toBeInTheDocument()
    expect(screen.getByText('Basic ForwardRef Example')).toBeInTheDocument()
    expect(screen.getByText('useImperativeHandle Example')).toBeInTheDocument()
  })

  test('FancyInput receives focus when button is clicked', () => {
    render(<ForwardRefDemo />)

    const fancyInput = screen.getByPlaceholderText('Click focus button')
    const focusButton = screen.getByText('Focus Fancy Input')

    // Initially not focused
    expect(fancyInput).not.toHaveFocus()

    // Click focus button
    fireEvent.click(focusButton)

    // Should now be focused
    expect(fancyInput).toHaveFocus()
  })

  test('ControlledInput focus works via ref', () => {
    render(<ForwardRefDemo />)

    const controlledInput = screen.getByPlaceholderText('Type something...')
    const focusButton = screen.getByText('Focus')

    // Initially not focused
    expect(controlledInput).not.toHaveFocus()

    // Click focus button
    fireEvent.click(focusButton)

    // Should now be focused
    expect(controlledInput).toHaveFocus()
  })

  test('ControlledInput clear method works', () => {
    render(<ForwardRefDemo />)

    const controlledInput = screen.getByPlaceholderText('Type something...')
    const clearButton = screen.getByText('Clear')

    // Type something
    fireEvent.change(controlledInput, { target: { value: 'test value' } })
    expect(controlledInput.value).toBe('test value')

    // Click clear button
    fireEvent.click(clearButton)

    // Should be cleared
    expect(controlledInput.value).toBe('')
  })

  test('ControlledInput getValue method works', () => {
    render(<ForwardRefDemo />)

    const controlledInput = screen.getByPlaceholderText('Type something...')
    const logButton = screen.getByText('Log Value')

    // Type something
    fireEvent.change(controlledInput, { target: { value: 'test value' } })

    // Click log button
    fireEvent.click(logButton)

    // Should have logged the value
    expect(mockConsoleLog).toHaveBeenCalledWith('Controlled input value:', 'test value')
  })

  test('ControlledInput setValue method works', () => {
    render(<ForwardRefDemo />)

    const controlledInput = screen.getByPlaceholderText('Type something...')
    const setButton = screen.getByText('Set Value')

    // Click set button
    fireEvent.click(setButton)

    // Should have set the value
    expect(controlledInput.value).toBe('Hello from parent!')
  })

  test('FancyInput component renders with custom styles', () => {
    const { container } = render(<FancyInput placeholder="test" />)
    const input = container.querySelector('input')

    expect(input).toHaveStyle({
      padding: '8px',
      border: '2px solid #007bff',
      borderRadius: '4px',
      fontSize: '16px'
    })
  })

  test('ControlledInput component renders with custom styles', () => {
    const { container } = render(<ControlledInput placeholder="test" />)
    const input = container.querySelector('input')

    expect(input).toHaveStyle({
      padding: '8px',
      border: '2px solid #28a745',
      borderRadius: '4px',
      fontSize: '16px'
    })
  })
})
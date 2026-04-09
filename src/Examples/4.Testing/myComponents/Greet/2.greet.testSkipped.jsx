import { render, screen } from '@testing-library/react'

import Greet from './1.Greet'

test('Testing if exact Hello renders correctly', () => {
  render(<Greet />) // create virtual DOM using @testing-library/react
  const textElement = screen.getByText('Hello') //Screen is a object which consist methods to query vertual DOM
  expect(textElement).toBeInTheDocument() // toBeInTheDocument refers virtual DOM created by render method.
})

// test , expect method is provided by create-react-app
// test and expect are methods from jest which create react app globally provides

test('Testing if any Hello renders correctly', () => {
  render(<Greet />) // create virtual DOM using @testing-library/react
  const textElement2 = screen.getByText(/hello/i) //Screen is a object which consist methods to query vertual DOM
  expect(textElement2).toBeInTheDocument() // toBeInTheDocument refers virtual DOM created by render method.
})

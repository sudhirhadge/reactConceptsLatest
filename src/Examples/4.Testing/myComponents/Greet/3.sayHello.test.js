/*Requirement TDD 
it should render the text SayHello and if a name is passed into the component it shoudl 
render the hellow followed by the name. 
*/

/* Level 1
import { render, screen } from '@testing-library/react'
import SayHello from './4.SayHello'

test('SayHello renders correctly', () => {
  render(<SayHello />)
  const textElement = screen.getByText('SayHello')
  expect(textElement).toBeInTheDocument()
})

test('SayHello with name renders correctly', () => {
  render(<SayHello name="Sudhir" />)
  const textElement = screen.getByText('SayHello Sudhir')
  expect(textElement).toBeInTheDocument()
})

*/
/*  Level 2
describe("Grouping tests",()=>{
})
*/
import { render, screen } from '@testing-library/react'
import SayHello from './4.SayHello'

describe('Grouping tests', () => {
  test('SayHello renders correctly', () => {
    render(<SayHello />)
    const textElement = screen.getByText('SayHello')
    expect(textElement).toBeInTheDocument()
  })

  test('SayHello with name renders correctly', () => {
    render(<SayHello name="Sudhir" />)
    const textElement = screen.getByText('SayHello Sudhir')
    expect(textElement).toBeInTheDocument()
  })
})

/*  Level 2
describe("Grouping tests",()=>{
    test()
   
describe("Nested",()=>{
    test()
})

})
*/

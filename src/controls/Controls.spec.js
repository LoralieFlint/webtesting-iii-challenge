import React from "react";
import { render } from "react-testing-library";
import Controls from "./Controls";
import 'jest-dom/extend-expect';


// Test away!
test('Buttons render correctly', () => {
    render(<Controls />)
  })

test('renders buttons properly', () => {
    const { getByText } = render (<Controls />);
    getByText(/close gate/i);
    getByText(/lock gate/i);
})

test('text on button for unlocked and open', () => {
    const { getByText } = render (<Controls locked={false} closed={false} />);
    getByText(/close gate/i);
    getByText(/lock gate/i);
})

test('text on button for closed and locked', () => {
    const { getByText } = render (<Controls locked={true} closed={true} />);
    getByText(/unlock gate/i);
    getByText(/open gate/i);
})

test('- the closed toggle button is disabled if the gate is locked', () => {
    const {queryByText} = render(<Controls closed={true} locked={true}/>)
    const closedButton = queryByText(/open gate/i)
    expect(closedButton).toHaveAttribute('disabled')
  })

  test('- the locked toggle button is disabled if the gate is open', () => {
    const {queryByText} = render(<Controls closed={false} locked={false}/>)
    const closedButton = queryByText(/open gate/i)
    expect(closedButton).toHaveAttribute('disabled')
  })

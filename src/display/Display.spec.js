import React from "react";
import { render } from "react-testing-library";
import Display from "./Display";

// Test away!
test('Dashboard renders properly', () => {
    render (<Display />);
})

test('Initailly renders to unlocked and ope', () => {
    const { getByText } = render (<Display />);
    getByText(/unlocked/i);
    getByText(/open/i);
})

test('locked and closed', () => {
    const { getByText } = render (<Display locked={true} closed={true} />);
    getByText(/closed/i);
    getByText(/locked/i);
})

test('unlocked and open ', () => {
    const { getByText } = render (<Display locked={false} closed={false} />);
    getByText(/closed/i);
    getByText(/locked/i);
})


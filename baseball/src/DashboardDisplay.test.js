import React from 'react';
import { render, fireEvent, wait, waitForDomChange } from 'react-testing-library'
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';
import Display from './Display';


const displayComponent = render(<Display />);
const dashboardComponent = render(<Dashboard />);
const ballButton = dashboardComponent.getByText(/ball/i);
const foulButton = dashboardComponent.getByText(/foul/i);
const strikeButton = dashboardComponent.getByText(/strike/i);
const hitButton = dashboardComponent.getByText(/hit/i);





it('renders without crashing', () => {
    render(<Display />)
});


describe('Baseball function tests', () => {
    it('displays header', () => {
        const h1 = displayComponent.getByTestId(/heading/i)
        expect(h1).toHaveTextContent(/at bat:/i)
    })
});

test('Increases strike count',  () => {
    fireEvent.click(strikeButton);
    const strikeCount = displayComponent.getByText(/strikes:/i);
    expect(strikeCount).toHaveTextContent(/strikes:1/i);

})

test('Increases ball count', () => {
    fireEvent.click(ballButton);
    const ballCount = displayComponent.getByText(/balls:/i);
    expect(ballCount).toHaveTextContent(/balls:1/i);
})


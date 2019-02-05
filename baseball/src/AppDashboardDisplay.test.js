import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect';
import App from './App';
import Display from './Display';
afterEach(cleanup)



it('renders without crashing', () => {
    render(<App />);
});


describe('Baseball function tests', () => {
    it('displays header', () => {
        const { getByTestId } = render(<App />);
        const h1 = getByTestId('heading')
        expect(h1).toHaveTextContent(/at bat:/i)
    })
});

test('displays strike count and balls', () => {
    const { getByText } = render(<Display balls='2' strikes='2' />);

    getByText(/strikes:2/i);
    getByText(/balls:2/i);

})

test('Increases strike count by 1', () => {
    const { getByText, getByTestId } = render(<App />);
    const strikeButton = getByTestId('strikeButton');
    fireEvent.click(strikeButton);
    getByText(/strikes:1/i);

})
test('Increases ball count by 1', () => {
    const { getByText, getByTestId } = render(<App />);
    const ballButton = getByTestId('ballButton');
    fireEvent.click(ballButton);
    getByText(/balls:1/i);

})
test('Reset ball and strike count to 0 when reaching 3 strikes', () => {
    const { getByText, getByTestId } = render(<App />);
    const strikeButton = getByTestId('strikeButton');
    fireEvent.click(strikeButton);
    fireEvent.click(strikeButton);
    fireEvent.click(strikeButton);
    getByText(/balls:0/i);
    getByText(/strikes:0/i);
})
test('Reset ball and strike count to 0 when reaching 4 balls', () => {
    const { getByText, getByTestId } = render(<App />);
    const ballButton = getByTestId('ballButton');
    fireEvent.click(ballButton);
    fireEvent.click(ballButton);
    fireEvent.click(ballButton);
    fireEvent.click(ballButton);
    getByText(/balls:0/i);
    getByText(/strikes:0/i);
})
test('Reset ball and strike count to 0 after a hit,', () => {
    const { getByText, getByTestId } = render(<App />);
    const hitButton = getByTestId('hitButton');
    fireEvent.click(hitButton);
    getByText(/balls:0/i);
    getByText(/strikes:0/i);


})
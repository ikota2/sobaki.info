import {render, fireEvent, screen} from "@testing-library/react";

import Finder from "./Finder";

test('form renders properly', () => {
	render(<Finder />);
	const fromInput = screen.getByPlaceholderText('Откуда');
	const toInput = screen.getByPlaceholderText('Куда');
	const swapBtn = screen.getByTestId('swapper');
	const submitBtn = screen.getByTestId('submit')
	expect(fromInput).toBeInTheDocument();
	expect(swapBtn).toBeInTheDocument();
	expect(toInput).toBeInTheDocument();
	expect(submitBtn).toBeInTheDocument();
});

test('inputs update', () => {
	render(<Finder />);
	const fromInput = screen.getByPlaceholderText('Откуда');
	const toInput = screen.getByPlaceholderText('Куда');
	fireEvent.change(fromInput, {target: {value: '23'}});
	fireEvent.change(toInput, {target: {value: 'one hundred'}});
	expect(fromInput).toHaveValue('23')
	expect(toInput).toHaveValue('one hundred')
})

test('swap works fine', () => {
	render(<Finder />);
	const fromInput = screen.getByPlaceholderText('Откуда');
	const toInput = screen.getByPlaceholderText('Куда');
	const swapBtn = screen.getByTestId('swapper');
	fireEvent.change(fromInput, {target: {value: '23'}});
	fireEvent.change(toInput, {target: {value: 'one hundred'}});
	fireEvent.click(swapBtn);
	expect(fromInput).toHaveValue('one hundred')
	expect(toInput).toHaveValue('23')
})

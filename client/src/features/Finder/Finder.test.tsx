import {render, fireEvent} from "@testing-library/react";
import Finder from "./Finder";
import {screen} from '@testing-library/dom'

// start works fine

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

test('swap works ok', () => {
	render(<Finder />);
}) // ?????

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

// end works fine


// next try ne ok

// describe('2nd try tests', () => {
// 	render(<Finder />);
//
// 	const fromInput = screen.getByPlaceholderText('Откуда');
// 	const toInput = screen.getByPlaceholderText('Куда');
// 	const swapBtn = screen.getByTestId('swapper');
// 	const submitBtn = screen.getByTestId('submit')
//
// 	it('form renders properly', () => {
// 		render(<Finder />);
// 		expect(fromInput).toBeInTheDocument();
// 		expect(swapBtn).toBeInTheDocument();
// 		expect(toInput).toBeInTheDocument();
// 		expect(submitBtn).toBeInTheDocument();
// 	});
// 	it('inputs update', () => {
// 		render(<Finder />);
// 		fireEvent.change(fromInput, {target: {value: '23'}});
// 		fireEvent.change(toInput, {target: {value: 'one hundred'}});
// 		expect(fromInput).toHaveValue('23')
// 		expect(toInput).toHaveValue('one hundred')
// 	});
// 	it('swap works fine', () => {
// 		render(<Finder />);
// 		fireEvent.change(fromInput, {target: {value: '23'}});
// 		fireEvent.change(toInput, {target: {value: 'one hundred'}});
// 		fireEvent.click(swapBtn);
// 		expect(fromInput).toHaveValue('one hundred')
// 		expect(toInput).toHaveValue('23')
// 	});
//
// });

/// <reference path="../typings/tsd.d.ts"/>
import Calculator from '../lib/Calculator'
import { expect } from 'chai';

describe('Calculator', () => {
	let calc : Calculator;

	beforeEach(() => {
		calc = new Calculator();
	});

	describe('#add', () => {
		it('should work', () => {
			const actual = calc.add(1, 2, 3);
			expect(actual).to.equal(7);
		});
	});
});
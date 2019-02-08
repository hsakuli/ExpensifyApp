import React from 'react';
import expenseSum from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test ('should return 0 if no expenses', () => {
	const result = expenseSum([]);
	expect(result).toBe(0);
});

test ('should return correct sum for one expense', () => {
	const result = expenseSum([expenses[1]]);
	expect(result).toBe(expenses[1].amount);
});

test ('should return correct sum for multiple expenses', () => {
	const sum = expenses[0].amount + expenses[2].amount + expenses[1].amount;
	const result = expenseSum(expenses);
	expect(result).toBe(sum);
});
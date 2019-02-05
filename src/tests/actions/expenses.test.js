import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense object action', ()=> {
	const action = removeExpense({id:'123abc'});
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	});
});

test('should setup edit expense object action', () => {
	const action = editExpense( 'abc123', { note: 'new val' });
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: 'abc123',
		updates: {
			note: 'new val'
		}
	});
});

test('should setup add expense object with provided values', () => {
	const expenseData = {
		description: 'Rent',
		amount: '42069',
		createdAt: '1000',
		note: 'yeetus'
	};
	const action = addExpense(expenseData);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			...expenseData,
			id: expect.any(String)
		}
	})
});

test('should setup add expense object with default values', () => {
	const action = addExpense();
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			id: expect.any(String),
			description: '',
			note: '',
			amount: 0,
			createdAt: 0

		}
	})
});
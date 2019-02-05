import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should set default state', () => {
	const state = expensesReducer(undefined, {type: '@@INIT'});
	expect(state).toEqual([]);
});

test('should remove epense by id', () =>{
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove epense id if not found', () =>{
	const action = {
		type: 'REMOVE_EXPENSE',
		id: '-1'
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test('should add an expense', () => {
	const action = {
		type: 'ADD_EXPENSE',
		expense: {
			...expenses[0]
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([...expenses, expenses[0]]);
});

test('should edit and expense', () => {
	const new_desc = 'YOLO_SWAG'
	const action = {
		type: 'EDIT_EXPENSE',
		id: expenses[0].id,
		updates: {
			description: new_desc
		}
	}
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([{...expenses[0], description: new_desc}, expenses[1], expenses[2]]);
});

test('should not edit expense if expense not found', () => {
	const action = {
		type: 'EDIT_EXPENSE',
		id: -1,
		updates: {
			description: 'YEET'
		}
	}
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
})
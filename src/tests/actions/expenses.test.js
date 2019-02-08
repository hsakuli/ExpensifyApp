import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';


const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
	const expensesData = {};
	expenses.forEach(({id, description, note, createdAt, amount}) => {
		expensesData[id] = { description, note, amount, createdAt };
	});
	database.ref('expenses').set(expensesData).then(() => done());
});

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

	const action = addExpense(expenses[0]);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: expenses[0]
	})
});

test('should add expense to database and store', (done) => {
	const store = createMockStore({});
	const expenseData = {
		description: 'yeet',
		amount: 420,
		createdAt: 12345,
		note: 'yeetus'
	}
	store.dispatch(startAddExpense(expenseData)).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'ADD_EXPENSE',
			expense: {
				id: expect.any(String),
				...expenseData
			}
		});
		return database.ref(`expenses/${actions[0].expense.id}`).once('value');
	}).then((snapshot) => {
		expect(snapshot.val()).toEqual(expenseData);
		done();
	});
});

test('should add expense with defaults to database and store', (done) => {
	const store = createMockStore({});
	const expenseDefaults = {
		description: '',
		amount: 0,
		createdAt: 0,
		note: ''
	}
	store.dispatch(startAddExpense({})).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'ADD_EXPENSE',
			expense: {
				id: expect.any(String),
				...expenseDefaults
			}
		});
		return database.ref(`expenses/${actions[0].expense.id}`).once('value');
	}).then((snapshot) => {
		expect(snapshot.val()).toEqual(expenseDefaults);
		done();
	});
});

test('should setup set expense object action with data', () => {
	const action = setExpenses(expenses);
	expect(action).toEqual({
		type: "SET_EXPENSES",
		expenses
	});
});

test('should fetch the expenses from firebase', () => {
	const store = createMockStore({});
	store.dispatch(startSetExpenses()).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'SET_EXPENSES',
			expenses
		});
		done();
	})
});
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment';

test('set text filter with no value', () => {
	const action = setTextFilter()
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: ''
	})
});

test('set text filter with a value', () => {
	const action = setTextFilter('yeet')
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: 'yeet'
	})
});

test('set sort by date', () => {
	const action = sortByDate()
	expect(action).toEqual({
		type: 'SORT_BY_DATE'
	})
})

test('set sort by amount', () => {
	const action = sortByAmount()
	expect(action).toEqual({
		type: 'SORT_BY_AMOUNT'
	})
})

test('set generate setStartDate action object', () => {
	const action = setStartDate(moment(0));
	expect(action).toEqual({
		type: 'SET_START_DATE',
		startDate: moment(0)
	})
});

test('set generate setEndDate action object', () => {
	const action = setEndDate(moment(0));
	expect(action).toEqual({
		type: 'SET_END_DATE',
		endDate: moment(0)
	})
});
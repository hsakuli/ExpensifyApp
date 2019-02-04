import moment from 'moment';


export default [{
	id: '1',
	description: 'yeetus1',
	note: '',
	amount: 42,
	createdAt:  0
}, {
	id: '2',
	description: 'yeetus2',
	note: '',
	amount: 69,
	createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
	id: '3',
	description: 'yeetus3',
	note: '',
	amount: 420,
	createdAt:  moment(0).add(4, 'days').valueOf()
}]

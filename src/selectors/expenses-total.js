
export default (expenses) => {
	let i;
	let expenseSum = 0;
	for (i=0; i < expenses.length; i++){
		expenseSum += expenses[i].amount
	}
	//expenses.map((expense) => expense.amount).reduce((sum, value) => sum+value , 0);
	return expenseSum;
}
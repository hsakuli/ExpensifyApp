

const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		/*
		resolve('This is resolved data');
		resolve({
			name: 'lucas',
			age: 42
		});
		*/
		reject('something went wrong');
	}, 1500);
});

promise.then((data) => {
	console.log({data});
}).catch((error) => {
	console.log('error: ', {error})
})
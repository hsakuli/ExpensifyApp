import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };


firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export { firebase, googleAuthProvider, database as default };




// database.ref('expenses').on('child_removed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_added', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('value', (snapshot) => {
// 	const expenses = [];
// 		snapshot.forEach((childSnapshot) => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val()
// 			});
// 		});
// 		console.log(expenses);
// }, (e) => {
// 	console.log('error with data fetching', e);
// });

// database.ref('expenses')
// 	.once('value')
// 	.then((snapshot) => {
// 		const expenses = [];
// 		snapshot.forEach((childSnapshot) => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val()
// 			});
// 		});
// 		console.log(expenses)
// 	});

// database.ref('expenses').push({
// 	desc: 'schwam',
// 	note: 'etu',
// 	amount: 12,
// 	createdAt: 33
// })

// const firebaseArray = {
// 	notes: {
// 		one: {
// 			title: 'yeet',
// 			body: 'skeet'
// 		},
// 		two: {
// 			title: 'yeetyeet',
// 			body: 'skeetskeet'
// 		}
// 	}
// }


// const onValueChange = database.ref()
// .on('value', (snapshot) => {
// 	const val = snapshot.val();
// 	console.log(`${val.name} is a ${val.job.title} at  ${val.job.company}`);
// }).catch((e) => {
// 	console.log('Error: ', e);
// });


// const onValueChange = database.ref().on('value', (snapshot) => {
// 	console.log(snapshot.val());
// }, (e) => {
// 	console.log('error with data fetching', e);
// });

// database.ref().off('value', onValueChange);

// database.ref()
// .once('value')
// .then((snapshot) => {
// 	const val = snapshot.val();
// 	console.log({val});
// })
// .catch((e) => {
// });


// database.ref().set({
// 	name: 'penis',
// 	age: 69,
// 	stressLevel: 2,
// 	job:  {
// 		title:'softcokc',
// 		company:'myself inc'
// 	},
// 	location: {
// 		city: 'SF',
// 		country: 'USofA'
// 	},
// }).then(() => {
// 	console.log('data saved');
// }).catch((error) => {
// 	console.log('this failed', {error});
// });

// database.ref().update({
// 	stressLevel: 1,
// 	'job/company' : 'lucasworx llc',
// 	'location/city' : 'seattle'
// });

//database.ref('isSingle').set(null); //also removes

// database.ref().remove().then().catch((e) => {
// 	console.log('error', e);
// })
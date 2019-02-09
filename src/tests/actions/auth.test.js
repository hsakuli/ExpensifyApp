import React from 'react';
import { login, logout } from '../../actions/auth';

test('should setup login object action', ()=> {
	const uid = '123abc';
	const action = login(uid);
	expect(action).toEqual({
		type: 'LOGIN',
		uid
	});
});

test('should setup logout object action', ()=> {
	const action = logout();
	expect(action).toEqual({
		type: 'LOGOUT',
	});
});

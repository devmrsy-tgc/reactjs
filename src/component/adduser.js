import React, { useState } from 'react';
import { useAppContext } from '../helper/context';
import string from '../constant/stings';

const MyForm = () => {
	const { dispatch } = useAppContext();
	const [data, setData] = useState(initialState());

	function initialState() {
		return {
			name: '',
			age: '',
			bio: '',
			id: null,
		};
	}

	function onChangeHandler(event) {
		setData((prev) => {
			return { ...prev, [event.target.name]: event.target.value };
		});
	}

	const handleAddUser = () => {
		data.id = Math.random();
		dispatch({ type: string.ADD_USER, payload: { newUser: data } });
		setData(initialState);
	};

	const { name, age, bio } = data;
	return (
		<form className='row w-25 m-auto' res>
			<h3>Add New User</h3>
			<div className='col-12 mb-3'>
				<label htmlFor='name' className='form-label'>
					Name
				</label>
				<input type='text' className='form-control' name='name' id='name' value={name} onChange={onChangeHandler} placeholder='Enter name' />
			</div>
			<div className='col-12 mb-3'>
				<label htmlFor='age' className='form-label'>
					Age
				</label>
				<input type='text' className='form-control' name='age' id='age' value={age} onChange={onChangeHandler} placeholder='Enter age' />
			</div>
			<div className='col-12 mb-3'>
				<label htmlFor='bio' className='form-label'>
					Bio
				</label>
				<textarea className='form-control' name='bio' id='bio' value={bio} onChange={onChangeHandler} placeholder='Enter bio'></textarea>
			</div>
			<div className='col-12 mb-3'>
				<button type='button' className='btn btn-primary w-100' onClick={handleAddUser}>
					Add User
				</button>
			</div>
		</form>
	);
};

export default MyForm;

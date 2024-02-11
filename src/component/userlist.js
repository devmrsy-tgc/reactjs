import React from 'react';
import User from './user';
import { useAppContext } from '../helper/context';

const UserList = () => {
	const {
		store: { users },
	} = useAppContext();
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-12'>
					<h3 className='text-center'>Available Users</h3>
				</div>
			</div>
			<div className='d-grid gap-3 user-grid-container'>
				{users.map((user) => (
					<User key={user.id} user={user} />
				))}
			</div>
		</div>
	);
};

export default UserList;

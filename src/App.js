import React from 'react';
import { AppProvider } from './helper/context';
import AddUser from './component/adduser';
import UserList from './component/userlist';

function App() {
	return (
		<div className='App border border-3 rounded-5 m-4 border-primary p-3'>
			<AppProvider>
				<AddUser />
				<UserList />
			</AppProvider>
		</div>
	);
}

export default App;

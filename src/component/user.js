import string from '../constant/stings';
import { useAppContext } from '../helper/context';
import '../style.css';

const User = ({ user }) => {
	const { dispatch } = useAppContext();

	const handleRemoveUser = () => {
		dispatch({ type: string.REMOVE_USER, payload: { id: user.id } });
	};
	return (
		<div className='col-4 border border-1 rounded-3 w-100 border-primary p-3'>
			<h3>{user.name}</h3>
			<h4>{user.age}</h4>
			<div>
				<small>{user.bio}</small>
			</div>

			<button className='btn btn-danger mt-2 col-12' onClick={handleRemoveUser}>
				Delete user
			</button>
		</div>
	);
};

export default User;

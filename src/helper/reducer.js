export const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_USER':
			return { ...state, users: [...state.users, action.payload.newUser] };
		case 'REMOVE_USER':
			return { ...state, users: state.users.filter((user) => user.id !== action.payload.id) };
		default:
			return state;
	}
};

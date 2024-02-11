import { createContext, useContext, useReducer } from 'react';
import { reducer } from './reducer';

const AppContext = createContext();

const initialState = {
	users: [],
	profile: [],
};

const AppProvider = ({ children }) => {
	const [store, dispatch] = useReducer(reducer, initialState);

	return <AppContext.Provider value={{ store, dispatch }}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
	return useContext(AppContext);
};

export { AppProvider, useAppContext };

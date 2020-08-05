import React, { useContext } from 'react' 
import { AuthContext } from './contexts/AuthContext'
import './App.css';

const App = () => {
	const { authenticated, toggleAuth } = useContext(AuthContext)
	return (
		<div className="App">	
			<div className="button" onClick={ toggleAuth }>{ authenticated ? 'Logged In' : 'Logged Out' }</div>	
		</div>
	)	
}

export default App

import React, { useContext } from 'react' 
import { AuthContext } from './contexts/AuthContext'

const App = () => {
	const { authenticated, toggleAuth } = useContext(AuthContext)
	return (
		<div className='App'>	
			<div onClick={ toggleAuth }>{ authenticated ? 'Logged In' : 'Logged Out' }	</div>	
		</div>	
	)	
}

export default App

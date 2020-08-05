import React from 'react' 
import App from '../App'
import AuthContextProvider from './AuthContext'

const Provider = () => {
	return (
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
	)
}

export default Provider
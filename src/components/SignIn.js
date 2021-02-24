import React, { useState } from 'react';
import { handleChange } from '../utils';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase/firebase';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const history = useHistory();
    
    const handleSubmit = (event, email, password) => {
        event.preventDefault();
        try{
            auth.signInWithEmailAndPassword(email, password);
            history.push('/welcome')
        }
        catch (error) {
            setError(error)
        }
    }

    return (
        <>
            <h1>Connectez-vous</h1>
            <form onSubmit={(event) => handleSubmit(event, email, password)}>
                <input type="text" placeholder="email" name="email" onChange={(event) => handleChange(event, setEmail)} value={email} />
                <input type="password" placeholder="password" name="password" onChange={(event) => handleChange(event, setPassword)} value={password} />
                <button type="submit">login</button>
            </form>
            <p>Vous n'avez pas encore de compte ? <Link to="/signup">Créez votre compte</Link></p>
            <p>Vous avez oublié votre mot de pass ? <Link to='/resetPassword'>renvoyer un mot de pass</Link></p>
            <p>ou alors : <Link to="/recettes">créez votre recette</Link></p>
            {error && 
                <p>{error}</p>
            }
        </>
    )
}

export default SignIn;
import React, { useState } from 'react';
import { handleChange } from '../utils';
import { Link } from 'react-router-dom';
import { generateDocumentUser, auth } from '../firebase/firebase';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (event, email, password, name, lastname) => {
        event.preventDefault();
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            generateDocumentUser(user, {displayName})
        }
        catch (error) {
            setError('error')
        }
        setEmail("");
        setPassword("");
        setDisplayName("");
    }
    return (
        <>
        <h1>Créez votre compte</h1>
        <form onSubmit={(event) => handleSubmit(event, email, password)}>
            <label>
                <span>email : </span>
                <input type="text" name="email" placeholder="email" onChange={(event) => handleChange(event, setEmail)} value={email} />
            </label>
            <label>
                <span>mot de pass : </span>
                <input type="password" name="password" placeholder="mot de pass" onChange={(event) => handleChange(event, setPassword)} value={password} />
            </label>
            <label>
                <span>Nom : </span>
                <input type="text" placeholder="nom" name="displayName" onChange={(event) => handleChange(event, setDisplayName)} value={displayName} />
            </label>
            <button type="submit">Sign up</button>
        </form>
        <p>vous avez déjà un compte ? <Link to='/signin'> connectez-vous</Link></p>
        {error && 
            <p>une erreur est survenue : {error}</p>
        }
        </>
    )
}

export default SignUp;

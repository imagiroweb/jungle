import React, { useContext, useState } from 'react';
import { UserContext } from '../provider/userProvider';
import { firestore } from '../firebase/firebase';

const Profil = () => {
    const {user} = useContext(UserContext);
    console.log("Profil -> user", user)
    const [editMode, setEditMode] = useState(false);
    const [nameValue, setNameValue] = useState("");
    const [lastNameValue, setLastNameValue] = useState("");
    const [displayNameValue, setDisplayNameValue] = useState("");

    const handleClick = () => {
        setEditMode(!editMode);
    }
    const handleChange = (event, setValue) => {
        event.preventDefault();
        setValue(event.target.value)
    }
    const onSubmit = () => {
        firestore.collection('users').doc(user.uid).update({
            displayName: displayNameValue,
            name: nameValue,
            lastname: lastNameValue,
        })
        setEditMode(false)
    }
    return (
        <section>
            <button onClick={handleClick}>
                {editMode ? "cancel" : "edit"}
            </button>
            <article>
                <h2>Hello {user.displayName}</h2>
                <p>Vos informations personnelles :</p>
                <p>
                    <span>email : </span>
                    <span>{user.email}</span>
                </p>
                <p>
                    <span>nom : </span>
                    {editMode ?
                        <input type="text" placeholder="votre nom" value={nameValue} onChange={(event) => handleChange(event,setNameValue)} />
                        :
                        <span>{user.name}</span>
                    }
                </p>
                <p>
                    <span>prénom : </span>
                    {editMode ?
                    <input type="text" placeholder="votre prénom" value={lastNameValue} onChange={(event) => handleChange(event, setLastNameValue)} />
                    :
                    <span>{user.lastname}</span>
                    }
                </p>
                <p>
                    <span>Votre pseudo : </span>
                    {editMode ?
                    <input type="text" placeholder="Le nom à afficher" value={displayNameValue} onChange={(event) => handleChange(event, setDisplayNameValue)} />
                    :
                    <span>{user.displayName}</span>
                    }
                </p>
                {editMode &&
                    <button type="submite" onClick={onSubmit}>valider</button>
                }
            </article>
        </section>
    )
}

export default Profil;
import React, { useState, useContext } from 'react';
import { firestore } from '../firebase/firebase';
import { handleChange } from '../utils';
import { UserContext } from '../provider/userProvider';

const FormRecette = () => {
  const {user} = useContext(UserContext);
  console.log("FormRecette -> user", user)
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState(user.displayName);
    console.log("FormRecette -> author", author)

    const addRecette = (event) => {
        event.preventDefault();

        firestore.collection("recettes").add({
        title: title,
        author: author,
        })
        setTitle('');
        setAuthor('');
    }

    return (
        <form onSubmit={addRecette}>
        <input
          type="text"
          placeholder="titre recette"
          name='title'
          onChange={(event)=> handleChange(event, setTitle)}
          value={title}
        />
        <input
          type='text'
          name="author"
          onChange={(event) => handleChange(event, setAuthor)}
          value={author}
        />
        <button type='submit'>Valider</button>
      </form>
    )
}

export default FormRecette;

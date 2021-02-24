import React from 'react';

const Welcome = () => {

    return (
        <section>
            <h1>Page d'accueil du projet firebase découverte</h1>
            <article>
                <h2>Initialisation du projet</h2>
                <p>
                    Dans un premier temps j'ai créé un projet firebase depuis la console firebase.<br />
                    Ensuite j'ai créé un projet react en intégrant la config firebase.<br />
                    Pour commencer j'ai aussi activé le cloud firestore pour avoir une base de données.
                </p>
                <p>
                    Le but étant d'appréhender l'outil j'ai donc voulu utiliser l'authentification et la base de données cloud firestore.<br />
                    Cela répond au besoin de mettre en place une page de login pour se connecter au contenu de ce projet.<br />
                    Une fois connecté, on peut enregistrer une recette avec un titre et un auteur.
                </p>
            </article>
            

        </section>
    )
}

export default Welcome;

import React, { useContext } from 'react';
import { UserContext } from '../provider/userProvider';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase/firebase';

const Header = () => {
    const {user} = useContext(UserContext);
    const history = useHistory();

    const handleLogout = (event) => {
        event.preventDefault();
        try{
            auth.signOut().then(() => {
                history.push('/signin')
            })
        }
        catch (error) {

        }
    }
    return (
        <header>
            <div>
                <span>Bonjour {user?.displayName}</span>
                <nav>
                    <Link to='/recettes'>recettes</Link>
                    <Link to="/welcome">home</Link>
                    <Link to='/profil'>Profil</Link>
                    <Link to="/resetPassword">password</Link>
                    <span onClick={handleLogout}>logout</span>
                </nav>
            </div>
        </header>
    )
}

export default Header;

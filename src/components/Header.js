import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {

    return (
        <div>
            <header>
                <h1>Lambda Eats</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/help">Help</Link>
                
                </nav>
            </header>
        </div>
    )
}

export default Header;
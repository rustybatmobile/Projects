import React from 'react';
import styles from "./Header.module.css";

const Header = (props) => {
    return (
        <div className= {styles.header_container}>
            <div className= {styles.logo}>
                Shortly
            </div>
            <ul className= {styles.resource_links}>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
            </ul>
            <ul className= {styles.auth_links}>
                <li>Login</li>
                <li>Sign Up</li>
            </ul>
        </div>
    )
}

export default Header;
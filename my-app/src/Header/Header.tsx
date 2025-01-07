import react from 'react';

const Header: react.FC=() =>{
    return (
        <header>
            <h1>"Welcome to My Website!"</h1>
            <nav>
                <a href="#">Home </a>
                <a href="#">ABout </a>
                <a href="#">Contact </a>
            </nav>
        </header>
    );
}
export default Header;

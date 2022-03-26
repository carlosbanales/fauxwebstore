import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/products'>Products Page</Link>
            <Link to='/cart'>Cart</Link>
        </nav>
    );
}

export default Navbar;
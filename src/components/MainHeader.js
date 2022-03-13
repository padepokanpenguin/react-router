import { Link } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header>
      <navbar>
        <ul>
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </navbar>
    </header>
  )
}

export default MainHeader;

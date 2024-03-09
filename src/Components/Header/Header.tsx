import './Header.css';
import SearchButton from './SearchButton';

const Header = () => {
  return (
    <> 
   
    <div className='navbar'>
      <h1 className='logo'>Ghibli<span className='logo2'>Movies</span></h1>
      <SearchButton />
      <div> 
      <button className='btn-sign-in'>Sign In</button>
      <button className='btn-sign-up'>Sign Up</button>
      </div>
    </div>
    </>
  )
}

export default Header;
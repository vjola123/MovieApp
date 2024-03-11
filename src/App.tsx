import { Link, Outlet } from 'react-router-dom';


function App  (){
  return (
    <div>
       <div>
      <h1>This is Ghibli: <Link to={'Movie'}>View Register</Link></h1>
      <Outlet />
      <footer>Footer</footer>
    </div>
    </div>
  )
}

export default App;

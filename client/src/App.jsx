import './App.scss';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Regisetr from './Components/Register/Register';

//import react dom
import{
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login/></div>
  },
  {
    path: '/register',
    element: <div><Regisetr/></div>
  },
  {
    path: '/dashboard',
    element: <div><Dashboard/></div>
  },
])


function App() {

  return (
    <div>
      <RouterProvider router= {router}/>
    </div>
  )
}

export default App

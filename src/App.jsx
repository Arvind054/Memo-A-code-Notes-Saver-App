import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Memos from './components/Memos';
import ViewMemo from './components/ViewMemo'
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: 
      <>
       <Navbar/>
       <Home/>
       </>
    },
    {
      path : "/memos",
      element:<>
      <Navbar/>
      <Memos/>
      </>
    },
    {
      path: "/memos/:id",
      element: <>
      <Navbar/>
      <ViewMemo/>
      </>
    }
  ]
);
function App() {


  return (
    <>
     <RouterProvider router = {router}/>
    </>
  )
}

export default App

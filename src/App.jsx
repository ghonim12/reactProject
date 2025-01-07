import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from "./Component/Layout/Layout";
import About from './Component/About/About';
import Home from './Component/Home/Home';
import Portfolio from './Component/Gallery/Portfolio';
import Contact from './Component/Contact/Contact';


let router = createBrowserRouter([
  {path:"/" , element: <Layout/> , children:[
    {path:"about" , element:<About/>},
    {index: true , element : <Home/>},
    {path:"Portfolio" , element : <Portfolio/>},
    {path:"contact" , element : <Contact/>},
  ]}
])

function App() {
    
    return <>
      <RouterProvider router={router}></RouterProvider>
    </>
  
}

export default App

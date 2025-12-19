// import React,{ useEffect} from 'react';
// import axios from 'axios';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBook';
import ShowBook from './pages/ShowBook';
import UpdateBook from './pages/UpdateBook';
import DeleteBook from './pages/DeleteBook';


function App() {

        // Testing  CORS :-
  // useEffect(() => {
  //   async function fetchData() {
  //     await axios("http://localhost:2000/books/read") 
  //       .then((data)=>console.log(data))
  //       .catch((error)=>console.log("error is :", error))  
  //   }
  //   fetchData();
  // },[])
  

    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/books/create" element={<CreateBook/>} /> 
            <Route path="/books/read/:id" element={<ShowBook/>} />
            <Route path="/books/update/:id" element={<UpdateBook/>} />
            <Route path="/books/delete/:id" element={<DeleteBook/>} />
        </Routes> 
  )
}

export default App;
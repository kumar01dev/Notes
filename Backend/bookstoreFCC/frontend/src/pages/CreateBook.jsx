import {useState} from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function CreateBook() {
    const [title,setTitle]= useState("");
    const [author,setAuthor]= useState("");
    const [publishDate,setPublishDate]= useState("");
    const [loading,setLoading]= useState(false);

    const navigate = useNavigate();

    const handleSaveBook = ()=>{
        const data ={
            title,
            author,
            publishDate,   
        };
        setLoading(true);

        axios.post("http://localhost:2000/books/create",data)
            .then(()=>{
                setLoading(false);
                navigate('/');
            }).catch((error)=>{
                setLoading(false);
                alert("An error occured.Please check console")
                console.log("Error while Create Book is :",error);
            })
    };

    return (
        <div>
            <BackButton />
            <h1 className='text-3xl my-4'>Create Book</h1>
            {loading ? <Spinner /> : " "}
            <div className='flex flex-col border-2 border-sky-500 rounded-xl w-[600px] p-4 mx-auto '>
                <label className='text-xl mr-4 text-gray-500'>Title</label>
                <input 
                    type = "text"
                    value ={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    className='border-2 border-gray-500 py-2 px-4'
                />
            </div>
            <div className='flex flex-col border-2 border-sky-500 rounded-xl w-[600px] p-4 mx-auto '>
                <label className='text-xl mr-4 text-gray-500'>Author</label>
                <input 
                    type = "text"
                    value ={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                    className='border-2 border-gray-500 py-2 px-4'
                />
            </div>
            <div className='flex flex-col border-2 border-sky-500 rounded-xl w-[600px] p-4 mx-auto '>
                <label className='text-xl mr-4 text-gray-500'>Publish Date</label>
                <input 
                    type = "text"
                    value ={publishDate}
                    onChange={(e)=>setPublishDate(e.target.value)}
                    className='border-2 border-gray-500 py-2 px-4'
                />
            </div>
            <button className='p-2 bg-sky-300 m-8 ' onClick={handleSaveBook}>
                Save
            </button>
        </div>
    )
}

export default CreateBook;
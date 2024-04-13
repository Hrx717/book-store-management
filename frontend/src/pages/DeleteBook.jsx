import {useState} from 'react'
import axios from 'axios'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios.delete(`http://localhost:3001/books/${id}`)
    .then((res) => {
      setLoading(false);
      enqueueSnackbar('Book Deleted successfully', { variant: 'success' });
      navigate('/');
    })
    .catch((err) => {
      setLoading(false);
      // alert('An error happened, Please check console');
      enqueueSnackbar('Error', { variant: 'error' });
      console.log(err);
    })
  }

  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl p-8 mx-auto w-[600px]'>
        <h3 className='text-2xl'>Are You Sure You Want To Delete This Book?</h3>
        <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteBook}>Yes, Delete it</button>
      </div>
    </div>
  )
}

export default DeleteBook
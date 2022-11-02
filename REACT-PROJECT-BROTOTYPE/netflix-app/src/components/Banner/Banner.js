import React,{ useEffect,useState } from 'react'
import { API_KEY , imageUrl} from '../../constants/Constants'
import './banner.css'
import axios from '../../Axios'

function Banner() {
  const [movie, setMovie] =useState()
  useEffect(() =>{
     axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-U`)
     .then(response=>{
      console.log(response.data.results[7])
      setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)])
     })
     .catch(error=>{
      console.log(error)
     })
  },[])
  return (
    <div className='banner' style= {{backgroundImage: `url( ${movie ? imageUrl+movie.backdrop_path : ''}) ` }} >
        <div className='content'>
            <h1 className='title'>{movie ? movie.title || movie.name : ''}</h1>
            <div className='banner-btns'>
                <button className='play-btn button'>Play</button>
                <button className='my-list button'>My List</button>
            </div>
            <h1 className='description'> {movie ? movie.overview : ''}</h1>            
        </div>
        <div className='fade-bottom'></div>
    </div>
  )
}

export default Banner
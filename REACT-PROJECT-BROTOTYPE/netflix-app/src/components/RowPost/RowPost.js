import axios from 'axios'
import Youtube from 'react-youtube'
import React, {useEffect, useState} from 'react'
import './RowPost.css'
import {API_KEY, imageUrl} from '../../constants/Constants'


function RowPost( props) {
  const [movies,setMovies] = useState([])
  const [urlId, setId] =useState('')
  useEffect(() =>{
    axios.get(`${props.url}`)
    .then(response => {
      console.log(response.data)
      setMovies(response.data.results)
    })
    .catch(response =>{
      alert('Network Error')
    })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handlerMovie =(id) =>{
    console.log(id)
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then(response =>{
        if(response.data.results.length!==0){
          setId(response.data.results[0])
        }
        else{
          console.log('ARRAYEMPTY')
        }
      })
      .catch(error=>{
        alert(error)
      })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
            {movies.map((obj) =>
              <img onClick={() =>handlerMovie(obj.id)} className={props.isSmall ? 'small-post' : 'post'} alt ='poster' src={`${imageUrl+obj.backdrop_path}`}/>
            )}
        </div>
        { urlId && <Youtube  opts={opts} videoId={urlId.key} />}
    </div>
  )
}

export default RowPost
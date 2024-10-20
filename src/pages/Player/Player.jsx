import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData,setApiData] = useState({
    name:"",
    key:"",
    publised_at: "",
    typeof: ""

  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWI2NDU5YTAxZTlmODMwZDMxZGE2MzJjYmY3N2I0YiIsIm5iZiI6MTcyOTM5MDk2Ny4wNDkxNzEsInN1YiI6IjY3MTNiZTA1OTlmMjJmMzI2YWFkMTI1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I1e8zi5lzxlQTPXzaM5DcdoOLMpzjsjb3aGQQh2WHiU'
    }
  };

  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));

  },[])
  
  


  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen>

      <div className="player-info">
        <p>{apiData.publised_at}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>

      </iframe>
      
    </div>
  )
}

export default Player

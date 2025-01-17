import axios from 'axios';
import { useEffect, useState } from 'react'



 export default function UseAllgameshook() {
 
    const [allMovie, setallMovie] = useState([]);
    const [slicenumber, setslicenumber] = useState(20);
    const [loading, setloading] = useState(false)
  
    // function to get all games
    async function getAllGames() {
      const options = {
        headers: {
          "X-RapidAPI-Key": "c276191094msh2c8292cb9aa838cp10082bjsn7ca3ea7cbbbd",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };
      let { data } = await axios.get(
        "https://free-to-play-games-database.p.rapidapi.com/api/games",
        options
      );
  
      console.log(data.slice(0,20));
      setallMovie(data.slice(0,slicenumber));
      setloading(false)
    }
  
    function showmore() {
  
      setslicenumber(slicenumber+20);
      console.log(slicenumber);
      getAllGames();
  
  
    }
  
    useEffect(() => {
      setloading(true)
      getAllGames();
      showmore()
    }, []);
  

return {allMovie,showmore,loading}

}


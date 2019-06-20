import React from 'react';

const Song = (props) => {

  const songUrl = "http://localhost:3000/users/1/songs/"+`${props.song.id}`+"/play"



  const handleClick=(e)=>{
    const plays = (props.song.plays ++)
    const headers = {'Content-Type': 'application/json','Accept': 'application/json'}
 

    props.playButton(props.song)
      fetch(songUrl,{
        method: "PATCH",
        headers: headers
      })
      
  }




  return (
    <tr className="song">
      <td>{props.song.title}</td>
      <td>{props.song.singer}</td>
      <td>{props.song.likes}</td>
      <td>{props.song.dislikes}</td>
      <td>{props.song.plays}</td>
      <td><button onClick={handleClick}>Play</button></td>
    </tr>
  )
}

export default Song;

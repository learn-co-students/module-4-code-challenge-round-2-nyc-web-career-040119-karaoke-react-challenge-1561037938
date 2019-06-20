import React from 'react';
import Song from '../components/Song';

const SongList = (props) => {
  const search = (props.filter)
  const songs = (props.songs)

  const filtered = songs.filter(song => (song.title.includes(search)))

  const renderSongs = filtered.map(song=>
    <Song
    song={song}
    key={song.key} 
    playButton={props.playButton}
    />
    )



  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>Likes</th>
          <th>Dislikes</th>
          <th>▶</th>
        </tr>
        {renderSongs}
      </tbody>
    </table>
  )
}

export default SongList;

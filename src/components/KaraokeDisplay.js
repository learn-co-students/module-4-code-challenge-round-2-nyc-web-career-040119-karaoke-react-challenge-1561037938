import React from 'react';
import Lyrics from './Lyrics';
import VoteBar from './VoteBar';

const KaraokeDisplay = (props) => {
  const song = (props.displaySong)

  return (
    
    <div>
      <VoteBar
      
      />
    <div className="karaoke-display">
      <h2>{song.title}</h2>
      <Lyrics lyrics={song.lyrics} />
    </div>
    </div>
  )
}

export default KaraokeDisplay;

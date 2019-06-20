import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';



const songsUrl = "http://localhost:4000/users/1/songs"

class KaraokeContainer extends Component {
  state={
    songs:[],
    displaySong: {},
    filter: ""
  }


  async componentDidMount() {
    const res = await fetch(songsUrl).then(res=>res.json())
    this.setState({
      songs: res
    })
  }
  
playButton=(song)=>{
  this.setState({
    displaySong: song
  })
}
search=(char)=>{
 this.setState({
   filter: char
 })
}






  render() {
 
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter
            filter={this.state.filter}
            search={this.search}

          
          />
          <SongList
            songs={this.state.songs}
            playButton={this.playButton}
            filter={this.state.filter}
          />
    
        </div>
        <KaraokeDisplay
          displaySong={this.state.displaySong}
        
        />
      </div>
    );
  }
}

export default KaraokeContainer;

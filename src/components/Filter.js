import React, { Component } from 'react';

class Filter extends Component {
  render() {


    const handleChange=(e)=>{
      const value = (e.target.value);
      this.props.search(value)
    }



    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input onChange={handleChange}id="title-filter" type="text" />
      </div>
    );
  }
}

export default Filter;

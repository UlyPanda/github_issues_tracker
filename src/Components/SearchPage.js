import React, { useState, useEffect } from 'react';

const SearchPage = (props) => {
 return(
    <div id="newsFeed">
    <form onSubmit={props.search}>
        <div className="searchInput">
            <p>Topic:</p>
            <input
                name="keywordInput"
                type="text"
                value={props.keywordInput}
                onChange={props.handleChange}
                placeholder="Enter Keyword"
            /></div>
        <div className="searchInput">
            <p>Author:</p>
            <input
                name="authorInput"
                type="text"
                value={props.authorInput}
                onChange={props.handleChange}
                placeholder="Enter Author Name"
            />
        </div>
        <div className="searchInput">
            <p>Date:</p>
            <input
                name="dateInput"
                type="date"
                value={props.dateInput}
                onChange={props.handleChange}
            />
        </div>
        <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default SearchPage
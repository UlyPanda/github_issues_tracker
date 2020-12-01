import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import NewsList from './SearchList';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [newsListDefault, setNewsListDefault] = useState();
  const [newsList, setNewsList] = useState();

  const fetchData = async () => {
    return await fetch('http://hn.algolia.com/api/v1/items/:id')
      .then(response => response.json())
      .then(data => {
         setNewsList(data) 
         setNewsListDefault(data)
       });}

  const updateInput = async (input) => {
     const filtered = newsListDefault.filter(news => {
      return news.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setNewsList(filtered);
  }

  useEffect( () => {fetchData()},[]);
	
  return (
    <>
      <h1>News List</h1>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <NewsList newsList={newsList}/>
    </>
   );
}

export default SearchPage
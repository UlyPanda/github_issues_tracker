import logo from './logo.svg';
import React from 'react';
import './App.css';
import SearchPage from './Components/SearchPage';
import NewsList from './Components/NewsList';

class App extends React.Component {
constructor(props){
  super(props)
  state = {
    keywordInput: '',
    authorInput: '',
    dateInput: '',
    dateInSeconds: '',
    relatedArticles: []
  }
 }
    handleChange = (event) => {
      const dateInput = new Date(event.target.value).getTime();
      const dateSearch = dateInput.toString().slice(0,10);
      this.setState({
        [event.target.name]: event.target.value,
        dateInSeconds: dateSearch
      })
    }

    search = (event) => {
      event.preventDefault();
      const keyword = this.state.keywordInput;
      const author = this.state.authorInput;
      const date = this.state.dateInSeconds;
      let url = '';

      if (keyword && author) {
        url = `http://hn.algolia.com/api/v1/search?query=${keyword}&tags=story, author_${author}`;
      } else if (keyword) {
        url = `http://hn.algolia.com/api/v1/search?query=${keyword}&tags=story`;
      } else if (author) {
        `http://hn.algolia.com/api/v1/search?tags=story,author_${author}`;
      } else if (date) {
        url = `http://hn.algolia.com/api/v1/search_by_date?tags=comment&numericFilters=created_at_i>${date}`
      } else {
        alert('Please enter search criteria.');
      }

      fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        relatedArticles: data.hits,
        keywordInput: '',
        authorInput: ''
      }))
      .catch(error => console.log(`Error during fetching: ${error}`))
    }

    render() {
      return(
        <div>
          <header className="App-header">
            <h1>Search for news!</h1>
            <SearchPage
            search={this.search}
            handleChange={this.handleChange}
            keywordInput={this.state.keywordInput}
            authorInput={this.state.authorInput}
            dateInput={this.state.dateInput}
            />
          </header>
          <div className="News-layout">
            <NewsList relatedArticles={this.state.relatedArticles} />
          </div>
        </div>
      )
    }

}
export default App;

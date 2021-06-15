import React, { Component } from 'react';
import './App.css';
import { getUrls, addUrl } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      error: ''
    }
  }

  componentDidMount() {
    getUrls()
      .then((data) => {
        this.setState({ urls: data.urls })
      })
      .catch(err => this.setState({ error: "Something went Wrong" }))
  }

  addNewUrl = (newUrl) => {
    addUrl(newUrl)
      .then(data => {
        this.setState({ urls: [...this.state.urls, data]})
      })
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addNewUrl={this.addNewUrl}/>
        </header>

        {!this.state.error ? <UrlContainer urls={this.state.urls}/> : <p>Something went Wrong</p>}
      </main>
    );
  }
}

export default App;

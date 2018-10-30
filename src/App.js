import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Events from './components/Events';

class App extends Component {

  token = 'FJFBLOAIQRW2XJ2X3KQX';
  orderBy = 'date';

  state = {
    categories: [],
    events: []
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = async () => {

    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;

    await fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        // console.log(data.categories);
        this.setState({
          categories: data.categories
        });
      });
  }

  getEvents = async (search) => {
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${search.name}&categories=${search.category}&sort_by=${this.orderBy}&token=${this.token}&locale=es_ES`;

    await fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        //console.log(data);
        this.setState({
          events: data.events
        });
      });
  }


  render() {
    return (
      <div className="App">
        <Header/>

        <div className="uk-container">
          <Form
            categories={this.state.categories}
            getEvents={this.getEvents}
          />

          <Events
            events={this.state.events}
          />
        </div>
      </div>
    );
  }
}

export default App;

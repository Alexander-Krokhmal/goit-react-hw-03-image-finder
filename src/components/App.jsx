import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import * as API from './services/api';

class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    isLoading: false,
  };

  handleFormSubmit = (query) => {
    this.setState({ page:1, query, images:[] });
  }

  // addImages = async ({query}) => {
  //   this.setState({ isLoading: true });
  //   const image = await API.fetchImage(query);
  //   console.log(image);
  //   this.setState(state => ({
  //     images: [...state.images, image],
  //     isLoading: false,
  //   }));
  // }

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

  if (prevState.query !== query || prevState.page !== page) {
    this.setState({ isLoading: true });
    try {
      const image = await API.fetchImage(query, page);
      console.log(image.hits);
      this.setState(state => ({
        images: [...state.images, ...image.hits],
        isLoading: false,
      }));
    }
    catch (error) {
      throw new Error ('There is no images found for your request! Please, try more :)')
    }
    
  }
}

  render() {

    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar onSubmit={ this.handleFormSubmit} />
      </div>
    );
  }
}

export default App;

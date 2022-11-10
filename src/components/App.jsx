import React, { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import * as API from './services/api';

class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    isLoading: false,
    loadBtnIsShown: false,
  };

  handleFormSubmit = (query) => {
    this.setState({ page: 1, query, images:[] });
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

  onLoadMoreBtn = () => {
    this.setState(prevState => ({
      page : prevState.page + 1,
    }));
  }


  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

  if (prevState.query !== query || prevState.page !== page) {
    this.setState({ isLoading: true, loadBtnIsShown: false });
    try {
      const image = await API.fetchImage(query, page);
      if (image.totalHits === 0) {
        throw new Error('There are no images found for your request. Please, try more :)');
      }

      const remainingPages = Math.ceil(image.totalHits / image.hits.length) - page;
      console.log(remainingPages);
      if (remainingPages > 0) this.setState({loadBtnIsShown: true});
        
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
    const { images, loadBtnIsShown, isLoading } = this.state;

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
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery items={images} />

        {isLoading && (<Loader/>)}
              
        {loadBtnIsShown && (
          <Button onClick={this.onLoadMoreBtn}>Load More</Button>)}
        
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import SearchBar from '../components/searchbar/searchbar';
import ImageGallery from './imageGallery/imageGallery';
import Button from '../components/button/button';
import Loader from './loader/loader';
import Modal from './modal/modal';

import mcss from '../components/modal/mcss.module.css';

export default class App extends Component {
  state = {
    searchName: '',
    photos: [],
    images: [],
    currentPage: 1,
    loading: false,
    selectedImage: null,
    modalOpen: false,
  };

  handleFormSubmit = (searchName) => {
    if (searchName.trim() === '') {
      alert('Please write something');
      return;
    }

    this.setState({ searchName, images: [], currentPage: 1 });
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchName, currentPage } = this.state;

    if (
      prevState.searchName !== searchName ||
      prevState.currentPage !== currentPage
    ) {
      this.fetchImages(searchName, currentPage);
    }
  }

  fetchImages = (searchName, page) => {
    this.setState({ loading: true });

    fetch(
      `https://pixabay.com/api/?q=${searchName}&page=${page}&key=35788801-dce36e820ecbf028522772f28&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.hits.length === 0) {
          alert('Error! Cannot find images');
        }

        if (page === 1) {
          this.setState({ images: data.hits });
        } else {
          this.setState((prevState) => ({
            images: [...prevState.images, ...data.hits],
          }));
        }
        this.setState({ currentPage: page });
      })
      .catch((error) => {
        alert('Images not found' + error);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  handleLoadMore = () => {
    const { currentPage } = this.state;
    const nextPage = currentPage + 1;
    this.setState({ currentPage: nextPage });
  };


  
  
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      this.closeModal();
    }
  };

  openModal = (image) => {
    this.setState({ modalOpen: true, selectedImage: image });
  };

  closeModal = () => {
    this.setState({ modalOpen: false, selectedImage: null });
  };

  render() {
    const { images, loading, modalOpen, selectedImage } = this.state;

    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {images.length > 0 && (
          <ImageGallery images={images} openModal={this.openModal} />
        )}

        {images.length > 0 && images.length % 12 === 0 && (
            <Button onLoadMore={this.handleLoadMore} />
        )}

        <Loader loading={loading} />

        {modalOpen && (
          <Modal active={modalOpen} setActive={this.closeModal}>
            <img
              className={mcss.img}
              src={selectedImage.largeImageURL}
              alt={selectedImage.tags}
            />
          </Modal>
        )}
      </div>
    );
  }
}


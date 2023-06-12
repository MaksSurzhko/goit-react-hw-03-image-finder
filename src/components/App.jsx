// import React, { useEffect } from "react";
// import SearchBar from "../components/searchbar/searchbar";
// import ImageGallery from "./imageGallery/imageGallery";
// import ImageGalleryItem from "./imgGalleryItem/imgGalleryItem";
// import Button from "../components/button/button";

// export const App = () => {
//   useEffect(() => {
//     const renderApi = async () => {
//       try {
//         const response = await fetch(
//           "https://pixabay.com/api/?q=cat&page=1&key=35788801-dce36e820ecbf028522772f28&image_type=photo&orientation=horizontal&per_page=12"
//         );
//         const data = await response.json();
//         console.log(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     renderApi();
//   }, []);

//   return (
//     <div
//       style={{
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         fontSize: 40,
//         color: "#010101"
//       }}
//     >
//       <SearchBar />
//       <ImageGallery />
//       <ImageGalleryItem />
//       <Button />
//     </div>
//   );
// };

// import {Component} from "react";
// import SearchBar from "../components/searchbar/searchbar";
// import ImageGallery from "./imageGallery/imageGallery";
// import ImageGalleryItem from "./imgGalleryItem/imgGalleryItem";
// import Button from "../components/button/button";

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       <SearchBar />
//       <ImageGallery />
//       <ImageGalleryItem />
//       <Button />
//      </div>
//    );
// };




// import { Component } from 'react';
// import SearchBar from '../components/searchbar/searchbar';
// import ImageGallery from './imageGallery/imageGallery';
// import ImageGalleryItem from './imgGalleryItem/imgGalleryItem';
// import Button from '../components/button/button';
// import Loader from './loader/loader';

// export default class App extends Component {

//   state = {
//     searchName:'',
//   }

//   handleFormSubmit = searchName => {
//     this.setState({searchName})
//   }

//   render() {
//     return (
//       <div>
//         <SearchBar onSubmit={this.handleFormSubmit} />
//         <ImageGallery searchName={this.state.searchName} />
//         <ImageGalleryItem />
//         <Button searchName={this.state.searchName} />
//         <Loader searchName={this.state.searchName}/>
//       </div>
//     );
//   }
// }





// import React, { Component } from 'react';
// import SearchBar from '../components/searchbar/searchbar';
// import ImageGallery from './imageGallery/imageGallery';
// import Button from '../components/button/button';
// import Loader from './loader/loader';
// import Lightbox from './modal/modal';

// export default class App extends Component {
//   state = {
//     searchName: '',
//     photos: [],
//   };

//   handleFormSubmit = (searchName) => {
//     this.setState({ searchName });
//   };

//   // handleButtonClick = (newPhotos) => {
//   //   this.setState((prevState) => ({
//   //     photos: [...prevState.photos, ...newPhotos],
//   //   }));
//   // };

//   handleButtonClick = (newPhotos, nextPage) => {
//   this.setState((prevState) => ({
//     photos: [...prevState.photos, ...newPhotos],
//   }), () => {
//     // Оновити значення сторінки після оновлення стану фотографій
//     this.setState({ page: nextPage });
//   });
// };

//   render() {
//     const { searchName, photos } = this.state;

//     return (
//       <div>
//         <SearchBar onSubmit={this.handleFormSubmit} />
//         <ImageGallery searchName={searchName} photos={photos} />
//         <Button searchName={searchName} onButtonClick={this.handleButtonClick} />
//         <Loader searchName={searchName} />
//         <Lightbox />
//       </div>
//     );
//   }
// }



// import React, { Component } from 'react';
// import SearchBar from '../components/searchbar/searchbar';
// import ImageGallery from './imageGallery/imageGallery';
// import Button from '../components/button/button';
// import Loader from './loader/loader';
// import Lightbox from './modal/modal';

// export default class App extends Component {
//   state = {
//     searchName: '',
//     photos: [],
//     images: [],
//     currentPage: 1,
//   };

//   handleFormSubmit = (searchName) => {
//   this.setState({ searchName, images: [], currentPage: 1 });
//   this.fetchImages(searchName, 1);
// };


//   componentDidUpdate(prevProps) {
//     const prevName = prevProps.searchName;
//     const nextName = this.props.searchName;

//     if (prevName !== nextName) {
//       this.fetchImages(nextName, 1);
//     }
//   }

//   fetchImages = (searchName, page) => {
//     fetch(
//       `https://pixabay.com/api/?q=${searchName}&page=${page}&key=35788801-dce36e820ecbf028522772f28&image_type=photo&orientation=horizontal&per_page=12`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         if (page === 1) {
//           this.setState({ images: data.hits });
//         } else {
//           this.setState((prevState) => ({
//             images: [...prevState.images, ...data.hits],
//           }));
//         }
//         this.setState({ currentPage: page });
//       })
//       .catch((error) => {
//         alert('Images not found' + error);
//       });
//   };

// handleLoadMore = () => {
//   const { searchName, currentPage } = this.state;
//   const nextPage = currentPage + 1;
//   this.fetchImages(searchName, nextPage);
// };


//   render() {
//     const { images,searchName, photos } = this.state;

//     return (
//       <div >
//         <SearchBar onSubmit={this.handleFormSubmit} />
//         <ImageGallery images={images} />
//         <Button onLoadMore={this.handleLoadMore} />
//         <Loader searchName={searchName} />
//         <Lightbox />
//       </div>
//     );
//   }
// }

import React, { Component } from 'react';
import SearchBar from '../components/searchbar/searchbar';
import ImageGallery from './imageGallery/imageGallery';
import Button from '../components/button/button';
import Loader from './loader/loader';
import Lightbox from './modal/modal';

export default class App extends Component {
  state = {
    searchName: '',
    photos: [],
    images: [],
    currentPage: 1,
  };

  handleFormSubmit = (searchName) => {
    if (searchName.trim() === '') {
      alert('Please, write');
      return;
    }

    this.setState({ searchName, images: [], currentPage: 1 });
    this.fetchImages(searchName, 1);
  };

  componentDidUpdate(prevProps) {
    const prevName = prevProps.searchName;
    const nextName = this.props.searchName;

    if (prevName !== nextName) {
      this.fetchImages(nextName, 1);
    }
  }

  fetchImages = (searchName, page) => {
    fetch(
      `https://pixabay.com/api/?q=${searchName}&page=${page}&key=35788801-dce36e820ecbf028522772f28&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((response) => response.json())
      .then((data) => {
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
      });
  };

  handleLoadMore = () => {
    const { searchName, currentPage } = this.state;
    const nextPage = currentPage + 1;
    this.fetchImages(searchName, nextPage);
  };

  render() {
    const { images, searchName } = this.state;

    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {images.length > 0 && (
          <>
            <ImageGallery images={images} />
            <Button onLoadMore={this.handleLoadMore} />
          </>
        )}
        <Loader searchName={searchName} />
        <Lightbox />
      </div>
    );
  }
}
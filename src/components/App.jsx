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




import { Component } from 'react';
import SearchBar from '../components/searchbar/searchbar';
import ImageGallery from './imageGallery/imageGallery';
import ImageGalleryItem from './imgGalleryItem/imgGalleryItem';
import Button from '../components/button/button';

export default class App extends Component {
  // state = {
  //   cat: null
  // }

  // apiLog() {
  //   fetch(
  //     'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12'
  //   )
  //     .then((res) => res.json())
  //     .then(console.log);
  // }

  state = {
    searchName:'',
  }

  handleFormSubmit = searchName => {
    this.setState({searchName})
  }

  render() {
    return (
      <div
        // style={{
        //   height: '100vh',
        //   display: 'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   fontSize: 40,
        //   color: '#010101',
        // }}
      >
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchName={this.state.searchName} />
        <ImageGalleryItem />
        <Button />
      </div>
    );
  }
}

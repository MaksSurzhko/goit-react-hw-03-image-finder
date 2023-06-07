

const ImageGalleryItem = (image) => {
    return (
        <li class="gallery-item">
            
        </li>
    )
}


export default ImageGalleryItem


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import icss from './imgGItem.module.css';

// const ImageGalleryItem = ({ image }) => {
//   return (
//     <li className={icss.galleryitem}>
//       <img src={image.webformatURL} alt="photo" />
//     </li>
//   );
// };

// const SearchBar = ({ onSubmit }) => {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const searchInput = event.target.elements.searchInput.value;
//     onSubmit(searchInput);
//   };

//   return (
//     <header className="searchbar">
//       <form className="form" onSubmit={handleSubmit}>
//         <button type="submit" className="button">
//           <span className="button-label">Search</span>
//         </button>

//         <input
//           className="input"
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//           name="searchInput"
//         />
//       </form>
//     </header>
//   );
// };

// const YourComponent = () => {
//   const [images, setImages] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `https://pixabay.com/api/?q=${searchQuery}&page=1&key=35788801-dce36e820ecbf028522772f28&image_type=photo&orientation=horizontal&per_page=12`
//         );
//         const imageData = response.data;
//         setImages(imageData.hits);
//       } catch (error) {
//         console.error('Error fetching images:', error);
//       }
//     };

//     fetchData();
//   }, [searchQuery]);

//   const handleSubmit = (searchInput) => {
//     setSearchQuery(searchInput);
//   };

//   return (
//     <div>
//       <SearchBar onSubmit={handleSubmit} />
//       <ul className={icss.gallery}>
//         {images.map((image) => (
//           <ImageGalleryItem key={image.id} image={image} />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default YourComponent;
// export { ImageGalleryItem };

// import React, { Component } from 'react';

// export default class Button extends Component {
//     state = {
//         photos: [],
//         page: 1,
//     };

//     didAddMore = () => {
//         const nextName = this.props.searchName;
//         console.log('name change');

//         fetch(
//             `https://pixabay.com/api/?q=${nextName}&page=${this.state.page}&key=35788801-dce36e820ecbf028522772f28&image_type=photo&orientation=horizontal&per_page=12`
//         )
//             .then((response) => response.json())
//             .then((data) => {
//                 const newPhotos = data.hits;
//                 this.setState((prevState) => ({
//                     photos: [...prevState.photos, ...newPhotos],
//                     page: prevState.page + 1,
//                 }));
//             });
//     };

//     render() {
//         return (
//             <div>
//                 <ul>
//                     {/* Виводимо фотографії */}
//                     {this.state.photos.map((photo) => (
//                         <li key={photo.id}>
//                             <img
//                                 style={{ width: '70px', height: '70px' }}
//                                 src={photo.webformatURL}
//                                 alt={photo.tags}
//                             />
//                         </li>
//                     ))}
//                 </ul>
//                 <button onClick={this.didAddMore}>Load more</button>
//             </div>
//         );
//     }
// }


// import React, { Component } from 'react';

// export default class Button extends Component {
//   state = {
//     page: 1,
//   };

//     didAddMore = () => {
//         const { searchName, onButtonClick } = this.props;
//         const { page } = this.state;

//         fetch(
//             `https://pixabay.com/api/?q=${searchName}&page=${page}&key=35788801-dce36e820ecbf028522772f28&image_type=photo&orientation=horizontal&per_page=12`
//         )
//             .then((response) => response.json())
//             .then((data) => {
//                 const newPhotos = data.hits;
//                 onButtonClick(newPhotos, page + 1); // Передайте нові фотографії та нову сторінку
//                 this.setState((prevState) => ({
//                     page: prevState.page + 1,
//                 }));
//             })
//             .catch((error) => {
//                 console.log('API Error:', error); // Журнал будь-яких помилок API
//             });
//     }
//   render() {
//     return (
//       <div>
//         <button onClick={this.didAddMore}>Load more</button>
//       </div>
//     );
//   }
// }


import React from 'react';
import bcss from '../button/button.module.css'
const Button = ({ onLoadMore }) => {
    return (
      <div className={bcss.boxik}>
            <button className={bcss.button} onClick={onLoadMore}>Load More</button>
            </div>
  );
};

export default Button;
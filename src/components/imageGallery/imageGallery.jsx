
/*import { Component } from 'react';

export default class ImageGallery extends Component {

state = {
  images: []
};


    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.searchName;
        const nextName = this.props.searchName;
        if (prevName !== nextName) {
            console.log('name change')

            fetch('https://pixabay.com/api/?q=cat&page=1&key=35788801-dce36e820ecbf028522772f28&image_type=photo&orientation=horizontal&per_page=12')
        }

        fetch(`https://pixabay.com/api/?q=${nextName}&page=1&key=35788801-dce36e820ecbf028522772f28&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => response.json())
        .then(data => {
        this.setState({ images: data.hits });
      })
        .catch(error => {
        alert("Images not found" + error);
      });
}

    render() {
  const { images } = this.state;
  //const { searchName } = this.props;

  return (
    <ul>
      {images.map(image => (
        <li style={{width:'70px', height:'70px'}} key={image.id}>
          <img style={{width:'70px', height:'70px'}} src={image.webformatURL} alt={image.tags} />
        </li>
      ))}
    </ul>
  );
}
}*/




// import React, { Component } from 'react';

// export default class ImageGallery extends Component {
//   state = {
//     images: [],
//   };

//   componentDidUpdate(prevProps) {
//     const prevName = prevProps.searchName;
//     const nextName = this.props.searchName;

//     if (prevName !== nextName) {
//       fetch(
//         `https://pixabay.com/api/?q=${nextName}&page=1&key=35788801-dce36e820ecbf028522772f28&image_type=photo&orientation=horizontal&per_page=12`
//       )
//         .then((response) => response.json())
//         .then((data) => {
//           this.setState({ images: data.hits });
//         })
//         .catch((error) => {
//           alert('Images not found' + error);
//         });
//     }
//   }

//   render() {
//     const { images } = this.state;

//     return (
//       <div>
//         <ul>
//           {/* Виводимо фотографії */}
//           {images.map((image) => (
//             <li style={{ width: '70px', height: '70px' }} key={image.id}>
//               <img
//                 style={{ width: '70px', height: '70px' }}
//                 src={image.webformatURL}
//                 alt={image.tags}
//               />
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

/*import React, { Component } from 'react';

export default class ImageGallery extends Component {
  state = {
    images: [],
    currentPage: 1,
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
    const { searchName } = this.props;
    const { currentPage } = this.state;
    const nextPage = currentPage + 1;
    this.fetchImages(searchName, nextPage);
  };

  render() {
    const { images } = this.state;

    return (
      <div>
        <ul>
          {images.map((image) => (
            <li style={{ width: '70px', height: '70px' }} key={image.id}>
              <img
                style={{ width: '70px', height: '70px' }}
                src={image.webformatURL}
                alt={image.tags}
              />
            </li>
          ))}
        </ul>
        <button onClick={this.handleLoadMore}>Load More</button>
      </div>
    );
  }
}*/


import React from 'react';
import icss from '../imageGallery/imageGallery.module.css'


const ImageGallery = ({ images }) => {
  return (
    <div className={icss.box}>
      <ul className={icss.list}>
        {images.map((image) => (
          <li className={icss.item}  key={image.id}>
            <img className={icss.img}
              src={image.webformatURL}
              alt={image.tags}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
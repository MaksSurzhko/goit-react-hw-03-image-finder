

import React from 'react';
import icss from '../imageGallery/imageGallery.module.css';

const ImageGallery = ({ images, openModal }) => {
  const handleClick = (image) => {
    openModal(image);
  };

  return (
    <div className={icss.box}>
      <ul className={icss.list}>
        {images.map((image) => (
          <li className={icss.item} key={image.id}>
            <img
              className={icss.img}
              src={image.webformatURL}
              alt={image.tags}
              onClick={() => handleClick(image)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;





// import React from 'react';
// import icss from '../imageGallery/imageGallery.module.css'


// const ImageGallery = ({ images }) => {
//   return (
//     <div className={icss.box}>
//       <ul className={icss.list}>
//         {images.map((image) => (
//           <li className={icss.item}  key={image.id}>
//             <img className={icss.img}
//               src={image.webformatURL}
//               alt={image.tags}
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ImageGallery;
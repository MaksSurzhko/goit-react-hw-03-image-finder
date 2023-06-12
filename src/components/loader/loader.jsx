
// import React, { Component } from 'react';

// export default class Loader extends Component {
//   state = {
//     images: [],
//     loading: false,
//   };

//   componentDidUpdate(prevProps) {
//     const prevName = prevProps.searchName;
//     const nextName = this.props.searchName;

//     if (prevName !== nextName) {
//       console.log('name change');

//       this.setState({ loading: true });

//           fetch(
//         `https://pixabay.com/api/?q=${nextName}&page=1&key=35788801-dce36e820ecbf028522772f28&image_type=photo&orientation=horizontal&per_page=12`
//       )
//         .then((res) => res.json())
//         .then((data) => {
//           const images = data.hits;
//           this.setState({ images });
//         })
//         .finally(() => this.setState({ loading: false })); 
      
//     }
//   }

//   render() {
//     const { images, loading } = this.state;

//     return (
//       <div>
//         {loading && <div>Loading...</div>}
//       </div>
//     );
//   }
// }



import React, { Component } from 'react';

export default class Loader extends Component {
  state = {
    images: [],
    loading: false,
  };

  componentDidUpdate(prevProps) {
    const prevName = prevProps.searchName;
    const nextName = this.props.searchName;

    if (prevName !== nextName) {
      console.log('name change');

      this.setState({ loading: true });

      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?q=${nextName}&page=1&key=35788801-dce36e820ecbf028522772f28&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then((res) => res.json())
          .then((data) => {
            const images = data.hits;
            this.setState({ images });
          })
          .finally(() => this.setState({ loading: false }));
      }, 2000);
    }
  }

  render() {
    const { loading } = this.state;

    return (
      <div>
        {loading && <div>Loading...</div>}
      </div>
    );
  }
}
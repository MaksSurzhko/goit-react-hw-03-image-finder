
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
        <li style={{width:'40px', height:'40px'}} key={image.id}>
          <img style={{width:'40px', height:'40px'}} src={image.webformatURL} alt={image.tags} />
        </li>
      ))}
    </ul>
  );
}
}*/



import React, { Component } from 'react';

export default class ImageGallery extends Component {
  state = {
    images: [],
    //loading: false
  };

  componentDidUpdate(prevProps, prevState) {
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
          .then((data) => this.setState({ images: data.hits }))
          .finally(() => this.setState({ loading: false }));
      }, 3000);
    }
  }

  render() {
    const { images, loading } = this.state;
    const { searchName } = this.props;

    return (
      <div>
        {loading && <div>Loading...</div>}
        {!searchName && <div>Шо хочеш?</div>}
        {images.length > 0 && (
          <ul>
            <li>
          {images.map((image) => (
              <img
                style={{ width: '40px', height: '40px' }}
                key={image.id}
                src={image.webformatURL}
                alt={image.tags}
              />
          ))}</li>
          </ul>
        )}
      </div>
    );
  }
}
import React, { Component } from 'react';

class Lightbox extends Component {
  state = {
    isOpen: false,
    selectedPhoto: null,
  };

  openLightbox = (photo) => {
    this.setState({
      isOpen: true,
      selectedPhoto: photo,
    });
  };

  closeLightbox = () => {
    this.setState({
      isOpen: false,
      selectedPhoto: null,
    });
  };

  render() {
    const { isOpen, selectedPhoto } = this.state;

    if (!isOpen) {
      return null; // Render nothing if lightbox is closed
    }

    return (
      <div className="lightbox-overlay" onClick={this.closeLightbox}>
        <div className="lightbox-content">
          <img src={selectedPhoto} alt="Selected Photo" />
        </div>
      </div>
    );
  }
}

export default Lightbox;
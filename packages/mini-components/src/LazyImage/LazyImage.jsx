import React, { PureComponent } from 'react';

class LazyImage extends PureComponent {
  render() {
    const { src, alt } = this.props;
    return (
      <img src={src} alt={alt} />
    );
  }
}

export default LazyImage;

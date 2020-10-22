import React from 'react';
import Img from 'gatsby-image';

export default function Image({ src, ...rest }) {
  return <Img fluid={src} {...rest} />;
}

import React, { Fragment } from 'react';
import Carousel from './Carousel';
import Media from "react-media";
import CarouselMovil from './CarouselMovil';

const Portada = () => {
    return ( 

        <Media queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px)",
          }}>
            {matches => (
              <Fragment>
                {matches.small && <CarouselMovil />}
                {matches.medium && <Carousel />}
              </Fragment>
            )}
          </Media>

     );
}
 
export default Portada;
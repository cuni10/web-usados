import React, { Fragment } from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';
import Media from "react-media";
import CarouselMovil from './CarouselMovil';

const Container = styled.div`
`;

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
import React, { Fragment } from 'react';
import styled from 'styled-components';
import portadaImg from "../img/PF_PortadaUsados_11062021.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Grid = styled.div`
    padding: auto;
    justify-items: center;
    
    
`;

const Carrousel = styled.div`
    justify-self: center;
    justify-content: center;
    
    img {
        padding: auto;
    }
`;

const Portada = () => {
    return ( 
        <Fragment>
            <Grid>
                <Carrousel>
                    <Carousel width={800} showThumbs={false} autoPlay={true} showStatus={false}>
                        <div>
                            <img src={portadaImg} alt="portada"/>
                        </div>
                        <div>
                            <img src={portadaImg} alt="portada2"/>
                        </div>
                    </Carousel>
                    
                </Carrousel>
            </Grid>
        </Fragment>

     );
}
 
export default Portada;
import React, { Fragment } from 'react';
import styled from 'styled-components';

const Carrousel = styled.div`

    img{
        display: block;
        margin: auto;

        @media (max-width: 840px) {
            max-width: 680px;
        }

        @media (max-width: 700px) {
            max-width: 360px;
        }
        
    }
`;

const Portada = () => {
    return ( 
        <Fragment>
                <Carrousel>
                    <img src="https://res.cloudinary.com/cuni10/image/upload/q_50/v1624855885/Portada/portada_dqsqt6.jpg" alt="portada1"/>
                </Carrousel>
        </Fragment>

     );
}
 
export default Portada;
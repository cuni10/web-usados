import React,{Fragment} from 'react';
import { Helmet } from "react-helmet";
import styled from 'styled-components';

const GridLayout = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: 1000px;
`;

const Contacto = ({title}) => {

    return ( 
        <Fragment>
            <Helmet>
                <title>Contacto - Cat Usados</title>
            </Helmet>
            <GridLayout>
                <h1>Contacto</h1>
            </GridLayout>
        </Fragment>
     );
}
 
export default Contacto;
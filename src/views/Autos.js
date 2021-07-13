import React,{Fragment} from 'react';
import { Helmet } from "react-helmet";
import Catalogo from '../components/Catalogo';
import styled from 'styled-components';

const GridLayout = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: auto 500px;
`;

const Autos = ({title,Link}) => {

    return ( 
        <Fragment>
            <Helmet>
                <title>Autos - Cat Usados</title>
            </Helmet>
            <GridLayout>
                <Catalogo Link={Link}/>
            </GridLayout>
        </Fragment>
     );
}
 
export default Autos;
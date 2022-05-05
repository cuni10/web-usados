import React, { useEffect } from 'react';

import styled from 'styled-components';

import { useParams } from 'react-router';

import AutoDetalles from '../components/AutoDetalles';
import Sugerencias from '../components/Sugerencias';

const GridLayout = styled.div`

    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-row-gap: 20px;
    justify-items: center;
`;

const Auto = ({Link}) => {

    let {autoName,autoMarca} = useParams();

    useEffect(()=>{
        document.title = `${autoName} ${autoMarca} - Cat Usados`;
        window.scrollTo(0, 0);
    },[])

    return (

        <GridLayout>

            <AutoDetalles />
    
            
            <Sugerencias 
                Link={Link}
            />
        </GridLayout>
    )
}


export default Auto;
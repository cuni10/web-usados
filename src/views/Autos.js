import React,{Fragment, useEffect} from 'react';
import Catalogo from '../components/Catalogo';
import styled from 'styled-components';

const GridLayout = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: auto 500px;
`;

const Autos = ({title,Link}) => {

    useEffect(()=>{
        document.title = title;
    })
    
    return ( 
        <Fragment>
            <GridLayout>
                <Catalogo Link={Link}/>
            </GridLayout>
        </Fragment>
     );
}
 
export default Autos;
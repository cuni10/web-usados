import React,{Fragment,useEffect} from 'react';
import styled from 'styled-components';

const GridLayout = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: 1000px;
`;

const Contacto = ({title}) => {

    useEffect(() =>{
        document.title = title;
    });

    return ( 
        <Fragment>
            <GridLayout>
                <h1>Contacto</h1>
            </GridLayout>
        </Fragment>
     );
}
 
export default Contacto;
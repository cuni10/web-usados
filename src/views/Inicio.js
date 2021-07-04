import React,{Fragment} from 'react';
import Portada from "../components/Portada";
import Catalogo from '../components/Catalogo';
import styled from 'styled-components';

const GridLayout = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: auto auto auto;
`;

const Header = styled.div`
    grid-column: 1/4;
`;

const Nav = styled.div`
    grid-column: 1/4;
`;

const Main = styled.div`
    grid-column: 1/4;
`;

const Inicio = () => {
    return ( 
        <Fragment>
            <GridLayout>
                <Header>
                    <Portada />
                </Header>
                <Main>
                    <Catalogo />
                </Main>
            </GridLayout>
            
        </Fragment>
        
     );
}
 
export default Inicio;
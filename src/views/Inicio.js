import React,{Fragment} from 'react';
import Barra from "../components/Barra";
import Portada from "../components/Portada";
import styled from 'styled-components';

const GridLayout = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: auto auto minmax(1000px,auto);
`;

const Header = styled.div`
    grid-column: 1/4;
`;

const Nav = styled.div`
    grid-column: 1/4;
`;

const Main = styled.div`
    background-color: #ebebeb;
    h1{
        color: #FFB703;
        text-shadow: black 0px 0px 3px;
    }
    grid-column: 1/4;
`;

const Inicio = () => {
    return ( 
        <Fragment>
            <GridLayout>
                <Nav>
                    <Barra />
                </Nav>
                <Header>
                    <Portada />
                </Header>
                <Main>
                </Main>
            </GridLayout>
            
        </Fragment>
        
     );
}
 
export default Inicio;
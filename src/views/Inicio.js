import React,{Fragment,useEffect} from 'react';
import Portada from "../components/Portada";
import Catalogo from '../components/Catalogo';
import styled from 'styled-components';

const GridLayout = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: auto auto 500px;
`;

const Header = styled.div`
    grid-column: 1/4;
`;

const Main = styled.div`
    grid-column: 1/4;
`;

const Inicio = ({title,Link}) => {

    
    useEffect(()=>{
        document.title = title;
    })

    return ( 
        <Fragment>
            <GridLayout>
                <Header>
                    <Portada />
                </Header>
                <Main>
                    <Catalogo Link={Link}/>
                </Main>
            </GridLayout>
            
        </Fragment>
        
     );
}
 
export default Inicio;
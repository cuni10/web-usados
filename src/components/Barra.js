import {React, Fragment} from 'react';

import styled from "styled-components";

const Container = styled.div`
    background-color: #FFB703;
    display: flex;
`;


const Links = styled.li`
    list-style-type:none;
    display: inline-block;
    background-color: #FFB703;

    #kid{
        display: inline-block;
        color: #023047;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        border-bottom: 4px #FFB703 solid;
        border-top: 4px #FFB703 solid;
        :hover{
        color: black;
        transition-duration: 0.2s;
        border-bottom: 4px #023047 solid;
        }
    }
`;

const UlLinks = styled.ul`
    padding: 0;
    margin: auto;
    font-size: 1.1em;
    font-weight: 600;
    height: 50%;
`;

const SearchContainer = styled.div`
    display: flex;
    height: 90%;
    margin: auto;
    border-radius: 10px;
    
    #input{
        width: 100%;
        border: 3px solid #023047;
        border-right: none;
        padding: 5px;
        height: 20px;
        border-radius: 5px 0 0 5px;
        outline: none;
        color: #023047;
        font-weight: 400;
        font-size: 1.1em;
    }

    #button{
        width: 40px;
        height: 36px;
        border: 1px solid #023047;
        background: #023047;
        text-align: center;
        color: #fff;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
        font-size: 20px;
    }

    #button i{
        padding-top: 5px;

        :hover{
            color: #FFB703;
            transition-duration: 0.2s;
        }
    }
`;

const Barra = ({Link}) => {
    return ( 
        <Fragment>
                <Container>
                    <UlLinks>
                        <Links>
                            <Link id="kid" to="/">Inicio</Link>
                        </Links>
                        <Links>
                            <Link id="kid" to="/autos">Autos</Link>
                        </Links>
                        <Links>
                            <Link id="kid" to="/contacto">Contacto</Link>
                        </Links>
                    </UlLinks>

                <SearchContainer>
                    <input id="input" type="text" placeholder="Busca tu auto."></input>
                    <button id="button" type="button"><i className="material-icons">search</i></button>
                </SearchContainer>
                    
                </Container>
        </Fragment>

     );
}
 
export default Barra;
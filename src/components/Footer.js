import React,{Fragment} from 'react';
import styled from 'styled-components';

const Grid = styled.div`
    display: grid;
    background-color: #023047;
    grid-template-columns: 1fr 1fr;
    padding: 10px;
    margin-top: 50px;
`;

const Logo = styled.div`
    justify-self: center;
    align-self: center;
`;

const Redes = styled.div`
    justify-self: center;
    align-self: center;
    text-align: center;
    color: white;

    a{
        padding: 10px;
    }
`;

const Copyright = styled.div`
    font-size: 0.6em;
    text-align: center;
    grid-column: 1/3;
    color: white;
`;

const Footer = () => {
    return ( 
        <Fragment>
            <Grid>
                <Logo>
                    <img src="https://res.cloudinary.com/cuni10/image/upload/c_scale,h_100,q_60/v1624950758/Logos/PF_LogoUsados_11062021_ygbv5o.png" alt="logoFooter"/>
                </Logo>
                <Redes>

                    <h1>Nuestras redes.</h1>
                    <a href="https://www.facebook.com/cat.usados/"><img src="https://res.cloudinary.com/cuni10/image/upload/c_scale,h_32,q_60/v1624950748/Logos/facebook_s6tqvw.png" alt="FacebookFooter"/></a>
                    

                    <a href="https://www.instagram.com/cat.usados/"><img src="https://res.cloudinary.com/cuni10/image/upload/c_scale,h_32,q_60/v1624950748/Logos/instagram_ysrvs9.png" alt="InstagramFooter"/></a>
                </Redes>
                <Copyright>
                    <h1>Derechos reservados. Catamarca Usados 2021 &copy;</h1>
                </Copyright>
            </Grid>
        </Fragment>

     );
}
 
export default Footer;
import React,{Fragment} from 'react';
import styled from 'styled-components';

const Grid = styled.div`
    display: grid;
    padding: 0px 300px;
    margin-top: 50px;
    grid-template-columns: 1fr 1fr 1fr;

    div{
        background-color: whitesmoke;
        justify-self: center;
        border-radius: 20px;
        border: 1px solid rgba(51,51,51,0.3);

        img{
            display: block;
            border-radius: 20px 20px 0px 0px;
        }

        hr{
            border:0px ;
            border-top: 2px solid #333333;
            border-style: 50px;
            width: 70%;
            align-self: center;
            margin: 10px auto;
            
        }

        h1{
            color: #333333;
            font-size: 1.5em;
            margin-left: 10px;
        }

        h2{
            color: #333333;
            font-size: 1.2em;
            margin-left: 10px;
            margin-bottom: 10px;
        }
    }
`;

const Catalogo = () => {
    return ( 
        <Fragment>
            <Grid>
                <div>
                    <img src="https://res.cloudinary.com/cuni10/image/upload/c_scale,h_360,q_40/v1624917206/Catalogo/Bora/BoraDique_rpnowg.jpg" alt="boraDique"/>

                    <h1>Volkswagen Bora</h1>
                    <h2>2009</h2>
                </div>
                    
                <div>
                    <img src="https://res.cloudinary.com/cuni10/image/upload/c_scale,h_360,q_40/v1624917122/Catalogo/Fox/FoxDique_19062021_ypnppt.jpg" alt="FoxDique"/>


                    <h1>Volkswagen Fox</h1>
                    <h2>2017</h2>
                </div>

                <div>
                    <img src="https://res.cloudinary.com/cuni10/image/upload/c_scale,h_360,q_40/v1624917107/Catalogo/Kangoo/KangoDique_t22ifm.jpg" alt="KangooDique"/>


                    <h1>Renault Kangoo</h1>
                    <h2>2017</h2>
                </div>
            </Grid>
        </Fragment>

     );
}
 
export default Catalogo;
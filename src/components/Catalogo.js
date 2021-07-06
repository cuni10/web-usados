import React,{Fragment, useEffect, useState} from 'react';
import styled from 'styled-components';

import { db } from '../init-firebase';

const Grid = styled.div`
    display: grid;
    margin-top: 50px;
    grid-template-columns: 250px 250px 250px 250px;
    grid-row-gap: 50px;
    grid-column-gap: 50px;

    justify-content: center;

    @media (max-width: 1400px) {
            grid-template-columns: 250px 250px 250px;
        }

    @media (max-width: 1010px) {
            grid-template-columns: 250px 250px;
        }

    @media (max-width: 700px) {
            grid-template-columns: 1fr;
    }

    div{
        background-color: whitesmoke;
        justify-self: center;
        border-radius: 20px;
        border: 1px solid rgba(51,51,51,0.3);
        margin: auto;
        color: #333333;
        cursor: pointer;

        :hover{
            background-color: #023047;
            color: white;
            transform: scale(105%);
            

            transition: 0.5s;
        }

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
            font-size: 1.5em;
            margin-left: 10px;
            margin-top:5px;
        }

        h2{
            font-size: 1.2em;
            margin-left: 10px;
            margin-bottom: 5px;
        }
    }
`;

const Catalogo = () => {


    const [data,setData] = useState([]);

    const consultaCatalogo = async () =>{
        db.collection("autos").onSnapshot((querySnapshot) =>{
            const docs = [];

            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id:doc.id});
            });

            setData(docs);
        });

       
    }

    useEffect(()=>{

        consultaCatalogo();


        },[]);

    return ( 
        <Fragment>
            <Grid>
                {data.map( data => (
                    <div key={data.id}>
                        <img src={data.foto} alt={data.name + " " + data.marca}/>

                        <h1>{data.name} {data.marca}</h1>
                        <h2>{data.modelo}</h2>
                    </div>
                ))}
                
            </Grid>
        </Fragment>

     );
}
 
export default Catalogo;
import React,{Fragment, useEffect, useState} from 'react';
import styled from 'styled-components';
import {Image,Transformation} from 'cloudinary-react';

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
    
    .Link{
        justify-self: center;
    }
    div{
        background-color: whitesmoke;
        justify-self: center;
        border-radius: 5px;
        border: 1px solid rgba(51,51,51,0.3);
        margin: auto;
        color: #333333;
        cursor: pointer;
        max-width: 251px;

        :hover{
            box-shadow: 0px 0px 7px black;
            

            transition: 0.2s;
        }

        img{
            display: block;
            border-radius: 5px 5px 0px 0px;
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
            word-break:break-all;
        }

        h2{
            font-size: 1.2em;
            margin-left: 10px;
            margin-bottom: 5px;
            word-break:break-all;
        }
    }
`;

const Catalogo = ({Link}) => {


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
                    <Link className="Link" key={data.id} to={`/autos/${data.marca}/${data.name}/${data.id}`}>
                        <div>
                            <Image cloudName = "cuni10" publicId={`Catalogo/${data.name}_${data.id}/${data.id}.jpg`}>
                                <Transformation height="251" quality="40" crop="scale" />
                            </Image>
                            <h1>{data.name} {data.marca}</h1>
                            <h2>{data.modelo}</h2>
                        </div>
                    </Link>
                ))}
                
            </Grid>
        </Fragment>

     );
}
 
export default Catalogo;
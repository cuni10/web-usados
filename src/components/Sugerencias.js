import React, { useEffect,useState } from 'react';

import Loading from '../components/Loading';
import styled from 'styled-components';

import { useParams } from 'react-router';

import { db } from '../init-firebase';
import {Image,Transformation} from 'cloudinary-react';

const Container = styled.div`

    display: block;
    width: 60%;
    background-color: whitesmoke;
    border: 1px solid rgba(51,51,51,0.3);
    border-radius: 5px;

    @media only screen and (max-width: 1600px) {

    }
    @media only screen and (max-width: 1200px) {

    }

    @media only screen and (max-width: 850px) {
        width: 100%;
        border-radius: 0px;
        border: 0px;
    }
`;

const Grid = styled.div`
    display: grid;
    
    

    min-height: 300px;

    @media (max-width: 1400px) {

        }

    @media (max-width: 1010px) {

        }

    @media (max-width: 700px) {
        

            div{
                    width: 180px;
                img{
                    max-width: 180px;
                }
            }
    }
    
    .Link{
        justify-self: center;
    }
`;

const Titulo = styled.div`
    background-color: #038CFF;
    color: whitesmoke;
    
    h1{
        padding: 10px;
    }
    
`;

const Autos = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    margin: 10px;

    div{
        background-color: whitesmoke;
        border: 1px solid rgba(51,51,51,0.3);
        border-radius: 5px;
        margin-right: 10px;
        color: #333333;
        cursor: pointer;
        max-width: 251px;

        :hover{
            box-shadow: 0px 0px 7px #023047;
            

            transition: 0.2s;
        }

        img{
            display: block;
            border-radius: 5px 5px 0px 0px;
            margin-bottom: 5px;
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
            word-break:normal;
            margin-bottom: 0;
            

            @media (max-width: 700px) {
                font-size: 1.1em;
                margin-top: 0;
            }
        }
        h2{
            font-size: 1.2em;
            margin-left: 10px;
            word-break:normal;
            @media (max-width: 700px) {
                font-size: 0.8em;
                margin-bottom: 0px;
            }
        }

        h3{
            font-size: 1.4em;
            margin-left: 10px;
            margin-bottom: 5px;
            word-break:break-all;
            @media (max-width: 700px) {
                font-size: 1em;
            }
        }
    }
`;

const Sugerencias = ({Link}) => {

    const [autos,setAutos] = useState({});
    const [consulta,setConsulta] = useState(false);

    let {autoId,autoName,autoMarca} = useParams();

    const consultaSugerencias = async () => {

        const documentFile = db.collection("autos");

        var query = documentFile.where("marca", "==", autoMarca);

        const docs = [];

        query.get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc)=>{
                if(autoId === doc.id){

                }else{
                    docs.push({...doc.data(), id:doc.id});
                }
                
            });

            setAutos(docs);
            setConsulta(true);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

    }

    useEffect(()=>{

        consultaSugerencias();
        

    },[autoId]);

    return ( 
        <>
        <Container>
            <Titulo>
                    <h1>Sugerencias de {autoMarca}</h1>
            </Titulo>
            <Grid>
                
                <Autos>
                    {autos.length ?
                        (autos.map( data => (
                        <Link className="Link" key={data.id} to={`/autos/${data.marca}/${data.name}/${data.id}`}>
                            <div>
                                <Image cloudName = "cuni10" publicId={`Catalogo/${data.name}_${data.id}/${data.id}_00.jpg`}>
                                    <Transformation height="251" quality="40" crop="scale" />
                                </Image>
                                <h1>{data.name} </h1>
                                <h1>{data.marca} </h1>
                                <h2>{data.modelo}</h2>
                                <h3>{"$"+data.precio}</h3>
                            </div>
                        </Link>
                                        )))
                        :
                        <h1>No se encontraron.</h1>
                    }     
                </Autos>
            </Grid>
        </Container>
        </>
     );
}
 
export default Sugerencias;
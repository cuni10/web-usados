import React, {useState, useEffect} from 'react';

import { db } from '../init-firebase';
import { useParams } from 'react-router';
import styled from 'styled-components';
import {Image,Transformation} from 'cloudinary-react';

import { Carousel } from "react-responsive-carousel";
import { render } from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Loading from "../components/Loading";

const GridLayout = styled.div`

    display: grid;
    width: 100%;
    padding-top: 50px;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-row-gap: 20px;
    justify-items: center;
    font-size: 1.4rem;

    @media only screen and (max-width: 1600px) {
        font-size: 1.3rem;
    }
    @media only screen and (max-width: 1200px) {
        font-size: 1rem;
    }

    @media only screen and (max-width: 850px) {
        padding-top: 0;
    }
    
`;

const AutoCard = styled.div`
    background-color: whitesmoke;
    width: 60%;
    display: grid;
    grid-template-columns: 50% 50%;
    border: 1px solid rgba(51,51,51,0.3);
    border-radius: 5px;
    min-height: 600px;

    
    .left{

        .imgAuto{
            width: 100%;
        }
    }

    .right{
        align-items: center;
        min-width: 50%;
    }

    @media only screen and (max-width: 1600px) {

        width: 60%;
        grid-template-columns: 50% 50%;

    }

    @media only screen and (max-width: 1400px) {

        width: 60%;
        grid-template-columns: 50% 50%;

    }

    @media only screen and (max-width: 850px) {

        grid-template-columns: 100%;
        width: 100%;

        .left{
            padding-top: 0px;
            max-width: 350px;
            
            justify-self: center;

        }

        .right{
            border-top: 2px solid #038CFF;
        }
    }


`;

const Top = styled.div`

    width: 100%;
    display: grid;
    grid-template-columns: 6fr 3fr;
    grid-template-rows: auto auto;
    padding-top: 10px;
`;

const Titulo = styled.div`
 padding-left: 2rem;

`;

const TituloSpan = styled.span`

`;
const Marca = styled.div`
    justify-self: center;
    align-self: center;
`;

const Precio = styled.div`
    padding-left: 2rem;
    color: #038CFF;
`;

const Contactar = styled.div`
    display: flex;
    align-items: center;
    padding-left: 2rem;
    border-bottom: 2px solid #038CFF;
    padding-bottom: 10px;
`;

const Llamar = styled.button`
    background-color: #038CFF;
    border-radius: 5px ;
    display: flex;
    font-size: 1.3rem;
    color: aliceblue;
    padding: 5px;
    outline: none;
    border: none;
    cursor: pointer;

    i{
        margin-left: 5px;
    }
`;

const Whatsapp = styled.button`
    background-color: #25D366;
    border-radius: 5px ;
    display: flex;
    font-size: 1.3rem;
    color: aliceblue;
    padding: 5px;
    outline: none;
    border: none;
    margin-left: 5px;
    cursor: pointer;

    i{
        margin-left: 5px;
    }
`;

const Descripcion =styled.div`
    width: 90%;

    h2{
        padding-left: 2rem;
    }

    p{
        padding-left: 2rem;
    }
`;

const AutoDetalles = () => {

    const [auto,setAuto] = useState({});
    const [linkFotos,setLinkFotos] = useState([]);
    const [consulta,setConsulta] = useState(false);

    let {autoId,autoName,autoMarca} = useParams();

    const consultaAuto = async () => {

        const documentFile = db.collection("autos").doc(autoId);

        await documentFile.get().then(snapshot => {
            let data = snapshot.data();
            setAuto(data);

            let cantidad = data.fotosCantidad

            return cantidad;

        }).then((res)=>{
            var linksFormateados= [];
            for (let i = 0; i < res; i++) {
                linksFormateados.push(`Catalogo/${autoName}_${autoId}/${autoId}_0${i}.jpg`);
            }
            setLinkFotos(linksFormateados);
            setConsulta(true);
            
        });

    }

    useEffect( ()=> {

        consultaAuto();
        document.title = `${autoName} ${autoMarca} - Cat Usados`;
        window.scrollTo(0, 0);
        
    },[autoId]);

    return ( 

        <>
                <GridLayout>
                <AutoCard>
                    {consulta ?
                        <>
                            <div className="left">
                                <Carousel className="imgAuto">
                                    {linkFotos.map((item,i)=>(
                                        <div key={i}>
                                            <img  src={`https://res.cloudinary.com/cuni10/image/upload/c_scale,w_512,q_90/v1647550089/${item}`} alt="" />
                                        </div>
                                    ))}
                                </Carousel>
                            </div>
                            <div className="right">
                                <Top>
                                    <Titulo>
                                        <TituloSpan>
                                            <h1>{auto.marca}</h1>
                                            <h1>{auto.name}</h1>
                                            <h3>{auto.modelo} | {auto.kilometraje + " Km"}</h3>
                                        </TituloSpan>
                                        
                                    </Titulo>
                                    
                                    <Marca>
                                            <Image cloudName = "cuni10" publicId={`marcas/Logo_${autoMarca}_512.png`}>
                                                <Transformation height="128" quality="30" crop="scale" />
                                            </Image>
                                        
                                    </Marca>
                                </Top>

                                <Precio>
                                    <h1>{"$"+auto.precio}</h1>
                                </Precio>

                                <Contactar>
                                    <Llamar> Llamar <i className='material-icons'>call</i></Llamar>
                                    <Whatsapp>Whatsapp <i className='material-icons'>whatsapp</i></Whatsapp>
                                </Contactar>

                                <Descripcion>
                                    <h2>Descripcion</h2>
                                    <p>{auto.descripcion}</p>
                                </Descripcion>
                            </div>
                        </>
                    :
                        <Loading />               
                    }
                    
                </AutoCard>
            </GridLayout>
        </>
     );
}
 
render(<Carousel />, document.getElementById("root"));

export default AutoDetalles;
import React, { useEffect, useState } from 'react';
import { db } from '../init-firebase';
import { useParams } from 'react-router';
import {Image,Transformation} from 'cloudinary-react';

import styled from 'styled-components';

const GridLayout = styled.div`

    display: grid;
    width: 100%;
    padding-top: 50px;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-row-gap: 20px;
    justify-items: center;

    @media only screen and (max-width: 768px) {
        padding-top: 0;
    }
`;

const AutoCard = styled.div`
    background-color: grey;
    width: 60%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 5px;
    border: 1px solid rgba(51,51,51,0.3);

    
    .left{
        background-color: #8ECAE6;
        border-right: 1px solid black;
        width: 100%;
        display: flex;
        justify-content: center;
        
        img{
            
        }
    }

    .right{
        background-color: whitesmoke;
    }
    @media only screen and (max-width: 768px) {

        width: 100%;
        grid-template-columns: 1fr ;

        .left{
        background-color: #8ECAE6;
        border-right: 1px solid black;
        width: 100%;
        padding-top: 0px;
        display: flex;
        height: fit-content;
        
        img{
            width: 90%;
        }
    }
    }


`;

const ContactoCard = styled.div`
    background-color: whitesmoke;
    border: 1px solid black;
    width: 60%;

`;
const Auto = () => {

    const [auto,setAuto] = useState({});

    let {autoId,autoName,autoMarca} = useParams();

    const consultaAuto = async () => {

        const documentFile = db.collection("autos").doc(autoId);

        await documentFile.get().then(snapshot => {
            let data = snapshot.data();
            setAuto(data);
            
        })
    }
    useEffect( ()=> {
        
        consultaAuto();
        document.title = `${autoName} ${autoMarca} - Cat Usados`;
        window.scrollTo(0, 0);
    });

    return (

    <>
        <GridLayout>
            <AutoCard>

                <div className="left">
                    <Image cloudName = "cuni10" publicId={`Catalogo/${autoName}_${autoId}/${autoId}.jpg`}>
                        <Transformation height="512" quality="90" crop="scale" />
                    </Image>
                </div>
                <div className="right">
                    <h1>{auto.marca}</h1>
                    <h1>{auto.name}</h1>
                    <h2>{auto.modelo}</h2>
                </div>
                
                
            </AutoCard>
            <ContactoCard>
                <h1>Contacto</h1>
            </ContactoCard>
        </GridLayout>
    </>
    
    )
}
export default Auto;
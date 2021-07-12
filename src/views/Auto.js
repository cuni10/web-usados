import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { db } from '../init-firebase';
import { useParams } from 'react-router';

const Auto = () => {

    const [auto,setAuto] = useState({});

    const {name,marca} = auto;

    let {autoId} = useParams();

    const consultaAuto = async () => {

        const documentFile = await db.doc(`autos/${autoId}`);

        documentFile.get().then(snapshot => {
            let data = snapshot.data();
            setAuto(data);
        }) 
    }
    useEffect( ()=> {
        consultaAuto();
    });

    return (

    <>
        <Helmet>
            <title>{name + " " + marca + " - Cat Usados"}</title>
        </Helmet>
        <h1>Hola pa {autoId}</h1>
    </>
    
    )
}
export default Auto;
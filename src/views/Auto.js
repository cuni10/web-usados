import React, { useEffect, useState } from 'react';
import { db } from '../init-firebase';
import { useParams } from 'react-router';

const Auto = () => {

    const [auto,setAuto] = useState({});

    //const {name,marca} = auto;

    let {autoId,autoName,autoMarca} = useParams();

    const consultaAuto = async () => {

        const documentFile = await db.doc(`autos/${autoId}`);

        documentFile.get().then(snapshot => {
            let data = snapshot.data();
            setAuto(data);
            
        })
    }
    useEffect( ()=> {
        
        consultaAuto();
        document.title = `${autoName} ${autoMarca} - Cat Usados`;
    });

    return (

    <>
        <h1>{auto.name} {autoId}</h1>
    </>
    
    )
}
export default Auto;
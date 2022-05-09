import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { db } from '../init-firebase';
 

const Busqueda = () => {

    const {query} = useParams();

    const [consulta,setConsulta] = useState([]);
    
    const consultaBusqueda = async () =>{


        const documentFile = db.collection("autos");

        const busqueda = documentFile.where("marca","==",query);

        const docs =[];

        busqueda.get()
        .then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id:doc.id});
            })
            console.log(docs);
            setConsulta(docs);
        })

        
    }
    useEffect(()=>{

        setConsulta([]);

        consultaBusqueda();
        console.log(query);
    },[query])

    return ( 

        <>
            
            <h1>Resultados de: {query}</h1>
            {consulta.length ?
                <h2>Si</h2>
                :
                <h2>No se encontraron resultados.</h2>
            }

        </>
        


     );
}
 
export default Busqueda;
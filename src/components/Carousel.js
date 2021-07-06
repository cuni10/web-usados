import React,{Fragment, useEffect} from 'react';
import '../carousel.css';
import Splide from "@splidejs/splide";


const Carousel = () => { 

            useEffect(()=>{
                new Splide( '#image-slider', {
                    'heightRatio': 0.2,
                    'cover': true,
                    'width': 1600,
                    'focus':"center",
                    'autoplay': true,
                    'rewind': true,} ).mount();
            },[])
            
    return ( 

        <Fragment>
            <div id="image-slider" className="splide">
	            <div className="splide__track">
		            <ul className="splide__list">
			            <li className="splide__slide">
                            <img src="https://res.cloudinary.com/cuni10/image/upload/q_50/v1624855885/Portada/portada_dqsqt6.jpg" alt="Portada1"/>
                        </li>
                        <li className="splide__slide">
                            <img src="https://res.cloudinary.com/cuni10/image/upload/q_50/v1625438224/Portada/PortadaPrueba_zgjfcz.jpg" alt="Portada2"/>
                        </li>
                        <li className="splide__slide">
                            <img src="https://res.cloudinary.com/cuni10/image/upload/q_50/v1625544910/Portada/PortadaPrueba2_kwwuwd.jpg" alt="Portada2"/>
                        </li>
		            </ul>
	            </div>
            </div>
        </Fragment>
     );
}
 
export default Carousel;
import React,{Fragment,useState} from 'react';
import "../BarraMovil.css";
import styled from 'styled-components';

const SearchContainer = styled.div`
    display: flex;
    margin: auto;
    
    #input{
        width: 100%;
        border: 3px solid whitesmoke;
        padding: 5px;
        height: 20px;
        border-radius: 5px;
        outline: none;
        color: #023047;
        font-weight: 400;
        font-size: 1.1em;
        background-color: whitesmoke;
        border: 2px solid #023047;
    }
    
`;

const BarraMovil = ({Link}) => {

    const [ClassMenu,setClassMenu] = useState("nav-menu");
    const [ClassHamburger,setClassHamburger] = useState("hamburger");
    const [ClassRelleno,setClassRelleno] = useState("relleno");

    function mobileMenu() {
        setClassHamburger("hamburger active");
        setClassMenu("nav-menu active");
        setClassRelleno("relleno active");
    }

    function closeMenu (){
        setClassHamburger("hamburger");
        setClassMenu("nav-menu");
        setClassRelleno("relleno");
        window.scrollTo(0, 0);
    }

    function checkClass () {
        if (ClassMenu.includes("active")) {
            closeMenu();
        }else{
            mobileMenu();
        }
    }

    

    return ( 

        <Fragment>
            <div>
                
                <div className="header">
                    <nav className="navbar">
                        <a href="/"><img className="logo"src="https://res.cloudinary.com/cuni10/image/upload/c_scale,h_64,q_60/v1624950758/Logos/PF_LogoUsados_11062021_ygbv5o.png" alt="logoFooter"/></a>

                        <SearchContainer>
                            
                            <input name="imputTexto" id="input" type="text" placeholder="Busca tu auto."></input>
                            
                        </SearchContainer>
                        <ul className={ClassMenu}>
                            <li className="nav-item">
                                <Link onClick={closeMenu} className="nav-link" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={closeMenu} className="nav-link" to="/autos">Autos</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={closeMenu} className="nav-link" to="/contacto">Contacto</Link>
                            </li>
                        </ul>
                        <div className={ClassHamburger} onClick={checkClass}>
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="rellenoBarra"></div>
            <div className={ClassRelleno}></div>
        </Fragment>
     );
}
 
export default BarraMovil;
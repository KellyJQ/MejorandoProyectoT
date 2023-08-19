import React from 'react'
import { Link } from 'react-router-dom'
import Fresas from '../Imagenes/fresas.webp'
import Guanabana from '../Imagenes/beneficios-de-la-guanabana-para-tu-salud-imagen-1-1.jpg'
import Lechuga from '../Imagenes/Lechuga.jpg'
import Tomate from '../Imagenes/Tomate-Chonto.jpg'
import Queso from '../Imagenes/Queso.webp'
import Yogurt from '../Imagenes/descarga.jpg'
import Leche from '../Imagenes/Leche.webp'
import Mantequilla from '../Imagenes/mantequilla.webp'
import Pollo from '../Imagenes/pollo.png'
import Solomo from '../Imagenes/SOLOMO-REDONDO-SELECTO-22913_a.webp'
import Frijol from '../Imagenes/frijol-cargamanto-blanco.jpg'
import Arroz from '../Imagenes/a.jpg'
import Arveja from '../Imagenes/Arveja-500g_700x700.webp'
import Lentejas from '../Imagenes/supermercados_la_vaquita_supervaquita_lenteja_el_13_460gr_granos_700x700.webp'
import Lomo from '../Imagenes/lomo de cerdo.webp'






const Home = () => {
    return (
        <div >

            <div className="container text-center" >
            <h1 className=' my-5 font-weight-bold font-size: 43px text-primary alert alert-primary'>¡Tenemos los mejores precios y ofertas!</h1> <br /> <br />

            <h2 className='my-4 alert alert-warning'>Frutas y Verduras</h2> <br />
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <img src={Fresas} className="card-img-top center img-thumbnail "  style={{height:'230px'}} alt="..."/>
                            <div className="card-body ">
                                <h5 className="card-title">Bandeja de Fresas</h5>
                                <p className="card-text">
                                    1.000 g x Unidad
                                    5.534

                                </p>
                                
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img src={Lechuga} className="card-img-top img-thumbnail"  style={{height:'230px'}} alt="..." />
                            <div className="card-body ">
                                <h5 className="card-title">Lechuga Fresca</h5>
                                <p className="card-text">
                                    1 lb x 4.500

                                </p>
                                
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img src={Guanabana} className="card-img-top img-thumbnail" style={{height:'230px'}}   alt="..." />
                            <div className="card-body ">
                                <h5 className="card-title">Guanabana</h5>
                                <p className="card-text">
                                    X 1.500g (3lb)
                                    8.877

                                </p>
                                
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img src={Tomate} className="card-img-top img-thumbnail" style={{height:'230px'}} alt="..." />
                            <div className="card-body ">
                                <h5 className="card-title">Tomate Chonto</h5>
                                <p className="card-text">
                                500g x 9.910

                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div> <br />


            <div className="container text-center" id="granos">
            <h2 className='my-4 alert alert-warning'>Granos</h2> <br />
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <img src={Arroz} className="card-img-top center img-thumbnail" style={{height:'230px'}}  alt="..." />
                            <div className="card-body ">
                                <h5 className="card-title">Arroz blanco Diana</h5>
                                <p className="card-text">
                                500 g x
                                2.500
                                </p>
                                
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img src={Frijol} className="card-img-top img-thumbnail" style={{height:'230px'}} alt="..." />
                            <div className="card-body ">
                                <h5 className="card-title">Frijol Cargamanto</h5>
                                <p className="card-text">
                                1.000 g x Bolsa 3.000
                                </p>
                                
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img src={Arveja} className="card-img-top img-thumbnail" style={{height:'230px'}}  alt="..." />
                            <div className="card-body ">
                                <h5 className="card-title">Arveja Aburrá</h5>
                                <p className="card-text">
                                Bolsa X 500 g 2.250
                                </p>
                                
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img src={Lentejas} className="card-img-top img-thumbnail" style={{height:'230px'}}   alt="..." />
                            <div className="card-body ">
                                <h5 className="card-title">Lentejas Aburrá</h5>
                                <p className="card-text">
                                1 lb x 3.4000
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div> <br />
            

            <div className="container text-center" id="lacteos">
            <h2 className='my-4 alert alert-warning'>Lácteos</h2> <br />
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <img src={Queso} className="card-img-top center img-thumbnail" style={{width:'227px', height:'220px' }}   alt="..." />
                            <div className="card-body ">
                                <h5 className="card-title">Queso campesino</h5>
                                <p className="card-text">
                                250g x 8.290
                                </p>
                    
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img src={Leche} className="card-img-top img-thumbnail"  style={{height:'220px'}}  alt="..." />
                            <div className="card-body ">
                                <h5 className="card-title">Leche Alqueria</h5>
                                <p className="card-text">                                 
                                6.390
                                </p>
                            
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img src={Yogurt} className="card-img-top img-thumbnail" style={{height:'220px'}}   alt="..." />
                            <div className="card-body ">
                                <h5 className="card-title">Yogurt Alpina</h5>
                                <p className="card-text"> 
                                 1.000g  x 17.094
                                </p>
                                
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img src={Mantequilla} className="card-img-top img-thumbnail" style={{height:'220px'}}  alt="..." />
                            <div className="card-body ">
                                <h5 className="card-title">Mantequilla Rama</h5>
                                <p className="card-text">
                                    440g x 5.500
                                
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div> <br />

            <div className="container text-center" id="carnicos">
            <h2 className='my-4 alert alert-warning font-weight-bold'>Cárnicos </h2> <br />
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <img src={Pollo} className="card-img-top center img-thumbnail" style={{height:'220px'}}  alt="..." />
                            <div className="card-body ">
                                <h5 className="card-title">Bandeja de pollo </h5>
                                <p className="card-text">
                                medio pollo x 8.900
                                </p>
                                
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img src={Solomo} className="card-img-top img-thumbnail" style={{height:'220px'}}  alt="..." />
                            <div className="card-body ">
                                <h5 className="card-title">Solomo redondo</h5>
                                <p className="card-text">
                                500g x 21.000
                                </p>
                                
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img src={Lomo} className="card-img-top img-thumbnail" style={{height:'220px'}}   alt="..." />
                            <div className="card-body ">
                                <h5 className="card-title">Lomo de cerdo</h5>
                                <p className="card-text">
                                500g x 15.490
                                </p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='bg-primary' /> <br />

        </div>
    );
};

export default Home

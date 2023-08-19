import React, { useState } from 'react'
import Listaproductos from './Listadeproductos'

const Filtroproductos = () => {

    const [filtroCategoria, setFiltroCategoria] = useState('');

        const filtrarPorcategoria = (event) => {
            setFiltroCategoria(event.target.value);
        };

        const obtenerCategoriasUnicas = () => {
            const categoriasUnicas = [...new Set(Listaproductos.map((categoria) => categoria.categoria))];
            return categoriasUnicas;
        };

    const categoriasFiltradas = Listaproductos.filter((categoria) =>
        categoria.categoria.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(filtroCategoria.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''))
    );



    return (
        <div>
            <div className="container">

                <h1 className="my-4 text-primary alert alert-primary">Nuestros productos</h1>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="filtroCategoria" className="form-label">
                            Filtrar por categoria:
                        </label>
                        <input
                            type="text"
                            id="filtroCiudad"
                            className="form-control"
                            value={filtroCategoria}
                            onChange={filtrarPorcategoria}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="selectCategoria" className="form-label">
                            productos disponibles:
                        </label>
                        <select id="selectCategoria" className="form-select"
                            value={filtroCategoria}
                            onChange={filtrarPorcategoria}>
                            <option value="">Todas las categorias</option>
                            {obtenerCategoriasUnicas().map((categoria, index) => (
                                <option value={categoria} key={index}>
                                    {categoria}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className="row">
                {categoriasFiltradas.map((categoria, index) => (
                    <div className="col-md-2" key={index}>
                        <div className="card mb-4">
                            <img src={categoria.Imagen} className="card-img-top center img-thumbnail "  style={{height:'250px' , width:'210px'}} alt={categoria.categoria} />
                            <div className="card-body">
                                <h5 className="card-title">{categoria.categoria}</h5>
                                <p className="card-text">{categoria.nombre}</p>
                                <p className="card-text">{categoria.Cantidad}</p>
                                <p className="card-text">{categoria.precio}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <hr />


        </div>
        
    )
}

export default Filtroproductos

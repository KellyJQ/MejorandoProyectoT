import React from 'react'
import Iconos from '../Imagenes/iconos.avif'
const Contacts = () => {
  return (
    <div>

      <h2><span className="text-primary">Comunícate con nosotros</span></h2> <br />

      <h4> Whatsapp: 380 645783</h4> <br />
      <h4> Facebook: FamilyMarket</h4> <br />
      <h4> Instagram: @FamilyMarket_Oficial</h4>


      <div>
        <img src={Iconos} className='rounded mx-auto d-block' alt="" style={{ width: '260px', height: '260px' }} />
      </div>
      <hr />
      

    </div> 
    
  )
}

export default Contacts


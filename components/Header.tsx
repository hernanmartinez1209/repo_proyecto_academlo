// import axios from 'axios';
// import { useEffect, useState } from 'react';
import Serch from '../components/Serch';
import Artistas_Conciertos from './Artistas_Conciertos';
import Marcas_Tiendas from './Marcas_Tiendas';
import Torneos from './Torneos';

const Header = () => {
  return (
    <header className=" ">
      <picture className=" flex justify-center items-center">
        <img src="../Frame.png" alt="" className="absolute  top-28  " />
        <img className="wfimg  w-full " src="../Rectangle 21.jpg" alt="" />
      </picture>
      <Serch />

      <div className="flex gap-6 items-cen justify-center relative bottom-20">
        <Marcas_Tiendas />
        <Artistas_Conciertos />
        <Torneos />
      </div>
    </header>
  );
};

export default Header;

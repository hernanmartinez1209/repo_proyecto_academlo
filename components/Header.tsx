// import axios from 'axios';
// import { useEffect, useState } from 'react';
import Serch from '../components/Serch';
import Artistas_Conciertos from './Artistas_Conciertos';
import Marcas_Tiendas from './Marcas_Tiendas';
import NavBar from './NavBar';
import Torneos from './Torneos';

const Header = () => {
  return (
    <header className=" ">
      <NavBar />
      <picture className="  flex justify-center items-center relative">
        <img src="../Frame.png" alt="" className="absolute  top-20  " />
        {/* <img className=" w-full " src="../Rectangle 21.jpg" alt="" /> */}
      </picture>
      <div className="bg_img  w-full h-[488px] p-0"></div>
      <div className="relative top-6 ">
        <div className="w-full relative bottom-52  left-2">
          <Serch />
        </div>
        <div className="flex gap-3 items-cen justify-center relative bottom-48">
          <Marcas_Tiendas />
          <Artistas_Conciertos />
          <Torneos />
        </div>
      </div>
    </header>
  );
};

export default Header;

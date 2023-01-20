// import axios from 'axios';
// import { useEffect, useState } from 'react';
import Serch from '../components/Serch';
import Artistas_Conciertos from './Artistas_Conciertos';
import Marcas_Tiendas from './Marcas_Tiendas';
import Torneos from './Torneos';

const Header = () => {
  // const [info, setInfo] = useState();

  // useEffect(() => {
  //   axios
  //     .get(dataBase)
  //     .then((res) => setInfo(res.data.namePublic))
  //     .catch((err) => console.log(err));
  // }, []);
  // console.log(info);

  // const fetchJoson = () => {
  //   return fetch('../Data/dataFicticia.json').then((res) => res.json);
  // };
  // const respose = fetchJoson;
  // console.log(respose);

  return (
    <header>
      <picture className=" flex justify-center items-center">
        <img src="../Frame.png" alt="" className="absolute  top-28  " />
        <img className="wfimg " src="../Rectangle 21.jpg" alt="" />
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

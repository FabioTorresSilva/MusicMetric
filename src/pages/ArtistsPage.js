import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import { Play } from '../components/icons/Icons';
import { calcularTop100ArtistasPorIntervalo } from '../common/Funcoes';

const ArtistsPage = () => {
  return (
    <div className=''>
      <div className='flex flex-col gap-4'>
        <h1 className='flex font-semibold text-white text-2xl justify-center text-center'>Play</h1>
        <div className='flex justify-center items-center h-16'>
          <Play />
        </div>
      </div>
      {(calcularTop100ArtistasPorIntervalo('desdeSempre')).map((e, index) =>
        <div className='flex flex-col' key={index}>
          <div className='flex'>
            <div className='flex bg-amarelo font-bold text-xl w-1/5 mb-4 rounded-l-lg p-4 text-black'>#{index + 1}</div>
            <Link to={`/artista/${e.nome}`} className='flex justify-between text-white bg-azul w-4/5 mb-4 p-4 rounded-r-lg'>
              <p>{e.nome}</p>
              <p>{e.plays} Plays</p>
            </Link>
          </div>
        </div>
      )}
      <div className='h-32 '></div>
    </div>
  );
};

export default ArtistsPage;
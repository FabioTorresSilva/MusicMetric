import React from 'react';
import { Play } from '../components/icons/Icons';
import { calcularTop100ArtistasPorIntervalo } from '../common/Funcoes';


const ArtistsPage = () => {
  return (
    <div className='px-6'>
      <div className='flex flex-col gap-4'>
        <h1 className='flex font-semibold text-white text-2xl justify-center text-center'>Play</h1>
        <div className='flex justify-center items-center h-16'>
          <Play />
        </div>
      </div>
      {(calcularTop100ArtistasPorIntervalo('desdeSempre')).map((e, index) =>
        <div className='flex flex-col'>
          <div className='flex'>
            <div className='flex  bg-amarelo font-bold text-xl w-1/5 mb-4 rounded-l-lg p-4 text-black '>#{index + 1} </div>
            <div className='flex justify-between  text-white bg-azul  w-4/5 mb-4 p-4  rounded-r-lg'><p>{e.nome} </p>
              <p className=''>{e.plays} Plays
              </p>
            </div>
          </div>
        </div>
      )}
<div className='h-32 '>

</div>
    </div>
  );
};

export default ArtistsPage;
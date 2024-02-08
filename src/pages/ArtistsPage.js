import React from 'react';
import { Play } from '../components/icons/Icons';

const ArtistsPage = () => {
  return (
    <div className='px-6'>
      <div className='flex flex-col gap-4'>
        <h1 className='flex font-semibold text-white text-2xl justify-center text-center'>Play</h1>
        <div className='flex justify-center items-center h-16'>
          <Play />
        </div>
      </div>

    <div className='flex flex-col gap-4'>
        <div className='flex'>

          <div className='flex text-white bg-amarelo w-16 rounded-l-lg p-4'> 1</div>

          <div className='flex text-white bg-azul w-full  p-4 rounded-r-lg'> nome do artista</div>

        </div>

        <div className='flex'>
          
          <div className='flex text-white bg-amarelo w-16 rounded-l-lg p-4'> 1</div>

          <div className='flex text-white bg-azul w-full  p-4 rounded-r-lg'> nome do artista</div>

        </div>

    </div>





    </div>





  );
};

export default ArtistsPage;
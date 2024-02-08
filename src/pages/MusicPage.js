import React from 'react';
import { calcularTop100MusicasPorMilissegundosEIntervalo } from '../common/Funcoes';
import { Play } from '../components/icons/Icons';

const MusicPage = ({ selectedPeriod, setSelectedPeriod }) => {
  return (
    <div>
       <div className='flex flex-col gap-4'>
        <h1 className='flex font-semibold text-white text-2xl justify-center text-center'>Plays</h1>
        <div className='flex justify-center items-center h-16'>
          <Play />
        </div>
      </div>

      {(calcularTop100MusicasPorMilissegundosEIntervalo(selectedPeriod)).map((e, index) =>
        <div>
          <div className='flex'>
            <div className='flex  bg-amarelo font-bold text-xl w-1/5 mb-4 rounded-l-lg p-4 text-black '>#{index + 1} </div>
            <div className='flex justify-between  text-white bg-azul  w-4/5 mb-4 p-4  rounded-r-lg'><p>{e.nome} </p>
              <p className=''>{Math.round(e.minutos)} mins</p>
            </div>
          </div>
        </div>
      )}
      <div className='h-32 '></div>
    </div>
  )
}

export default MusicPage;
import React, { useState } from 'react';
import {calcularTop100MusicasPorMilissegundosEIntervalo } from '../common/Funcoes';
import { IconBar } from './IconBar';


const MusicPage = () => {
  const [timeframe, setTimeframe] = useState('desdeSempre');

  const handleTimeframeSelect = (selectedTimeframe) => {
    setTimeframe(selectedTimeframe);
  };

  return (
    <div>
    <IconBar onTimeframeSelect={handleTimeframeSelect} />
    {(calcularTop100MusicasPorMilissegundosEIntervalo(timeframe)).map((e, index) =>
        <div>
          <div className='flex'>
            <div className='flex  bg-amarelo font-bold text-xl w-1/5 mb-4 rounded-l-lg p-4 text-black '>#{index+1} </div>
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
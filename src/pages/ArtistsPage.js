import React from 'react';
import { Link } from 'react-router-dom'; 
import { Play } from '../components/icons/Icons';
import { calcularTop100ArtistasPorIntervalo } from '../common/Funcoes';
import { motion } from "framer-motion"

const ArtistsPage = ({ selectedPeriod, setSelectedPeriod }) => {

  return (
    <div className=''>
      <div className='flex flex-col gap-4'>
        <h1 className='flex font-semibold text-white text-2xl justify-center text-center'>Plays</h1>
        <div className='flex justify-center items-center h-16'>
          <Play />
        </div>
      </div>

      {(calcularTop100ArtistasPorIntervalo(selectedPeriod)).map((e, index) =>
        <motion.div
                        initial={{
                            y: 100,
                            scale: 1,
                            opacity: 0
                        }}
                        animate={{
                            y: 0,
                            scale: [1, 0.99, 1],
                            opacity: 2
                        }}
                        
                        transition={{
                            delay: index * 0.15
                        }} 
                        key={index} 
                        >
        <div className='flex flex-col' key={index}>
          <div className='flex'>
            <div className='flex bg-amarelo font-bold text-xl w-1/5 mb-4 rounded-l-lg p-4 text-black'>#{index + 1}</div>
            <Link to={`/artista/${e.artistName}`} className='flex justify-between text-white bg-azul w-4/5 mb-4 p-4 rounded-r-lg'>
              <p>{e.artistName}</p>
              <p>{e.plays} Plays</p>
            </Link>
          </div>
        </div>
      </motion.div>
      )}
      <div className='h-32 '></div>
    </div>
  );
};

export default ArtistsPage;
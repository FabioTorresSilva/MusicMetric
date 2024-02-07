import React from 'react';
import { Link } from 'react-router-dom';
import { FotoUser } from '../components/icons/Icons';
import { miliMinutosTocados, musicasDiferentes, playsTotal, estacoesEPercentagens } from '../common/Funcoes';


function HomePage() {

    return (
        <div className='bg-fundo h-full px-3'>
            <div className='flex justify-center mt-8'>
                <FotoUser />
            </div>
            <div className='flex items-center w-full justify-center gap-3 mt-8'>
                <div className='bg-amarelo w-full rounded-lg p-4 flex flex-col'>
                    <div className='text-lg'>Ouviu</div>
                    <div className='mb-2 text-xl font-bold'>{musicasDiferentes()}</div>
                    <div className='text-lg'>Músicas diferentes</div>
                </div>
                <div className='bg-amarelo w-full rounded-lg p-4 flex flex-col'>
                    <div className='text-lg'>Passou</div>
                    <div className='mb-2 text-xl font-bold'>{miliMinutosTocados()}</div>
                    <div className='text-lg'>minutos a ouvir música.</div>
                </div>

            </div>
            <div>
            <div>
       {/*      <div className='bg-azul w-full rounded-lg p-4 flex flex-col mt-3 g-3'>
                <p className='text-white font-bold'>Qual a Estação do ano em que mais ouviste música?</p>
                <div className=''>
                    {estacoesEPercentagens.map(({ estacao, percentagem }) => (
                        <div key={estacao} className={`bg-amarelo w-[${percentagem}%] mt-2 text-xs p-1`}>
                            {estacao}: {percentagem}%
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
            </div>
        </div>
    );
}

export default HomePage;
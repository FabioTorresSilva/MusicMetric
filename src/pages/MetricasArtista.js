import React from 'react';
import { useParams } from 'react-router-dom';


import { albumMaisOuvido, calcularTop20MusicasArtistaPorIntervalo, encontrarPosicaoArtistaNoTop100, estacaoMaisOuveArtista,numeroPlaysArtista, percentagemPlaysArtista } from '../common/Funcoes';

function MetricasArtista() {
    let { artistName } = useParams();
    return (
        <div>
            <div>
                <h2 className='text-2xl flex justify-center font-bold text-amarelo'>{artistName}</h2>
                <p className='text-xl font-medium flex justify-center text-white'>{encontrarPosicaoArtistaNoTop100(artistName)}</p>

            </div>
            <div className='flex items-center w-full justify-center gap-6 mt-8'>
                <div className='bg-amarelo w-full rounded-lg p-4 flex flex-col'>
                    <div className='text-lg'>Ouvido</div>
                    <div className='mb-2 text-xl font-bold'>{numeroPlaysArtista(artistName)}</div>
                    <div className='text-lg'>vezes</div>
                </div>
                <div className='bg-amarelo w-full rounded-lg p-4 flex flex-col'>
                    <div className='text-lg'>Passou</div>
                    <div className='mb-2 text-xl font-bold'>{(artistName)}</div>
                    <div className='text-lg'>minutos a ouvir música.</div>
                </div>
            </div>
            <div>
                <div className='flex items-center w-full justify-center gap-3 mt-6'>
                    <div className='bg-azul w-full rounded-lg p-4 flex flex-col text-white'>
                        <div className='flex flex-row justify-around'>
                            <div className='text-lg'>Representa<p className='mb-2 text-xl font-bold'>{percentagemPlaysArtista(artistName)}</p> das suas plays</div>
                        </div>
                    </div>
                    <div className='bg-azul w-full rounded-lg p-4 flex flex-col text-white'>
                        <div className='flex flex-row justify-around'>
                            <div className='text-lg'>Mais Ouvido no<p className='mb-2 text-xl font-bold'>{estacaoMaisOuveArtista(artistName)}</p></div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center w-full justify-center gap-3 mt-6 mb-16 '>
                    <div className='bg-amarelo w-full rounded-lg p-4 flex flex-col'>
                        <div className='flex justify-center mb-2 text-xl font-bold'>Albúm mais tocado!  </div>
                        <div className='flex flex-row justify-around'>
                            <div className='text-lg'><p className='mb-2 text-xl '>{albumMaisOuvido()}</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <div className='p-4 flex justify-center text-xl text-amarelo '>
                Top Songs
            </div>
                {(calcularTop20MusicasArtistaPorIntervalo((artistName),'Always')).map((e, index) =>
                    <div>
                        <div className='flex'>
                            <div className='flex  bg-amarelo font-bold text-xl w-1/5 mb-4 rounded-l-lg p-4 text-black '>#{index + 1} </div>
                            <div className='flex justify-between  text-white bg-azul  w-4/5 mb-4 p-4  rounded-r-lg'><p>{e.artistName} </p>
                                <p className=''>{Math.round(e.totalMsPlayed / 60000)} min</p>
                            </div>
                        </div>
                    </div>
                )}
                <div className='h-20'></div>
            </div>
        </div>
    )
}

export default MetricasArtista;
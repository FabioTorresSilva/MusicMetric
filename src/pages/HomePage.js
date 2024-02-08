import React from 'react';
import { FotoUser} from '../components/icons/Icons';
import { AlbumDamn } from '../components/icons/Icons';
import { albumMaisOuvido, calcularStrikeAtual, calcularStrikeDeEscuta, miliMinutosTocados, musicasDiferentes } from '../common/Funcoes';
import { calcularTempoPorEstacao, calcularPercentagens } from '../common/Funcoes'; 

function HomePage() {

    const dados = [];
    const tempoPorEstacao = calcularTempoPorEstacao(dados);
    const estacoesEPercentagens = calcularPercentagens(tempoPorEstacao);

    return (
        <div className='bg-fundo h-full '>
            <div className='flex justify-center mt-8'>
                <FotoUser />
            </div>
            <div className='flex items-center w-full justify-center gap-6 mt-8'>
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
                    <div className='bg-azul w-full rounded-lg p-4 flex flex-col mt-6 g-3'>
                        <p className='text-white font-bold'>Qual a Estação do ano em que mais ouviste música?</p>
                        <div className=''>
                            {estacoesEPercentagens.map(({ estacao, percentagem }) => (
                                <div key={estacao} className={`rounded-lg bg-amarelo   mt-2 text-xs p-1 flex items-center`}style={{width: Math.abs(percentagem*10)}}>
                                    <span className='text-preto mr-2'>{estacao}:</span> {percentagem}%
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='flex items-center w-full justify-center gap-3 mt-6'>
                    <div className='bg-amarelo w-full rounded-lg p-4 flex flex-col'>

                        <div className='flex justify-center mb-2 text-xl font-bold'>Dias consecutivos</div>
                        <div className='flex flex-row justify-around'>
                            <div className='text-lg'>Streak Atual<p className='mb-2 text-xl font-bold'>{calcularStrikeAtual()}🔥</p></div>

                            <div className='text-lg'>O seu maior streak<p className='mb-2 text-xl font-bold'>{calcularStrikeDeEscuta()}🔥</p></div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center w-full justify-center gap-3 mt-6'>
                    <div className='bg-amarelo w-full rounded-lg p-4 flex flex-col'>

                        <div className='flex justify-center mb-2 text-xl font-bold'>Albúm mais tocado!  </div>
                        <div className='flex flex-row justify-around'>
                            <div className='text-lg'><p className='mb-2 text-xl '>{albumMaisOuvido()}</p></div>
                            <div className='text-lg rounded-lg'><AlbumDamn /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
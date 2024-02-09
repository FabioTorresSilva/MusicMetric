import React, { useState } from 'react';

import {mediaDiaria, horaMaisOuve, percentagemPlaysArtista, gerarTop100Artistas, calcularTempoPorEstacao, calcularPercentagens } from '../common/Funcoes';

import { Moon, Sun, Wave } from '../components/icons/Icons';



function UserMetrics() {

    const dados = [];
    const tempoPorEstacao = calcularTempoPorEstacao(dados);
    const estacoesEPercentagens = calcularPercentagens(tempoPorEstacao);

   
    let [artist, setArtist] = useState()

    
    let handleArtistChange = (e) => {
        setArtist(e.target.value)
    }

    let horaMaisOuvida = horaMaisOuve();
    let noite = horaMaisOuvida.hora >= 6 && horaMaisOuvida.hora <= 18 ? false : true;

    return (
        <div className='bg-fundo h-full px-3 pb-14'>
            <div className='flex flex-col gap-4'>
                <div className='bg-azul w-full rounded-lg p-4 flex flex-col mt-6'>
                    <p className='text-white font-bold'>Qual a Estação do ano em que mais ouviste música?</p>
                    <div>
                        {estacoesEPercentagens.map(({ estacao, percentagem }) => (
                            <div key={estacao} className={`rounded-lg bg-amarelo   mt-2 text-xs p-1 flex items-center`} style={{ width: Math.abs(percentagem * 10) }}>
                                <span className='text-preto mr-2'>{estacao}:</span> {percentagem}%
                            </div>
                        ))}
                    </div>
                </div>


                <div className='text-center bg-amarelo w-full rounded-lg p-4 h-36 '>
                    <div className='h-full flex gap-4 justify-center items-center content-center'>
                        <div className='flex justify-center items-center content-center'>
                            <Wave />
                        </div>
                        <div className='flex flex-col items-start'>
                            <div className='flex justify-center font-semibold text-white text-2xl'>Média de tempo diário:</div>
                            <div className=' text-xl font-normal text-white'>{mediaDiaria()}</div>
                        </div>
                    </div>
                </div>

                <div className='text-center bg-amarelo w-full rounded-lg p-4 h-36 '>
                    <div className='h-full flex gap-4 justify-center items-center content-center'>
                        <div className='flex justify-center items-center content-center'>
                            {noite ? <Moon /> : <Sun />}
                        </div>
                        <div>
                            <div className='flex justify-center font-semibold text-white text-2xl'>Ouves mais música</div>
                            <div className='text-xl font-normal text-white'>{horaMaisOuvida.msg}</div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center text-xl font-bold text-white'>Percentagem em Plays:</div>
                <div>
                    <select className='flex text-xl font-bold py-2 content-center px-2 w-full justify-center items-center rounded-lg text-black text-center' onChange={handleArtistChange}>
                        <option> Selecione o artista </option>
                        {gerarTop100Artistas().map((artist) => <option value={artist}>{artist}</option>)}
                    </select>
                </div>
                <div className='text-white text-2xl flex flex-col items-center text-center font-bold'> {percentagemPlaysArtista({ artist }.artist)} </div>


            </div>
            
        </div>
    );
}



export default UserMetrics;

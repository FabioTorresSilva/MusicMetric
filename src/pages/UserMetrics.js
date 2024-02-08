import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { miliMinutosTocados, musicasDiferentes, playsTotal, estacoesEPercentagens, mediaDiaria, horaMaisOuve, percentagemPlaysArtista, gerarTop100Artistas, calcularTempoPorEstacao, calcularPercentagens } from '../common/Funcoes';
import { Moon, Sun, Wave } from '../components/icons/Icons';

function num(e) {
    this.setState({ selected: e.target.value });
}

function UserMetrics() {

    const dados = [];
    const tempoPorEstacao = calcularTempoPorEstacao(dados);
    const estacoesEPercentagens = calcularPercentagens(tempoPorEstacao);

    // Using state to keep track of what the selected artist is
    let [artist, setArtist] = useState()


    // Using this function to update the state of artist
    // whenever a new option is selected from the dropdown
    let handleArtistChange = (e) => {
        setArtist(e.target.value)
    }

    let horaMaisOuvida = horaMaisOuve()
    let noite = true
    if (horaMaisOuvida.hora >= 6 && horaMaisOuvida.hora <= 18) {
        noite = false
    }

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
                    <div className='fh-full flex gap-4 justify-center items-center content-center'>
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
                <select className='flex flex-col py-2 content-center px-2 w-full justify-center items-center rounded-lg text-black' onChange={handleArtistChange}>
                    <option className='flex justify-center font-bold text-center'> Selecione o artista </option>
                    {/* Mapping through each artist object in our array
                    and returning an option element with the appropriate attributes / values.
                        */}

                    {gerarTop100Artistas().map((artist) => <option value={artist}>{artist}</option>)}
                </select>

                <div className='text-white text-2xl flex flex-col items-center text-center font-bold'> {percentagemPlaysArtista({ artist }.artist)} </div>


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

export default UserMetrics;
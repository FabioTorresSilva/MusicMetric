import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Moon, Sun, Wave } from '../components/icons/Icons';
import { mediaDiaria, horaMaisOuve, percentagemPlaysArtista, gerarTop100Artistas } from '../common/Funcoes';

function num(e) {
    this.setState({ selected: e.target.value });
}

function UserMetrics() {
    const navigate = useNavigate();
   
    
    
    // Using state to keep track of what the selected artist is
    let [artist, setArtist] = useState()


    // Using this function to update the state of artist
    // whenever a new option is selected from the dropdown
    let handleArtistChange = (e) => {
        setArtist(e.target.value)
    }

    let horaMaisOuvida = horaMaisOuve();
    let noite = horaMaisOuvida.hora >= 6 && horaMaisOuvida.hora <= 18 ? false : true;

    return (
        <div className='bg-fundo h-full px-3'>
            <div className='flex flex-col gap-4 mt-8 px-3'>
                <div className='text-center bg-amarelo w-full rounded-lg p-4 flex flex-col h-36 '>
                    <div className='flex'>
                        <div className='justify-center'><Wave /></div>
                        <div>
                            <div className='flex justify-center pl-8 font-semibold text-white text-2xl'>Média de tempo diário:</div>
                            <div className='mb-2 text-xl font-normal pl-8 text-white'>{mediaDiaria()}</div>
                        </div>
                    </div>
                </div>

                <div className='text-center bg-amarelo w-full rounded-lg p-4 flex flex-col h-36 '>
                    <div className='flex'>
                        <div className='justify-center pl-6 pt-6'>{noite ? <Moon /> : <Sun />}</div>
                        <div>
                            <div className='flex justify-center pl-8 pt-6 font-semibold text-white text-2xl'>Ouves mais música</div>
                            <div className='mb-2 text-xl font-normal pl-8 text-white'>{horaMaisOuvida.msg}</div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center text-xl mt-8 font-bold text-white'>Percentagem em Plays:</div>

                <div className="App flex justify-center ">

                    <select className='flex flex-col h-10 justify-center items-center text-center rounded-lg text-black mt-8' onChange={handleArtistChange}>
                        <option className='flex justify-center font-bold text-center'> Selecione o artista </option>

                        {/* Mapping through each artist object in our array
                    and returning an option element with the appropriate attributes / values.
                        */}

                        {gerarTop100Artistas().map((artist) => <option value={artist}>{artist}</option>)}
                    </select>
                </div>
                <div className='text-white text-2xl flex flex-col items-center text-center font-bold mt-8'> {percentagemPlaysArtista({ artist }.artist)} </div>


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

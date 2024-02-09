import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MinutesPlayedArtist, albumMaisOuvido, calcularTop20MusicasArtistaPorIntervalo, encontrarPosicaoArtistaNoTop100, estacaoMaisOuveArtista, filterArtistInfo, numeroPlaysArtista, percentagemPlaysArtista } from '../common/Funcoes';

function MetricasArtista({ selectedPeriod, setSelectPeriod }) {
    //const [imageUrl, setUrl] = useState("")
    let { artistName } = useParams();

    // useEffect(() => {

    //     async function fetchData() {
    //         const res = await fetch("/", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify({
    //                 auth: "BYTES4FUTURE #7",
    //                 name: artistName,
    //                 type: "artist"
    //             })
    //         })
    //         if (res.status === 200) {
    //             const body = await res.json()
    //             setUrl(body.imagePath)
    //         }
    //     }

    //     fetchData()


    // })


    return (
        <div>  
            {/* <div><img src={imageUrl} /></div> */}
            <div className='flex justify-between'>
                <div className='flex w-full'>
                    <h2 className='text-2xl flex justify-center font-bold text-white py-4 px-6 mt-4'>{artistName}</h2>
                </div>
                <div className='flex flex-col w-full justify-center py-3 px-4 '>
                    <div className='text-2xl font-bold flex items-center justify-center text-white'>{encontrarPosicaoArtistaNoTop100(artistName)}º</div>
                    <div className='flex  justify-center font-bold text-2xl text-white'> na lista</div>
                </div>
            </div>
            <div className='flex items-center w-full justify-center gap-6 mt-8'>
                <div className='bg-fundo border-amarelo border-2  w-full rounded-lg p-4 flex flex-col'>
                    <div className='text-lg text-letra'>Ouvido</div>
                    <div className='mb-2 text-xl font-bold text-white'>{numeroPlaysArtista(artistName)}</div>
                    <div className='text-lg text-letra'>vezes</div>
                </div>
                <div className='bg-amarelo   w-full rounded-lg p-4 flex flex-col'>
                    <div className='text-lg text-letra'>Ouvido</div>
                    <div className='mb-2 text-xl font-bold text-white'>{MinutesPlayedArtist(artistName)}</div>
                    <div className='text-lg text-letra'>minutos</div>
                </div>
            </div>
            <div>
                <div className='flex items-center w-full justify-center gap-3 mt-6'>
                    <div className='bg-azul w-full rounded-lg p-4 flex flex-col text-white'>
                        <div className='flex flex-row justify-around'>
                            <div className='text-lg'>Representa<p className='mb-2 text-xl font-bold'>{percentagemPlaysArtista(artistName)}</p> das suas plays</div>
                        </div>
                    </div>
                    <div className='bg-azul w-full rounded-lg p-4 flex flex-col justify-center text-white'>
                        <div className='flex flex-row justify-center'>
                            <div className='text-lg'>Mais Ouvido<p className='flex justify-center'>no</p><p className='mb-2 text-xl justify-center flex font-bold'>{estacaoMaisOuveArtista(artistName)}</p></div>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <div className='p-4 mt-4 flex font-bold justify-center text-2xl text-amarelo '>
                    Top Songs
                </div>
                {calcularTop20MusicasArtistaPorIntervalo(
                    artistName,
                    selectedPeriod
                ).map((e, index) => (
                    <div>
                        <div className="flex">
                            <div className="flex  bg-amarelo font-bold text-xl w-1/5 mb-4 rounded-l-lg p-4 text-black ">
                                #{index + 1}{" "}
                            </div>
                            <div className="flex justify-between  text-white bg-azul  w-4/5 mb-4 p-4  rounded-r-lg">
                                <p>{e.nome} </p>
                                <p className="">{Math.round(e.totalMsPlayed / 60000)} min</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className='h-20'></div>
            </div>
            <div className='h-10'>
            </div>
        </div>
    )
}

export default MetricasArtista;
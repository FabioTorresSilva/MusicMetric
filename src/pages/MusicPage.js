import React, { useEffect, useState } from 'react';
import { calcularTop100MusicasPorMilissegundosEIntervalo } from '../common/Funcoes';
import { AlbumDamn1 } from '../components/icons/Icons';
import { motion } from "framer-motion"

const MusicPage = ({ selectedPeriod, setSelectedPeriod }) => {

  // const [lista, setLista] = useState([])

  // useEffect(() => {

  //   // async function fetchAlbumImage(album) {

  //   //   const res = await fetch("/", {
  //   //     method: "POST",
  //   //     headers: {
  //   //       "Content-Type": "application/json"
  //   //     },
  //   //     body: JSON.stringify({
  //   //       auth: "BYTES4FUTURE #7",
  //   //       name: album,
  //   //       type: "album"
  //   //     })
  //   //   })

  //   //   if (res.status === 200) {
  //   //     const body = await res.json()

  //   //     return body.imagePath
  //   //   }
  //   // }

  //   async function fetchData() {
  //     const listaSemImagens = calcularTop100MusicasPorMilissegundosEIntervalo(selectedPeriod)
  //     // const listaComImagens = await Promise.all(
  //     //   listaSemImages.map(async el => ({ ...el, imagePath: await fetchAlbumImage(el.nome.split("")[2]) }))
  //     // )
  //     setLista(listaSemImagens)
  //   }

  //   fetchData()
  // })

  return (
    <div>
      <div className='flex flex-col gap-4'>
        <h1 className='flex font-semibold text-white text-2xl justify-center text-center'>Plays</h1>
        <div className='p-4 flex justify-center'>
          <AlbumDamn1  />
        </div>
      </div>
   
      {/* {(lista).map((e, index) => */}
      {calcularTop100MusicasPorMilissegundosEIntervalo(selectedPeriod).map((e, index) =>
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
          <div className='flex  justify-center'>
            <div className='flex  bg-amarelo font-bold text-xl w-1/5 mb-4 rounded-l-lg p-4 text-black '>#{index + 1} </div>
            <div className='flex justify-between text-white bg-azul  w-4/5 mb-4 p-4  rounded-r-lg'><p>{e.nome} </p>
              <p className='font-bold pl-3'>{Math.round(e.minutos)} mins</p>
            </div>
          </div>
          <div className='flex justify-center'>

         {/*  <img className="w-28 rounded-md flex justify-center" src={e.imagePath} /> */}
          </div>
          </motion.div>



      )}
      <div className='h-32 '></div>
    </div>
  )
}

export default MusicPage;
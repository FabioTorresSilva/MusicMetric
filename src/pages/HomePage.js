import { FotoUser } from '../components/icons/Icons';
import { AlbumDamn } from '../components/icons/Icons';
import { albumMaisOuvido, calcularStrikeAtual, calcularStrikeDeEscuta, miliMinutosTocadosMusica, miliMinutosTocadosPodcast, musicasDiferentes, playsTotal } from '../common/Funcoes';
import { calcularTempoPorEstacao, calcularPercentagens } from '../common/Funcoes';
import { ImageToggleOnMouseOver } from '../components/icons/userAvatar';
import img1 from "../components/icons/FotoUsuario.png"
import img2 from "../components/icons/FotoUsuario2.png"

function HomePage() {
    return (
        <div>
            <div className='flex justify-center mt-8'>
                <ImageToggleOnMouseOver primaryImg={img1} secondaryImg={img2} />
            </div>
            <div className='flex items-center w-full justify-center gap-6 mt-8'>
                <div className='bg-amarelo w-full rounded-lg p-4 flex flex-col'>
                    <div className='text-lg'>Ouviu</div>
                    <div className='mb-2 text-xl font-bold'>{musicasDiferentes()}</div>
                    <div className='text-lg'>Músicas diferentes</div>
                </div>
                <div className='bg-amarelo w-full rounded-lg p-4 flex flex-col'>
                    <div className='text-lg'>Passou</div>
                    <div className='mb-2 text-xl font-bold'>{miliMinutosTocadosMusica()}</div>
                    <div className='text-lg'>minutos a ouvir música.</div>
                </div>
            </div>
            <div>

                <div className='flex items-center w-full justify-center gap-3 mt-6'>
                    <div className='bg-azul w-full rounded-lg p-4 flex flex-col text-white'>

                        <div className='flex justify-center mb-2 text-xl font-bold'>Dias consecutivos</div>
                        <div className='flex flex-row justify-around'>
                            <div className='text-lg'>Streak Atual<p className='mb-2 text-xl font-bold'>{calcularStrikeAtual()}🔥</p></div>

                            <div className='text-lg'>O seu maior streak<p className='mb-2 text-xl font-bold'>{calcularStrikeDeEscuta()}🔥</p></div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center w-full justify-center gap-3 mt-6  '>
                    <div className='bg-amarelo w-full rounded-lg p-4 flex flex-col'>
                        <div className='flex justify-center mb-2 text-xl font-bold'>Albúm mais tocado!  </div>
                        <div className='flex flex-row justify-around'>
                            <div className='text-lg'><p className='mb-2 text-xl '>{albumMaisOuvido()}</p></div>
                            <div className='text-lg rounded-lg'><AlbumDamn /></div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center w-full justify-center gap-3 mt-6 mb-16 '>
                    <div className='flex gap-3 w-full'>
                        <div className='bg-azul w-full rounded-lg p-4 flex flex-col text-white'>
                            <div className='flex justify-center mb-2 text-xl font-bold'>Total de Plays </div>
                            <div className='flex flex-row justify-around'>
                                <div className='text-lg'><p className='mb-2 text-xl '>{playsTotal()}</p></div>
                            </div>
                        </div>
                        <div className='bg-azul w-full rounded-lg p-4 flex flex-col text-white'>
                            <div className='flex justify-center mb-2 text-xl font-bold'>Podcast</div>
                            <div className='flex flex-row justify-around'>
                                <div className='text-lg'><p className='mb-2 text-xl '>{miliMinutosTocadosPodcast()} min</p></div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default HomePage;
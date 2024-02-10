import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Definicoes, Search, Metricas, Before } from '../components/icons/Icons'
import { gerarTop100Artistas } from '../common/Funcoes'

export function IconBar({ selectedPeriod, setSelectedPeriod }) {
    const [search, setSearch] = useState({ isSearching: false, value: "" });
    const [sugestoes, setSugestoes] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const [topArtistas, setTopArtistas] = useState([])

    useEffect(() => {
        const artistas = gerarTop100Artistas()
        setTopArtistas(artistas);
    }, []);

    const goToUserMetrics = () => navigate('/usermetrics')
    const goToHomePage = () => navigate('/')

    const handleSelection = (item) => setSelectedPeriod(item);
    const handleSearchClick = () => setSearch(ps => ({ ...ps, isSearching: !ps.isSearching }))
    const handleInputChange = (value) => {
        setSearch(ps => ({ ...ps, value }));
        const sugestoesFiltradas = topArtistas
            .filter(artista => artista.toLowerCase().includes(value.toLowerCase()))
            .slice(0, 4);
        setSugestoes(sugestoesFiltradas);
    };

    const selecionarSugestao = (sugestao) => {
        setSearch({ isSearching: false, value: sugestao })
        setSugestoes([]);

        navigate(`/artista/${encodeURIComponent(sugestao)}`)
    };

    const isArtistPath = location.pathname.startsWith('/artista/');

    return (
        <div className="fixed bottom-0 inset-x-0 z-50 ">
            <div className="flex justify-center gap-8 text-white py-4 ">
                {(location.pathname === "/musicas" || location.pathname === "/artistas" || isArtistPath) && (
                    <div className="bg-fundo border-2 border-amarelo flex justify-around py-2 rounded-md w-full mx-6">
                        <div className={`cursor-pointer ${selectedPeriod === '4W' ? 'underline' : ''}`} onClick={() => handleSelection('4W')}>4W</div>
                        <div className={`cursor-pointer ${selectedPeriod === '6M' ? 'underline' : ''}`} onClick={() => handleSelection('6M')}>6M</div>
                        <div className={`cursor-pointer ${selectedPeriod === '1Y' ? 'underline' : ''}`} onClick={() => handleSelection('1Y')}>1Y</div>
                        <div className={`cursor-pointer ${selectedPeriod === 'Always' ? 'underline' : ''}`} onClick={() => handleSelection('Always')}>Always</div>
                    </div>
                )}
            </div>
            <div className="flex justify-between items-center text-white py-3 px-4 bg-fundo">
                {!search.isSearching && (
                    <>
                        <div className='cursor-pointer' onClick={goToHomePage}>
                            <Before className="icon" />
                        </div>
                        <div className='cursor-pointer' onClick={goToUserMetrics}>
                            <Metricas className="icon" />
                        </div>
                    </>
                )}
                <div className='relative flex items-center mt-3' style={{ flexGrow: search.isSearching ? 1 : 0 }}>
                    {search.isSearching && (
                        <>
                            <input className=" w-full p-2 text-amarelo font-bold bg-azul  rounded-xl focus:outline-none focus:ring-2  focus:border-transparent" value={search.value} onChange={(e) => handleInputChange(e.target.value)} />
                            <ul className="absolute bottom-full w-full bg-azul text-letra font-bold shadow-md mt-1 rounded-md z-10">
                                {sugestoes.map((sugestao, index) => (
                                    <li key={index} className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => selecionarSugestao(sugestao)}>
                                        {sugestao}
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                    <Search className="ml-2 text-white" onClick={handleSearchClick} />
                </div>
                {!search.isSearching && (
                    <div className='cursor-pointer'>
                        <Definicoes className="icon" />
                    </div>
                )}
            </div>
        </div>
    )
}
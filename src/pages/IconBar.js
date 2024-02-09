import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Definicoes, Search, Metricas, Before } from '../components/icons/Icons';

export function IconBar({ selectedPeriod, setSelectedPeriod }) {
    const [search, setSearch] = useState({ isSearching: false, value: ""});
    const navigate = useNavigate();
    const location = useLocation();

    const goToUserMetrics = () => {
        navigate('/usermetrics');
    };
    const goToHomePage = () => {
        navigate('/');
    };

    const handleSelection = (item) => {
        setSelectedPeriod(item);
    };
    const handleSearchClick = () => {
        setSearch(ps => ({ ...ps, isSearching: !ps.isSearching }));
    };
    const handleInputChange = (value) => {
        setSearch(ps => ({ ...ps, value: value }));
    };

    // Verifica se o caminho atual começa com '/artist/' seguido de qualquer coisa
    const isArtistPath = location.pathname.startsWith('/artista/');

    return (
        <div className="fixed bottom-0 inset-x-0 z-50">
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
            <div className="icon-bar flex justify-around pt-3 bg-fundo">
                {!search.isSearching && (
                    <>
                        <div className='cursor-pointer' onClick={goToHomePage}>
                            <Before className="text-white" />
                        </div>
                        <div className='cursor-pointer' onClick={goToUserMetrics}>
                            <Metricas className="text-white" />
                        </div>
                    </>
                )}
                <div className='cursor-pointer flex rounded-[32px] overflow-hidden' style={{ transition: "width 200ms linear", width: search.isSearching ? "100%" : "68px", backgroundColor: search.isSearching ? "#321583" : "transparent" }}>
                    {search.isSearching && (
                        <input className='flex-[3]' value={search.value} onChange={(e) => handleInputChange(e.target.value)} />
                    )}
                    <Search className="text-white flex-[1]" onClick={handleSearchClick} />
                </div>
                {!search.isSearching && (
                    <div className='cursor-pointer'>
                        <Definicoes className="text-white" />
                    </div>
                )}
            </div>
        </div>
    );
}

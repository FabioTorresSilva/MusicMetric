import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Definicoes, Search, Metricas, Before } from '../components/icons/Icons';


export function IconBar({ selectedPeriod, setSelectedPeriod }) {
    const navigate = useNavigate();

    const location = useLocation();

    const goToUserMetrics = () => {
        navigate('/usermetrics');
    };
    const goToHomePage = () => {
        navigate ('/');
    };

    const handleSelection = (item) => {
        setSelectedPeriod(item); 
    };

    return (
        <div className="fixed bottom-0 inset-x-0 z-50">
        <div className="flex justify-center gap-8 text-white py-4 ">
            {(location.pathname === "/musicas" || location.pathname === "/artistas") && (
                <div className=" bg-fundo border-2 border-amarelo flex justify-around py-2 rounded-md w-full mx-6">
                    {/* Adicione uma classe condicional baseada no estado selecionado */}
                    <div className={`cursor-pointer ${selectedPeriod === '4W' ? 'underline' : ''}`} onClick={() => handleSelection('4W')}>4W</div>
                    <div className={`cursor-pointer ${selectedPeriod === '6M' ? 'underline' : ''}`} onClick={() => handleSelection('6M')}>6M</div>
                    <div className={`cursor-pointer ${selectedPeriod === '1Y' ? 'underline' : ''}`} onClick={() => handleSelection('1Y')}>1Y</div>
                    <div className={`cursor-pointer ${selectedPeriod === 'Always' ? 'underline' : ''}`} onClick={() => handleSelection('Always')}>Always</div>
                </div>
            )}
        </div>
            <div className="icon-bar flex justify-around pt-3 bg-fundo">
                <div className='cursor-pointer' onClick={goToHomePage}>
                    <Before className="text-white" />
                </div>
                <div className='cursor-pointer' onClick={goToUserMetrics}>
                    <Metricas className="text-white" />
                </div>
                <div className='cursor-pointer' >
                    <Search className="text-white" />
                </div>
                <div className='cursor-pointer' >
                    <Definicoes className="text-white" />
                </div>
            </div>
        </div>
    );
}

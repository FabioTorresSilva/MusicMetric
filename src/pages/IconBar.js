import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Definicoes, Search, Metricas, Before } from '../components/icons/Icons';

export function IconBar() {
    const navigate = useNavigate();
    const cenas = useLocation();
    const location = useLocation();
    const goToUserMetrics = () => {
        navigate('/usermetrics');
    };

    return (
        <div className="fixed bottom-0 inset-x-0 z-50">
            <div className='flex justify-center gap-8 text-white'>
                {(location.pathname === "/musicas" || location.pathname === "/artistas") && (
                    <div className='cursor-pointer'>
                        <Definicoes className="text-white" />
                    </div>
                )}
            </div>
            <div className="icon-bar flex justify-around pt-3 bg-fundo">
                <div className='cursor-pointer'>
                    <Before className="text-white" />
                </div>
                <div className='cursor-pointer' onClick={goToUserMetrics}>
                    <Metricas className="text-white" />
                </div>
                <div className='cursor-pointer'>
                    <Search className="text-white" />
                </div>
                <div className='cursor-pointer'>
                    <Definicoes className="text-white" />
                </div>
            </div>
        </div>
    );
}

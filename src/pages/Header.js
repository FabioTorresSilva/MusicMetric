import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Disco, AppIcon, UserIcon } from '../components/icons/Icons';

export function Header({ activeTab, setActiveTab }) {
    const navigate = useNavigate();
    const location = useLocation();


    const tabClass = (tabName) =>
        `font-bold ${activeTab === tabName ? 'border-b-2 border-amarelo' : ''}`;

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
        const path = tabName === 'all' ? '/' : `/${tabName}`;
        navigate(path);
    };

    return (
        <div className='sticky top-0 z-50'>
            <div className="header bg-fundo px-6 py-3">
                <div className="flex justify-between items-center h-20 px-6 border-b-2 border-white">
                    <Disco className="text-white" />
                    <div className='cursor-pointer' onClick={() => handleTabChange('all')}>
                        <AppIcon className="text-white" />
                    </div>
                    <UserIcon className="text-white" />
                </div>
                <div>
                    <h1 className='flex justify-center mt-4 font-semibold text-white text-2xl'>Métricas</h1>
                    <div className='flex justify-center gap-24 text-white'>
                        <button className={tabClass('all')} onClick={() => handleTabChange('all')}>All</button>
                        {location.pathname !== "/usermetrics" && (
                            <div className='flex justify-between gap-24 text-white'>
                                <button className={tabClass('musicas')} onClick={() => handleTabChange('musicas')}>Músicas</button>
                                <button className={tabClass('artistas')} onClick={() => handleTabChange('artistas')}>Artistas</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Disco, AppIcon, UserIcon } from '../components/icons/Icons';

export function Header() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('all');

    const tabClass = (tabName) =>
        `font-bold ${activeTab === tabName ? 'border-b-2 border-azul' : ''}`;

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
                    <AppIcon className="text-white" />
                    <UserIcon className="text-white" />
                </div>
                <div>
                    <h1 className='flex justify-center mt-4 font-semibold text-white text-2xl'>Métricas</h1>
                    <div className='flex justify-between  text-white'>
                        <button className={tabClass('all')} onClick={() => handleTabChange('all')}>All</button>
                        <button className={tabClass('musicas')} onClick={() => handleTabChange('musicas')}>Músicas</button>
                        <button className={tabClass('artistas')} onClick={() => handleTabChange('artistas')}>Artistas</button>
                        {/* <button className={tabClass('generos')} onClick={() => handleTabChange('generos')}>Géneros</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

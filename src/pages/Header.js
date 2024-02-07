import React from 'react';
import { Disco, AppIcon, UserIcon } from '../components/icons/Icons'; 

export function Header() {
    return (
        <div className='sticky top-0 z-50'>
        <div className="header bg-fundo sticky top-0 z-50 px-6 py-3">
            <div className="flex justify-between items-center h-20 px-6 border-b-2 border-white">
                <Disco className="text-white" />
                <AppIcon className="text-white" />
                <UserIcon className="text-white" />
            </div>
            <div>
                <h1 className='flex justify-center mt-4 font-semibold text-white text-2xl'>Métricas</h1>
                <div className='flex justify-between px-6 text-white'>
                    <button className='font-bold'>All</button>
                    <button className='font-bold'>Músicas</button>
                    <button className='font-bold'>Artistas</button>
                    <button className='font-bold'>Géneros</button>
                </div>
            </div>
        </div>
        </div>
    );
}


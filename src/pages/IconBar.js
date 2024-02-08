import React from 'react';
import { Definicoes, Search, Metricas, Before } from '../components/icons/Icons'; 

export function IconBar() {
    return (
        <div className="fixed bottom-0 inset-x-0 z-50">

        <div className="icon-bar flex justify-around pt-3 bg-fundo">
            <Before className="text-white" />
            <Definicoes className="text-white" />
            <Search className="text-white" />
            <Metricas className="text-white" />
            
        </div>
        </div>
    );
}
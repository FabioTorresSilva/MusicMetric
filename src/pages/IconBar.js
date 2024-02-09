import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Definicoes, Search, Metricas, Before } from '../components/icons/Icons';
import { FaSear } from 'react-icons/fa';

export function IconBar({ onTimeframeSelect }) {
    const navigate = useNavigate();
    const [selected, setSelected] = useState('');
    const location = useLocation();
    const [isSearchExpanded, setSearchExpanded] = useState(false);

    const goToUserMetrics = () => {
        navigate('/usermetrics');
    };
    const goToHomePage = () => {
        navigate('/');
    };

    const handleSelection = (item) => {
        setSelected(item);
        let timeframeValue;
        switch (item) {
            case '4W':
                timeframeValue = 'ultimas4Semanas';
                break;
            case '6M':
                timeframeValue = 'ultimos6Meses';
                break;
            case '1Y':
                timeframeValue = 'ultimoAno';
                break;
            case 'Always':
                timeframeValue = 'desdeSempre';
                break;
            default:
                timeframeValue = 'desdeSempre';
        }
        onTimeframeSelect(timeframeValue);
    };

    const toggleSearchExpand = () => {
        setSearchExpanded(!isSearchExpanded);
    };

    // Use classes do Tailwind para definir o tamanho do ícone condicionalmente
    const searchIconSizeClass = isSearchExpanded ? 'h-12 w-12' : 'h-6 w-6'; // Exemplo de tamanhos, ajuste conforme necessário
    const iconTransitionClass = 'transition-all duration-300 ease-in-out transform';

    return (
        <div className="fixed bottom-0 inset-x-0 z-50">
            <div className="flex justify-center gap-8 text-white py-4 ">
            {(location.pathname === "/musicas" || location.pathname === "/artistas") && (
                <div className=" bg-fundo border-2 border-amarelo flex justify-around py-2 rounded-md w-full mx-6">
                    {/* Adicione uma classe condicional baseada no estado selecionado */}
                    <div className={`cursor-pointer ${selected === '4W' ? 'underline' : ''}`} onClick={() => handleSelection('4W')}>4W</div>
                    <div className={`cursor-pointer ${selected === '6M' ? 'underline' : ''}`} onClick={() => handleSelection('6M')}>6M</div>
                    <div className={`cursor-pointer ${selected === '1Y' ? 'underline' : ''}`} onClick={() => handleSelection('1Y')}>1Y</div>
                    <div className={`cursor-pointer ${selected === 'Always' ? 'underline' : ''}`} onClick={() => handleSelection('Always')}>Always</div>
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
                {/* Ícone de pesquisa modificável com clique */}
                <div className='cursor-pointer' onClick={toggleSearchExpand}>
                    {/* Presumindo que Search é um componente React que aceita className como prop */}
                    <Search className={`${searchIconSizeClass} ${iconTransitionClass} text-white`} />
                </div>
                <div className='cursor-pointer'>
                    <Definicoes className="text-white" />
                </div>
            </div>
        </div>
    );
}
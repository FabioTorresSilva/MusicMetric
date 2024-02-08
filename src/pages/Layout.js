import React,{ useState } from 'react';
import { Header } from './Header.js';
import { IconBar } from './IconBar.js';

const Layout = ({ children }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('Always');
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="flex flex-col min-h-screen">
      <Header activeTab={activeTab} setActiveTab={setActiveTab}/>
      <main className="flex-grow">
        {React.cloneElement(children, { selectedPeriod, setSelectedPeriod })}
      </main>
      <IconBar selectedPeriod={selectedPeriod} setSelectedPeriod={setSelectedPeriod} />
    </div>
  );
};

export default Layout;
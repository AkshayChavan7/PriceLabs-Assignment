import React from 'react';
import FilterInputs from './filter-inputs/FilterInputs';
import './SidePanel.css';
import TabsContainer from './tabs-container/TabsContainer';

const SidePanel = (props) => {
    return <div className="sidepanel-container">
        <div className="filter-inputs"><FilterInputs /></div>
        <TabsContainer />
    </div>;
};

export default SidePanel;


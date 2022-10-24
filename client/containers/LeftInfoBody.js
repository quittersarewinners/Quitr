import React from 'react';
import QuitInfo from '../components/QuitInfo';
import UpcomingInfo from '../components/UpcomingInfo';
import HealthBenefits from '../components/HealthBenefits';

function LeftInfoBody() {
    return (
        <div className="leftInfoBody">
            <h1>Left side</h1>
            <QuitInfo />
            <UpcomingInfo />
            <HealthBenefits />
        </div>
    );
}

export default LeftInfoBody;
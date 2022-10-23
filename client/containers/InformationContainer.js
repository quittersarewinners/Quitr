import React from 'react';
import InformationHeader from '../components/InformationHeader'
import LeftInfoBody from './LeftInfoBody';
import RightInfoBody from '../components/RightInfoBody';

//information header will require the use of pulling from db - username and habit quit time
const InformationContainer = (props) => {
    return (
        <>
            <InformationHeader />
            <div className="infoBody">
                <LeftInfoBody /> <RightInfoBody />
            </div>
        </>
    )
}


export default InformationContainer;
import React from 'react'

function QuitInfo() {

    // async function quitLength(){
    //     //get request to the user object, or can be passed down as props from the initial request from info body

    //     let quitHeader;
    //     //quitLength < 2 ? 
    //         //quitHeader = 'Congratulations on starting your journey with us!' : 
    //         //quitHeader = 'Keep up the good work! You\'ve quit for a total of -userObjects quitLength-
    //     return quitHeader
    // }

    return (
        <div className="quitInfo">
            <p>{/* to replace current p text - {quitLength} */}Congratulations! You have quit for: -quitlength- </p>
        </div>
    );
}

export default QuitInfo;
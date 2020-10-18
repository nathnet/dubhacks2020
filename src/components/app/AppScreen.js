import React, { useState } from 'react';
import ContentCard from './ContentCard';
import PageButton from './PageButton';

function AppScreen() {

    const [loc, setLoc] = useState(0);

    const picArr = ["./assets/intro.gif",
                        "./assets/hungry.gif",
                        "./assets/apple.gif",
                        "./assets/orange.gif",
                        "./assets/banana.gif",
                        "./assets/final.gif"];

    function changePicture(goForward) {
        console.log(goForward);
        if (goForward) {
            setLoc(loc + 1);
        } else {
            setLoc(loc - 1);
        }
    }
    
    return(
        <div className="d-flex">
            {loc === 0 ? 
            <button className="bg-transparent float-left" disabled>
                <PageButton isForward={false} disabled={true} />
            </button> : 
            <button className="bg-transparent float-left" onClick={() => changePicture(false)}>
                <PageButton isForward={false} />
            </button>}
            <ContentCard img={picArr[loc]} />
            {loc === picArr.length - 1 ?
            <button className="bg-transparent float-right" disabled>
                <PageButton isForward={true} disabled={true} />
            </button> :
            <button className="bg-transparent float-right" onClick={() => changePicture(true)}>
                <PageButton isForward={true} />
            </button>}
        </div>
    );
}

export default AppScreen;
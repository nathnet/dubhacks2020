import React, { useState } from 'react';
import ContentCard from './ContentCard';
import PageButton from './PageButton';
import introPic from '../../assets/intro.gif';
import hungryPic from '../../assets/hungry.gif';
import applePic from '../../assets/apple.gif';
import orangePic from '../../assets/orange.gif';
import bananaPic from '../../assets/banana.gif';
import finalPic from '../../assets/final.gif';

function AppScreen() {

    const [loc, setLoc] = useState(0);

    const picArr = [introPic,
                        hungryPic,
                        applePic,
                        orangePic,
                        bananaPic,
                        finalPic];

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
            <button className="bg-transparent float-left bg-color-2" disabled>
                <PageButton isForward={false} disabled={true} />
            </button> : 
            <button className="bg-transparent float-left bg-color-2" onClick={() => changePicture(false)}>
                <PageButton isForward={false} />
            </button>}
            <ContentCard img={picArr[loc]} />
            {loc === picArr.length - 1 ?
            <button className="bg-transparent float-right bg-color-2" disabled>
                <PageButton isForward={true} disabled={true} />
            </button> :
            <button className="bg-transparent float-right bg-color-2" onClick={() => changePicture(true)}>
                <PageButton isForward={true} />
            </button>}
        </div>
    );
}

export default AppScreen;
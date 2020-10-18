import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';

function PageButton(props) {

    const {
        isForward,
        disabled
    } = props;
    
    return(
        <div className="d-inline-block rounded-circle">
            {isForward ? 
                <SvgIcon 
                    component={ArrowForwardIos} 
                    className={disabled ? `opacity-25` : ``} /> : 
                <SvgIcon 
                    component={ArrowBackIos} 
                    className={disabled ? `opacity-25` : ``} />}
        </div>
    );
}

export default PageButton;
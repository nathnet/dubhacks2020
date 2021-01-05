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
                    className={disabled ? `opacity-25` : ``}
                    color='primary' /> : 
                <SvgIcon 
                    component={ArrowBackIos} 
                    className={disabled ? `opacity-25` : ``}
                    color='primary' />}
        </div>
    );
}

export default PageButton;
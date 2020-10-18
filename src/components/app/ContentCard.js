import React from 'react';
import { Card } from 'react-bootstrap';
import intro from '../../assets/Hungry_final.gif';

function ContentCard() {
    
    return(
        <div className="col-9 mx-auto">
            <Card className="bg-color border-0 embed-responsive embed-responsive-16by9">
                <Card.Img 
                    src={intro}
                    className="d-block embed-responsive-item object-position-bottom"/>
            </Card>
        </div>
    );
}

export default ContentCard;
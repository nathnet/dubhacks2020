import React from 'react';
import { Card } from 'react-bootstrap';

function ContentCard(props) {

    const {
        img
    } = props;
    
    return(
        <div className="col-9 mx-auto">
            <Card className="bg-color border-0 embed-responsive embed-responsive-16by9">
                <Card.Img 
                    src={img}
                    className="d-block embed-responsive-item object-position-bottom"/>
            </Card>
        </div>
    );
}

export default ContentCard;
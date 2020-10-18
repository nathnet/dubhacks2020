import React from 'react';
import { Card } from 'react-bootstrap';

function ProfileCard(props) {

    const {
        img,
        title,
        description
    } = props;
    
    return(
        <div className="col-4 px-4 py-4">
            <Card>
                {img ?
                <div className="embed-responsive embed-responsive-4by5">
                    <Card.Img 
                        className="embed-responsive-item hide-overflow-pic"
                        src={img} />
                </div> :
                ""}
                <Card.Body>
                    {title ?
                    <Card.Title>
                        {title}
                    </Card.Title> :
                    ""}
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProfileCard;
import React from 'react';
import ProfileCard from './ProfileCard';
import AP from '../../assets/AP.jpg'
import ML from '../../assets/ML.jpg'
import NN from '../../assets/NN.jpg'
import XC from '../../assets/XC.jpg'
import YW from '../../assets/YW.jpg'

function AboutUsScreen() {

    
    return(
        <div className="col-9 mx-auto py-5 px-2">
            <p className="display-4">
                About Us:
            </p>
            <div className="d-flex flex-wrap">
                <ProfileCard
                    img={AP}
                    title="Akshat Pandey"
                    description="My role in this project was Software Engineer and my favorite book is 'A Brief History of Time' by Stephen Hawking." />
                <ProfileCard
                    title="Introduction and Upcoming Features"
                    description="Given the current situation, students have been forced to pursue their education from home. This, specifically, impacts young children with dyslexia a lot due to the lack of adequate material to interact with that is suited to their needs. Hence, we created Lexi, a platform that caters to their needs and provides a fun, visual way to learn. While we were not able to add all the features that we hoped for, we plan on adding text-to-speech functionality, more stories, an interactive puzzle to reinforce learning of key words, a chatbot for the curious ones, as well as constantly updating the UI to better suit our target audience."/>
                <ProfileCard
                    img={ML}
                    title="Maddy Laoprasert"
                    description="My role in this project was Researcher and my favorite book is 'The Giving Tree' by Shel Silverstein." />
                <ProfileCard
                    img={NN}
                    title="Nathachanok Netmaneesuk"
                    description="My role in this project was Software Engineer and my favorite book is 'Animal Farm' by George Orwell." />
                <ProfileCard
                    img={XC}
                    title="Xi Chen"
                    description="My role in this project was Animator and my favorite book is 'The Glass Castle' by Jeannette Walls." />
                <ProfileCard
                    img={YW}
                    title="Yanchen Wu"
                    description="My role in this project was Analyst and my favorite book is 'The Song of Ice and Fire' by George.R.R.Martin" />
            </div>
        </div>
    );
}

export default AboutUsScreen;
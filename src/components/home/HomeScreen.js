import React from 'react';
import { Link } from 'react-router-dom';

function HomeScreen() {

    return(
        <div className="col-9 mx-auto py-5 px-2">
            <p className="display-4">
                Available Stories:
            </p>
            <div className="px-5 py-4 mx-auto">
                <Link to="/app">
                    <div id="one" className="py-3 text-black">
                        <img src={require("../../assets/lexi_eat.png")} 
                            className="mx-4"
                            width="125px"
                            height="125px"
                            alt="story one" />
                        <p className="d-inline-block h1 mx-5 my-0">
                            Lexi is Hungry
                        </p>
                    </div>
                </Link>
                <Link to="/app">
                    <div id="two" className="py-3 text-black">
                        <img src={require("../../assets/lexi_with_family.png")} 
                            className="mx-4"
                            width="125px"
                            height="125px"
                            alt="story two" />
                        <p className="d-inline-block h1 mx-5 my-0">
                            Lexi's Family
                        </p>
                    </div>
                </Link>
                <Link to="/app">
                    <div id="three" className="py-3 text-black">
                        <img src={require("../../assets/lexi_and_ball.png")} 
                            className="mx-4"
                            width="125px"
                            height="125px"
                            alt="story three" />
                        <p className="d-inline-block h1 mx-5 my-0">
                            Lexi Wants to Play
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default HomeScreen;
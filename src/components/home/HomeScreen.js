import React from 'react';

function HomeScreen() {
    
    return(
        <div className="col-9 mx-auto py-5 px-2">
            <p className="display-4">
                Available Stories:
            </p>
            <div className="px-5 py-4 mx-auto">
                <div className="py-3">
                    <img src={require("../../assets/lexi_eat.png")} 
                        className="mx-4"
                        width="125px"
                        height="125px" />
                    <p className="d-inline-block h1 mx-5 my-0">
                        Lexi is Hungry
                    </p>
                </div>
                <div className="py-3">
                    <img src={require("../../assets/lexi_with_family.png")} 
                        className="mx-4"
                        width="125px"
                        height="125px" />
                    <p className="d-inline-block h1 mx-5 my-0">
                        Lexi's Family
                    </p>
                </div>
                <div className="py-3">
                    <img src={require("../../assets/lexi_and_ball.png")} 
                        className="mx-4"
                        width="125px"
                        height="125px" />
                    <p className="d-inline-block h1 mx-5 my-0">
                        Lexi Wants to Play
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;
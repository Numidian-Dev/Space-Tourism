import { useState, useEffect } from 'react';
import data from '../../pages/api/data.json'
import Image from "../../styles/assets/destination/image-mars.png"

const DestinationTab = () => {
    const [toggleState, setToggleState] = useState('Moon')
    const toggleTab = (index) => {
        setToggleState(index)
    }



    return (
        <div className="container-destination">

            <div className="container-content">
                <div className='container-tab'>
                    {data.destinations.map(desti => {
                        return (
                            <div key={desti.name} onClick={() => toggleTab(desti.name)} className={toggleState === desti.name ? "tab active-tab" : 'tab'}>{desti.name}</div>
                        )
                    })}
                </div>
                {data.destinations.map(desti => {
                    return (

                        <div key={desti.name} className={toggleState === desti.name ? "content active-content" : "content"}>
                            {/* <div className="planet" >

                                <img src={desti.images.png} alt="" />
                            </div> */}
                            <div className="container-description">
                                <h1>{desti.name}</h1>
                                <p className='p-decrib '>{desti.description}</p>
                                <div className='hr' />
                                <div className="container-distance">
                                    <div className="distance">
                                        <h3>Avg. Distance</h3>
                                        <p className='distance-p'>{desti.distance}</p>
                                    </div>
                                    <div className="distance">
                                        <h3>Est. Travel Time</h3>
                                        <p className='distance-p'>{desti.travel}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="container-img">
                {data.destinations.map(desti => {
                    return (

                        <div key={desti.name} className={toggleState === desti.name ? "content active-content" : "content"}>
                            <div className="planet" >

                                <img src={desti.images.png} alt="" />
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default DestinationTab;

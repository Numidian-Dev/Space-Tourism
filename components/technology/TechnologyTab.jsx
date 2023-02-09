import { useState } from 'react';
import data from "../../pages/api/data.json"


const TechnologyTab = () => {
    const [toggleState, setToggleState] = useState('Launch vehicle')
    const toggleTab = (index) => {
        setToggleState(index)
    }

    const techs = data.technology

    return (
        <div className='container-tech'>
            <div className="tabs-techs">

                <div onClick={() => toggleTab("Launch vehicle")} className={toggleState === "Launch vehicle" ? "tab-tech active-tab-tech" : 'tab-tech'}>1</div>
                <div onClick={() => toggleTab("Spaceport")} className={toggleState === "Spaceport" ? "tab-tech active-tab-tech" : 'tab-tech'}>2</div>
                <div onClick={() => toggleTab("Space capsule")} className={toggleState === "Space capsule" ? "tab-tech active-tab-tech" : 'tab-tech'}>3</div>


            </div>

            <div className="container-contents-tech">
                {techs.map(tech => {
                    return (
                        <div key={tech.name} className={toggleState === tech.name ? "tech-describ tech-content-active" : "tech-describ"}>
                            <div className="describ-img"><img src={tech.images.portrait} alt="" /></div>
                            <div className="describ">
                                <h2>The Technology</h2>
                                <h1>{tech.name}</h1>
                                <p>{tech.description}</p>
                            </div>

                        </div>
                    )
                })}

            </div>

        </div>
    );
}

export default TechnologyTab;

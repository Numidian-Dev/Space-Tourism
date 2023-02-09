import { useState } from 'react';
import data from "../../pages/api/data.json"

const TabCrew = () => {
    const [toggleState, setToggleState] = useState("Douglas Hurley")
    const toggleTab = (index) => {
        setToggleState(index)
    }
    const crews = data.crew
    return (
        <div className="container-crews">
            <div className='container-describ-crews'>
                <div className="tabs-contents">
                    {crews.map(crew => {
                        return (
                            <div key={crew.name} className={toggleState === crew.name ? "tab-content active-tab-content" : 'tab-content'}>
                                <div className="container-descri">
                                    <h2>{crew.role}</h2>
                                    <h1>{crew.name}</h1>
                                    <p className='bio'>{crew.bio}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="container-tabs">
                    {crews.map(crew => {
                        return (
                            <div key={crew.name} onClick={() => toggleTab(crew.name)} className={toggleState === crew.name ? "tabs tabs-active" : "tabs"} />
                        )
                    })}
                </div>
            </div >
            <div className="container-crews-img">
                <div className="tabs-contents">
                    {crews.map(crew => {
                        return (
                            <div key={crew.name} className={toggleState === crew.name ? "tab-content active-tab-content" : 'tab-content'}>
                                <div className="img-crew"><img src={crew.images.png} alt={crew.name} /></div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default TabCrew;

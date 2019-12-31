import React, { Component } from 'react';

class GenrePage extends Component {

    render() {
        var genreObj = {
            "FICTION": "../../Assets/Fiction.svg", "DRAMA": "../../Assets/Drama.svg",
            "HUMOUR": "../../Assets/Humour.svg", "POLITICS": "../../Assets/Politics.svg", "PHILOSOPHY": "../../Assets/Philosophy.svg", "HISTORY": "../../Assets/History.svg", "ADVENTURE": "../../Assets/Adventure.svg"
        };

        return (
            <div >
                <div className="container">

                    <div className="col-md-5">
                        {Object.entries(genreObj).map(([key, value]) =>
                            <div className="card" className="customCard">
                                <span style={{ display: 'flex', padding: '8px' }}>
                                    <img src={value} className="imgSrc"></img>&nbsp;&nbsp;&nbsp;
                                    <div className="card-body" style={{ fontSize: '20px', padding: '0px' }}>
                                        {key}
                                    </div>

                                    <a href={key.toLowerCase()} style={{ color: "white" }}>
                                        <img src={'../../Assets/Next.svg'} className="imgSrc"></img>
                                    </a>
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        )
    }
}

export default GenrePage;
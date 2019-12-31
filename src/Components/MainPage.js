import React from 'react';
import GenrePage from './GenrePage';

const MainPage = () => {
    var Background = "../../Assets/Pattern.svg";
    return (
        <div>
            <div style={{ backgroundImage: `url(${Background}`, height: " 200px" }} >
                <div className="container">
                    <div className="row">
                        <div style={{ paddingTop: '5%' }}>
                            <h1><b>Gutenberg Project</b></h1>
                            A social cataloging website that allows you to freely search its database of books, annotations,
                            and reviews.
                    </div>
                    </div>
                </div>
            </div>
            <GenrePage />
        </div>
    )

}

export default MainPage;
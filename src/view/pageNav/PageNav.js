import React from 'react'
import {
    HashRouter as Router,
    Link
} from "react-router-dom";


const PageNav = function () {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/pageNav">pageNav</Link>
                        </li>
                        <li>
                            <Link to="/codeGame">codeGame</Link>
                        </li>
                        <li>
                            <Link to="/demoIndex">demoIndex</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Router>
    );
}

export default PageNav



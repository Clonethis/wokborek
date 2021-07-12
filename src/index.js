import { link } from 'fs';
import React from 'react';
import ReactDom from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import Gallery from './gallery';
import 'semantic-ui-css/semantic.min.css'
import Body from './player';

//our page


class App extends React.Component {

    render(props) {
        return (
            <div>
                <Gallery/>
                <Body />
            </div>
        )
    };
};


ReactDom.render(<App />, document.getElementById('root'));
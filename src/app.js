import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';

import Header from './header';
class App extends Component{
    render (){
        return (
            <div>
                <h1>hello I am awesome</h1>
                <Header />
            </div>
        );
    } 
}

ReactDOM.render(<App/>, document.getElementById("root"));
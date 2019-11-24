import React from 'react';
import ReactDom from 'react-dom';
import SeasonDispaly from './seasonDisplay';
import Spinner from './spinner';;


class App extends React.Component {

    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessge: err.message })
        );
    }

    returnRender() {
        if(this.state.errorMessage && !this.state.lat){
            return (
                <div>
                    Error: {this.state.errorMessage}
                </div>
            );
       }
       if(!this.state.errorMessage && this.state.lat){
            return (
                <SeasonDispaly lat={this.state.lat}/>
            );
        }
        return <Spinner message='Please accept location request' />;
    }

    render() {
        return <div className="border red">{this.returnRender()}</div>
    }
}

ReactDom.render(<App />, document.querySelector('#root'));
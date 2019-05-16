import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component   {
    constructor(props)   {
        super(props);
        //this is the only time we do direct assigment
        // to this.state
        this.state= { lat:null, errorMessage:''};
    //React says we have to define render!
        window.navigator.geolocation.getCurrentPosition(
            position=>  {
                //we call setstate
                this.setState({lat: position.coords.latitude});
            },
            err=>   {
                this.setState({errorMessage:err.message});
            }
        );
     }

     componentDidMount()    {
         console.log('My component was rendered to the screen');

     }
     componentDidUpdate()   {
         console.log('My component was just updated -it rerendered!');

     }
        //React says we have to define render!
        render()    {
        if (this.state.errorMessage && !this.state.lat)     {
            return <div>Error:  {this.state.errorMessage}</div>;
        }
        if(!this.state.errorMessage && this.state.lat)  {
            return <div>Latitude:</div>
        }
        return <div>Loading!</div>;
            
    }
 }
ReactDOM.render(<App/>, document.querySelector('#root'));
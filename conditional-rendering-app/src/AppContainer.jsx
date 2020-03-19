import React, { Component } from 'react'
import Login from './Login'
import SignUp from './SignUp'

export default class AppContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggingIn:false,
            isSigningIn:false,
             
        }
    }
    updateLogingIn= () =>{
        console.log("Button Clicked");
        this.setState({isLoggingIn:true})
        this.setState({isSigningIn:false})
        console.log(this.state.isLoggingIn)


    }
    updateSignIn = ()=>{
        this.setState({isSigningIn:true})
        this.setState({isLoggingIn:false})
    }
    render() {
        let userform;
        if(this.state.isLoggingIn){
            userform = <Login/>
        }
        else if(this.state.isSigningIn){
            userform = <SignUp/>
        }
        return (
            <div>
                <button onClick = {this.updateLogingIn}>Login!</button>
                <button onClick = {this.updateSignIn}>Sign Up</button>
                {/* <Login/>
                <SignUp/> */}
                {userform}
            </div>
        )
    }
}

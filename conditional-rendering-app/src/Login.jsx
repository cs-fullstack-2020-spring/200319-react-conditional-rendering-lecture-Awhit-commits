import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             passowrd:"",
             hasBeenSubmitted:false,
        }
    }
    handleChange = (event) =>{
        if (event.target.name ==="userName"){
            this.setState({username:event.target.value})
        }
        else if (event.target.name ==="password"){
            this.setState({password:event.target.value})
        }
    }
    handleSubmission = (event)=>{
        event.preventDefault();
        this.setState({hasBeenSubmitted:true})
        
    }
    
    render() {
        if(this.state.hasBeenSubmitted){
            return(<div>
                <h2>Welcome back {this.state.username}</h2>
                <h1>You've been logged in</h1>
                
            </div>)
        }
        return (
            <div>
                <form action="">
                    <fieldset>
                        <div>
                            <p>
                                <label htmlFor="userName">Username: </label>
                                <input type="text" name="userName" id="userName" value = {this.state.username} onChange = {this.handleChange}/>
                            </p>
                            <p>
                                <label htmlFor="password">Password: </label>
                                <input type="password" name="password" id="password" value ={this.state.password} onChange= {this.handleChange}/>
                            </p>
                            <button onClick = {this.handleSubmission}>Login!</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

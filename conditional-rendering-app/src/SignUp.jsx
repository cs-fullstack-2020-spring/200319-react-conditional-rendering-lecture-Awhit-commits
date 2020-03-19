import React, { Component } from 'react'

export default class SignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:"",
            username:"",
            email:"",
            password:"",
            hasBeenSubmitted: false
             
        }
    }
    handleChange =(event) =>{
        if (event.target.name === "fullName"){
            this.setState({name:event.target.value})
        }
        else if (event.target.name ==="userName"){
            this.setState({username:event.target.value})
        }
        else if (event.target.name ==="email"){
            this.setState({email:event.target.value})
        }
        else if (event.target.name ==="password"){
            this.setState({password:event.target.value})
        }
    }

    handleSubmission = (event) =>{
        event.preventDefault();
        console.log(this.state)
        this.setState({hasBeenSubmitted:true})
    }
    
    render() {
        if (this.state.hasBeenSubmitted){
            return(<div>
                <h1>You've signed up</h1>
                <h2>Your username is {this.state.username}</h2>
            </div>)
        }
        return (
            <div>
                {/* <h2>Sign Up!</h2> */}
                <form action="">
                    <fieldset>
                        <div>
                            <label htmlFor="fullName">Full Name: </label>
                            <input type="text" name ="fullName" value= {this.state.name}
                            onChange = {this.handleChange} placeholder = "Full Name"/>
                            <p>
                                <label htmlFor="userName">Username: </label>
                                <input type="text" name="userName" id="userName" value ={this.state.username} placeholder = "Username" onChange ={this.handleChange}/>
                            </p>
                            <p>
                                <label htmlFor="email">Email: </label>
                                <input type="email" name="email" id="email" placeholder = "Email" value = {this.state.email} onChange = {this.handleChange}/>
                            </p>
                            <p>
                                <label htmlFor="password">Password: </label>
                                <input type="password" name="password" id="password" placeholder = "Password" value = {this.state.password} onChange = {this.handleChange}/>
                            </p>
                            <button onClick ={this.handleSubmission}>Submit</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

import React from 'react'
import "./Login.css"
import fs from 'fs'

class Login extends React.Component {

    state = {
        username: null,
        setUsername: null,
        newTask: "",
        newCategory: "",
        todoItems: {},
        finished: false
    }

    renderUser = () => {
        if(this.state.setUsername && this.state.setUsername !== ""){
            return (
                <label> Welcome, {this.state.setUsername}!</label>
            )
        }
        return (
            <label></label>
        )
    }

    setUsername = (e) => {
        this.setState({username : e.target.value});
    }
    
    submitUsername = () => {
        this.setState({setUsername: this.state.username});
    }

    updateToDo = (e) => {
        this.setState({newTask : e.target.value});
    }

    updateCategory = (e) =>{
        this.setState({newCategory: e.target.value});
    }

    addToDo = () => {
        if(this.state.finished){
            this.setState({finished: false});
        }
        let newToDo = this.state.todoItems;
        if(newToDo[this.state.newCategory] === undefined){
            newToDo[this.state.newCategory] = [];
        }
        newToDo[this.state.newCategory].push(this.state.newTask);
        this.setState({todoItems: newToDo});
    }

    completeTask = (e) => {
        const idInfo = e.target.id.split(' ');
        let newTasks = this.state.todoItems;
        newTasks[idInfo[1]] = newTasks[idInfo[1]].filter((item, index) => index !== Number(idInfo[0]));
        this.setState({todoItems: newTasks}); 
        document.querySelector("body").classList.add("newClass")

    }

    clearTasks = (e) => {
        this.setState({todoItems : {}});
        this.setState({finished: true});
    }

    finishedImage = () =>{
        if(this.state.finished){
            return(<img className="fullWidth" src="https://media1.tenor.com/images/61443e0f49b27865d2a4c4386025935b/tenor.gif"></img>)
        }
    }

    render() {
        let todoItems = [];
        console.log(this.state.todoItems)
        todoItems = Object.keys(this.state.todoItems).map((tasks, indexOf) => {
            return this.state.todoItems[tasks].map((item, indexOf) => {
                return(
                    <div>
                        <form>
                            <input type="button" className="button" value="Delete!" id={`${indexOf} ${tasks}`} onClick={this.completeTask} />
                            <label> {tasks}: {item}</label>
                        </form>
                    </div>
                )
            })
        })
        return (
            <form className="Login">
                <label for="username">Username: </label>
                <input type="text" name="username" id="username" onChange={this.setUsername} required />
                <input type="button" className="button" value="Submit Username" onClick={this.submitUsername} />
                {this.renderUser()}
                <br />
                <label for="categoryToAdd">Category: </label>
                <input type="text" name="categoryToAdd" id="categoryToAdd" onChange={this.updateCategory} /> 
                <br />
                <label for="toAdd">New Task: </label>
                <input type="text" name="toAdd" id="toAdd" onChange={this.updateToDo} />
                <input type="Button" className="button" value="Add" onClick={this.addToDo} />
                <input type="Button" className="button" value="Finish All" onClick={this.clearTasks} />
                {this.finishedImage()} 
                {todoItems}
            </form>
        )
    }
}
export default Login
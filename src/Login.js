import React from 'react'

class Login extends React.Component {

    state = {
        username: null,
        setUsername: null,
        newTask: "",
        todoItems: []
    }

    renderUser = () => {
        console.log ("In renderUser");
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
        console.log("In submitUsername");
        this.setState({setUsername: this.state.username});
    }

    updateToDo = (e) => {
        this.setState({newTask : e.target.value});
    }

    addToDo = () => {
        let newTasks = this.state.todoItems;
        newTasks.push(this.state.newTask);
        this.setState({todoItems: newTasks});
    }

    completeTask = (e) => {
        const targetIndex = Number(e.target.id);
        console.log("DELETE", targetIndex);
        let newTasks = this.state.todoItems;
        newTasks = newTasks.filter((item, index) => index !== targetIndex);
        this.setState({todoItems: newTasks});
    }

    clearTasks = (e) => {
        this.setState({todoItems : []});
    }

    render() {
        const todoItems = this.state.todoItems.map((item, indexOf) => {
            return (
                <div>
                    <form>
                        <input type="button" value="Delete!" id={indexOf} onClick={this.completeTask} />
                        <label> {item}</label>
                    </form>
                </div>
            )
        })
        return (
            <form>
                <label for="username">Username: </label>
                <input type="text" name="username" id="username" onChange={this.setUsername} required />
                <input type="button" value="Submit Username" onClick={this.submitUsername} />
                {this.renderUser()}
                <br />
                <label for="toAdd">New Task: </label>
                <input type="text" name="toAdd" id="toAdd" onChange={this.updateToDo} />
                <input type="Button" value="Add" onClick={this.addToDo} />
                <input type="Button" value="Finish All" onClick={this.clearTasks} />
                {todoItems}

            </form>
        )
    }
}
export default Login
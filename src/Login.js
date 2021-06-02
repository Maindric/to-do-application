import React from 'react'

class Login extends React.Component {

    state = {
        updateLog: false,
        username: null,
        setUsername: null,
        newTask: "",
        todoItems: []
    }

    renderUser = () => {
        console.log ("In renderUser");
        if(this.state.updateLog)
        {
            this.setState({updateLog: false});
        }
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
        this.setState({updateLog : true, setUsername: this.state.username});
    }

    updateToDo = (e) => {
        this.setState({newTask : e.target.value});
    }

    addToDo = () => {
        let newTasks = this.state.todoItems;
        newTasks.push(this.state.newTask);
        this.setState({todoItems: newTasks});
    }


    render() {
        const todoItems = this.state.todoItems.map(item => {
            return (
                <div>
                    <label>{item}</label>
                </div>
            )
        })
        return (
            <form>
                <label for="username">Username: </label>
                <input type="text" name="username" id="username" onChange={this.setUsername} required />
                <input type="Button" value="Submit Username" onClick={this.submitUsername} />
                {this.renderUser()}
                <br />
                <label for="toAdd">New Task: </label>
                <input type="text" name="toAdd" id="toAdd" onChange={this.updateToDo} />
                <input type="Button" value="Add" onClick={this.addToDo} />
                {todoItems}

            </form>
        )
    }
}
export default Login
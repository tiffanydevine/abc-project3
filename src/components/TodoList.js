import React, { Component } from 'react'; 
import TodoItem from './TodoItem'; 

class TodoList extends Component {
	constructor(props){
		super(props); 

		this.state = { items: [] }
	}
	
	addItem(e){
		var itemArray = this.state.items;  

		itemArray.push(
			{
				text: this._inputElement.value, 
				key: Date.now()
			}
		); 

		this.setState({
			items: itemArray
		}); 

		this._inputElement.value = ''; 
		e.preventDefault(); 

	}

	

	render(){
		var todoItems = this.state.items.map((item) => {
			return <TodoItem key={item.key} item={item.text} />
		}) 


		return (
			<div className="todoListMain">
				<div className="header">
				<form onSubmit={this.addItem.bind(this)}>
					<input ref={(a) => this._inputElement = a} placeholder='enter task'/>
					<button type="submit">Add</button>
				</form>
				</div>
				<ul className="theList">{todoItems}</ul>
			</div>
		)
	}

} 

export default TodoList; 

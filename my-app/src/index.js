import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header/';
import SearchPannel from './components/search-panel/';
import TodoList from './components/todo-list/';



const App = () => {
  const todoDate = [
    {label:'Learn React', important:true, id:1},
    {label:'Make Awesome app', important:true, id:2},
    {label:'Drick coffee', important:false, id:3}]
  return (
    <div>
      <AppHeader />
       <SearchPannel />
       <TodoList todos={todoDate}/> 
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
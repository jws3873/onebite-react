import "./List.css";
import TodoItem from "./TodoItem";
import {useState,useMemo, useContext} from "react";
import { TodoStateCentext } from "../App";

const List =()=>{
    const todos = useContext(TodoStateCentext);
    const [search,setSearch] = useState("");
    const onChange=(e)=>{
        setSearch(e.target.value);
    };
    const getFilteredData=()=>{
        if(search===""){
            return todos;
        }
        return todos.filter((todo)=>
            todo.content.toLowerCase().includes(search.toLowerCase())
        );
    };

    const filteredTodos = getFilteredData();

    const {totalCount,doneCount,notDoneCount} = useMemo(()=>{
        const totalCount = todos.length;
        const doneCount = todos.filter((todo)=> todo.isDone).length;
        const notDoneCount = totalCount - doneCount;
        return {
            totalCount,
            doneCount,
            notDoneCount,
        };
    },[todos]); // 의존성배열 : deps

    return (
        <div className="List">
            <h4>Todo List🌱</h4>
            <div>
                <div>total: {totalCount}</div>
                <div>done: {doneCount}</div>
                <div>notDone: {notDoneCount}</div>
            </div>
            <input 
                value = {search} 
                onChange={onChange} 
                placeholder="검색어를 입력하세요" 

                />
            <div className="todos_wrapper">
                {filteredTodos.map((todo)=>{
                    return <TodoItem key = {todo.id} {...todo} 
                    />
                })}
            </div>
        </div>
    );
};

export default List;
import TodoListItem from "./TodoListItem";
import './TodoList.scss';
import React from 'react';

const TodoList = ({todos, onRemove, onToggle} : any) => {
    const rowRenderer = React.useCallback(
        ({index, key, style}: any) => {
            const todo = todos[index];
            return (
                <TodoListItem
                    todo={todo}
                    key={key}
                    onRemove={onRemove}
                    onToggle={onToggle}
                    style={style}
                />
            );
        }, [onRemove, onToggle, todos]);

    
    // return (
    //     <List
    //         className="TodoList"
    //         width={512}
    //         height={513}
    //         rowCount={todos.length}
    //         rowHeight={57}
    //         rowRenderer={rowRenderer}
    //         list={todos}
    //         style={{outline: 'none'}}>
    //     </List>
    // );

    return (
        <div className="TodoList">
            {
                todos.map((todo: any) => (
                    <TodoListItem todo = {todo} 
                                key={todos.id} 
                                onRemove={onRemove}
                                onToggle={onToggle}/>
                ))}
        </div>
    );
}

export default React.memo(TodoList);
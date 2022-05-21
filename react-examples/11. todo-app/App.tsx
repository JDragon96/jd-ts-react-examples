import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import {useState, useRef, useCallback, useReducer} from 'react';

const init_data_size: number = 2500;

// const App = () => {
//   function createBulkTodos() {
//     const array = [];
//     for(let i=0; i < init_data_size; i++){
//       array.push({
//         id: i,
//         text: `할 일 ${i}`,
//         checked: false,
//       });
//     }
//     return array;
//   }

//   const [todos, setTodos] = useState(createBulkTodos)

//   // 고유값으로 활용 될 ID 변수
//   const nextId = useRef(init_data_size);

//   //////////////////////
//   /// METHOD
//   const onInsert = useCallback(
//     (text: any) => {
//       const todo ={
//         id: nextId.current,
//         text,
//         checked: false,
//       };
//       setTodos(todos => todos.concat(todo));
//       // setTodos(todos.concat(todo));
//       nextId.current += 1;
//     },
//     []
//   )

//   const onRemove = useCallback(
//     (id: any) => {
//       setTodos(todos => 
//         todos.map(todo => 
//           todo.id === id ? {...todo, checked : !todo.checked!} : todo,))
//       // setTodos(todos.filter((todo: any) => todo.id !== id));
//     }, []
//   );

//   const onToggle = useCallback(
//     (id: any) => {
//       setTodos(
//         todos => 
//           todos.map((todo: any) => 
//               todo.id === id ? {...todo, checked: !todo.checked} : todo,
//         )
//       );
//     }, []
//   );

//   return (
//     <TodoTemplate>
//       <TodoInsert onInsert={onInsert}/>
//       <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
//     </TodoTemplate>
//   );
// };

///////////////////////
// useReducer를 사용하는 방법
function createBulkTodos() {
  const array = [];
  for(let i=0; i < init_data_size; i++){
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos: any, action: any){
  switch(action.type){
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter((todo: any) => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map((todo: any) =>
        todo.id === action.id ? {...todo, checked: !todo.checked} : todo,
        );
    default:
      return todos;
  }
}

const App = () => {
  // useReducer(reducer 함수, todos의 초기값, 데이터 초기화 함수)
  // dispatch : reducer 별명
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  const nextId = useRef(init_data_size);

  const onInsert = useCallback(
    (text: any) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false
      };
      dispatch({type: 'INSERT', todo})
      nextId.current += 1;
    }, []);

  const onRemove = useCallback(
    (id: number) => {
      dispatch({type: 'REMOVE', id: id});
  }, []);

  const onToggle = useCallback(
    (id: number) => {
      dispatch({type:'TOGGLE', id: id});
    }, [])

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
}


export default App;
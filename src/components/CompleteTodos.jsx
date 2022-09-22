const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTodo</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li className="list-row" key={todo}>
              <p>{todo}</p>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default CompleteTodos;

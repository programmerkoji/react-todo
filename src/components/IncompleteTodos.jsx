const IncompleteTodos = (props) => {
	const { todos, onClickComplete, onClickDelete } = props;
	return (
		<div className="incomplete-area">
			<p className="title">未完了のTodo</p>
			<ul>
				{todos.map((todo, index) => {
					return (
						<li className="list-row" key={todo}>
							<p>{todo}</p>
							<button onClick={() => onClickComplete(index)}>完了</button>
							<button onClick={() => onClickDelete(index)}>削除</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
export default IncompleteTodos;

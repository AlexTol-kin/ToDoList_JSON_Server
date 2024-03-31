export const useAddTodoList = (messageTodo, refreshProducts, setMessageTodo) => {
	const onClickAddTodoList = () => {
		fetch('http://localhost:3003/toDoList', {
			method: 'Post',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				todo: messageTodo,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				refreshProducts();
				console.log('Задача добавлена', response);
				setMessageTodo('');
			});
	};

	return {
		onClickAddTodoList,
	};
};

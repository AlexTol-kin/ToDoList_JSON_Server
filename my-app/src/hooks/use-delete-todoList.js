export const useDeleteTodoList = (refreshProducts) => {
	const onDeleteTodo = (e, id) => {
		refreshProducts();
		fetch(`http://localhost:3003/toDoList/${id}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Задача удалена', response);
			});
	};

	return { onDeleteTodo };
};

export const useFilterTodoList = (
	newTodoList,
	filterFlag,
	setFilterFlag,
	getFiltrTodoList,
	refreshProducts,
) => {
	const onFilterTodo = () => {
		refreshProducts();
		if (!filterFlag) {
			setFilterFlag(true);
			getFiltrTodoList(
				newTodoList.sort(function (a, b) {
					if (a.todo.toLowerCase() < b.todo.toLowerCase()) {
						return -1;
					}
					if (a.todo.toLowerCase() > b.todo.toLowerCase()) {
						return 1;
					}
					return 0;
				}),
			);
		} else {
			setFilterFlag(false);
		}
	};

	return {
		onFilterTodo,
	};
};

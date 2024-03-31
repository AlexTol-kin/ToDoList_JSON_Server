import { useState } from 'react';

export const useSearchTodoList = (newTodoList, fieldSearch, refreshProducts) => {
	const [searchFlag, setSearchFlag] = useState(false);
	const [fieidTodo, setFieldTodo] = useState({});

	const onSearchTodoList = () => {
		refreshProducts();
		if (fieldSearch === '') {
			setSearchFlag(false);
		} else {
			setSearchFlag(true);
			let todoSearch = newTodoList.find((arr) =>
				arr.todo.toLowerCase().includes(fieldSearch.toLowerCase()),
			);
			todoSearch !== undefined
				? setFieldTodo(todoSearch.todo)
				: setSearchFlag(false);
		}
	};

	return { searchFlag, onSearchTodoList, fieidTodo };
};

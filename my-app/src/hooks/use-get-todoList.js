import { useEffect, useState } from 'react';

export const useGetTodoList = (refresTodoFlag) => {
	const [newTodoList, setTodoLis] = useState([]);
	const [isloading, setIsloading] = useState(true);

	useEffect(() => {
		setIsloading(true);
		fetch('http://localhost:3003/toDoList')
			.then((loadedData) => loadedData.json())
			.then((loadedTodoList) => {
				setTodoLis(loadedTodoList);
			})
			.finally(() => setIsloading(false));
	}, [refresTodoFlag]);

	return {
		newTodoList,
		isloading,
	};
};

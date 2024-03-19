import { useState } from 'react';

export const useUpdateTodoList = (refreshProducts, refresTodoFlag) => {
    const [getUpdateTodo, setGetUpdateTodo] = useState('');
    const [newGetFetch, setNewGetFetch] = useState('');

    const onRequestUpdateTodoList = (e, id) => {
        e.preventDefault();
        refreshProducts();
        if (!refresTodoFlag) {
            setNewGetFetch(`http://localhost:3003/toDoList/${id}`);
            fetch(`http://localhost:3003/toDoList/${id}`)
                .then((loadedData) => loadedData.json())
                .then((loadedTodoList) => {
                    setGetUpdateTodo(loadedTodoList.todo);
                });
        } else {
            fetch(newGetFetch, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json;charset=utf-8' },
                body: JSON.stringify({
                    todo: getUpdateTodo,
                }),
            })
                .then((rawResponse) => rawResponse.json())
                .then((response) => {
                    console.log('Задача обновлена', response);
                });
        }
    };

    return {
        onRequestUpdateTodoList,
        getUpdateTodo,
        setGetUpdateTodo,
    };
};

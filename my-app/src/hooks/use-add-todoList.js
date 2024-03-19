import { useState } from 'react';

export const useAddTodoList = (messageTodo) => {
    const onClickAddTodoList = (event) => {
        fetch('http://localhost:3003/toDoList', {
            method: 'Post',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({
                todo: messageTodo,
            }),
        })
            .then((rawResponse) => rawResponse.json())
            .then((response) => {
                console.log('Задача добавлена', response);
            });
    };

    return {
        onClickAddTodoList,
    };
};

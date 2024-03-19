import { useState } from 'react';

export const useSearchTodoList = (newTodoList, fieldSearch) => {
    const [searchFlag, setSearchFlag] = useState(false);
    const [fieidTodo, setFieldTodo] = useState('');

    const onSearchTodoList = (e) => {
        if (!searchFlag && fieldSearch !== '') {
            e.preventDefault();
            setSearchFlag(true);
            setFieldTodo(newTodoList.find((arr) => arr.todo.includes(fieldSearch)));
        } else {
            setSearchFlag(false);
            e.stopPropagation();
        }
    };

    return { searchFlag, onSearchTodoList, fieidTodo };
};

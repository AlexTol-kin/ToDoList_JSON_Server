import { useState } from 'react';

export const useFilterTodoList = (newTodoList) => {
    const [filtrTodoList, getFiltrTodoList] = useState(false);
    const [filterFlag, setFilterFlag] = useState(false);

    const onFilterTodo = (e) => {
        if (!filterFlag) {
            e.preventDefault();
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
            e.stopPropagation();
        }
    };

    return {
        onFilterTodo,
        filtrTodoList,
        filterFlag,
    };
};

export const useDeleteTodoList = () => {
    const onDeleteTodo = (e, id) => {
        console.log(id);
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

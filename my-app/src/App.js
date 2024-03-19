import styles from './app.module.css';
import { useState } from 'react';
import {
    useAddTodoList,
    useDeleteTodoList,
    useFilterTodoList,
    useGetTodoList,
    useSearchTodoList,
    useUpdateTodoList,
} from './hooks';

export const App = () => {
    const [refresTodoFlag, setRefreshTodoFlag] = useState(false);
    const refreshProducts = () => setRefreshTodoFlag(!refresTodoFlag);
    const [messageTodo, setMessageTodo] = useState();
    const [fieldSearch, setFieldSearch] = useState('');

    const { newTodoList } = useGetTodoList(refresTodoFlag);

    const { onClickAddTodoList } = useAddTodoList(messageTodo);

    const { onRequestUpdateTodoList, getUpdateTodo, setGetUpdateTodo } =
        useUpdateTodoList(refreshProducts, refresTodoFlag);

    const { onDeleteTodo } = useDeleteTodoList();

    const { onFilterTodo, filtrTodoList, filterFlag } = useFilterTodoList(newTodoList);

    const { searchFlag, onSearchTodoList, fieidTodo } = useSearchTodoList(
        newTodoList,
        fieldSearch,
    );

    return (
        <>
            <div className={styles.container}>
                <h1 className="headingTitle">To-Do List</h1>
                <form className={styles.form}>
                    <input
                        className={styles.form__input}
                        type="text"
                        placeholder="Опишите задачу"
                        value={messageTodo || ''}
                        onChange={(e) => setMessageTodo(e.target.value)}
                    />
                    <button
                        disabled={messageTodo === '' || messageTodo === undefined}
                        onClick={onClickAddTodoList}
                    >
                        Добавить задачу
                    </button>
                    {refresTodoFlag ? (
                        <input
                            className={styles.form__input}
                            type="text"
                            onChange={(e) => setGetUpdateTodo(e.target.value)}
                            value={getUpdateTodo || ''}
                            autoFocus
                        />
                    ) : (
                        false
                    )}
                    {(!filterFlag ? newTodoList : filtrTodoList).map(({ id, todo }) => (
                        <li key={id} className={styles.toDoList}>
                            <button
                                className={styles.button}
                                onClick={(e) => onRequestUpdateTodoList(e, id)}
                            >
                                ✎...
                            </button>
                            {todo}
                            <button
                                className={styles.buttonDelete}
                                onClick={(e) => onDeleteTodo(e, id)}
                            >
                                ❌
                            </button>
                        </li>
                    ))}
                    <div className={styles.buttonDivFilter}>
                        <button className={styles.buttonFilter} onClick={onFilterTodo}>
                            фильтр А-Я
                        </button>
                    </div>
                    <div className={styles.buttonDivSearch}>
                        <button onClick={onSearchTodoList}> 🔎</button>
                        <input
                            type="text"
                            placeholder="Поиск задачи"
                            onChange={(e) => setFieldSearch(e.target.value)}
                            value={fieldSearch}
                        />
                        {!searchFlag ? <></> : <li>{fieidTodo.todo}</li>}
                    </div>
                </form>
            </div>
        </>
    );
};

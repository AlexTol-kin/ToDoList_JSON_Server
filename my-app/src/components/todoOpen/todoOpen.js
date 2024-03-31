import { Link } from 'react-router-dom';
import styles from './todoOpen.module.css';

export const Openedtodo = ({
	setGetUpdateTodo,
	refresTodoFlag,
	getUpdateTodo,
	onRequestUpdateTodoList,
	newTodoList,
	onDeleteTodo,
	nowTodoId,
	deployTodoFlag,
	setRefreshTodoFlag,
}) => {
	let thisTodo =
		newTodoList.find(({ id, todo }) => {
			return id === nowTodoId;
		}) || '';

	const onClickReset = ({ target }) => {
		if (target) {
			setRefreshTodoFlag(false);
		}
	};

	return (
		<div className={styles.containerThis}>
			<button className={styles.buttonReset} onClick={onClickReset}>
				<Link to="/">⏎</Link>
			</button>

			{!deployTodoFlag ? (
				true
			) : (
				<li key={thisTodo.id} className={styles.toDoList}>
					<button
						className={styles.button}
						onClick={(e) => onRequestUpdateTodoList(e, thisTodo.id)}
					>
						✎...
					</button>
					{thisTodo.todo}
					<button
						className={styles.buttonDelete}
						onClick={(e) => onDeleteTodo(e, thisTodo.id)}
					>
						<Link to="/">❌</Link>
					</button>
				</li>
			)}
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
		</div>
	);
};

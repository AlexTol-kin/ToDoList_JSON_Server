import { Link, NavLink, Outlet } from 'react-router-dom';
import styles from './main-page.module.css';

export const MainPage = ({
	messageTodo,
	setMessageTodo,
	onClickAddTodoList,
	filterFlag,
	newTodoList,
	filtrTodoList,
	onClickThisTodo,
	onFilterTodo,
	onSearchTodoList,
	setFieldSearch,
	fieldSearch,
	searchFlag,
	fieidTodo,
}) => {
	return (
		<div className={styles.container}>
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
			{(!filterFlag ? newTodoList : filtrTodoList).map(({ id, todo }) => (
				<li
					key={id}
					onClick={(e) => onClickThisTodo(e, id)}
					className={styles.toDoList}
				>
					{/* <Link to={`todo/${id}`}>{todo}</Link> */}
					<NavLink to={`todo/${id}`}>
						{({ isActive }) =>
							isActive ? (
								<>
									<span>{todo}</span>
									<span className={styles.activeLinkIcon}></span>
								</>
							) : (
								todo
							)
						}
					</NavLink>
				</li>
			))}
			<Outlet />
			<div className={styles.buttonDivFilter}>
				{!filterFlag ? (
					<button className={styles.buttonFilter} onClick={onFilterTodo}>
						фильтр А-Я
					</button>
				) : (
					<button className={styles.buttonFilter} onClick={onFilterTodo}>
						<Link to="/">фильтр А-Я</Link>
					</button>
				)}
			</div>
			<div className={styles.buttonDivSearch}>
				<button onClick={onSearchTodoList}> 🔎</button>
				<input
					type="text"
					placeholder="Поиск задачи"
					onChange={(e) => setFieldSearch(e.target.value)}
					value={fieldSearch}
				/>
				{!searchFlag ? '' : <li>{fieidTodo}</li> || ''}
			</div>
		</div>
	);
};

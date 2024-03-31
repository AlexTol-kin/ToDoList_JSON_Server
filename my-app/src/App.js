import styles from './app.module.css';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { useState } from 'react';
import {
	useAddTodoList,
	useDeleteTodoList,
	useFilterTodoList,
	useGetTodoList,
	useSearchTodoList,
	useUpdateTodoList,
} from './hooks';
import { Openedtodo, MainPage, NotFound } from './components';

export const App = () => {
	const [nowTodoId, setNowTodoId] = useState('');
	const [messageTodo, setMessageTodo] = useState();
	const [fieldSearch, setFieldSearch] = useState('');
	const [refresTodoFlag, setRefreshTodoFlag] = useState(false);
	const [deployTodoFlag, setDeployTodoFlag] = useState(false);
	const [filtrTodoList, getFiltrTodoList] = useState([]);
	const [filterFlag, setFilterFlag] = useState(false);

	const refreshProducts = () => setRefreshTodoFlag(!refresTodoFlag);

	const { newTodoList } = useGetTodoList(refresTodoFlag);

	const { onClickAddTodoList } = useAddTodoList(
		messageTodo,
		refreshProducts,
		setMessageTodo,
	);

	const { onRequestUpdateTodoList, getUpdateTodo, setGetUpdateTodo } =
		useUpdateTodoList(refreshProducts, refresTodoFlag);

	const { onDeleteTodo } = useDeleteTodoList(refreshProducts);

	const { onFilterTodo } = useFilterTodoList(
		newTodoList,
		filterFlag,
		setFilterFlag,
		getFiltrTodoList,
		refreshProducts,
	);

	const { searchFlag, onSearchTodoList, fieidTodo } = useSearchTodoList(
		newTodoList,
		fieldSearch,
		refreshProducts,
	);

	const onClickThisTodo = (e, id) => {
		if (e) {
			setNowTodoId(id);
			setDeployTodoFlag(true);
		}
	};

	return (
		<>
			<div className={styles.container}>
				<div>
					<div>
						<ul>
							<h1 className="headingTitle">
								<NavLink
									to="/"
									className={({ isActive, isPending }) =>
										isPending ? 'pending' : isActive ? 'active' : ''
									}
								>
									To-Do List
								</NavLink>
							</h1>
						</ul>
					</div>
					<Routes>
						<Route
							path="/"
							element={
								<MainPage
									messageTodo={messageTodo}
									setMessageTodo={setMessageTodo}
									onClickAddTodoList={onClickAddTodoList}
									filterFlag={filterFlag}
									newTodoList={newTodoList}
									filtrTodoList={filtrTodoList}
									onClickThisTodo={onClickThisTodo}
									onFilterTodo={onFilterTodo}
									onSearchTodoList={onSearchTodoList}
									setFieldSearch={setFieldSearch}
									fieldSearch={fieldSearch}
									searchFlag={searchFlag}
									fieidTodo={fieidTodo}
								/>
							}
						>
							<Route
								path="todo/:id"
								element={
									<Openedtodo
										setGetUpdateTodo={setGetUpdateTodo}
										refresTodoFlag={refresTodoFlag}
										getUpdateTodo={getUpdateTodo}
										onRequestUpdateTodoList={onRequestUpdateTodoList}
										filterFlag={filterFlag}
										newTodoList={newTodoList}
										onDeleteTodo={onDeleteTodo}
										nowTodoId={nowTodoId}
										deployTodoFlag={deployTodoFlag}
										setRefreshTodoFlag={setRefreshTodoFlag}
									/>
								}
							/>
						</Route>
						<Route path="/404" element={<NotFound />}></Route>
						<Route
							path="/*"
							element={<Navigate to="/404" relative={true} />}
						></Route>
					</Routes>
				</div>
			</div>
			<div></div>
		</>
	);
};

import type { Component } from 'solid-js';
import { createSignal, onCleanup, onMount } from 'solid-js';
import './App.scss';
import { Route, Router, Routes } from '@solidjs/router';
import PageWrapper from '@/components/PageWrapper';
import { TablePage } from '@/pages/Table/Table.page';
import { SelectButtonPage } from '@/pages/SelectButton/SelectButton.page';
import { DropdownPage } from '@/pages/Dropdown/Dropdown.page';
import { InputTextPage } from '@/pages/InputText/InputText.page';
import { PaginatorPage } from '@/pages/Paginator.page';

const App: Component = () => {

	const [first, setFirst] = createSignal(0);
	const [rows, setRows] = createSignal(5);
	const [selectedRow, setSelectedRow] = createSignal<any>(null);


	const onPageChange = (event: any) => {
		setFirst(event.first);
		setRows(event.rows)
	}

	const selectionChanged = (value: any) => {
		console.log(value)
		setSelectedRow(value)
	}

	return (
		<>
			<Router>
				<Routes>
					<Route path="/" component={PageWrapper}>
						<Route path="/table" component={TablePage}></Route>
						<Route path="/select-button" component={SelectButtonPage}></Route>
						<Route path="/dropdown" component={DropdownPage}></Route>
						<Route path="/input-text" component={InputTextPage}></Route>
						<Route path="/paginator" component={PaginatorPage}></Route>
					</Route>
				</Routes>
			</Router>
		</>
	)
}
export default App;

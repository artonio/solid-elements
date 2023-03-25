import type { Component } from 'solid-js';
import { Paginator, Table } from '@solid-ui/solid-elements';
import { createSignal, lazy, onCleanup, onMount } from 'solid-js';
import { Menu } from '@/components/Menu';
import './App.scss';
import MarkdownIt from 'markdown-it';
import { CodeHighlighter } from '@/components/CodeHighlighter';
import { Route, Router, Routes } from '@solidjs/router';
import  PageWrapper from '@/components/PageWrapper';
import { TablePage } from '@/pages/Table.page';


const App: Component = () => {

	let articleRef!: HTMLDivElement;

	const [first, setFirst] = createSignal(0);
	const [rows, setRows] = createSignal(5);
	const [selectedRow, setSelectedRow] = createSignal<any>(null);

	const tableData = [
		{
			"firstName": "Savage",
			"lastName": "Norris",
			"age": 5
		},
		{
			"firstName": "Parker",
			"lastName": "Bryant",
			"age": 10
		},
		{
			"firstName": "Asra",
			"lastName": "Langley",
			"age": 5
		},
		{
			"firstName": "Gomez",
			"lastName": "Mccray",
			"age": 0
		},
		{
			"firstName": "Nico",
			"lastName": "Nolan",
			"age": 6
		},
	];

	const columns = [
		{
			code: "firstName",
			header: "First Name"
		},
		{
			code: "lastName",
			header: "Last Name"
		},
		{
			code: "age",
			header: "Age"
		}
	];

	const onResize = () => {
		console.log(articleRef)
		// articleRef.style.height = window.innerHeight - 56 - 30 - 130 + 'px';
		// console.log('resize height: ', window.innerHeight, ' width: ', window.innerWidth)
	};

	onMount(() => {
		// articleRef.style.height = window.innerHeight - 56 - 30 - 130+ 'px';
		// window.addEventListener('resize', onResize);
	});

	onCleanup(() => {
		// window.removeEventListener('resize', onResize);
	});


	const onPageChange = (event: any) => {
		setFirst(event.first);
		setRows(event.rows)
	}

	const selectionChanged = (value: any) => {
		console.log(value)
		setSelectedRow(value)
	}

	const importTableCode = `
		import { Table } from '@solid-ui/solid-elements';
	`

	const basicTableCode = `
		import { Table } from '@solid-ui/solid-elements';

		export const BasicTable = () => {
			return (
				<Table data={tableData} columns={columns}/>
			)
		}
	`

	const onMenuItemClick = (path: string) => {
		console.log(path)
	}

	return (
		<>
			<Router>
				<Routes>
					<Route path="/home" component={PageWrapper}>
						<Route path="/table" component={TablePage}></Route>
					</Route>
				</Routes>
			</Router>
			{/*<div class="app-main-container">*/}
			{/*	<div class="app-header">*/}
			{/*		<span>Solid Elements</span>*/}
			{/*	</div>*/}
			{/*	<div class="app-content-container">*/}

			{/*		<div class="app-main-content">*/}
			{/*			<div ref={articleRef} id="article">*/}
			{/*				<h2>Import via module</h2>*/}
			{/*				<CodeHighlighter language="javascript">*/}
			{/*					{importTableCode}*/}
			{/*				</CodeHighlighter>*/}
			{/*				<h2>Basic Table</h2>*/}
			{/*				<Table*/}
			{/*					data={tableData}*/}
			{/*					columns={columns}*/}
			{/*				>*/}
			{/*				</Table>*/}
			{/*				<h3>Code</h3>*/}
			{/*				<CodeHighlighter language="js">*/}
			{/*					{basicTableCode}*/}
			{/*				</CodeHighlighter>*/}
			{/*				<h2>Stripped</h2>*/}

			{/*			</div>*/}
			{/*		</div>*/}
			{/*		<div class="app-left-sidebar">*/}
			{/*			<Menu onMenuClick={onMenuItemClick}/>*/}
			{/*		</div>*/}
			{/*		<div class="app-right-sidebar">*/}
			{/*			MENU*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*	<div class="app-footer">*/}
			{/*		<span>v1.0.0</span>*/}
			{/*	</div>*/}
			{/*</div>*/}
		</>
	)
}
export default App;

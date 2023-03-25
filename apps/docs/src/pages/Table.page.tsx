import './../App.scss';
import { onCleanup, onMount } from 'solid-js';
import { Table } from '@solid-ui/solid-elements/src';
import { CodeHighlighter } from '@/components/CodeHighlighter';

export const TablePage = () => {
	let articleRef!: HTMLDivElement;

	const onResize = () => {
		console.log(articleRef)
		articleRef.style.height = window.innerHeight - 56 - 30 - 130 + 'px';
		console.log('resize height: ', window.innerHeight, ' width: ', window.innerWidth)
	};

	onMount(() => {
		articleRef.style.height = window.innerHeight - 56 - 30 - 130+ 'px';
		window.addEventListener('resize', onResize);
	});

	onCleanup(() => {
		window.removeEventListener('resize', onResize);
	});

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

	return (
		<>
		<div class="app-main-content">
			<div ref={articleRef} id="article">
				<h2 id="import">Import via module</h2>
					<CodeHighlighter language="javascript">
						{importTableCode}
					</CodeHighlighter>
					<h2 id="basic">Basic Table</h2>
					<Table
						data={tableData}
						columns={columns}
					>
					</Table>
					<CodeHighlighter language="js">
						{basicTableCode}
					</CodeHighlighter>
					<h2>Stripped</h2>
			</div>
		</div>
		<div class="app-right-sidebar">
						<ul>
							<li><a href="#import">Import</a></li>
							<li><a href="#basic">Basic</a></li>
							<li><a href="#article">Size</a></li>
							<li><a href="#article">Grid Lines</a></li>
							<li><a href="#article">Striped row</a></li>
							<li><a href="#article">Paginator</a></li>
							<li><a href="#article">Sorting</a></li>
							<li><a href="#article">Filtering</a></li>
							<li><a href="#article">Row Selection</a></li>
						</ul>
		</div>
		</>
	)
}

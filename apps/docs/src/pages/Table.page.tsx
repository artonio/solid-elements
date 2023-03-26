import './../App.scss';
import {createSignal, onCleanup, onMount, Suspense} from 'solid-js';
import { Table } from '@solid-ui/solid-elements/src';
import { CodeHighlighter } from '@/components/CodeHighlighter';
import basicTable from "./basic.data.json";
import { v4 as uuidv4 } from 'uuid';


export const TablePage = () => {
	let articleRef!: HTMLDivElement;
	const [isToggled, setIsToggled] = createSignal(true)


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

	const tableData = basicTable.data;

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
		<Table data={tableData} columns={columns}/>
	`

	const expandedTableCode = `
		import { Table } from '@solid-ui/solid-elements';
		import basicTable from "./basic.data.json";

		export const BasicTable = () => {
            
			const tableData = basicTable.data;
            
            const columns = [
					\t\t{
					\t\t\tcode: "firstName",
					\t\t\theader: "First Name"
					\t\t},
					\t\t{
					\t\t\tcode: "lastName",
					\t\t\theader: "Last Name"
					\t\t},
					\t\t{
					\t\t\tcode: "age",
					\t\t\theader: "Age"
					\t\t}
					\t];
				
			return (
				<Table data={tableData} columns={columns}/>
			)
		}
	`

	const [baseTableCode, setBaseTableCode] = createSignal(basicTableCode)

	const sourceCodeToggled = () => {
		setIsToggled(!isToggled())
		if (isToggled()) {
			setBaseTableCode(basicTableCode)
		} else {
			setBaseTableCode(expandedTableCode)
		}
	}

	return (
		<>
		<div class="app-main-content">
			<div ref={articleRef} id="article">
				<h2 id="import">Import via module</h2>
					<CodeHighlighter language="tsx">
						{importTableCode}
					</CodeHighlighter>
					<h2 id="basic">Basic Table</h2>
					<Table
						data={tableData}
						columns={columns}
					>
					</Table>
					<CodeHighlighter language="tsx" toggleSourceCode={true} id={uuidv4()} onToggleSourceCode={sourceCodeToggled}>
						{baseTableCode()}
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

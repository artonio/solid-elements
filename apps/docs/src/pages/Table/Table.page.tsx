import '../../App.scss';
import {onCleanup, onMount} from 'solid-js';
import {CodeHighlighter} from '@/components/CodeHighlighter';
import {BasicTable} from "@/pages/Table/BasicTable";
import { StrippedTable } from '@/pages/Table/StrippedTable';
import { v4 as uuidv4 } from 'uuid';


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



	const importTableCode = `
		import { Table } from '@solid-ui/solid-elements';
	`

	return (
		<>
			<div class="app-main-content">
				<div ref={articleRef} id="article">
					<h2 id="import">Import via module</h2>
						<CodeHighlighter language="tsx" id={uuidv4()}>
							{importTableCode}
						</CodeHighlighter>
						<BasicTable/>
						<StrippedTable/>
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

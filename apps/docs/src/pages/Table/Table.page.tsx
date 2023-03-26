import '../../App.scss';
import {createSignal, onCleanup, onMount, Suspense} from 'solid-js';
import { Table } from '@solid-ui/solid-elements/src';
import { CodeHighlighter } from '@/components/CodeHighlighter';
import basicTable from "../basic.data.json";
import {BasicTable} from "@/pages/Table/BasicTable";


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
					<CodeHighlighter language="tsx">
						{importTableCode}
					</CodeHighlighter>
					<BasicTable/>
					<h2>Stripped</h2>
			</div>
		</div>
		<div class="app-right-sidebar">
						<ul>
							<li><a href="apps/docs/src/pages#import">Import</a></li>
							<li><a href="apps/docs/src/pages#basic">Basic</a></li>
							<li><a href="apps/docs/src/pages#article">Size</a></li>
							<li><a href="apps/docs/src/pages#article">Grid Lines</a></li>
							<li><a href="apps/docs/src/pages#article">Striped row</a></li>
							<li><a href="apps/docs/src/pages#article">Paginator</a></li>
							<li><a href="apps/docs/src/pages#article">Sorting</a></li>
							<li><a href="apps/docs/src/pages#article">Filtering</a></li>
							<li><a href="apps/docs/src/pages#article">Row Selection</a></li>
						</ul>
		</div>
		</>
	)
}

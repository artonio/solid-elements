import '../../App.scss';
import { CodeHighlighter } from '@/components/CodeHighlighter';
import { v4 as uuidv4 } from 'uuid';
import { onCleanup, onMount } from 'solid-js';

export const SelectButtonPage = () => {
	let articleRef!: HTMLDivElement;

	const importSelectButtonCode = `
		import { SelectButton } from '@solid-ui/solid-elements';
	`;


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
	return (
		<>
			<div class="app-main-content">
				<div ref={articleRef} id="article">
					<h2 id="import">Import via module</h2>
					<CodeHighlighter language="tsx" id={uuidv4()}>
						{importSelectButtonCode}
					</CodeHighlighter>
				</div>
			</div>
			<div class="app-right-sidebar">
				<ul>
					<li><a href="#import">Import</a></li>
					<li><a href="#basic">Basic</a></li>
					<li><a href="#article">Multiple</a></li>
					<li><a href="#article">Template</a></li>
					<li><a href="#article">Invalid</a></li>
					<li><a href="#article">Disabled</a></li>
				</ul>
			</div>
		</>
	)
}

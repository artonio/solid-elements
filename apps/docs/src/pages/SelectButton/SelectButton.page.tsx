import '../../App.scss';
import { CodeHighlighter } from '@/components/CodeHighlighter';
import { v4 as uuidv4 } from 'uuid';
import { createSignal, onCleanup, onMount } from 'solid-js';
import { SelectButton } from '@solid-ui/solid-elements/src/components/SelectButton/SelectButton';

interface Item {
	name: string;
	value: number;
}

export const SelectButtonPage = () => {
	const [value, setValue] = createSignal<Item | null>(null)
	let articleRef!: HTMLDivElement;

	const importSelectButtonCode = `
		import { SelectButton } from '@solid-ui/solid-elements';
	`;

	const items: Item[] = [
		{name: 'Option 1', value: 1},
		{name: 'Option 2', value: 2},
		{name: 'Option 3', value: 3}
	];


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
					<div class="s-card">
						<SelectButton options={items} value={value()} onChange={setValue} />
					</div>
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

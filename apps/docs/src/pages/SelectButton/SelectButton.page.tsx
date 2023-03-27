import '../../App.scss';
import { CodeHighlighter } from '@/components/CodeHighlighter';
import { v4 as uuidv4 } from 'uuid';
import { createSignal, onCleanup, onMount } from 'solid-js';
import { SelectButton, SelectItem } from '@solid-ui/solid-elements/src/components/SelectButton/SelectButton';


export const SelectButtonPage = () => {
	const items: string[] = [
		'Off',
		'On',
	];
	const [value, setValue] = createSignal<string>(items[0])
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

	const onChange = (e: any) => {
		console.log('onChange', e)
		setValue(e.value)
	}

	return (
		<>
			<div class="app-main-content">
				<div ref={articleRef} id="article">
					<h2 id="import">Import via module</h2>
					<CodeHighlighter language="tsx" id={uuidv4()}>
						{importSelectButtonCode}
					</CodeHighlighter>
					<div class="s-card">
						<SelectButton options={items} value={value()} onChange={(e) => {
							onChange(e)
						}} />
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

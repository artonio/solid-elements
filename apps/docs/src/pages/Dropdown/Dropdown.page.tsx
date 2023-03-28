import { onCleanup, onMount } from 'solid-js';
import { CodeHighlighter } from '@/components/CodeHighlighter';
import { v4 as uuidv4 } from 'uuid';
import { Dropdown } from '@solid-ui/solid-elements';

export const DropdownPage = () => {
	let articleRef!: HTMLDivElement;

	const options = [
		{ label: 'Kyoto', value: 'Kyoto' },
		{ label: 'Osaka', value: 'Osaka' },
		{ label: 'Tokyo', value: 'Tokyo' },
		{ label: 'Yokohama', value: 'Yokohama' },
		{ label: 'Nagoya', value: 'Nagoya'},
		{ label: 'Sapporo', value: 'Sapporo' },
		{ label: 'Fukuoka', value: 'Fukuoka' },
		{ label: 'Kobe', value: 'Kobe' },
		{ label: 'Kawasaki', value: 'Kawasaki' },
		{ label: 'Saitama', value: 'Saitama' },
		{ label: 'Chiba', value: 'Chiba' },
		{ label: 'Kitakyushu', value: 'Kitakyushu' },
		{ label: 'Kumamoto', value: 'Kumamoto' },
		{ label: 'Hiroshima', value: 'Hiroshima' },
		{ label: 'Sendai', value: 'Sendai' },
		{ label: 'Kagoshima', value: 'Kagoshima' },
		{ label: 'Sagamihara', value: 'Sagamihara' },
	];

	const importDropdownCode = `
		import { Dropdown } from '@solid-ui/solid-elements';
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
						{importDropdownCode}
					</CodeHighlighter>
					<h2 id="basic">Basic</h2>
					<div class="doc-section-description">
					</div>
					<div class="s-card">
						<Dropdown options={options} />
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

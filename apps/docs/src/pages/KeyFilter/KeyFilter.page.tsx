import { Component, onCleanup, onMount } from 'solid-js';
import { CodeHighlighter } from '@/components/CodeHighlighter';
import { v4 as uuidv4 } from 'uuid';
import { InputText } from '@solid-ui/solid-elements/src';

export const KeyFilterPage: Component = () => {
	let articleRef!: HTMLDivElement;

	const importInputCode = `
		import { InputText } from '@solid-ui/solid-elements';
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
						{importInputCode}
					</CodeHighlighter>
				</div>
			</div>
			<div class="app-right-sidebar">
				<ul>
					<li><a href="#import">Import</a></li>
					<li><a href="#presets">Presets</a></li>
					<li><a href="#regex">Regex</a></li>
				</ul>
			</div>
		</>
	)
}

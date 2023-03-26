import { Component, onCleanup, onMount } from 'solid-js';
import { CodeHighlighter } from '@/components/CodeHighlighter';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@solid-ui/solid-elements/src/components/Button/Button';

export const ButtonPage: Component<any> = () => {
	let articleRef!: HTMLDivElement;

	const importButtonCode = `
		import { Button } from '@solid-ui/solid-elements';
	`;

	const buttonSourceCode = `
		<Button label="Submit" />
	`;

	const buttonLinkSourceCode = `
		<Button label="Submit" link/>
	`

	const buttonDisabledSourceCode = `
		<Button label="Submit" disabled/>
	`

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
						{importButtonCode}
					</CodeHighlighter>
					<div class="s-card">
						<Button label="Submit" />
					</div>
					<CodeHighlighter language="tsx" id={uuidv4()}>
						{buttonSourceCode}
					</CodeHighlighter>
					<h2 id="link">Link</h2>
					<div class="s-card">
						<Button label="Submit" link/>
					</div>
					<CodeHighlighter language="tsx" id={uuidv4()}>
						{buttonLinkSourceCode}
					</CodeHighlighter>
					<h2 id="disabled">Disabled</h2>
					<div class="s-card">
						<Button label="Submit" disabled/>
					</div>
					<CodeHighlighter language="tsx" id={uuidv4()}>
						{buttonDisabledSourceCode}
					</CodeHighlighter>
				</div>
			</div>
			<div class="app-right-sidebar">
				<ul>
					<li><a href="#import">Import</a></li>
					<li><a href="#link">Link</a></li>
					<li><a href="#disabled">Disabled</a></li>
				</ul>
			</div>
		</>
	)
}

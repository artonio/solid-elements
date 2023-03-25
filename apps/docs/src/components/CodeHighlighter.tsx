import { children, onMount } from 'solid-js';
import Prism from 'prismjs';

interface ICodeHighlightProps {
	children: any;
	language?: string;
}

export const CodeHighlighter = (props: ICodeHighlightProps) => {
	const c = children(() => props.children);

	let codeRef!: HTMLElement;

	onMount(() => {
		Prism.highlightElement(codeRef);
	});

	const languageClassName = `language-${props.language || 'jsx'}`;

	return (
		<pre>
			<code ref={codeRef} class={languageClassName}>
				{c()}
			</code>
		</pre>
	)
}

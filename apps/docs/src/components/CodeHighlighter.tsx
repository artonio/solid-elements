import {children, createEffect, createSignal, on, onMount, Suspense} from 'solid-js';
import Prism from 'prismjs';
import "./CodeHighliter.scss"

interface ICodeHighlightProps {
	children: any;
	language?: string;
	toggleSourceCode?: boolean;
	onToggleSourceCode?: () => void;
	id: string;
}

export const CodeHighlighter = (props: ICodeHighlightProps) => {
	let c = children(() => props.children);
	const {toggleSourceCode, onToggleSourceCode, id} = props;

	let codeRef!: HTMLElement;

	// with 'on' we watch for changes in the children and highlight the code
	createEffect(on([c], () => {
		Prism.manual = true;
		if (toggleSourceCode) {
			// Highlight element does not work here and instead inserts duplicate code from previous state, very weird!
			// the workaround is to use innerHTML and Prism highlight function
			codeRef.innerHTML = Prism.highlight(props.children, Prism.languages.tsx, 'tsx');
		}
	}));

	const toggle = () => {
		onToggleSourceCode!();
	}

	const toggleSourceCodeBtn = () => {
		return (
			<div class="toolbar-btn" onClick={toggle}>
				<i class="pi pi-code"></i>
			</div>)
	}

	onMount(() => {
		Prism.manual = true;
		if (toggleSourceCode) {
			Prism.plugins.toolbar.registerButton(`toggle-source-code-${id}`,  (env: any) => {
				return toggleSourceCodeBtn();
			});
		}
		Prism.highlightElement(codeRef);
	});

	const languageClassName = `language-${props.language || 'jsx'}`;

	return (
		<>
			<pre data-toolbar-order={`toggle-source-code-${id}`}>
				<code ref={codeRef} id={props.id} class={languageClassName}>
					{c()}
				</code>
			</pre>
		</>
	)

}

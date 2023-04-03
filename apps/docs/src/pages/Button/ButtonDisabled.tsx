import { Button } from '@solid-ui/solid-elements/src';
import { v4 as uuidv4 } from 'uuid';
import { CodeHighlighter } from '@/components/CodeHighlighter';

export const ButtonDisabled = () => {
	const buttonSourceCode = `
		<Button label="Submit" disabled />
	`;
	return (
		<>
			<h2 id="disabled">Disabled</h2>
			<div class="doc-section-description">
				<p>When <i>disabled</i> is present, the element cannot be edited and focused.</p>
			</div>
			<div class="s-card">
				<Button label="Submit" disabled/>
			</div>
			<CodeHighlighter language="tsx" id={uuidv4()}>
				{buttonSourceCode}
			</CodeHighlighter>
		</>
	)
}

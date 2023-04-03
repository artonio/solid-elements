import { Button } from '@solid-ui/solid-elements/src';
import { v4 as uuidv4 } from 'uuid';
import { CodeHighlighter } from '@/components/CodeHighlighter';

export const ButtonBasic = () => {
	const buttonSourceCode = `
		<Button label="Submit" />
	`;
	return (
		<>
			<h2 id="basic">Basic</h2>
			<div class="doc-section-description">
				<p>Text to display on a button is defined with the <i>label</i> property.</p>
			</div>
			<div class="s-card">
				<Button label="Submit"/>
			</div>
			<CodeHighlighter language="tsx" id={uuidv4()}>
				{buttonSourceCode}
			</CodeHighlighter>
		</>
	)
}

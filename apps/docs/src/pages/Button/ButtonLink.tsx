import { Button } from '@solid-ui/solid-elements/src';
import { v4 as uuidv4 } from 'uuid';
import { CodeHighlighter } from '@/components/CodeHighlighter';

export const ButtonLink = () => {
	const buttonSourceCode = `
		<Button label="Submit" link />
	`;
	return (
		<>
			<h2 id="link">Link</h2>
			<div class="doc-section-description">
				<p>A button can be rendered as a link as well.
				</p>
			</div>
			<div class="s-card">
				<Button label="Submit" link/>
			</div>
			<CodeHighlighter language="tsx" id={uuidv4()}>
				{buttonSourceCode}
			</CodeHighlighter>
		</>
	)
}

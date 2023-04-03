import { Button } from '@solid-ui/solid-elements/src';
import { v4 as uuidv4 } from 'uuid';
import { CodeHighlighter } from '@/components/CodeHighlighter';

export const ButtonIcon = () => {
	const buttonSourceCode = `
		<Button icon="pi pi-check" />
		<Button label="Submit" icon="pi pi-check" />
		<Button label="Submit" icon="pi pi-check" iconPos="right" />
	`;
	return (
		<>
			<h2 id="icons">Icons</h2>
			<div class="doc-section-description">
				<p>Icon of a button is specified with <i>icon</i> property and position is configured using <i>iconPos</i> attribute.</p>
			</div>
			<div class="s-card">
				<div style={{display: 'flex', gap: '10px'}}>
					<Button icon="pi pi-check" />
					<Button label="Submit" icon="pi pi-check" />
					<Button label="Submit" icon="pi pi-check" iconPos="right" />
				</div>

			</div>
			<CodeHighlighter language="tsx" id={uuidv4()}>
				{buttonSourceCode}
			</CodeHighlighter>
		</>
	)
}

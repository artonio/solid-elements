import { Button } from '@solid-ui/solid-elements/src';
import { v4 as uuidv4 } from 'uuid';
import { CodeHighlighter } from '@/components/CodeHighlighter';

export const ButtonSeverity = () => {
	const buttonSourceCode = `
		<Button label="Primary" />
		<Button label="Secondary" severity="secondary" />
		<Button label="Success" severity="success" />
		<Button label="Info" severity="info" />
		<Button label="Warning" severity="warning" />
		<Button label="Help" severity="help" />
		<Button label="Danger" severity="danger" />
	`;
	return (
		<>
			<h2 id="severity">Severity</h2>
			<div class="doc-section-description">
				<p>Severity defines the type of button.</p>
			</div>
			<div class="s-card">
				<div style={{display: 'flex', gap: '10px'}}>
					<Button label="Primary" />
					<Button label="Secondary" severity="secondary" />
					<Button label="Success" severity="success" />
					<Button label="Info" severity="info" />
					<Button label="Warning" severity="warning" />
					<Button label="Help" severity="help" />
					<Button label="Danger" severity="danger" />
				</div>

			</div>
			<CodeHighlighter language="tsx" id={uuidv4()}>
				{buttonSourceCode}
			</CodeHighlighter>
		</>
	)
}

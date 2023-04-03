import { Button } from '@solid-ui/solid-elements/src';
import { v4 as uuidv4 } from 'uuid';
import { CodeHighlighter } from '@/components/CodeHighlighter';

export const ButtonRounded = () => {
	const buttonSourceCode = `
		<Button label="Primary" />
		<Button label="Secondary" severity="secondary" rounded />
		<Button label="Success" severity="success" rounded />
		<Button label="Info" severity="info" rounded />
		<Button label="Warning" severity="warning" rounded />
		<Button label="Help" severity="help" rounded />
		<Button label="Danger" severity="danger" rounded />
	`;
	return (
		<>
			<h2 id="rounded">Rounded</h2>
			<div class="doc-section-description">
				<p>Rounded buttons have a circular border radius.</p>
			</div>
			<div class="s-card">
				<div style={{display: 'flex', gap: '10px'}}>
					<Button label="Primary" />
					<Button label="Secondary" severity="secondary" rounded />
					<Button label="Success" severity="success" rounded />
					<Button label="Info" severity="info" rounded />
					<Button label="Warning" severity="warning" rounded />
					<Button label="Help" severity="help" rounded />
					<Button label="Danger" severity="danger" rounded />
				</div>

			</div>
			<CodeHighlighter language="tsx" id={uuidv4()}>
				{buttonSourceCode}
			</CodeHighlighter>
		</>
	)
}

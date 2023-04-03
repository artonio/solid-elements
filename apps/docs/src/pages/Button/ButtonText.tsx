import { Button } from '@solid-ui/solid-elements/src';
import { v4 as uuidv4 } from 'uuid';
import { CodeHighlighter } from '@/components/CodeHighlighter';

export const ButtonText = () => {
	const buttonSourceCode = `
		<Button label="Primary" text />
		<Button label="Secondary" severity="secondary" text />
		<Button label="Success" severity="success" text />
		<Button label="Info" severity="info" text />
		<Button label="Warning" severity="warning" text />
		<Button label="Help" severity="help" text />
		<Button label="Danger" severity="danger" text />
	`;
	return (
		<>
			<h2 id="text">Text</h2>
			<div class="doc-section-description">
				<p>Text buttons are displayed as textual elements.</p>
			</div>
			<div class="s-card">
				<div style={{display: 'flex', gap: '10px'}}>
					<Button label="Primary" text />
					<Button label="Secondary" severity="secondary" text />
					<Button label="Success" severity="success" text />
					<Button label="Info" severity="info" text />
					<Button label="Warning" severity="warning" text />
					<Button label="Help" severity="help" text />
					<Button label="Danger" severity="danger" text />
				</div>

			</div>
			<CodeHighlighter language="tsx" id={uuidv4()}>
				{buttonSourceCode}
			</CodeHighlighter>
		</>
	)
}

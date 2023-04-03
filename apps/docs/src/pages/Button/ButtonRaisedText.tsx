import { Button } from '@solid-ui/solid-elements/src';
import { v4 as uuidv4 } from 'uuid';
import { CodeHighlighter } from '@/components/CodeHighlighter';

export const ButtonRaisedText = () => {
	const buttonSourceCode = `
		<Button label="Primary" text raised />
		<Button label="Secondary" severity="secondary" text raised />
		<Button label="Success" severity="success" text raised />
		<Button label="Info" severity="info" text raised />
		<Button label="Warning" severity="warning" text raised />
		<Button label="Help" severity="help" text raised />
		<Button label="Danger" severity="danger" text raised />
	`;
	return (
		<>
			<h2 id="raised-text">Raised Text</h2>
			<div class="doc-section-description">
				<p>Text buttons can be displayed as raised for elevation.</p>
			</div>
			<div class="s-card">
				<div style={{display: 'flex', gap: '10px'}}>
					<Button label="Primary" text raised />
					<Button label="Secondary" severity="secondary" text raised />
					<Button label="Success" severity="success" text raised />
					<Button label="Info" severity="info" text raised />
					<Button label="Warning" severity="warning" text  raised/>
					<Button label="Help" severity="help" text raised />
					<Button label="Danger" severity="danger" text raised />
				</div>

			</div>
			<CodeHighlighter language="tsx" id={uuidv4()}>
				{buttonSourceCode}
			</CodeHighlighter>
		</>
	)
}

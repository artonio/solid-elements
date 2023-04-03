import { Button } from '@solid-ui/solid-elements/src';
import { v4 as uuidv4 } from 'uuid';
import { CodeHighlighter } from '@/components/CodeHighlighter';

export const ButtonRaised = () => {
	const buttonSourceCode = `
		<Button label="Primary" />
		<Button label="Secondary" severity="secondary" raised />
		<Button label="Success" severity="success" raised />
		<Button label="Info" severity="info" raised />
		<Button label="Warning" severity="warning" raised />
		<Button label="Help" severity="help" raised />
		<Button label="Danger" severity="danger" raised />
	`;
	return (
		<>
			<h2 id="raised">Raised</h2>
			<div class="doc-section-description">
				<p>Raised buttons display a shadow to indicate elevation.</p>
			</div>
			<div class="s-card">
				<div style={{display: 'flex', gap: '10px'}}>
					<Button label="Primary" />
					<Button label="Secondary" severity="secondary" raised />
					<Button label="Success" severity="success" raised />
					<Button label="Info" severity="info" raised />
					<Button label="Warning" severity="warning" raised />
					<Button label="Help" severity="help" raised />
					<Button label="Danger" severity="danger" raised />
				</div>

			</div>
			<CodeHighlighter language="tsx" id={uuidv4()}>
				{buttonSourceCode}
			</CodeHighlighter>
		</>
	)
}

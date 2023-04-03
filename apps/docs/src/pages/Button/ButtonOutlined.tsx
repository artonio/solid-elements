import { Button } from '@solid-ui/solid-elements/src';
import { v4 as uuidv4 } from 'uuid';
import { CodeHighlighter } from '@/components/CodeHighlighter';

export const ButtonOutlined = () => {
	const buttonSourceCode = `
		<Button label="Primary" text raised />
		<Button label="Secondary" severity="secondary" outlined />
		<Button label="Success" severity="success" outlined />
		<Button label="Info" severity="info" outlined />
		<Button label="Warning" severity="warning" outlined />
		<Button label="Help" severity="help" outlined />
		<Button label="Danger" severity="danger" outlined />
	`;
	return (
		<>
			<h2 id="outlined">Outlined</h2>
			<div class="doc-section-description">
				<p>Outlined buttons display a border without a background initially.</p>
			</div>
			<div class="s-card">
				<div style={{display: 'flex', gap: '10px'}}>
					<Button label="Primary" outlined />
					<Button label="Secondary" severity="secondary" outlined />
					<Button label="Success" severity="success" outlined />
					<Button label="Info" severity="info" outlined />
					<Button label="Warning" severity="warning" outlined/>
					<Button label="Help" severity="help" outlined />
					<Button label="Danger" severity="danger" outlined />
				</div>

			</div>
			<CodeHighlighter language="tsx" id={uuidv4()}>
				{buttonSourceCode}
			</CodeHighlighter>
		</>
	)
}

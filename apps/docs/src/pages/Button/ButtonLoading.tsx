import { Button } from '@solid-ui/solid-elements';
import { v4 as uuidv4 } from 'uuid';
import { CodeHighlighter } from '@/components/CodeHighlighter';
import { createSignal } from 'solid-js';

export const ButtonLoading = () => {
	const [loading, setLoading] = createSignal(false);
	const [isToggled, setIsToggled] = createSignal(true)

	const buttonSourceCode = `
		<Button label="Submit" icon="pi pi-check" loading={loading} onClick={load} />
	`;

	const expandedButtonCode = `
		import React, { useState } from "react";
		import { Button } from '@solid-ui/solid-elements';
		
		export default function LoadingDemo() {
			const [loading, setLoading] = createSignal(false);
		
			const load = () => {
				setLoading(true);
		
				setTimeout(() => {
					setLoading(false);
				}, 2000);
			};
		
			return (
				<div className="card flex flex-wrap justify-content-center gap-3">
					<Button label="Submit" icon="pi pi-check" loading={loading} onClick={load} />
				</div>
			)
}
	`

	const load = () => {
		setLoading(true);

		setTimeout(() => {
			setLoading(false);
		}, 2000);
	};


	const [code, setCode] = createSignal(buttonSourceCode)
	const sourceCodeToggled = () => {
		setIsToggled(!isToggled())
		if (isToggled()) {
			setCode(buttonSourceCode)
		} else {
			setCode(expandedButtonCode)
		}
	}

	return (
		<>
			<h2 id="loading">Loading</h2>
			<div class="doc-section-description">
				<p>Busy state is controlled with the <i>loading</i> property.</p>
			</div>
			<div class="s-card">
				<Button label="Submit" icon="pi pi-check" loading={loading()} onClick={load} />

			</div>
			<CodeHighlighter language="tsx" id={uuidv4()} toggleSourceCode onToggleSourceCode={sourceCodeToggled}>
				{code()}
			</CodeHighlighter>
		</>
	)
}

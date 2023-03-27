import { createSignal } from 'solid-js';
import { SelectButton } from '@solid-ui/solid-elements/src';
import { v4 as uuidv4 } from 'uuid';
import { CodeHighlighter } from '@/components/CodeHighlighter';

export const SelectButtonMultiple = () => {
	const [value, setValue] = createSignal(null);
	const [isToggled, setIsToggled] = createSignal(true)
	const items = [
		{name: 'Option 1', value: 1},
		{name: 'Option 2', value: 2},
		{name: 'Option 3', value: 3}
	];
	const basicShortCode = `
		<SelectButton value={value} onChange={(e) => setValue(e.value)} options={options} multiple />
	`

	const expandedCode = `
		import { SelectButton } from '@solid-ui/solid-elements';
		export const SelectButtonBasicDemo = () => {
			const [value, setValue] = createSignal(null);
			const items = [
				\t\t{name: 'Option 1', value: 1},
				\t\t{name: 'Option 2', value: 2},
				\t\t{name: 'Option 3', value: 3}
				\t];
			return (
				<SelectButton value={value()}
\t\t\t\t\t\t\t  onChange={(e: any) => setValue(e.value)}
\t\t\t\t\t\t\t  optionLabel="name"
\t\t\t\t\t\t\t  options={items}
\t\t\t\t\t\t\t  multiple
\t\t\t\t/>
			)
		}
	`
	const [code, setCode] = createSignal(basicShortCode)
	const sourceCodeToggled = () => {
		setIsToggled(!isToggled())
		if (isToggled()) {
			setCode(basicShortCode)
		} else {
			setCode(expandedCode)
		}
	}
	return (
		<>
			<h2 id="multiple">Multiple</h2>
			<div class="doc-section-description">
				<p>SelectButton allows selecting only one item by default and enabling <i>multiple</i> allows choosing
					more. In multiple case, <i>value</i> property should be an array instead of a single value.</p>
			</div>
			<div class="s-card">
				<SelectButton value={value()}
							  onChange={(e: any) => setValue(e.value)}
							  optionLabel="name"
							  options={items}
							  multiple
				/>
			</div>
			<CodeHighlighter language="tsx" id={uuidv4()} toggleSourceCode onToggleSourceCode={sourceCodeToggled}>
				{code()}
			</CodeHighlighter>
		</>
	)
}

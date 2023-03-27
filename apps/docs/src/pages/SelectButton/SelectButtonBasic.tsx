import { SelectButton } from '@solid-ui/solid-elements/src';
import { CodeHighlighter } from '@/components/CodeHighlighter';
import { v4 as uuidv4 } from 'uuid';
import { createSignal } from 'solid-js';

export const SelectButtonBasic = () => {
	const basicModel: string[] = [
		'Off',
		'On',
	];
	const [isToggled, setIsToggled] = createSignal(true)
	const [basicValue, setBasicValue] = createSignal<string>(basicModel[0])

	const onChange = (e: any) => {
		setBasicValue(e.value)
	}

	const basicShortCode = `
		<SelectButton value={value} onChange={(e) => setValue(e.value)} options={options} />
	`

	const expandedCode = `
		import { SelectButton } from '@solid-ui/solid-elements';
		export const SelectButtonBasicDemo = () => {
			const options = ['Off', 'On'];
			const [value, setValue] = createSignal<string>(basicModel[0])
			
			return (
			 	<SelectButton value={value} onChange={(e) => setValue(e.value)} options={options} />
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
			<h2 id="basic">Basic</h2>
			<div class="doc-section-description"><p>SelectButton is used as a controlled component
				with <i>value</i> and <i>onChange</i> properties along with an <i>options</i> collection. Label
				and value of an option are defined with the <i>optionLabel</i> and <i>optionValue</i> properties
				respectively. Default property name for
				the <i>optionLabel</i> is <i>label</i> and <i>value</i> for the <i>optionValue</i>.
				If <i>optionValue</i> is omitted and the object has no <i>value</i> property, the object itself
				becomes the value of an option. Note that, when options are simple primitive values such as a
				string array, no <i>optionLabel</i> and <i>optionValue</i> would be necessary.</p></div>
			<div class="s-card">
				<SelectButton options={basicModel} value={basicValue()} onChange={(e) => {
					onChange(e)
				}}/>
			</div>
			<CodeHighlighter language="tsx" id={uuidv4()} toggleSourceCode onToggleSourceCode={sourceCodeToggled}>
				{code()}
			</CodeHighlighter>
		</>
	)
}

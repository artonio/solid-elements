import '../../App.scss';
import { CodeHighlighter } from '@/components/CodeHighlighter';
import { v4 as uuidv4 } from 'uuid';
import { createSignal, onCleanup, onMount } from 'solid-js';
import { SelectButton, SelectItem } from '@solid-ui/solid-elements/src/components/SelectButton/SelectButton';


export const SelectButtonPage = () => {
	const basicModel: string[] = [
		'Off',
		'On',
	];
	const [basicValue, setBasicValue] = createSignal<string>(basicModel[0])
	let articleRef!: HTMLDivElement;

	const importSelectButtonCode = `
		import { SelectButton } from '@solid-ui/solid-elements';
	`;

	const basicShortCode = `
		<SelectButton value={value} onChange={(e) => setValue(e.value)} options={options} />
	`


	const onResize = () => {
		console.log(articleRef)
		articleRef.style.height = window.innerHeight - 56 - 30 - 130 + 'px';
		console.log('resize height: ', window.innerHeight, ' width: ', window.innerWidth)
	};

	onMount(() => {
		articleRef.style.height = window.innerHeight - 56 - 30 - 130+ 'px';
		window.addEventListener('resize', onResize);
	});

	onCleanup(() => {
		window.removeEventListener('resize', onResize);
	});

	const onChange = (e: any) => {
		setBasicValue(e.value)
	}

	return (
		<>
			<div class="app-main-content">
				<div ref={articleRef} id="article">
					<h2 id="import">Import via module</h2>
					<CodeHighlighter language="tsx" id={uuidv4()}>
						{importSelectButtonCode}
					</CodeHighlighter>
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
						}} />
					</div>
					<CodeHighlighter language="tsx" id={uuidv4()} toggleSourceCode>
						{basicShortCode}
					</CodeHighlighter>

				</div>
			</div>
			<div class="app-right-sidebar">
				<ul>
					<li><a href="#import">Import</a></li>
					<li><a href="#basic">Basic</a></li>
					<li><a href="#article">Multiple</a></li>
					<li><a href="#article">Template</a></li>
					<li><a href="#article">Invalid</a></li>
					<li><a href="#article">Disabled</a></li>
				</ul>
			</div>
		</>
	)
}

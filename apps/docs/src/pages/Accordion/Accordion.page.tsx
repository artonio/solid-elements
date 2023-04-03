import { onCleanup, onMount } from 'solid-js';
import { Accordion, AccordionTab } from '@solid-ui/solid-elements/src/components/Accordion/Accordion';
import {CodeHighlighter} from "@/components/CodeHighlighter";
import {v4 as uuidv4} from "uuid";
import {BasicAccordion} from "@/pages/Accordion/BasicAccordion";
import {AccordionMultiple} from "@/pages/Accordion/AccordionMultiple";
import {AccordionDisabled} from "@/pages/Accordion/AccordionDisabled";
import {AccordionTemplate} from "@/pages/Accordion/AccordionTemplate";

export const AccordionPage = () => {
	let articleRef!: HTMLDivElement;

	const importAccordionCode = `
		import { Accordion, AccordionTab } from '@solid-ui/solid-elements';
	`;

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


	return (
		<>
			<div class="app-main-content">
				<div ref={articleRef} id="article">
					<h2 id="import">Import via module</h2>
					<CodeHighlighter language="tsx" id={uuidv4()}>
						{importAccordionCode}
					</CodeHighlighter>
					<BasicAccordion/>
					<AccordionMultiple/>
					<AccordionDisabled/>
					<AccordionTemplate/>
				</div>
			</div>
			<div class="app-right-sidebar">
				<ul>
					<li><a href="#import">Import</a></li>
					<li><a href="#basic">Basic</a></li>
					<li><a href="#multiple">Multiple</a></li>
					<li><a href="#disabled">Disabled</a></li>
					<li><a href="#template">Template</a></li>
				</ul>
			</div>
		</>
	)
}

import { Component, onCleanup, onMount } from 'solid-js';
import { CodeHighlighter } from '@/components/CodeHighlighter';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@solid-ui/solid-elements/src/components/Button/Button';
import { ButtonBasic } from '@/pages/Button/ButtonBasic';
import { ButtonLink } from '@/pages/Button/ButtonLink';
import { ButtonDisabled } from '@/pages/Button/ButtonDisabled';
import { ButtonIcon } from '@/pages/Button/ButtonIcon';
import { ButtonLoading } from '@/pages/Button/ButtonLoading';
import { ButtonSeverity } from '@/pages/Button/ButtonSeverity';
import { ButtonRaised } from '@/pages/Button/ButtonRaised';
import { ButtonRounded } from '@/pages/Button/ButtonRounded';
import { ButtonText } from '@/pages/Button/ButtonText';
import { ButtonRaisedText } from '@/pages/Button/ButtonRaisedText';
import { ButtonOutlined } from '@/pages/Button/ButtonOutlined';
import { ButtonIconOnly } from '@/pages/Button/ButtonIconOnly';

export const ButtonPage: Component<any> = () => {
	let articleRef!: HTMLDivElement;

	const importButtonCode = `
		import { Button } from '@solid-ui/solid-elements';
	`;

	const buttonSourceCode = `
		<Button label="Submit" />
	`;

	const buttonLinkSourceCode = `
		<Button label="Submit" link/>
	`

	const buttonDisabledSourceCode = `
		<Button label="Submit" disabled/>
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
	return (
		<>
			<div class="app-main-content">
				<div ref={articleRef} id="article">
					<h2 id="import">Import via module</h2>
					<CodeHighlighter language="tsx" id={uuidv4()}>
						{importButtonCode}
					</CodeHighlighter>
					<ButtonBasic />
					<ButtonLink />
					<ButtonDisabled />
					<ButtonIcon />
					<ButtonLoading />
					<ButtonSeverity />
					<ButtonRaised />
					<ButtonRounded />
					<ButtonText />
					<ButtonRaisedText />
					<ButtonOutlined />
					<ButtonIconOnly />
				</div>
			</div>
			<div class="app-right-sidebar">
				<ul>
					<li><a href="#import">Import</a></li>
					<li><a href="#basic">Basic</a></li>
					<li><a href="#link">Link</a></li>
					<li><a href="#disabled">Disabled</a></li>
					<li><a href="#icons">Icons</a></li>
					<li><a href="#loading">Loading</a></li>
					<li><a href="#severity">Severity</a></li>
					<li><a href="#raised">Raised</a></li>
					<li><a href="#rounded">Rounded</a></li>
					<li><a href="#text">Text</a></li>
					<li><a href="#raised-text">Raised Text</a></li>
					<li><a href="#outlined">Outlined</a></li>
					<li><a href="#icon-only">Icon Only</a></li>
				</ul>
			</div>
		</>
	)
}

import { onCleanup, onMount } from 'solid-js';
import { Accordion, AccordionTab } from '@solid-ui/solid-elements/src/components/Accordion/Accordion';

export const AccordionPage = () => {
	let articleRef!: HTMLDivElement;
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
					<div class="s-card">
						<Accordion activeIndex={0}>
							<AccordionTab header="Header I">
								<p class="m-0">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
									commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
									Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
								</p>
							</AccordionTab>
							<AccordionTab header="Header II">
								<p class="m-0">
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
									quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
									sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
									Consectetur, adipisci velit, sed quia non numquam eius modi.
								</p>
							</AccordionTab>
							<AccordionTab header="Header III">
								<p class="m-0">
									At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
									quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
									mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
									Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
								</p>
							</AccordionTab>
						</Accordion>
					</div>
				</div>
			</div>
			<div class="app-right-sidebar">
				<ul>
					<li><a href="#import">Import</a></li>
					<li><a href="#link">Link</a></li>
					<li><a href="#disabled">Disabled</a></li>
				</ul>
			</div>
		</>
	)
}

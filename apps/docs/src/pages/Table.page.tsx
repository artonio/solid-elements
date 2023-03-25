import './../App.scss';
import { onCleanup, onMount } from 'solid-js';

export const TablePage = () => {
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
				content
			</div>
		</div>
		<div class="app-right-sidebar">
						MENU
		</div>
		</>
	)
}

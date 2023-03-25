import './../App.scss';
import { Table } from '@solid-ui/solid-elements/src';
import { Menu } from '@/components/Menu';
import { CodeHighlighter } from '@/components/CodeHighlighter';
import { Outlet } from '@solidjs/router';
interface IPageWrapperProps {

}

const PageWrapper = (props: IPageWrapperProps) => {

	let articleRef!: HTMLDivElement;

	const onMenuItemClick = (path: string) => {
		console.log(path)
	}

	return (
			<div class="app-main-container">
				<div class="app-header">
					<span>Solid Elements</span>
				</div>
				<div class="app-content-container">
					<div class="app-left-sidebar">
						<Menu onMenuClick={onMenuItemClick}/>
					</div>
					<Outlet/>
				</div>
				<div class="app-footer">
					<span>v1.0.0</span>
				</div>
			</div>
	)
}
export default PageWrapper;

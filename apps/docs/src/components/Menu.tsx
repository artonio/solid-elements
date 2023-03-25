import './Menu.scss';
import { Accessor, For } from 'solid-js';
import type { Component } from 'solid-js';
import { A } from "@solidjs/router"

export interface IMenuProps {
	onMenuClick: (path: string) => void;
}

export const Menu: Component<IMenuProps> = (props: IMenuProps) => {

	const { onMenuClick } = props;

	const menuModel = [
		{
			label: 'Form',
			children: [
				{
					label: 'Input',
					to: 'input'

				},
				{
					label: 'Dropdown',
					to: 'dropdown'

				}
			]
		},
		{
			label: 'Data',
			children: [
				{
					label: 'Table',
					to: 'table',
					children: [
						{
							label: 'Documentation',
							to: '/docs/table'
						},
						{
							label: "Basic",
							to: "/datatable/basic",
						}
					]
				},
				{
					label: 'Paginator',
					to: 'paginator'
				}
			]
		}
	];

	const renderMenu = () => {
		return (
			<For each={menuModel}>
				{(menuItem, index: Accessor<number>) => {
					const categoryItem = renderCategoryItem(menuItem, index());
					return (
						<>
							<div class="menu-category">
								{menuItem.label}
							</div>
							{menuItem.children && <div class="menu-items">{categoryItem}</div>}
						</>
					)}
				}
			</For>
		)
	}

	const renderCategoryItem = (menuitem: any, menuitemIndex: number) => {
		if (!menuitem.children) {
			return null;
		}

		return (
			<div>
				<For each={menuitem.children}>
					{(item, index) => {
						const submenuKey = `${menuitemIndex}_${index}`;
						console.log(item)
						return (
							<>
								<A href={item.to || ''} onClick={[onMenuClick, item.to || 'undefined']}>{item.label}</A>
								{/*<a>{item.label}</a>*/}
							</>
						)
					}}
				</For>
			</div>
		)
	}



	return (
		<div class="layout-sidebar" role="navigation">
			<div class="layout-menu" role="menubar">
					{renderMenu()}
			</div>
		</div>
	)
}

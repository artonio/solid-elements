import './Menu.scss';
import { Accessor, Component, For } from 'solid-js';
export const Menu: Component = () => {

	const menuModel = [
		{
			label: 'Form',
			children: [
				{
					label: 'Input',
					children: [
						{
							label: 'Documentation',
							to: '/docs/input'
						}
					]
				},
				{
					label: 'Dropdown',
					children: [
						{
							label: 'Documentation',
							to: '/docs/dropdown'
						}
					]
				}
			]
		},
		{
			label: 'Data',
			children: [
				{
					label: 'Table',
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
					children: [
						{
							label: 'Documentation',
							to: '/docs/paginator'
						}
					]
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
			<>
				<For each={menuitem.children}>
					{(item, index) => {
						const submenuKey = `${menuitemIndex}_${index}`;
						return (
							<>
								<a>{item.label}</a>
							</>
						)
					}}
				</For>
			</>
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

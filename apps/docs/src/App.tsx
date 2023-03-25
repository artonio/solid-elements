import type { Component } from 'solid-js';
import { Paginator, Table } from '@solid-ui/solid-elements';
import { createSignal, onCleanup, onMount } from 'solid-js';
import { Menu } from '@/components/Menu';
import './App.scss';

const App: Component = () => {

	let articleRef!: HTMLDivElement;

	const [first, setFirst] = createSignal(0);
	const [rows, setRows] = createSignal(5);
	const [selectedRow, setSelectedRow] = createSignal<any>(null);

	const tableData = [
		{
			"firstName": "Savage",
			"lastName": "Norris",
			"age": 5
		},
		{
			"firstName": "Parker",
			"lastName": "Bryant",
			"age": 10
		},
		{
			"firstName": "Asra",
			"lastName": "Langley",
			"age": 5
		},
		{
			"firstName": "Gomez",
			"lastName": "Mccray",
			"age": 0
		},
		{
			"firstName": "Nico",
			"lastName": "Nolan",
			"age": 6
		},
		{
			"firstName": "Shawn",
			"lastName": "Foreman",
			"age": 0
		},
		{
			"firstName": "Emery",
			"lastName": "Gould",
			"age": 10
		},
		{
			"firstName": "Riley",
			"lastName": "Newman",
			"age": 3
		},
		{
			"firstName": "Farren",
			"lastName": "Solomon",
			"age": 6
		},
		{
			"firstName": "Jody",
			"lastName": "Solomon",
			"age": 9
		},
		{
			"firstName": "Hildred",
			"lastName": "Rosales",
			"age": 1
		},
		{
			"firstName": "Shawn",
			"lastName": "Bright",
			"age": 4
		},
		{
			"firstName": "Bailey",
			"lastName": "Simmons",
			"age": 4
		},
		{
			"firstName": "Sage",
			"lastName": "Case",
			"age": 9
		},
		{
			"firstName": "Campbell",
			"lastName": "Allen",
			"age": 10
		},
		{
			"firstName": "Shawn",
			"lastName": "Austin",
			"age": 10
		},
		{
			"firstName": "Emery",
			"lastName": "Harding",
			"age": 2
		},
		{
			"firstName": "Hildred",
			"lastName": "Langley",
			"age": 7
		},
		{
			"firstName": "Duffy",
			"lastName": "Bright",
			"age": 5
		},
		{
			"firstName": "Gomez",
			"lastName": "Case",
			"age": 6
		},
		{
			"firstName": "Jean",
			"lastName": "Austin",
			"age": 9
		},
		{
			"firstName": "Emery",
			"lastName": "Guthrie",
			"age": 8
		},
		{
			"firstName": "Rory",
			"lastName": "Rosales",
			"age": 4
		},
		{
			"firstName": "Bailey",
			"lastName": "Burke",
			"age": 4
		},
		{
			"firstName": "Jody",
			"lastName": "Allen",
			"age": 6
		},
		{
			"firstName": "Shiloh",
			"lastName": "Ellison",
			"age": 2
		},
		{
			"firstName": "Vasquez",
			"lastName": "Sexton",
			"age": 9
		},
		{
			"firstName": "Jude",
			"lastName": "Reed",
			"age": 6
		},
		{
			"firstName": "Mildred",
			"lastName": "Black",
			"age": 5
		},
		{
			"firstName": "Campbell",
			"lastName": "Phillips",
			"age": 1
		},
		{
			"firstName": "Riley",
			"lastName": "Reed",
			"age": 3
		},
		{
			"firstName": "Bailey",
			"lastName": "Webster",
			"age": 2
		},
		{
			"firstName": "Mildred",
			"lastName": "Battle",
			"age": 3
		},
		{
			"firstName": "Parker",
			"lastName": "Figueroa",
			"age": 5
		},
		{
			"firstName": "Shawn",
			"lastName": "Newman",
			"age": 4
		},
		{
			"firstName": "Rory",
			"lastName": "Harrison",
			"age": 1
		},
		{
			"firstName": "Embry",
			"lastName": "Norris",
			"age": 3
		},
		{
			"firstName": "Bailey",
			"lastName": "Harrison",
			"age": 10
		},
		{
			"firstName": "Savage",
			"lastName": "Rosales",
			"age": 9
		},
		{
			"firstName": "Parker",
			"lastName": "Hutchinson",
			"age": 5
		},
		{
			"firstName": "Bates",
			"lastName": "Webster",
			"age": 6
		},
		{
			"firstName": "Savage",
			"lastName": "Black",
			"age": 1
		},
		{
			"firstName": "Chance",
			"lastName": "Allen",
			"age": 2
		},
		{
			"firstName": "Jean",
			"lastName": "Mccray",
			"age": 10
		},
		{
			"firstName": "Duffy",
			"lastName": "Newman",
			"age": 3
		},
		{
			"firstName": "Emery",
			"lastName": "Solomon",
			"age": 6
		},
		{
			"firstName": "Rory",
			"lastName": "Christensen",
			"age": 6
		},
		{
			"firstName": "Asra",
			"lastName": "Battle",
			"age": 8
		},
		{
			"firstName": "Campbell",
			"lastName": "West",
			"age": 6
		},
		{
			"firstName": "Bailey",
			"lastName": "Webster",
			"age": 4
		}
	];

	const columns = [
		{
			code: "firstName",
			header: "First Name"
		},
		{
			code: "lastName",
			header: "Last Name"
		},
		{
			code: "age",
			header: "Age"
		}
	];

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

	const onPageChange = (event: any) => {
		setFirst(event.first);
		setRows(event.rows)
	}

	const selectionChanged = (value: any) => {
		console.log(value)
		setSelectedRow(value)
	}

	return (
		<>
			<div class="app-main-container">
				<div class="app-header item-margin">
					<span>Solid Elements</span>
				</div>
				<div class="app-content-container item-margin">

					<div class="app-main-content item-margin">
						<div ref={articleRef} id="article">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lectus nunc, ultrices quis
							ipsum vitae, bibendum suscipit urna. Suspendisse molestie quam quis porta posuere. Nullam ut
							libero ultrices, ultricies nisl ac, rutrum tortor. Mauris pharetra convallis nisi ac
							feugiat. Nullam at scelerisque nunc. Fusce ullamcorper bibendum ultricies. Pellentesque
							risus mauris, viverra eget ligula et, efficitur rutrum erat.

							Ut pharetra ac nunc vitae molestie. Cras bibendum turpis odio, at vulputate nisl tempor ut.
							Vivamus eu diam arcu. Aenean pretium, nisi at interdum auctor, massa augue lacinia arcu, at
							fermentum sapien ante sit amet lacus. Cras placerat sollicitudin aliquam. Quisque eget ante
							nec dolor sagittis pulvinar in eu arcu. Mauris et laoreet arcu, vel laoreet nulla. In erat
							velit, ultrices sed elementum eget, molestie sit amet est. Integer vitae vehicula metus,
							interdum tempor mi. Vestibulum id elementum massa. Nunc ultricies efficitur pretium. Cras
							ante augue, blandit ac massa nec, sodales gravida ligula. Ut quis lacus ante. Nullam non
							nibh turpis. Sed nec consequat nulla, vestibulum molestie augue. Integer ut lacinia arcu,
							non elementum leo.

							Vivamus eget risus quis leo auctor egestas. Duis eget urna sed mi consequat cursus. Duis
							pulvinar leo risus, ultricies sagittis ante aliquet quis. Duis nec diam semper nunc
							consequat iaculis. Nulla efficitur tristique massa, quis interdum augue vehicula id.
							Maecenas tempus sodales eros id congue. Integer ac facilisis elit. Mauris ut euismod ex.

							Phasellus quis libero urna. Suspendisse et vehicula mi, at tempor nunc. Donec egestas
							hendrerit massa eu gravida. Phasellus ut urna sed lorem efficitur cursus eu eget elit.
							Mauris efficitur nisl eu odio feugiat, a auctor nunc efficitur. Quisque accumsan, diam vel
							porta tristique, diam tellus vestibulum libero, sed elementum leo mauris eu eros. Donec
							accumsan accumsan nisl id scelerisque. Interdum et malesuada fames ac ante ipsum primis in
							faucibus. Aenean urna tortor, cursus vel arcu ut, consequat feugiat justo. Sed faucibus ut
							ipsum id ultricies. Fusce id enim lorem. Etiam sagittis enim et fringilla aliquam.

							Donec elit lacus, posuere vitae dictum a, gravida in elit. Proin at quam sapien. Nulla
							facilisi. Sed tortor diam, eleifend quis ante aliquet, porttitor bibendum diam. Nunc velit
							magna, auctor consectetur ligula non, varius pharetra tellus. Pellentesque blandit purus
							elementum malesuada rhoncus. Fusce at ornare quam. Proin tempor suscipit mauris, ultricies
							volutpat leo iaculis eget. Morbi pretium dignissim cursus. Ut pellentesque, nisi nec varius
							efficitur, sem lectus hendrerit dui, at ullamcorper purus lacus eu lectus. Fusce aliquet eu
							mauris eget tempus. Proin nec mauris metus. Mauris pretium turpis a felis sodales aliquet.
							Cras tincidunt, felis et dictum feugiat, nibh elit tempor nibh, vel imperdiet leo diam ac
							odio. Morbi malesuada arcu eget auctor aliquet.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lectus nunc, ultrices quis
							ipsum vitae, bibendum suscipit urna. Suspendisse molestie quam quis porta posuere. Nullam ut
							libero ultrices, ultricies nisl ac, rutrum tortor. Mauris pharetra convallis nisi ac
							feugiat. Nullam at scelerisque nunc. Fusce ullamcorper bibendum ultricies. Pellentesque
							risus mauris, viverra eget ligula et, efficitur rutrum erat.

							Ut pharetra ac nunc vitae molestie. Cras bibendum turpis odio, at vulputate nisl tempor ut.
							Vivamus eu diam arcu. Aenean pretium, nisi at interdum auctor, massa augue lacinia arcu, at
							fermentum sapien ante sit amet lacus. Cras placerat sollicitudin aliquam. Quisque eget ante
							nec dolor sagittis pulvinar in eu arcu. Mauris et laoreet arcu, vel laoreet nulla. In erat
							velit, ultrices sed elementum eget, molestie sit amet est. Integer vitae vehicula metus,
							interdum tempor mi. Vestibulum id elementum massa. Nunc ultricies efficitur pretium. Cras
							ante augue, blandit ac massa nec, sodales gravida ligula. Ut quis lacus ante. Nullam non
							nibh turpis. Sed nec consequat nulla, vestibulum molestie augue. Integer ut lacinia arcu,
							non elementum leo.

							Vivamus eget risus quis leo auctor egestas. Duis eget urna sed mi consequat cursus. Duis
							pulvinar leo risus, ultricies sagittis ante aliquet quis. Duis nec diam semper nunc
							consequat iaculis. Nulla efficitur tristique massa, quis interdum augue vehicula id.
							Maecenas tempus sodales eros id congue. Integer ac facilisis elit. Mauris ut euismod ex.

							Phasellus quis libero urna. Suspendisse et vehicula mi, at tempor nunc. Donec egestas
							hendrerit massa eu gravida. Phasellus ut urna sed lorem efficitur cursus eu eget elit.
							Mauris efficitur nisl eu odio feugiat, a auctor nunc efficitur. Quisque accumsan, diam vel
							porta tristique, diam tellus vestibulum libero, sed elementum leo mauris eu eros. Donec
							accumsan accumsan nisl id scelerisque. Interdum et malesuada fames ac ante ipsum primis in
							faucibus. Aenean urna tortor, cursus vel arcu ut, consequat feugiat justo. Sed faucibus ut
							ipsum id ultricies. Fusce id enim lorem. Etiam sagittis enim et fringilla aliquam.

							Donec elit lacus, posuere vitae dictum a, gravida in elit. Proin at quam sapien. Nulla
							facilisi. Sed tortor diam, eleifend quis ante aliquet, porttitor bibendum diam. Nunc velit
							magna, auctor consectetur ligula non, varius pharetra tellus. Pellentesque blandit purus
							elementum malesuada rhoncus. Fusce at ornare quam. Proin tempor suscipit mauris, ultricies
							volutpat leo iaculis eget. Morbi pretium dignissim cursus. Ut pellentesque, nisi nec varius
							efficitur, sem lectus hendrerit dui, at ullamcorper purus lacus eu lectus. Fusce aliquet eu
							mauris eget tempus. Proin nec mauris metus. Mauris pretium turpis a felis sodales aliquet.
							Cras tincidunt, felis et dictum feugiat, nibh elit tempor nibh, vel imperdiet leo diam ac
							odio. Morbi malesuada arcu eget auctor aliquet.

Donec elit lacus, posuere vitae dictum a, gravida in elit. Proin at quam sapien. Nulla
							facilisi. Sed tortor diam, eleifend quis ante aliquet, porttitor bibendum diam. Nunc velit
							magna, auctor consectetur ligula non, varius pharetra tellus. Pellentesque blandit purus
							elementum malesuada rhoncus. Fusce at ornare quam. Proin tempor suscipit mauris, ultricies
							volutpat leo iaculis eget. Morbi pretium dignissim cursus. Ut pellentesque, nisi nec varius
							efficitur, sem lectus hendrerit dui, at ullamcorper purus lacus eu lectus. Fusce aliquet eu
							mauris eget tempus. Proin nec mauris metus. Mauris pretium turpis a felis sodales aliquet.
							Cras tincidunt, felis et dictum feugiat, nibh elit tempor nibh, vel imperdiet leo diam ac
							odio. Morbi malesuada arcu eget auctor aliquet.

Donec elit lacus, posuere vitae dictum a, gravida in elit. Proin at quam sapien. Nulla
							facilisi. Sed tortor diam, eleifend quis ante aliquet, porttitor bibendum diam. Nunc velit
							magna, auctor consectetur ligula non, varius pharetra tellus. Pellentesque blandit purus
							elementum malesuada rhoncus. Fusce at ornare quam. Proin tempor suscipit mauris, ultricies
							volutpat leo iaculis eget. Morbi pretium dignissim cursus. Ut pellentesque, nisi nec varius
							efficitur, sem lectus hendrerit dui, at ullamcorper purus lacus eu lectus. Fusce aliquet eu
							mauris eget tempus. Proin nec mauris metus. Mauris pretium turpis a felis sodales aliquet.
							Cras tincidunt, felis et dictum feugiat, nibh elit tempor nibh, vel imperdiet leo diam ac
							odio. Morbi malesuada arcu eget auctor aliquet.

Donec elit lacus, posuere vitae dictum a, gravida in elit. Proin at quam sapien. Nulla
							facilisi. Sed tortor diam, eleifend quis ante aliquet, porttitor bibendum diam. Nunc velit
							magna, auctor consectetur ligula non, varius pharetra tellus. Pellentesque blandit purus
							elementum malesuada rhoncus. Fusce at ornare quam. Proin tempor suscipit mauris, ultricies
							volutpat leo iaculis eget. Morbi pretium dignissim cursus. Ut pellentesque, nisi nec varius
							efficitur, sem lectus hendrerit dui, at ullamcorper purus lacus eu lectus. Fusce aliquet eu
							mauris eget tempus. Proin nec mauris metus. Mauris pretium turpis a felis sodales aliquet.
							Cras tincidunt, felis et dictum feugiat, nibh elit tempor nibh, vel imperdiet leo diam ac
							odio. Morbi malesuada arcu eget auctor aliquet.


						</div>
					</div>
					<div class="app-left-sidebar item-margin">
						<Menu/>
					</div>
					<div class="app-right-sidebar item-margin"></div>
				</div>
				<div class="app-footer item-margin">
					<span>v1.0.0</span>
				</div>
			</div>
			{/*<Paginator*/}
			{/*    first={first()}*/}
			{/*    rows={rows()}*/}
			{/*    totalRecords={100}*/}
			{/*    onPageChange={onPageChange}*/}
			{/*/>*/}
			{/*<Table*/}
			{/*	data={tableData}*/}
			{/*	columns={columns}*/}
			{/*	showGridlines*/}
			{/*	sortMode="single"*/}
			{/*	size="medium"*/}
			{/*	strippedRows*/}
			{/*	paginator*/}
			{/*	rows={8}*/}
			{/*	totalRecords={tableData.length}*/}
			{/*	globalFilter*/}
			{/*	selectionMode="single"*/}
			{/*	selection={selectedRow()}*/}
			{/*	onSelectionChange={(value: any) => {*/}
			{/*		selectionChanged(value)*/}
			{/*	}}>*/}
			{/*</Table>*/}
		</>
	)
}
export default App;

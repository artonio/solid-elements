import type { Component } from 'solid-js';
import { Paginator } from '@solid-ui/solid-elements';
import { createSignal } from 'solid-js';

const App: Component = () => {
	const [first, setFirst] = createSignal(0);
	const [rows, setRows] = createSignal(5);

	const onPageChange = (event: any) => {
		setFirst(event.first);
		setRows(event.rows)
	}

	return (
		<>
			<Paginator
			    first={first()}
			    rows={rows()}
			    totalRecords={100}
			    onPageChange={onPageChange}
			/>
		</>
	)
}
export default App;

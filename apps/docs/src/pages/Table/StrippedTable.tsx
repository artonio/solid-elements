import { createSignal } from 'solid-js';
import basicTable from '@/pages/basic.data.json';
import { Table } from '@solid-ui/solid-elements/src';
import { CodeHighlighter } from '@/components/CodeHighlighter';
import { v4 as uuidv4 } from 'uuid';

export const StrippedTable = () => {
	const [isToggled, setIsToggled] = createSignal(true)

	const basicTableCode = `
		<Table data={tableData} columns={columns} strippedRows/>
	`;

	const tableData = basicTable.data;

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

	const expandedTableCode = `
		import { Table } from '@solid-ui/solid-elements';
		import basicTable from "./basic.data.json";

		export const BasicTable = () => {
            
			const tableData = basicTable.data;
            
            const columns = [
					\t\t{
					\t\t\tcode: "firstName",
					\t\t\theader: "First Name"
					\t\t},
					\t\t{
					\t\t\tcode: "lastName",
					\t\t\theader: "Last Name"
					\t\t},
					\t\t{
					\t\t\tcode: "age",
					\t\t\theader: "Age"
					\t\t}
					\t];
				
			return (
				<Table data={tableData} columns={columns} strippedRows/>
			)
		}
	`

	const [baseTableCode, setBaseTableCode] = createSignal(basicTableCode)

	const sourceCodeToggled = () => {
		setIsToggled(!isToggled())
		if (isToggled()) {
			setBaseTableCode(basicTableCode)
		} else {
			setBaseTableCode(expandedTableCode)
		}
	}
	return (
		<>
			<h2 id="basic">Stripped</h2>
			<div class="s-card">
				<Table
					data={tableData}
					columns={columns}
					strippedRows
				>
				</Table>
			</div>
			<CodeHighlighter language="tsx" toggleSourceCode={true} id={uuidv4()} onToggleSourceCode={sourceCodeToggled}>
				{baseTableCode()}
			</CodeHighlighter>
		</>
	)
}

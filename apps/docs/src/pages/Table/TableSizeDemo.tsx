import basicTable from "../basic.data.json";
import { SelectButton, SelectItem, Table } from '@solid-ui/solid-elements';
import { createSignal } from 'solid-js';
import { TableSize } from '@solid-ui/solid-elements/src/components/Table/types';
import { v4 as uuidv4 } from 'uuid';
import { CodeHighlighter } from '@/components/CodeHighlighter';
export const TableSizeDemo = () => {
	const basicModel: SelectItem[] = [
		{
			label: 'Small', value: 'small'
		},
		{
			label: 'Medium', value: 'normal'
		},
		{
			label: 'Large', value: 'large'
		}
	];
	const [value, setValue] = createSignal<TableSize>(basicModel[1].value);
	const [isToggled, setIsToggled] = createSignal(true)

	const tableData = basicTable.data;

	const basicTableCode = `
		<Table data={tableData} columns={columns} size="small"/>
	`;

	const expandedTableCode = `
		import { Table } from '@solid-ui/solid-elements';
		import basicTable from "./basic.data.json";
		
		export const BasicTableDemo = () => {
            
			const basicModel: SelectItem[] = [
				\t\t{
				\t\t\tlabel: 'Small', value: 'small'
				\t\t},
				\t\t{
				\t\t\tlabel: 'Medium', value: 'normal'
				\t\t},
				\t\t{
				\t\t\tlabel: 'Large', value: 'large'
				\t\t}
				\t];
			const [value, setValue] = createSignal<TableSize>(basicModel[1].value);
            
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
			const onChange = (e: any) => {
			\t\tsetValue(e.value)
			\t}
				
			return (
				<SelectButton options={basicModel} value={value()} onChange={(e) => {
				\t\t\t\t\tonChange(e)
				\t\t\t\t}}/>
				<Table data={tableData} columns={columns} size={value()}/>
			)
		}
	`;

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

	const [baseTableCode, setBaseTableCode] = createSignal(basicTableCode)

	const onChange = (e: any) => {
		setValue(e.value)
	}

	const sourceCodeToggled = () => {
		setIsToggled(!isToggled())
		if (isToggled()) {
			setBaseTableCode(basicTableCode)
		} else {
			setBaseTableCode(expandedTableCode)
		}
	}

	return(
		<>
			<h2 id="size">Size</h2>
			<div class="s-card">
				<SelectButton options={basicModel} value={value()} onChange={(e) => {
					onChange(e)
				}}/>
				<div style={{height: '20px'}}></div>
				<Table
					data={tableData}
					columns={columns}
					size={value()}
				/>
			</div>
			<CodeHighlighter language="tsx" toggleSourceCode={true} id={uuidv4()} onToggleSourceCode={sourceCodeToggled}>
				{baseTableCode()}
			</CodeHighlighter>
		</>

)
}



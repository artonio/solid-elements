import { For } from 'solid-js';
import { Button } from '../Button/Button';

export interface ISelectButtonProps {
	options: any[];

	value: any;

	onChange: (value: any) => void;
}

export const SelectButton = (props: ISelectButtonProps) => {
	const {options, value, onChange} = props;
	return (
		<>
			<div classList={{'s-select-button': true, 's-button-set': true, 's-component': true}} role="group">
				<For each={options} >
					{(option) => (
						<Button label={option.name} />
					)}

				</For>
			</div>
		</>
	)
}

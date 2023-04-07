import "../../index.scss";
import { SelectItem } from './SelectButton';
import { Button } from '../Button';
import { createEffect } from 'solid-js';

export interface ISelectButtonItemProps {
	label: string;

	className?: string;

	option: SelectItem | any;

	disabled?: boolean;

	selected?: boolean;

	template?: any;

	onClick?: ({originalEvent, option}: {originalEvent: any, option: any}) => void;
}
export const SelectButtonItem = (props: ISelectButtonItemProps) => {
	const {onClick} = props;

	createEffect(() => {
		console.log('props', props.selected);
	})
	return (
		<Button label={props.label} highlight={props.selected} disabled={props.disabled} onClick={() => {
				onClick && onClick({originalEvent: null, option: props.option});
			}}
		/>
	)
}

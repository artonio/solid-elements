import { KeyFilter } from './KeyFilter';
import ObjectUtils from '../utils/ObjectUtils';
import DomHandler from '../utils/DomHandler';

export interface IInputTextProps {
	keyfilter?: string
	placeholder?: string
	value?: string
	onInput?: (e: Event, validate: boolean) => void
	onChange?: (e: Event) => void
	onKeyDown?: (e: Event) => void
	onPaste?: (e: Event) => void

	ref?: any

	validateOnly?: boolean
}
export const InputText = (props: IInputTextProps) => {
	const onKeyDown = (event: any) => {
		props.onKeyDown && props.onKeyDown(event);

		if (props.keyfilter) {
			KeyFilter.onKeyPress(event, props.keyfilter, props.validateOnly);
		}
	};

	const onInput = (event: any) => {
		let validatePattern = true;

		if (props.keyfilter && props.validateOnly) {
			validatePattern = KeyFilter.validate(event, props.keyfilter);
		}

		props.onInput && props.onInput(event, validatePattern);

		if (!props.onChange) {
			const target = event.target;

			ObjectUtils.isNotEmpty(target.value) ? DomHandler.addClass(target, 'p-filled') : DomHandler.removeClass(target, 'p-filled');
		}
	};

	const onPaste = (event: any) => {
		props.onPaste && props.onPaste(event);

		if (props.keyfilter) {
			KeyFilter.onPaste(event, props.keyfilter, props.validateOnly);
		}
	};

	return (
		<>
			<input ref={props.ref} classList={{
				's-inputtext': true,
				's-component': true,
			}} onInput={onInput} onKeyDown={onKeyDown} onPaste={onPaste} />
		</>
	)
}

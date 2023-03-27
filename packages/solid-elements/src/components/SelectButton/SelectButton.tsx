import { createEffect, createSignal, For, mergeProps, on } from 'solid-js';
import { Button } from '../Button/Button';
import ObjectUtils from '../utils/ObjectUtils';
import { SelectButtonItem } from './SelectButtonItem';
import { selectButtonBaseProps } from './SelectButtonBase';

export interface SelectItem {
	/**
	 * Label of the option.
	 */
	label?: string;
	/**
	 * Value of the option.
	 */
	value?: any;
	/**
	 * ClassName of the option.
	 */
	className?: string;
	/**
	 * Icon to display to the option.
	 */
	icon?: HTMLElement;

	/**
	 * Whether the option is disabled or not.
	 * @defaultValue false
	 */
	disabled?: boolean;
}

// export type SelectItemOptionsType = SelectItem[] | any[];

export interface ISelectButtonProps {
	/**
	 * An array of objects to display as the available options.
	 */
	options: SelectItem[] | any[];

	/**
	 * A property to uniquely match the value in options for better performance.
	 */
	dataKey?: string;

	/**
	 * When present, it specifies that the element should be disabled.
	 */
	disabled?: boolean;

	/**
	 * Whether selection can be cleared.
	 */
	unselectable?: boolean;

	/**
	 * Name of the label field of an option when an arbitrary objects instead of SelectItems are used as options.
	 */
	optionLabel?: string;

	/**
	 * Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.
	 */
	optionDisabled?: string | ((option: SelectItem | any) => boolean);

	/**
	 * Name of the value field of an option when arbitrary objects are used as options instead of SelectItems.
	 */
	optionValue?: string;

	/**
	 * Value of the component.
	 */
	value: any;

	/**
	 * Callback to invoke on value change.
	 * @param value
	 */
	onChange: (value: any) => void;
}

const isOptionDisabledFunction = (optionDisabled: string | ((option: SelectItem | any) => boolean)): optionDisabled is (option: SelectItem | any) => boolean => {
	return typeof optionDisabled === 'function';
}

export const SelectButton = (initProps: ISelectButtonProps) => {
	const props = mergeProps(selectButtonBaseProps, initProps)
	const [options, setOptions] = createSignal(props.options);

	createEffect(on([() => props.value], () => {
		setOptions(getOptions())
	}))

	const getOptionValue = (option: SelectItem | any) => {
		return props.optionValue ? ObjectUtils.resolveFieldData(option, props.optionValue) : option && option['value'] !== undefined ? option['value'] : option;
	};

	const getOptions = () => {
		return props.options && props.options.map((option, index) => {
			const isDisabled = props.disabled || isOptionDisabled(option);
			const optionLabel = getOptionLabel(option);
			const tabIndex = isDisabled ? null : 0;
			const selected = isSelected(option);
			// let optionClassName = getOptionClassName(option);

			return {
				isDisabled,
				optionLabel,
				tabIndex,
				selected,
			};
		});
	}
	const isSelected = (option: SelectItem | any) => {
		let optionValue = getOptionValue(option);

		/*if (props.multiple) {
			if (props.value && props.value.length) {
				return props.value.some((val) => ObjectUtils.equals(val, optionValue, props.dataKey));
			}
		} else {
			return ObjectUtils.equals(props.value, optionValue, props.dataKey);
		}*/

		// return ObjectUtils.equals(props.value, optionValue, props.dataKey);
		const r =  ObjectUtils.equals(props.value, optionValue, props.dataKey);
		return r;
	};

	const getOptionLabel = (option: any) => {
		return props.optionLabel ? ObjectUtils.resolveFieldData(option, props.optionLabel) : option && option['label'] !== undefined ? option['label'] : option;
	};

	const isOptionDisabled = (option: SelectItem | any): boolean => {
		// let result = false;
		if (props.optionDisabled) {
			return isOptionDisabledFunction(props.optionDisabled) ? props.optionDisabled(option) : ObjectUtils.resolveFieldData(option, props.optionDisabled);
		}

		return option && option['disabled'] !== undefined ? option['disabled'] : false;
	};

	const onOptionClick = (event: any) => {
		if (props.disabled || isOptionDisabled(event.option)) {
			return;
		}

		let selected = isSelected(event.option);

		if (selected && !props.unselectable) {
			return;
		}

		let optionValue = getOptionValue(event.option);
		let newValue;

		if (props.multiple) {
			let currentValue = props.value ? [...props.value] : [];

			newValue = selected ? currentValue.filter((val) => !ObjectUtils.equals(val, optionValue, props.dataKey)) : [...currentValue, optionValue];
		} else {
			newValue = selected ? null : optionValue;
		}

		if (props.onChange) {
			props.onChange({
				originalEvent: event.originalEvent,
				value: newValue,
				stopPropagation: () => {},
				preventDefault: () => {},
			});
		}
	};

	const Items = (props: any) => {
		return (
			<For each={props.options}>
				{(option: SelectItem | any) => {
					const isDisabled = props.disabled || isOptionDisabled(option);
					const optionLabel = getOptionLabel(option);
					const tabIndex = isDisabled ? null : 0;
					const selected = isSelected(option);

					return <SelectButtonItem label={optionLabel}
											 option={option}
											 tabIndex={tabIndex}
											 selected={selected}
											 onClick={onOptionClick}
					/>
				}}

			</For>
		)
	}

	return (
		<>
			<div classList={{'s-select-button': true, 's-button-set': true, 's-component': true}} role="group">
				{/*<Items options={getOptions()} />*/}
				<For each={props.options}>
					{(option: SelectItem | any) => {
						const isDisabled = props.disabled || isOptionDisabled(option);
						const tabIndex = isDisabled ? null : 0;

						return <SelectButtonItem label={getOptionLabel(option)}
												 option={option}
												 tabIndex={tabIndex}
												 selected={isSelected(option)}
												 onClick={onOptionClick}
						/>
					}}

				</For>
			</div>
		</>
	)
}

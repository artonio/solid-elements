import "./Button.css";
import { ButtonBaseProps } from './ButtonBase';
import { JSX, mergeProps } from 'solid-js';
export interface IButtonProps {
	label?: string;
	onClick?: () => void;

	link?: boolean

	disabled?: boolean

	highlight?: boolean

	ref?: any

	children?: any

	icon?: any

	iconPos?: string

	loading?: boolean

	severity?: string
}



export const Button = (input: IButtonProps) => {
	const props = mergeProps(ButtonBaseProps, input);

	const createIcon = () => {
		const icon = props.loading ? props.loadingIcon : props.icon;
		const className =  {
			'p-button-icon p-c': true,
			'p-button-loading-icon': props.loading,
			[`p-button-icon-${props.iconPos}`]: !!props.label,
			[icon]: true
		};
		return icon && <span classList={className}></span>;
	};


	const createLabel = () => {
            if (props.label) {
                return <span class="p-button-label p-c">{props.label}</span>;
            }

            return !props.children && !props.label && <span class="p-button-label p-c"></span>;
	};

	const createBadge = () => {
		if (props.badge) {
			const badgeClassName = `p-badge ${props.badgeClassName}`;

			return <span class={badgeClassName}>{props.badge}</span>;
		}

		return null;
	};

	const sizeMapping = {
		large: 'lg',
		small: 'sm'
	};

	const size = () => {
		if (props.size) {
			return sizeMapping[props.size];
		}

		return null;
	}

	return (
		<button ref={props.ref} classList={{
			'p-button': true,
			'p-component': true,
			'p-button-icon-only': (props.icon || (props.loading && props.loadingIcon)) && !props.label && !props.children,
			'p-button-vertical': (props.iconPos === 'top' || props.iconPos === 'bottom') && props.label,
			'p-button-loading': props.loading,
			'p-button-outlined': props.outlined,
			'p-button-raised': props.raised,
			'p-button-link': props.link,
			'p-button-text': props.text,
			'p-button-rounded': props.rounded,
			'p-highlight': props.highlight,
			'p-disabled': props.disabled,
			'p-button-loading-label-only': props.loading && !props.icon && props.label,
			[`p-button-loading-${props.iconPos}`]: !!(props.loading && props.loadingIcon && props.label),
			[`p-button-${props.severity}`]: !!props.severity,
			[`p-button-${size()}`]: !!size(),
		}} onClick={props.onClick}>
			{createIcon()}
			{createLabel()}
			{props.children}
			{createBadge()}
		</button>
	)
}

import "./Button.css";
import { ButtonBaseProps } from './ButtonBase';
import { JSX, mergeProps } from 'solid-js';
export interface IButtonProps {
	label: string;
	onClick?: () => void;

	link?: boolean

	disabled?: boolean

	highlight?: boolean

	ref?: any

	children?: any
}



export const Button = (input: IButtonProps) => {
	const props = mergeProps(ButtonBaseProps, input);

	const createIcon = () => {
		const icon = props.loading ? props.loadingIcon : props.icon;
		const className =  {
			'p-button-icon p-c': true,
			'p-button-loading-icon': props.loading,
			[`p-button-icon-${props.iconPos}`]: !!props.label
		};
		return icon && <span classList={className}>{icon}</span>;
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

	return (
		<button ref={props.ref} classList={{
			'p-button': true,
			'p-component': true,
			'p-highlight': props.highlight,
			'p-button-link': props.link,
			'p-disabled': props.disabled
		}} onClick={props.onClick}>
			{createIcon()}
			{createLabel()}
			{props.children}
			{createBadge()}
		</button>
	)
}

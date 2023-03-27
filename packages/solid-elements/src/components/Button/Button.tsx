export interface IButtonProps {
	label: string;
	onClick?: () => void;

	link?: boolean

	disabled?: boolean

	highlight?: boolean
}

export const Button = (props: IButtonProps) => {
	return (
		<button classList={{
			's-button': true,
			's-highlight': props.highlight,
			's-component': true,
			's-button-link': props.link,
			's-disabled': props.disabled
		}} onClick={props.onClick}>
			<span class="s-button-text">{props.label}</span>
		</button>
	)
}

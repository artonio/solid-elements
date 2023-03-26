export interface IButtonProps {
	  label: string;
}

export const Button = (props: IButtonProps) => {
	return (
		<button class="s-button">
			<span class="s-button-text">{props.label}</span>
		</button>
	)
}

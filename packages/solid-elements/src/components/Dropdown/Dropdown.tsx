import { Component, createSignal, For, onCleanup, onMount, Show } from 'solid-js';



export interface IDropdownControlProps {
	onClick: () => void;
}
export interface IDropdownOption {
	label: string;
	value: string;
}

export interface IDropdownProps {
	options: IDropdownOption[];
}

export const DropdownControl = (props: IDropdownControlProps) => {
	return (
		<div class="s-select-control" onClick={props.onClick}>
			<div class="s-select-value-container">
				<div class="s-select-placeholder">Select...</div>
			</div>
			<div class="s-select-indicators-container">
				<span class="s-select-indicator-separator"></span>
				<div class="s-select-indicator-container">
					<span class="pi pi-fw pi-chevron-down"></span>
				</div>
			</div>
		</div>
	)
}

export const Dropdown: Component<IDropdownProps> = (props: IDropdownProps) => {
	const [isOpen, setIsOpen] = createSignal(false);

	const onArrowClick = () => {
		setIsOpen(!isOpen());
	}

	const handleOnDocumentClick = (event: any) => {
		if (event.target.closest('.s-select-container') === null) {
			setIsOpen(false);
		}
	}

	onMount(() => {
		document.addEventListener('click', handleOnDocumentClick);
	})

	onCleanup(() => {
		document.removeEventListener('click', handleOnDocumentClick);
	})

	return (
		<div class="s-select-container">
			<DropdownControl onClick={onArrowClick} />
			<Show when={isOpen()} keyed={true}>
				<div class="s-select-menu">
					<div class="s-select-menu-list">
						<For each={props.options}>
							{option => (
								<div class="s-select-menu-item">
									{option.label}
								</div>
							)}
						</For>

					</div>
				</div>
			</Show>
		</div>
	)
}

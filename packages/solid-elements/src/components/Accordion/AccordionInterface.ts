/**
 * Custom tab change event.
 * @see {@link AccordionProps.onTabChange}
 * @event
 */
export interface AccordionTabChangeEvent {
	/**
	 * Browser mouse event.
	 */
	originalEvent: MouseEvent;
	/**
	 * Opened tab index.
	 */
	index: number | number[];
}

/**
 * Custom tab open event.
 * @see {@link AccordionProps.onTabOpen}
 * @event
 */
export interface AccordionTabOpenEvent {
	/**
	 * Browser mouse event.
	 */
	originalEvent: MouseEvent;
	/**
	 * Opened tab index.
	 */
	index: number;
}

/**
 * Custom tab close event.
 * @see {@link AccordionProps.onTabClose}
 * @extends {AccordionTabOpenEvent}
 * @event
 */
export interface AccordionTabCloseEvent extends AccordionTabOpenEvent {}

export interface IAccordionProps {
	id?: string;

	/**
	 * Active index or indexes of the element. Use an array of numbers for multiple indexes.
	 * The {@link multiple} prop must be set to true in order to specify multiple indexes.
	 */
	activeIndex?: null | number | number[];

	/**
	 * When enabled, multiple tabs can be activated at the same time.
	 * @defaultValue false
	 */
	multiple?: boolean | undefined;
	/**
	 * Icon of a collapsed tab.
	 * @defaultValue pi pi-chevron-right
	 */
	expandIcon?: any | undefined;
	/**
	 * Icon of an expanded tab.
	 * @defaultValue pi pi-chevron-down
	 */
	collapseIcon?: any | undefined;
	/**
	 * The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.
	 * @type {CSSTransitionProps}
	 */
	transitionOptions?: {disabled?: boolean} | undefined;

	/**
	 * Callback to invoke when a tab gets expanded.
	 * @param {AccordionTabOpenEvent} event - Custom tab open event.
	 */
	onTabOpen?(event: AccordionTabOpenEvent): void;
	/**
	 * Callback to invoke when an active tab is collapsed by clicking on the header.
	 * @param {AccordionTabCloseEvent} event - Custom tab close event.
	 */
	onTabClose?(event: AccordionTabCloseEvent): void;
	/**
	 * Callback to invoke when state of the accordion changes.
	 * @param {AccordionTabChangeEvent} event - Custom tab close event.
	 */
	onTabChange?: (e: AccordionTabChangeEvent) => void;

	children: any;
}

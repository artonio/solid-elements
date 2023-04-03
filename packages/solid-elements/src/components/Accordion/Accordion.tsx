import "./Accordion.css";
import {Accessor, children, ChildrenReturn, createMemo, createSignal, For, mergeProps, onMount, Show} from 'solid-js';
import { AccordionBaseProps, AccordionTabBaseProps } from './AccordionBase';
import ObjectUtils from '../utils/ObjectUtils';
import { IAccordionProps } from './AccordionInterface';
import UniqueComponentId from '../utils/UniqueComponentId';
import { ResolvedJSXElement } from 'solid-js/types/reactive/signal';
import {Transition} from "solid-transition-group";

export const AccordionTab = (props: any) => {
	return (
		<>
			{props}
		</>
	)
};

export interface AccordionTabHeaderProps {
	isSelected: boolean;
	index: number;
}

// export const AccordionTabHeader = (props: AccordionTabHeaderProps) => {
// 	const classList = {
// 		'p-accordion-header': true,
// 		'p-highlight': isSelected(index) as boolean,
// 		'p-disabled': tab.disabled
// 	}
// 	const className = `${tab.headerClassName || ''} ${tab.className || ''}`;
// 	const tabIndex = tab.disabled ? -1 : tab.tabIndex;
// 	const headerId = idState() + '_header_' + index;
// 	const ariaControls = idState + '_content_' + index;
// 	// const label = selected ? ariaLabel('collapseLabel') : ariaLabel('expandLabel');
// 	return (
// 		<div classList={classList} class={className}>
// 			<a href={'#' + ariaControls} id={headerId} class="p-accordion-header-link" aria-controls={ariaControls} role="tab" aria-expanded={selected} onClick={(e) => onTabHeaderClick(e, tab, index)} tabIndex={tabIndex} aria-label="TODO">
// 				{/*{icon}*/}
// 				<span class="p-accordion-header-text">{tab.header}</span>
// 			</a>
// 		</div>
// 	)
// }

export interface IAccordionTabContentProps {
	tab: any;
	selected: boolean;
	index: number;
}



export const Accordion = (input: IAccordionProps) => {
	const props = mergeProps(AccordionBaseProps, input);
	const c: ChildrenReturn = children(() => props.children);
	const childrenArray: ResolvedJSXElement[] = c.toArray();
	const [idState, setIdState] = createSignal(props.id);
	const [activeIndexState, setActiveIndexState] = createSignal<number | number[] | null>(props.activeIndex);


	const customClassName = () => {
		return props.className ? props.className : '';
	}

	onMount(() => {
		if (!idState()) {
			setIdState(UniqueComponentId());
		}
	});

	const activeIndex = (): number | number[] | null => {
		return props.onTabChange ? props.activeIndex : activeIndexState();
	}
	const getTabProp = (tab: any, name: any) => {
		return ObjectUtils.getComponentProp(tab, name, AccordionTabBaseProps)
	}


	const isSelected = (index: number) => {
		const r =  props.multiple ? activeIndex() && (activeIndex() as number[]).some((i: number) => i === index) : activeIndex() === index;
		// console.log('isSelected', r);
		return r;
	}

	const onTabHeaderClick = (event: any, tab: any, index: any) => {

		if (!tab.disabled) {
			const selected = isSelected(index);
			let newActiveIndex;

			if (props.multiple) {
				const indexes: number[] = activeIndex() as number[] || [];

				newActiveIndex = selected ? indexes.filter((i) => i !== index) : [...indexes, index];
			} else {
				newActiveIndex = selected ? null : index;
			}

			const callback = selected ? props.onTabClose : props.onTabOpen;

			callback && callback({ originalEvent: event, index: index });

			if (props.onTabChange) {
				props.onTabChange({
					originalEvent: event,
					index: newActiveIndex
				});
			} else {
				setActiveIndexState(newActiveIndex);
			}
		}

		event.preventDefault();
	};

	const createTabHeader = (tab: any, index: number) => {
		const classList = {
			'p-accordion-header': true,
			'p-highlight': isSelected(index) as boolean,
			'p-disabled': tab.disabled
		}
		const className = `${tab.headerClassName || ''} ${tab.className || ''}`;
		const tabIndex = tab.disabled ? -1 : tab.tabIndex;
		const headerId = idState() + '_header_' + index;
		const ariaControls = idState + '_content_' + index;
		const icon = isSelected(index) as boolean ? props.collapseIcon : props.expandIcon;
		// const label = isSelected(index) as boolean ? ariaLabel('collapseLabel') : ariaLabel('expandLabel');
		return (
			<div classList={classList} class={className}>
				<a href={'#' + ariaControls} id={headerId}
				   class="p-accordion-header-link"
				   aria-controls={ariaControls} role="tab"
				   aria-expanded={isSelected(index) as boolean}
				   onClick={(e) => onTabHeaderClick(e, tab, index)}
				   tabIndex={tabIndex} aria-label="TODO">
					<i class={'p-accordion-toggle-icon ' + icon} />
					<span class="p-accordion-header-text">{tab.header}</span>
				</a>
			</div>
		)
	}

	const createTabContent = (tab: any, index: number) => {
		const style = { ...tab.style || {}, ...tab.contentStyle || {} };
		const contentId = idState() + '_content_' + index;
		const ariaLabelledby = idState() + '_header_' + index;

		function onEnter(el: any, done: VoidFunction) {
			const height = el.clientHeight;
			el.style.height = '0'; // set the initial height to 0
			const a = el.animate([
				{ opacity: 0, height: '0' },
				{ opacity: 1, height: `${height}px` }
			], { duration: 200, easing: 'linear' }); // animate the height property
			a.finished.then(() => {
				el.style.height = 'auto'; // set the height back to auto
				done(); // call the done function
			});
		}
		function onExit(el: any, done: VoidFunction) {
			const height = el.clientHeight;
			el.style.height = '100%'; // set the initial height to 100%
			const a = el.animate([
				{ opacity: 1, height: `${height}px` },
				{ opacity: 0, height: '0' }
			], { duration: 200, easing: 'linear' }); // animate the height property
			a.finished.then(() => {
				el.style.height = '0'; // set the height to 0
				done(); // call the done function
			});
		}



		const className = `p-toggleable-content ${tab.contentClassName || ''} ${tab.className || ''}`;
		// const className = ``;
		return (
			<Transition appear onEnter={onEnter} onExit={onExit}>
				<Show when={isSelected(index)}  keyed>
					<div id={contentId} class={className} style={style} role="region" aria-labelledby={ariaLabelledby}>
						<div class="p-accordion-content">{tab.children}</div>
					</div>
				</Show>
			</Transition>

		)
	}

	const className = {
		'p-accordion': true,
		'p-component': true,
	}

	const tabClassList = {
		'p-accordion-tab': true,
		'p-accordion-tab-active': false
	}
	return (
		<div id={idState() as string} classList={className} style={props.style ? props.style : ''}>
			<For each={childrenArray}>
				{(tab: any, index: Accessor<number>) => {
					return (
						<div classList={tabClassList}>
							{createTabHeader(tab, index())}
							{createTabContent(tab, index())}
						</div>
					)
				}}
			</For>
		</div>
	);
}

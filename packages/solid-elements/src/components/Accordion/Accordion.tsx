import "./Accordion.css";
import {children, ChildrenReturn, createSignal, mergeProps, onMount, Show} from 'solid-js';
import { AccordionBaseProps, AccordionTabBaseProps } from './AccordionBase';
import ObjectUtils from '../utils/ObjectUtils';
import { IAccordionProps } from './AccordionInterface';
import UniqueComponentId from '../utils/UniqueComponentId';
import { ResolvedJSXElement } from 'solid-js/types/reactive/signal';

export const AccordionTab = (props: any) => {
	return (
		<>
			{props}
		</>
	)
};

export const Accordion = (input: IAccordionProps) => {
	const props = mergeProps(AccordionBaseProps, input);
	const c: ChildrenReturn = children(() => props.children);
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
		return props.multiple ? activeIndex() && (activeIndex() as number[]).some((i: number) => i === index) : activeIndex() === index;
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

	const createTabHeader = (tab: any, selected: boolean, index: number) => {
		const classList = {
			'p-accordion-header': true,
			'p-highlight': selected,
			'p-disabled': getTabProp(tab, 'disabled')
		}
		const className = `${tab.headerClassName} ${tab.className}`
		const tabIndex = tab.disabled ? -1 : tab.tabIndex;
		const headerId = idState() + '_header_' + index;
		const ariaControls = idState + '_content_' + index;
		// const label = selected ? ariaLabel('collapseLabel') : ariaLabel('expandLabel');
		return (
			<div classList={classList} class={className}>
				<a href={'#' + ariaControls} id={headerId} class="p-accordion-header-link" aria-controls={ariaControls} role="tab" aria-expanded={selected} onClick={(e) => onTabHeaderClick(e, tab, index)} tabIndex={tabIndex} aria-label="TODO">
					{/*{icon}*/}
					<span class="p-accordion-header-text">{tab.header}</span>
				</a>
			</div>
		)
	}

	const createTabContent = (tab: any, selected: boolean, index: number) => {
		const style = { ...tab.style || {}, ...tab.contentStyle || {} };
		const contentId = idState() + '_content_' + index;
		const ariaLabelledby = idState() + '_header_' + index;

		const className = `p-toggleable-content ${tab.contentClassName || ''} ${tab.className || ''}`;
		return (
			<Show when={selected} keyed>
				<div id={contentId} class={className} style={style} role="region" aria-labelledby={ariaLabelledby}>
					<div class="p-accordion-content">{tab.children}</div>
				</div>
			</Show>

		)
	}

	const createTab = (tab: any, index: number) => {
		const tabClassList = {
			'p-accordion-tab': true,
			'p-accordion-tab-active': isSelected(index) as boolean
		}

		return (
			<div classList={tabClassList}>
				{createTabHeader(tab, isSelected(index) as boolean, index)}
				{createTabContent(tab, isSelected(index) as boolean, index)}
			</div>
		)
	}

	const createTabs = () => {
		if (props.children) {
			const children: ResolvedJSXElement[] = c.toArray();
			const r =  children.map((tab: any, index: number) => {
				return createTab(tab, index);
			});
			return r;
		}

	}

	const className = {
		'p-accordion': true,
		'p-component': true,
	}

	return (
		<div id={idState() as string} classList={className} style={props.style ? props.style : ''}>
			{createTabs()}
		</div>
	);
}

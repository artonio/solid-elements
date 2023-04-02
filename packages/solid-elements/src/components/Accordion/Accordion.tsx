import "./Accordion.css";
import {children, ChildrenReturn, createMemo, createSignal, For, mergeProps, onMount, Show} from 'solid-js';
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
		console.log('isSelected', r);
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

	const createTabContent = (tab: any, selected_old: boolean, index: number) => {
		const style = { ...tab.style || {}, ...tab.contentStyle || {} };
		const contentId = idState() + '_content_' + index;
		const ariaLabelledby = idState() + '_header_' + index;

		const MIN_HEIGHT = 78;

		function onEnter(el: any, done: VoidFunction) {
			// const a = el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1500, easing: "ease" });
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
			// a.finished.then(done);
		}
		function onExit(el: any, done: VoidFunction) {
			// const a = el.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 1500, easing: "ease" });
			// a.finished.then(done);
			const height = el.clientHeight;
			el.style.height = '100%'; // set the initial height to 100%
			const a = el.animate([
				{ opacity: 1, height: `${height}px` },
				{ opacity: 0, height: '0' }
			], { duration: 300, easing: 'linear' }); // animate the height property
			a.finished.then(() => {
				el.style.height = '0'; // set the height to 0
				done(); // call the done function
			});
		}

		const onBeforeExit = (el: any) => {
			const a = ''
		}

		const className = `p-toggleable-content ${tab.contentClassName || ''} ${tab.className || ''}`;
		return (
			<Transition appear onEnter={onEnter} onExit={onExit} onBeforeExit={onBeforeExit}>
				<Show when={isSelected(index)}  keyed>
					<div id={contentId} class={className} style={style} role="region" aria-labelledby={ariaLabelledby}>
						<div class="p-accordion-content">{tab.children}</div>
					</div>
				</Show>
				{/*{isSelectedTab() && <div class="p-accordion-content">{tab.children}</div>}*/}
			</Transition>

		)
	}

	const createTab = (tab: any, index: number) => {
		const tabClassList = {
			'p-accordion-tab': true,
			'p-accordion-tab-active': false
		}

		return (
			<div classList={tabClassList}>
				{createTabHeader(tab, false, index)}
				{createTabContent(tab, false, index)}
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

	const tabClassList = {
		'p-accordion-tab': true,
		'p-accordion-tab-active': false
	}
	return (
		<div id={idState() as string} classList={className} style={props.style ? props.style : ''}>
			<For each={childrenArray}>
				{(tab: any, index) => {
					console.log('index', index());
					console.log('activeIndexState', activeIndexState());
					console.log('activeIndexState boolean', activeIndexState() === index());
					return (
						<div classList={tabClassList}>
							{createTabHeader(tab, false, index())}
							{createTabContent(tab, false, index())}
						</div>
					)
				}}
			</For>
		</div>
	);
}

import "./DataTable.css";
import { Component, createSignal } from 'solid-js';
import ObjectUtils from '../utils/ObjectUtils';
export const DataTable: Component = (props: any) => {

	const [filtersState, setFiltersState] = createSignal<any>(props.filters);
	const [sortFieldState, setSortFieldState] = createSignal<any>(props.sortField);
	const [sortOrderState, setSortOrderState] = createSignal<any>(props.sortOrder);
	const [multiSortMetaState, setMultiSortMetaState] = createSignal<any>(props.multiSortMeta);

	const getFilters = () => {
		return props.onFilter ? props.filters : filtersState;
	};

	const getSortField = () => {
		return props.onSort ? props.sortField : sortFieldState;
	};

	const getSortOrder = () => {
		return props.onSort ? props.sortOrder : sortOrderState;
	};

	const getMultiSortMeta = () => {
		return (props.onSort ? props.multiSortMeta : multiSortMetaState) || [];
	};

	/*const filterLocal = (data, filters) => {
		if (!data) return;

		filters = filters || {};

		let columns = getColumns();
		let filteredValue = [];

		let isGlobalFilter = filters['global'] || props.globalFilter;
		let globalFilterFieldsArray;

		if (isGlobalFilter) {
			globalFilterFieldsArray = props.globalFilterFields || columns.filter((col) => !getColumnProp(col, 'excludeGlobalFilter')).map((col) => getColumnProp(col, 'filterField') || getColumnProp(col, 'field'));
		}

		for (let i = 0; i < data.length; i++) {
			let localMatch = true;
			let globalMatch = false;
			let localFiltered = false;

			for (let prop in filters) {
				if (prop === 'null') {
					continue;
				}

				if (Object.prototype.hasOwnProperty.call(filters, prop) && prop !== 'global') {
					localFiltered = true;
					let filterField = prop;
					let filterMeta = filters[filterField];

					if (filterMeta.operator) {
						for (let j = 0; j < filterMeta.constraints.length; j++) {
							let filterConstraint = filterMeta.constraints[j];

							localMatch = executeLocalFilter(filterField, data[i], filterConstraint, j);

							if ((filterMeta.operator === FilterOperator.OR && localMatch) || (filterMeta.operator === FilterOperator.AND && !localMatch)) {
								break;
							}
						}
					} else {
						localMatch = executeLocalFilter(filterField, data[i], filterMeta, 0);
					}

					if (!localMatch) {
						break;
					}
				}
			}

			if (isGlobalFilter && !globalMatch && globalFilterFieldsArray) {
				for (let j = 0; j < globalFilterFieldsArray.length; j++) {
					let globalFilterField = globalFilterFieldsArray[j];
					let matchMode = filters['global'] ? filters['global'].matchMode : props.globalFilterMatchMode;
					let value = filters['global'] ? filters['global'].value : props.globalFilter;

					globalMatch = FilterService.filters[matchMode](ObjectUtils.resolveFieldData(data[i], globalFilterField), value, props.filterLocale);

					if (globalMatch) {
						break;
					}
				}
			}

			let matches;

			if (isGlobalFilter) {
				matches = localFiltered ? localFiltered && localMatch && globalMatch : globalMatch;
			} else {
				matches = localFiltered && localMatch;
			}

			if (matches) {
				filteredValue.push(data[i]);
			}
		}

		if (filteredValue.length === props.value.length) {
			filteredValue = data;
		}

		return filteredValue;
	};

	const sortSingle = (data, field, order) => {
		if (props.groupRowsBy && props.groupRowsBy === props.sortField) {
			const multiSortMeta = [{ field: props.sortField, order: props.sortOrder || props.defaultSortOrder }];

			props.sortField !== field && multiSortMeta.push({ field, order });

			return sortMultiple(data, multiSortMeta);
		}

		let value = [...data];

		if (columnSortable.current && columnSortFunction.current) {
			value = columnSortFunction.current({ data, field, order });
		} else {
			value.sort((data1, data2) => {
				const value1 = ObjectUtils.resolveFieldData(data1, field);
				const value2 = ObjectUtils.resolveFieldData(data2, field);

				return compareValuesOnSort(value1, value2, order);
			});
		}

		return value;
	};*/

	const processedData = (localState?: any) => {
		let data = props.value || [];

		if (!props.lazy) {
			if (data && data.length) {
				const filters = (localState && localState.filters) || getFilters();
				const sortField = (localState && localState.sortField) || getSortField();
				const sortOrder = (localState && localState.sortOrder) || getSortOrder();
				const multiSortMeta = (localState && localState.multiSortMeta) || getMultiSortMeta();
				// const sortColumn = props.columns.find((col) => getColumnProp(col, 'field') === sortField);

				// if (sortColumn) {
				// 	columnSortable.current = getColumnProp(sortColumn, 'sortable');
				// 	columnSortFunction.current = getColumnProp(sortColumn, 'sortFunction');
				// }

				/*if (ObjectUtils.isNotEmpty(filters) || props.globalFilter) {
					data = filterLocal(data, filters);
				}

				if (sortField || ObjectUtils.isNotEmpty(multiSortMeta)) {
					if (props.sortMode === 'single') data = sortSingle(data, sortField, sortOrder);
					else if (props.sortMode === 'multiple') data = sortMultiple(data, multiSortMeta);
				}*/
			}
		}

		return data;
	};

	const mainClassList = {
		'p-datatable': true,
		'p-component': true,
		'p-datatable-hoverable-rows': props.rowHover,
		// 'p-datatable-selectable': selectable && !props.cellSelection,
		// 'p-datatable-selectable-cell': selectable && props.cellSelection,
		'p-datatable-resizable': props.resizableColumns,
		'p-datatable-resizable-fit': props.resizableColumns && props.columnResizeMode === 'fit',
		'p-datatable-scrollable': props.scrollable,
		'p-datatable-flex-scrollable': props.scrollable && props.scrollHeight === 'flex',
		'p-datatable-responsive-stack': props.responsiveLayout === 'stack',
		'p-datatable-responsive-scroll': props.responsiveLayout === 'scroll',
		'p-datatable-striped': props.stripedRows,
		'p-datatable-gridlines': props.showGridlines,
		'p-datatable-grouped-header': props.headerColumnGroup != null,
		'p-datatable-grouped-footer': props.footerColumnGroup != null,
		'p-datatable-sm': props.size === 'small',
		'p-datatable-lg': props.size === 'large'
	}

	const tableClassList = {
		'p-datatable-table': true,
		'p-datatable-scrollable-table': props.scrollable,
		'p-datatable-resizable-table': props.resizableColumns,
		'p-datatable-resizable-table-fit': props.resizableColumns && props.columnResizeMode === 'fit'
	}

	const data = processedData();


	return (
		<div id={props.id} classList={mainClassList} style={props.style}>

		</div>
	)
}

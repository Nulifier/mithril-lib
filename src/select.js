import m		from 'mithril';

export function view(vnode) {
	return m('.mlib-select', [
		m('.mlib-select-control', [
			m('.mlib-select-wrapper', [
				m('.mlib-select-placeholder', 'Select...')
			]),
			m('.mlib-select-arrow-zone', [
				m('span.mlib-select-arrow')
			])
		])
	]);
}

import m		from 'mithril';

export function view(vnode) {
	return m('span.mlib-tooltip', [
		vnode.children
	]);
}

m.mount(document.getElementById('select-demo'), mithrilLib.Select);


var TooltipDemo = {
	view: function() {
		return m(mithrilLib.Tooltip, [
			m('span', 'Tooltip')
		]);
	}
};

//m.mount(document.getElementById('tooltip-demo'), TooltipDemo);

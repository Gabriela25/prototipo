Ext.define('MG.controller.Control', {
	extend : 'Ext.app.Controller',

	config : {
		routes : {
			'' : 'home'
		},
		refs : {
			appViewport : {
				selector : 'appViewport',
				xtype : 'appViewport'
			}
		}
	}
});
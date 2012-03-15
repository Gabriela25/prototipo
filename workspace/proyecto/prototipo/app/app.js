Ext.Loader.setConfig({
	enabled : true
});

Ext.Loader.setPath({
	'MG' : 'app'
});

Ext.application({
	name : 'MG',

    models : ['Preference'],

	stores : [ 'Preferences' ],

	//controllers : [ 'Control'],

	views : [ 'Viewport' ],

	launch : function() {
		this.viewport = Ext.create('appViewport');
	}
});
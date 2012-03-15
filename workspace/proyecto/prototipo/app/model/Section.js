Ext.define('MG.model.Section', {
	extend : 'Ext.data.Model',

	config : {
		fields : [ 'id', 'nombre_seccion', 'url' ],

		belongsTo : 'MG.model.Preference'
	}
});
Ext.define('MG.model.Preference', {
	extend : 'Ext.data.Model',

	config : {
		fields : [ 'columna', 'color', 'nombre_contenido' ],
		hasMany : {
			model : 'MG.model.Section',
			name : 'sections',
			associationKey : 'secciones'
		}

		
	}
});
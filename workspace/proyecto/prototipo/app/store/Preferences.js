Ext.define('MG.store.Preferences',{
	extend: 'Ext.data.Store',

		config: {
			
			model:'MG.model.Preference',
	        autoLoad: true,
	        autoSync: true,
	        storeId: 'Preferences',
	        fields: [
	            {
	                name: 'columna'
	            },
	            {
	            	name:'color'
	            },
	            {
	                name: 'nombre_contenido'
	            },
	            {
	                name: 'secciones' , mapping: 'secciones.nombre_seccion'
	            },
	            {
	                name: 'id' , mapping: 'secciones.id'
	            },
	            {
	                name: 'nombre_seccion' , mapping: 'secciones.nombre_seccion'
	            },
	            {
	                name: 'url' , mapping: 'secciones.url'
	            }
	        ],
	        proxy: {
	        	type : 'scripttag',
	            url: 'http://publisher.eluniversal.com/json-ipad',
	            reader : {
					type : 'json',
					rootProperty : ''
				}
	        }
	    }
});

Ext.define('MG.view.Viewport', {
	extend: 'Ext.form.Panel',
	alias: 'appViewport',
	
	    config: {
	    	fullscreen: true,
	        items: [
	            {
	                xtype: 'selectfield',
	                itemId : 'preferencia',
	                width: 500,
	                label: 'Prerefencia',
	                name: 'nombre_contenido',
                    displayField: 'nombre_contenido',
                    valueField :'nombre_contenido',
	                store: 'Preferences',
	                listeners:{
	                'change': function (newValue, oldValue,eOpts) {
	                	var seleccion = this.getValue()
	                	/*Ext.Object.each('MG.model.Preference', function(key, value, myself) {	
	                	});*/
	                	console.log("seleccion" + this.getValue());
	                	
	                }
	                }
	            },
	            {
	                xtype: 'spacer',
	                flex: 10
	            },
	            {
	                xtype: 'selectfield',
	                width: 500,
	                label: 'Seccion',
	                name: 'color',
                    displayField: 'color',
                    store: 'Preferences'
	            }
	            
	        ]
	    }
	
});

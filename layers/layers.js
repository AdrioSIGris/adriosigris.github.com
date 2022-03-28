var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Coruna_1 = new ol.format.GeoJSON();
var features_Coruna_1 = format_Coruna_1.readFeatures(json_Coruna_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coruna_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coruna_1.addFeatures(features_Coruna_1);
var lyr_Coruna_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Coruna_1, 
                style: style_Coruna_1,
                interactive: true,
                title: '<img src="styles/legend/Coruna_1.png" /> Coruna'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Coruna_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Coruna_1];
lyr_Coruna_1.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Cultivo': 'Cultivo', });
lyr_Coruna_1.set('fieldImages', {'id': '', 'Nombre': '', 'Cultivo': '', });
lyr_Coruna_1.set('fieldLabels', {'id': 'no label', 'Nombre': 'header label', 'Cultivo': 'inline label', });
lyr_Coruna_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
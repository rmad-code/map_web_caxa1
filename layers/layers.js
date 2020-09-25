var wms_layers = [];

var format_Provincias_0 = new ol.format.GeoJSON();
var features_Provincias_0 = format_Provincias_0.readFeatures(json_Provincias_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provincias_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provincias_0.addFeatures(features_Provincias_0);
var lyr_Provincias_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Provincias_0, 
                style: style_Provincias_0,
                interactive: true,
                title: '<img src="styles/legend/Provincias_0.png" /> Provincias'
            });
var format_Distritosporprovincia_1 = new ol.format.GeoJSON();
var features_Distritosporprovincia_1 = format_Distritosporprovincia_1.readFeatures(json_Distritosporprovincia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Distritosporprovincia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Distritosporprovincia_1.addFeatures(features_Distritosporprovincia_1);
var lyr_Distritosporprovincia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Distritosporprovincia_1, 
                style: style_Distritosporprovincia_1,
                interactive: true,
    title: 'Distritos por provincia<br />\
    <img src="styles/legend/Distritosporprovincia_1_0.png" /> Cajabamba<br />\
    <img src="styles/legend/Distritosporprovincia_1_1.png" /> Cajamarca<br />\
    <img src="styles/legend/Distritosporprovincia_1_2.png" /> Celendín<br />\
    <img src="styles/legend/Distritosporprovincia_1_3.png" /> Chota<br />\
    <img src="styles/legend/Distritosporprovincia_1_4.png" /> Contumazá<br />\
    <img src="styles/legend/Distritosporprovincia_1_5.png" /> Cutervo<br />\
    <img src="styles/legend/Distritosporprovincia_1_6.png" /> Hualgayoc<br />\
    <img src="styles/legend/Distritosporprovincia_1_7.png" /> Jaén<br />\
    <img src="styles/legend/Distritosporprovincia_1_8.png" /> San Ignacio<br />\
    <img src="styles/legend/Distritosporprovincia_1_9.png" /> San Marcos<br />\
    <img src="styles/legend/Distritosporprovincia_1_10.png" /> San Miguel<br />\
    <img src="styles/legend/Distritosporprovincia_1_11.png" /> San Pablo<br />\
    <img src="styles/legend/Distritosporprovincia_1_12.png" /> Santa Cruz<br />'
        });

lyr_Provincias_0.setVisible(true);lyr_Distritosporprovincia_1.setVisible(true);
var layersList = [lyr_Provincias_0,lyr_Distritosporprovincia_1];
lyr_Provincias_0.set('fieldAliases', {'PROV_ID': 'PROV_ID', 'PROVINCIA': 'PROVINCIA', 'AREA_Km2': 'AREA_Km2', 'AREA_Ha': 'AREA_Ha', 'PERIMETRO': 'PERIMETRO', 'Nro_Orden': 'Nro_Orden', 'Imagen': 'Imagen', });
lyr_Distritosporprovincia_1.set('fieldAliases', {'IDDPTO': 'IDDPTO', 'DEPART': 'DEPART', 'PROV_ID': 'PROV_ID', 'PROVINCIA': 'PROVINCIA', 'DIST_ID': 'DIST_ID', 'DISTRITO': 'DISTRITO', 'AREA_Km2': 'AREA_Km2', 'AREA_Ha': 'AREA_Ha', });
lyr_Provincias_0.set('fieldImages', {'PROV_ID': 'Hidden', 'PROVINCIA': 'TextEdit', 'AREA_Km2': 'TextEdit', 'AREA_Ha': 'TextEdit', 'PERIMETRO': 'TextEdit', 'Nro_Orden': 'Hidden', 'Imagen': 'ExternalResource', });
lyr_Distritosporprovincia_1.set('fieldImages', {'IDDPTO': 'Hidden', 'DEPART': 'Hidden', 'PROV_ID': 'Hidden', 'PROVINCIA': 'TextEdit', 'DIST_ID': 'Hidden', 'DISTRITO': 'TextEdit', 'AREA_Km2': 'Hidden', 'AREA_Ha': 'Hidden', });
lyr_Provincias_0.set('fieldLabels', {'PROVINCIA': 'header label', 'AREA_Km2': 'header label', 'AREA_Ha': 'header label', 'PERIMETRO': 'header label', 'Imagen': 'header label', });
lyr_Distritosporprovincia_1.set('fieldLabels', {'PROVINCIA': 'no label', 'DISTRITO': 'header label', });
lyr_Distritosporprovincia_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
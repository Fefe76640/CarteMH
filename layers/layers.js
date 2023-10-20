var wms_layers = [];

var format_LEPCIpossde_0 = new ol.format.GeoJSON();
var features_LEPCIpossde_0 = format_LEPCIpossde_0.readFeatures(json_LEPCIpossde_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LEPCIpossde_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LEPCIpossde_0.addFeatures(features_LEPCIpossde_0);
var lyr_LEPCIpossde_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LEPCIpossde_0, 
                style: style_LEPCIpossde_0,
                interactive: true,
    title: 'L'EPCI possède :<br />\
    <img src="styles/legend/LEPCIpossde_0_0.png" /> Maison de l\'habitat<br />\
    <img src="styles/legend/LEPCIpossde_0_1.png" /> Des permanences hebdomadaires/mensuelles<br />\
    <img src="styles/legend/LEPCIpossde_0_2.png" /> Pas de maison de l\'habitat<br />'
        });
var format_departements20180101_1 = new ol.format.GeoJSON();
var features_departements20180101_1 = format_departements20180101_1.readFeatures(json_departements20180101_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_departements20180101_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_departements20180101_1.addFeatures(features_departements20180101_1);
var lyr_departements20180101_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_departements20180101_1, 
                style: style_departements20180101_1,
                interactive: true,
                title: '<img src="styles/legend/departements20180101_1.png" /> departements-20180101'
            });
var format_Localisation_2 = new ol.format.GeoJSON();
var features_Localisation_2 = format_Localisation_2.readFeatures(json_Localisation_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localisation_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localisation_2.addFeatures(features_Localisation_2);
var lyr_Localisation_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Localisation_2, 
                style: style_Localisation_2,
                interactive: true,
    title: 'Localisation :<br />\
    <img src="styles/legend/Localisation_2_0.png" /> Maison de l\'habitat<br />\
    <img src="styles/legend/Localisation_2_1.png" /> Permanences<br />'
        });

lyr_LEPCIpossde_0.setVisible(true);lyr_departements20180101_1.setVisible(true);lyr_Localisation_2.setVisible(true);
var layersList = [lyr_LEPCIpossde_0,lyr_departements20180101_1,lyr_Localisation_2];
lyr_LEPCIpossde_0.set('fieldAliases', {'cat': 'cat', 'ID': 'ID', 'CODE_EPCI': 'CODE_EPCI', 'NOM_EPCI': 'NOM_EPCI', 'TYPE_EPCI': 'TYPE_EPCI', 'Répertoire Maison Habitat — EPCI Normande_cat': 'Répertoire Maison Habitat — EPCI Normande_cat', 'Répertoire Maison Habitat — EPCI Normande_ID': 'Répertoire Maison Habitat — EPCI Normande_ID', 'Répertoire Maison Habitat — EPCI Normande_CODE_EPCI': 'Répertoire Maison Habitat — EPCI Normande_CODE_EPCI', 'Répertoire Maison Habitat — EPCI Normande_NOM_EPCI': 'Répertoire Maison Habitat — EPCI Normande_NOM_EPCI', 'Répertoire Maison Habitat — EPCI Normande_TYPE_EPCI': 'Répertoire Maison Habitat — EPCI Normande_TYPE_EPCI', 'Répertoire Maison Habitat — EPCI Normande_M_Hab': 'Répertoire Maison Habitat — EPCI Normande_M_Hab', 'Répertoire Maison Habitat — EPCI Normande_Info': 'Répertoire Maison Habitat — EPCI Normande_Info', });
lyr_departements20180101_1.set('fieldAliases', {'code_insee': 'code_insee', 'nom': 'nom', 'nuts3': 'nuts3', 'wikipedia': 'wikipedia', 'surf_km2': 'surf_km2', });
lyr_Localisation_2.set('fieldAliases', {'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', 'Répertoire Maison Habitat — Localisation_Field1': 'Répertoire Maison Habitat — Localisation_Field1', 'Répertoire Maison Habitat — Localisation_Field2': 'Répertoire Maison Habitat — Localisation_Field2', 'Répertoire Maison Habitat — Localisation_Field3': 'Répertoire Maison Habitat — Localisation_Field3', 'Répertoire Maison Habitat — Localisation_Field4': 'Répertoire Maison Habitat — Localisation_Field4', 'Répertoire Maison Habitat — Localisation_Field5': 'Répertoire Maison Habitat — Localisation_Field5', 'Répertoire Maison Habitat — Localisation_Field6': 'Répertoire Maison Habitat — Localisation_Field6', 'Répertoire Maison Habitat — Localisation_Field7': 'Répertoire Maison Habitat — Localisation_Field7', 'Répertoire Maison Habitat — Localisation_Field8': 'Répertoire Maison Habitat — Localisation_Field8', });
lyr_LEPCIpossde_0.set('fieldImages', {'cat': 'Range', 'ID': 'TextEdit', 'CODE_EPCI': 'TextEdit', 'NOM_EPCI': 'TextEdit', 'TYPE_EPCI': 'TextEdit', 'Répertoire Maison Habitat — EPCI Normande_cat': 'Range', 'Répertoire Maison Habitat — EPCI Normande_ID': 'TextEdit', 'Répertoire Maison Habitat — EPCI Normande_CODE_EPCI': 'TextEdit', 'Répertoire Maison Habitat — EPCI Normande_NOM_EPCI': 'TextEdit', 'Répertoire Maison Habitat — EPCI Normande_TYPE_EPCI': 'TextEdit', 'Répertoire Maison Habitat — EPCI Normande_M_Hab': 'TextEdit', 'Répertoire Maison Habitat — EPCI Normande_Info': 'TextEdit', });
lyr_departements20180101_1.set('fieldImages', {'code_insee': 'TextEdit', 'nom': 'TextEdit', 'nuts3': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_km2': 'TextEdit', });
lyr_Localisation_2.set('fieldImages', {'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', 'Répertoire Maison Habitat — Localisation_Field1': 'TextEdit', 'Répertoire Maison Habitat — Localisation_Field2': 'TextEdit', 'Répertoire Maison Habitat — Localisation_Field3': 'TextEdit', 'Répertoire Maison Habitat — Localisation_Field4': 'TextEdit', 'Répertoire Maison Habitat — Localisation_Field5': 'TextEdit', 'Répertoire Maison Habitat — Localisation_Field6': 'TextEdit', 'Répertoire Maison Habitat — Localisation_Field7': 'TextEdit', 'Répertoire Maison Habitat — Localisation_Field8': 'TextEdit', });
lyr_LEPCIpossde_0.set('fieldLabels', {'cat': 'no label', 'ID': 'no label', 'CODE_EPCI': 'no label', 'NOM_EPCI': 'no label', 'TYPE_EPCI': 'no label', 'Répertoire Maison Habitat — EPCI Normande_cat': 'no label', 'Répertoire Maison Habitat — EPCI Normande_ID': 'no label', 'Répertoire Maison Habitat — EPCI Normande_CODE_EPCI': 'no label', 'Répertoire Maison Habitat — EPCI Normande_NOM_EPCI': 'inline label', 'Répertoire Maison Habitat — EPCI Normande_TYPE_EPCI': 'no label', 'Répertoire Maison Habitat — EPCI Normande_M_Hab': 'no label', 'Répertoire Maison Habitat — EPCI Normande_Info': 'no label', });
lyr_departements20180101_1.set('fieldLabels', {'code_insee': 'no label', 'nom': 'no label', 'nuts3': 'no label', 'wikipedia': 'no label', 'surf_km2': 'no label', });
lyr_Localisation_2.set('fieldLabels', {'insee': 'no label', 'nom': 'no label', 'wikipedia': 'no label', 'surf_ha': 'no label', 'Répertoire Maison Habitat — Localisation_Field1': 'no label', 'Répertoire Maison Habitat — Localisation_Field2': 'inline label', 'Répertoire Maison Habitat — Localisation_Field3': 'no label', 'Répertoire Maison Habitat — Localisation_Field4': 'no label', 'Répertoire Maison Habitat — Localisation_Field5': 'header label', 'Répertoire Maison Habitat — Localisation_Field6': 'inline label', 'Répertoire Maison Habitat — Localisation_Field7': 'inline label', 'Répertoire Maison Habitat — Localisation_Field8': 'inline label', });
lyr_Localisation_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
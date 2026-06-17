ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32647").setExtent([576361.109200, 2116971.565400, 590287.754200, 2122815.866015]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Flood_2 = new ol.format.GeoJSON();
var features_Flood_2 = format_Flood_2.readFeatures(json_Flood_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_Flood_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Flood_2.addFeatures(features_Flood_2);
var lyr_Flood_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Flood_2, 
                style: style_Flood_2,
                popuplayertitle: 'Flood',
                interactive: true,
                title: '<img src="styles/legend/Flood_2.png" /> พื้นที่น้ำท่วม'
            });
var format_Drought_3 = new ol.format.GeoJSON();
var features_Drought_3 = format_Drought_3.readFeatures(json_Drought_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_Drought_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drought_3.addFeatures(features_Drought_3);
var lyr_Drought_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Drought_3, 
                style: style_Drought_3,
                popuplayertitle: 'Drought',
                interactive: true,
                title: '<img src="styles/legend/Drought_3.png" /> พื้นที่ภัยแล้ง'
            });
var format_Stm_spm_4 = new ol.format.GeoJSON();
var features_Stm_spm_4 = format_Stm_spm_4.readFeatures(json_Stm_spm_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_Stm_spm_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stm_spm_4.addFeatures(features_Stm_spm_4);
var lyr_Stm_spm_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stm_spm_4, 
                style: style_Stm_spm_4,
                popuplayertitle: 'Stm_spm',
                interactive: true,
                title: '<img src="styles/legend/Stm_spm_4.png" /> เส้นทางน้ำ'
            });
var format_Lu_spm_5 = new ol.format.GeoJSON();
var features_Lu_spm_5 = format_Lu_spm_5.readFeatures(json_Lu_spm_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_Lu_spm_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lu_spm_5.addFeatures(features_Lu_spm_5);
var lyr_Lu_spm_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lu_spm_5, 
                style: style_Lu_spm_5,
                popuplayertitle: 'Lu_spm',
                interactive: true,
    title: 'การใช้ประโยชน์ที่ดิน<br />\
    <img src="styles/legend/Lu_spm_5_0.png" /> พื้นที่เกษตร<br />\
    <img src="styles/legend/Lu_spm_5_1.png" /> พื้นที่ป่า<br />\
    <img src="styles/legend/Lu_spm_5_2.png" /> พื้นที่เบ็ดเตล็ด<br />\
    <img src="styles/legend/Lu_spm_5_3.png" /> พื้นที่ชุมชนและสิ่งปลูกสร้าง<br />\
    <img src="styles/legend/Lu_spm_5_4.png" /> พื้นที่น้ำ<br />' });
var format_Bdy_spm_6 = new ol.format.GeoJSON();
var features_Bdy_spm_6 = format_Bdy_spm_6.readFeatures(json_Bdy_spm_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_Bdy_spm_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bdy_spm_6.addFeatures(features_Bdy_spm_6);
var lyr_Bdy_spm_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bdy_spm_6, 
                style: style_Bdy_spm_6,
                popuplayertitle: 'Bdy_spm',
                interactive: true,
                title: '<img src="styles/legend/Bdy_spm_6.png" /> ขอบเขตตำบล'
            });
var group_SPM = new ol.layer.Group({
                                layers: [lyr_Flood_2,lyr_Drought_3,lyr_Stm_spm_4,lyr_Lu_spm_5,lyr_Bdy_spm_6,],
                                fold: 'open',
                                title: 'SPM'});

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Flood_2.setVisible(true);lyr_Drought_3.setVisible(true);lyr_Stm_spm_4.setVisible(true);lyr_Lu_spm_5.setVisible(true);lyr_Bdy_spm_6.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,group_SPM];
lyr_Flood_2.set('fieldAliases', {'id': 'id', });
lyr_Drought_3.set('fieldAliases', {'id': 'id', });
lyr_Stm_spm_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'HY_USE': 'HY_USE', 'HY_LNAME': 'HY_LNAME', 'HY_MRIVER': 'HY_MRIVER', 'LENGTH': 'LENGTH', 'TAM_NAM_T': 'TAM_NAM_T', });
lyr_Lu_spm_5.set('fieldAliases', {'LU_ID_L1': 'LU_ID_L1', 'LU_ID_L2': 'LU_ID_L2', 'LU_ID_L3': 'LU_ID_L3', 'LU_CODE': 'LU_CODE', 'LU_DES_TH': 'LU_DES_TH', 'LU_DES_EN': 'LU_DES_EN', 'LUL1_CODE': 'LUL1_CODE', 'LUL2_CODE': 'LUL2_CODE', 'LU_DES': 'LU_DES', 'Shape_Area': 'Shape_Area', 'Area_Sqm': 'Area_Sqm', 'Area_Rai': 'Area_Rai', 'TAM_NAM_T': 'TAM_NAM_T', });
lyr_Bdy_spm_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TAMBON_IDN': 'TAMBON_IDN', 'TAM_CODE': 'TAM_CODE', 'TAM_NAM_T': 'TAM_NAM_T', 'AMPHOE_IDN': 'AMPHOE_IDN', 'AMP_CODE': 'AMP_CODE', 'AMPHOE_T': 'AMPHOE_T', 'AMPHOE_E': 'AMPHOE_E', 'PROV_CODE': 'PROV_CODE', 'PROV_NAM_T': 'PROV_NAM_T', 'PROV_NAM_E': 'PROV_NAM_E', 'P_CODE': 'P_CODE', 'remark': 'remark', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Flood_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Drought_3.set('fieldImages', {'id': 'TextEdit', });
lyr_Stm_spm_4.set('fieldImages', {'OBJECTID': 'Range', 'HY_USE': 'Range', 'HY_LNAME': 'TextEdit', 'HY_MRIVER': 'TextEdit', 'LENGTH': 'TextEdit', 'TAM_NAM_T': 'TextEdit', });
lyr_Lu_spm_5.set('fieldImages', {'LU_ID_L1': 'TextEdit', 'LU_ID_L2': 'TextEdit', 'LU_ID_L3': 'TextEdit', 'LU_CODE': 'TextEdit', 'LU_DES_TH': 'TextEdit', 'LU_DES_EN': 'TextEdit', 'LUL1_CODE': 'TextEdit', 'LUL2_CODE': 'TextEdit', 'LU_DES': 'TextEdit', 'Shape_Area': 'TextEdit', 'Area_Sqm': 'TextEdit', 'Area_Rai': 'TextEdit', 'TAM_NAM_T': 'TextEdit', });
lyr_Bdy_spm_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'TAMBON_IDN': 'TextEdit', 'TAM_CODE': 'TextEdit', 'TAM_NAM_T': 'TextEdit', 'AMPHOE_IDN': 'TextEdit', 'AMP_CODE': 'TextEdit', 'AMPHOE_T': 'TextEdit', 'AMPHOE_E': 'TextEdit', 'PROV_CODE': 'TextEdit', 'PROV_NAM_T': 'TextEdit', 'PROV_NAM_E': 'TextEdit', 'P_CODE': 'TextEdit', 'remark': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Flood_2.set('fieldLabels', {'id': 'no label', });
lyr_Drought_3.set('fieldLabels', {'id': 'no label', });
lyr_Stm_spm_4.set('fieldLabels', {'OBJECTID': 'no label', 'HY_USE': 'no label', 'HY_LNAME': 'no label', 'HY_MRIVER': 'no label', 'LENGTH': 'no label', 'TAM_NAM_T': 'no label', });
lyr_Lu_spm_5.set('fieldLabels', {'LU_ID_L1': 'no label', 'LU_ID_L2': 'no label', 'LU_ID_L3': 'no label', 'LU_CODE': 'no label', 'LU_DES_TH': 'no label', 'LU_DES_EN': 'no label', 'LUL1_CODE': 'no label', 'LUL2_CODE': 'no label', 'LU_DES': 'no label', 'Shape_Area': 'no label', 'Area_Sqm': 'no label', 'Area_Rai': 'no label', 'TAM_NAM_T': 'no label', });
lyr_Bdy_spm_6.set('fieldLabels', {'OBJECTID': 'no label', 'TAMBON_IDN': 'no label', 'TAM_CODE': 'no label', 'TAM_NAM_T': 'no label', 'AMPHOE_IDN': 'no label', 'AMP_CODE': 'no label', 'AMPHOE_T': 'no label', 'AMPHOE_E': 'no label', 'PROV_CODE': 'no label', 'PROV_NAM_T': 'no label', 'PROV_NAM_E': 'no label', 'P_CODE': 'no label', 'remark': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Bdy_spm_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

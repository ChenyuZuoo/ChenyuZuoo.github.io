var colors_red = ['#fee5d9','#fcbba1','#fc9272','#fb6a4a','#ef3b2c','#cb181d','#99000d'];
var colors_pink = ['#feebe2','#fcc5c0','#fa9fb5','#f768a1','#dd3497','#ae017e','#7a0177'];
var colors_orange = ['#feedde','#fdd0a2','#fdae6b','#fd8d3c','#f16913','#d94801','#8c2d04'];
var colors_blue = ['#eff3ff','#c6dbef','#9ecae1','#6baed6','#4292c6','#2171b5','#084594'];
var colors_green = ['#edf8e9','#c7e9c0','#a1d99b','#74c476','#41ab5d','#238b45','#005a32'];
var colors_purple = ['#f2f0f7','#dadaeb','#bcbddc','#9e9ac8','#807dba','#6a51a3','#4a1486'];



var category_enterprise = {"csv_header":["a1","a2"], "legend_title":["All Enterprise", "above designated Size"], "color":colors_red};
var category_gdp = {"csv_header": ["b1","b2","b3","b4","b5"],"legend_title":["GDP per county","GDP per capita", "Primary industry", "Secondary industry", "Tertiary industry"], "color":colors_pink};
var category_pop = {"csv_header": ["c1","c2","c3","c4","c5","c6"],"legend_title":["Population per county", "Population per km2", "Employee", "Citizen disposable income", "Citizen consumption", "Engel coefficient"], "color":colors_orange};
var category_logistic = {"csv_header":["d1","d2","d3","d4"], "legend_title":["Road length","Road passenger", "Road cargo", "Car parc"], "color":colors_blue};
var category_comunication = {"csv_header":["e1","e2","e3","e4"], "legend_title":["Communication cost", "Phone user", "Telephone user", "Internet user"], "color":colors_green};
var category_tech = {"csv_header":["f1","f2","f3","f4"], "legend_title":["Patent applications", "Authorized patent", "Public library", "Public library book"], "color":colors_purple};


// ------------------------------ init maps -----------------------------------------------
var map1 = L.map('Enterprise_map',{
    center:[32.99, 118.9489],
    zoom: 7,
});

var map2 = L.map('GDP_map',{
    center:[32.99, 118.9489],
    zoom: 7,
});

var map3 = L.map('Pop_map',{
    center:[32.99, 118.9489],
    zoom: 7,
});

var map4 = L.map('Logistic_map',{
    center:[32.99, 118.9489],
    zoom: 7,
});

var map5 = L.map('Communication_map',{
    center:[32.99, 118.9489],
    zoom: 7,
});

var map6 = L.map('Tech_map',{
    center:[32.99, 118.9489],
    zoom: 7,
});

// ------------------------------ get base layers -----------------------------------------------
// the basemaps must be initialized separately to each map
var baseLayer1 = L.tileLayer(
    'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png',
    {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        maxZoom:10,
        minZoom: 6
    }).addTo(map1);

var baseLayer2 = L.tileLayer(
    'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png',
    {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        maxZoom:10,
        minZoom: 6
    }).addTo(map2);

var baseLayer3 = L.tileLayer(
    'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png',
    {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        maxZoom:10,
        minZoom: 6
    }).addTo(map3);

var baseLayer4 = L.tileLayer(
    'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png',
    {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        maxZoom:10,
        minZoom: 6
    }).addTo(map4);

var baseLayer5 = L.tileLayer(
    'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png',
    {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        maxZoom:10,
        minZoom: 6
    }).addTo(map5);

var baseLayer6 = L.tileLayer(
    'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png',
    {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        maxZoom:10,
        minZoom: 6
    }).addTo(map6);

// ------------------------------ get label layers -----------------------------------------------
// var labelLayer1 = L.tileLayer(
//     'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_only_labels/{z}/{x}/{y}.png',
//     {
//         // attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
//         maxZoom:10,
//         minZoom: 6,
//         zIndex:650
//     }).addTo(map1);
//
// var labelLayer2 = L.tileLayer(
//     'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_only_labels/{z}/{x}/{y}.png',
//     {
//         maxZoom:10,
//         minZoom: 6,
//         zIndex:650
//     }).addTo(map2);
//
// var labelLayer3 = L.tileLayer(
//     'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_only_labels/{z}/{x}/{y}.png',
//     {
//         maxZoom:10,
//         minZoom: 6,
//         zIndex:650
//     }).addTo(map3);
//
// var labelLayer4 = L.tileLayer(
//     'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_only_labels/{z}/{x}/{y}.png',
//     {
//         maxZoom:10,
//         minZoom: 6,
//         zIndex:650
//     }).addTo(map4);
//
//
// var labelLayer5 = L.tileLayer(
//     'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_only_labels/{z}/{x}/{y}.png',
//     {
//         maxZoom:10,
//         minZoom: 6,
//         zIndex:650
//     }).addTo(map5);
//
// var labelLayer6 = L.tileLayer(
//     'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_only_labels/{z}/{x}/{y}.png',
//     {
//         maxZoom:10,
//         minZoom: 6,
//         zIndex:650
//     }).addTo(map6);

// ------------------------------ load csv data to the maps -----------------------------------------------
d3.csv("data/county_level_with_city_2016.csv").then(function (data) {
    // data_ori = data;
    data.forEach(function (x) {
        // x.PAC = +x.pcode;

        x.a1 = Math.round(+x.a1);
        x.a2 = Math.round(+x.a2);

        x.b1 = Math.round(+x.b1);
        x.b2 = Math.round(+x.b2);
        x.b3 = Math.round(+x.b3);
        x.b4 = Math.round(+x.b4);
        x.b5 = Math.round(+x.b5);
        x.b6 = Math.round(+x.b6);

        x.c1 = Math.round(+x.c1);
        x.c2 = Math.round(+x.c2);
        x.c3 = Math.round(+x.c3);
        x.c4 = Math.round(+x.c4);
        x.c5 = Math.round(+x.c5);

        x.d1 = Math.round(+x.d1);
        x.d2 = Math.round(+x.d2);
        x.d3 = Math.round(+x.d3);
        x.d4 = Math.round(+x.d4);

        x.e1 = Math.round(+x.e1);
        x.e2 = Math.round(+x.e2);
        x.e3 = Math.round(+x.e3);
        x.e4 = Math.round(+x.e4);

        x.f1 = Math.round(+x.f1);
        x.f2 = Math.round(+x.f2);
        x.f3 = Math.round(+x.f3);
        x.f4 = Math.round(+x.f4);
    });
    window.csv = data;
    // console.log(csv +"/n"+ Date.now());
    // console.log(new Date().toLocaleString());

    function getStyle(feature) {
        // value is the value in a field of a area
        if (typeof(csv) == 'undefined') {
            console.log("it is strange now");
            console.log(Date.now());
        }
        // the value is not existing
        var value = csv.filter(function(d){ return d.PAC == (+feature.properties.PAC) }); // the geojson PAC must has a match in the CSV file
        var value_field = value[0][field];

        // values is the column in a field of all the areas, but the value 0 is not included
        var values = getValues(field); // all the values from one county
        // console.log(values);
        return {
            fillColor: colorCalculaor(values, value_field),
            fillOpacity:0.8,
            weight: 2,
            opacity: 0.8,
            color: 'gray'
        }
        // console.log(feature.properties.PAC);
    }

    function getLayers(category) {
        var temp_list = [];
        var temp_list2 = [];
        window.color = category.color; // "color" is a global variable
        var list1 = category.csv_header; // get the header in csv
        //get style for each layer
        for(i in list1){
            window.field = list1[i];  // "field" is a global variable, update field here every time get a layer
            // console.log(typeof (field));
            var temp;

            var field_header = ["a1","a2","b1","b2","b3","b4","b5","c1","c2","c3","c4","c5","c6","d1","d2","d3","d4","e1","e2","e3","e4","f1","f2","f3","f4"];
            // color for the data table
            var field_color = ['#fb6a4a','#fb6a4a',
                '#fa9fb5','#fa9fb5','#fa9fb5','#fa9fb5','#fa9fb5',
                '#fdae6b','#fdae6b','#fdae6b','#fdae6b','#fdae6b','#fdae6b',
                '#9ecae1','#9ecae1','#9ecae1','#9ecae1',
                '#a1d99b','#a1d99b','#a1d99b','#a1d99b',
                '#bcbddc','#bcbddc','#bcbddc','#bcbddc'];
            function onMouseOver(e) {

                // highlight the region
                var layer = e.target;
                layer.setStyle({
                    weight: 2,
                    color: 'black',
                    dashArray: '',
                    fillOpacity: 0.7
                });

                if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                    layer.bringToFront();
                }


                var value = csv.filter(function(d){ return d.PAC == (e.target.feature.properties.PAC) })[0];
                // console.log(e);
                document.getElementById("county_name").innerHTML = "<b>" + value.County + "<b/>";
                document.getElementById("city_name").innerHTML = "<b>" + value.city + "<b/>";
                var i;
                for (i in field_header){
                    var id_county = "table_"+field_header[i];
                    var id_city = "table_"+field_header[i]+"_city";
                    var value_city = value[field_header[i]+"_city"];
                    var value_county = value[field_header[i]];
                    var element_city = document.getElementById(id_city);
                    var element_county = document.getElementById(id_county);

                    if (value_city == 0){ // check city value
                        element_city.innerHTML = "-";
                        if (value_county == 0){ //check county value
                            element_county.innerHTML = "-";
                        }else {
                            element_county.innerHTML = value_county;
                        }
                    }else {
                        element_city.innerHTML = value_city +" | 100%";
                        element_city.style.width = "100%";
                        element_city.style.background = field_color[i];
                        if (value_county == 0){ //check county value
                            element_county.innerHTML = "-";
                        }else {
                            var ratio = Math.round(value_county/value_city*100);
                            // console.log(ratio);

                            // console.log(ratio +"%");
                            element_county.style.width = ratio +"%";
                            element_county.style.background = field_color[i];
                            element_county.innerHTML = value_county +" | "+ratio +"%";
                        }
                    }
                }
            }
            function onMouseOut(e) {
                // reset highlight the region
                var layer = e.target;
                layer.setStyle({
                    fillOpacity:0.8,
                    weight: 2,
                    opacity: 0.8,
                    color: 'gray'
                });
                // temp.resetStyle(e.target);

                document.getElementById("county_name").innerHTML = "<b>County<b/>";
                document.getElementById("city_name").innerHTML = "<b>City<b/>";
                var i;
                for (i in field_header){
                    var id = "table_"+field_header[i];
                    document.getElementById(id).innerHTML = "-";
                    document.getElementById(id).style.width = "0%";
                    var id_city = "table_"+field_header[i]+"_city";
                    document.getElementById(id_city).innerHTML = "-";
                    document.getElementById(id_city).style.width = "0%";
                }
            }


            function onEachFeature(feature, layer) {
                // console.log(;)
                layer.on({
                    mouseover: onMouseOver,
                    mouseout: onMouseOut,
                    click: zoomToFeature
                });
            }

            function zoomToFeature(e) {
                // console.log(e);
                if (map1.getZoom() == 10) {
                    // map_gdp.setZoom(7);
                    map1.setView([32.99, 118.9489],7)
                } else {
                    map1.fitBounds(e.target.getBounds());
                }
            }

            temp = L.geoJson(geojsonCounty_simplified,{
                style: getStyle,
                onEachFeature: onEachFeature
            });

            temp_list.push(temp);
        }
        var list2 = category.legend_title; //get display names of the header
        // name each layer with the display names
        for(i in list2){
            temp_list2[list2[i]] = temp_list[i];
        }
        // console.log(temp_list2);
        return temp_list2;
    }

    // ------------------------------ Enterprise map -----------------------------------------------
    var layers_1 = getLayers(category_enterprise);

    // add default geojson layer to the map
    Object.values(layers_1)[0].addTo(map1);

    // add layer control
    L.control.layers(layers_1).addTo(map1);

    // ------------------------------ GDP map -----------------------------------------------
    var layers_2 = getLayers(category_gdp);

    Object.values(layers_2)[0].addTo(map2);

    L.control.layers(layers_2).addTo(map2);

    // ------------------------------ Population map -----------------------------------------------
    var layers_3 = getLayers(category_pop);

    Object.values(layers_3)[0].addTo(map3);

    L.control.layers(layers_3).addTo(map3);

    // ------------------------------ Logsitic map -----------------------------------------------
    var layers_4 = getLayers(category_logistic);

    Object.values(layers_4)[0].addTo(map4);

    L.control.layers(layers_4).addTo(map4);

    // ------------------------------ Communication map -----------------------------------------------
    var layers_5 = getLayers(category_comunication);

    Object.values(layers_5)[0].addTo(map5);

    L.control.layers(layers_5).addTo(map5);

    // ------------------------------ Technology map -----------------------------------------------
    var layers_6 = getLayers(category_tech);

    Object.values(layers_6)[0].addTo(map6);

    L.control.layers(layers_6).addTo(map6);

    // ------------------------------ maps zooming and panning synchronize -----------------------------------------------
    map1.sync(map2);
    map1.sync(map3);
    map1.sync(map4);
    map1.sync(map5);
    map1.sync(map6);
    map2.sync(map1);
    map2.sync(map3);
    map2.sync(map4);
    map2.sync(map5);
    map2.sync(map6);
    map3.sync(map1);
    map3.sync(map2);
    map3.sync(map4);
    map3.sync(map5);
    map3.sync(map6);
    map4.sync(map1);
    map4.sync(map2);
    map4.sync(map3);
    map4.sync(map5);
    map4.sync(map6);
    map5.sync(map1);
    map5.sync(map2);
    map5.sync(map3);
    map5.sync(map4);
    map5.sync(map6);
    map6.sync(map1);
    map6.sync(map2);
    map6.sync(map3);
    map6.sync(map4);
    map6.sync(map5);

    // ------------------------------ Extend Leaflet legend -----------------------------------------------
    //TODO: add unit to the legends
    L.Control.Legend = L.Control.extend({
        options: {position: 'bottomleft'},
        onAdd: function (map) {
            // console.log(this);
            this.div_legend = L.DomUtil.create('div', 'info legend');
            this.div_legend.innerHTML += "Legend Test onAdd";
            this.update();
            return this.div_legend;
        },
        update: function (title, category) {
            if(!(category)){category = init_category}
            if(!(title)){title = category.legend_title[0]}
            // get the data position in the category
            var pos = category.legend_title.indexOf(title);
            var field_name = category.csv_header[pos];

            var values = getValues(field_name);
            var grades = getQuantiles(values);
            var color_list = category.color;

            this.div_legend.innerHTML = "<p><b>"+ title +"</b></p>"; //reset so that legend is not plotted multiple times
            this.div_legend.innerHTML += ('<i style="background: #B3B3B3"></i> ' + 'Not available'+ '<br>');
            var i;
            for (i = 0; i < 7; i++) {
                // console.log(grades[i]);
                this.div_legend.innerHTML +=
                    '<i style="background:' + color_list[i] + '"></i> ' +grades[i] + (grades[i + 1] ? (" - ") + grades[i + 1] + '<br>' : '+');
            }
            // console.log(this.div_legend.innerHTML);
        }
    });

    L.control.legend = function(opts) {
        return new L.Control.Legend(opts);
    };

    // ------------------------------ add legend to Enterprise map -----------------------------------------------
    var init_category = category_enterprise;
    var legend1 = L.control.legend();

    // add legend change when layer changes
    map1.on('baselayerchange', function (eventLayer) {
        // console.log(eventLayer.name); // maybe the value numbers can be get from here
        legend1.update(eventLayer.name,category_enterprise);
    });

    legend1.addTo(map1);


    // ------------------------------ add legend to GDP map -----------------------------------------------
    var init_category = category_gdp;
    var legend2 = L.control.legend();
    // add legend change when layer changes
    map2.on('baselayerchange', function (eventLayer) {
        // console.log(eventLayer.name); // maybe the value numbers can be get from here
        legend2.update(eventLayer.name, category_gdp);
    });

    legend2.addTo(map2);

    // ------------------------------ add legend to population map -----------------------------------------------
    var init_category = category_pop;
    var legend3 = L.control.legend();
    // add legend change when layer changes
    map3.on('baselayerchange', function (eventLayer) {
        // console.log(eventLayer.name); // maybe the value numbers can be get from here
        legend3.update(eventLayer.name, category_pop);
    });

    legend3.addTo(map3);

    // ------------------------------ add legend to logistic map -----------------------------------------------
    var init_category = category_logistic;
    var legend4 = L.control.legend();
    // add legend change when layer changes
    map4.on('baselayerchange', function (eventLayer) {
    // console.log(eventLayer.name); // maybe the value numbers can be get from here
        legend4.update(eventLayer.name, category_logistic);
    });

    legend4.addTo(map4);

    // ------------------------------ add legend to Communication map -----------------------------------------------
    var init_category = category_comunication;
    var legend5 = L.control.legend();
    // add legend change when layer changes
    map5.on('baselayerchange', function (eventLayer) {
        // console.log(eventLayer.name); // maybe the value numbers can be get from here
        legend5.update(eventLayer.name, category_comunication);
    });

    legend5.addTo(map5);

    // ------------------------------ add legend to Tech map -----------------------------------------------
    var init_category = category_tech;
    var legend6 = L.control.legend();
    // add legend change when layer changes
    map6.on('baselayerchange', function (eventLayer) {
        // console.log(eventLayer.name); // maybe the value numbers can be get from here
        legend6.update(eventLayer.name, category_tech);
    });

    legend6.addTo(map6);
});


//
// ------------------------------ helpers -----------------------------------------------
// function getRange(dataList, field) {
//     var coloumn = dataList.map(function(d){return d[field]});
//
//     // remove 0 from the colomn
//     coloumn = coloumn.filter(function(d){return d>0});
//     var max = d3.max(coloumn);
//     var min = d3.min(coloumn);
//     return [min, max]
// }


// to get the legend ranges in number
function getQuantiles(values) {
    var temp = [];
    var intervals = 7; // the intervals is one number less the color length

    //sort values by value
    values = values.sort(function(a, b){return a - b});
    var i;
    for (i = 0; i <= intervals; i++){
        var quantile = d3.quantile(values, ((1/intervals)*i)); // the order of values influence the quantile result
        temp.push(Math.round(quantile));
    }
    // temp.push(d3.max(values)); // add the max to the list
    return temp;
}

// to get the data column from all the areas in a field
function getValues( field) {
    // console.log(dataList);
    var coloumn = csv.map(function(d){return d[field]});
    return coloumn.filter(function(d){return d>0});
}

function colorScalorQuantize(values) {
    return d3.scaleQuantile().domain(values).range(color);
}

// to get legend colors
function colorCalculaor(values, value){
    // console.log(values);
    var color_temp = value!=0 ? colorScalorQuantize(values)(value) : '#B3B3B3'; // the order of the values does not influence the quantile result
    return color_temp
}





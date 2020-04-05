/* Kevin Palmer, UW-Madison, GEOG778, Spring 2020 */

// Classes from ArcGIS API for Javascript 4.14
require([
    "esri/Map",
    "esri/views/MapView",
    "esri/views/layers/support/FeatureFilter",
    "esri/Basemap",
    "esri/layers/VectorTileLayer",
    "esri/layers/FeatureLayer",
    "esri/layers/GroupLayer",
    "esri/layers/support/LabelClass",
    "esri/widgets/Home",
    "esri/widgets/Locate",
    "esri/widgets/Expand",
    "esri/widgets/BasemapToggle",
    "esri/widgets/BasemapGallery",
    "esri/widgets/LayerList",
    "esri/widgets/Search",
    "esri/widgets/ScaleBar",
    "esri/widgets/Slider",
],
// Main Function
function(Map, MapView, FeatureFilter, Basemap, VectorTileLayer, FeatureLayer, GroupLayer, LabelClass, Home, Locate,
         Expand, BasemapToggle, BasemapGallery, LayerList, Search, ScaleBar, Slider) {
    // Newspaper Basemap (Vector Tiles)
    var basemap = new Basemap({
        baseLayers: [
            new VectorTileLayer({
                portalItem: {
                    id: "dfb04de5f3144a80bc3f9f336228d24a" // Newspaper Basemap
                }
            })
        ]
    });

    var map = new Map({
        basemap: basemap
    });

    // // Basemap
    // var map = new Map({
    //     basemap: "streets"
    // });

    // View
    var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-77.0075, 38.872778], // longitude, latitude
        zoom: 12,
    });
    view.constraints = {
        minZoom: 8,
        maxZoom: 19
    };

    // Home Widget
    var homeWidget = new Home({
        view: view,
        // label: "Zoom to Home",
    });
    view.ui.add(homeWidget, "top-left");

    // Locate Widget
    var locateWidget = new Locate({
        view: view,
    });
    view.ui.add(locateWidget, "top-left");

    // Basemap Toggle Widget
    var basemapToggle = new BasemapToggle({
        view: view,
        nextBasemap: "satellite"
    });
    view.ui.add(basemapToggle, "bottom-left");
    // var basemapToggleExpand = new Expand({
    //     id: "basemapToggleExpand",
    //     view: view,
    //     expandTooltip: "Basemap Toggle",
    //     content: basemapToggle,
    //     autoCollapse: true,
    //     mode: "floating"
    // });
    // view.ui.add(basemapToggleExpand, "top-left");

    // // Basemap Gallery Widget
    // var basemapGallery = new BasemapGallery({
    //     view: view,
    //     source: {
    //         portal: {
    //             url: "https://www.arcgis.com",
    //             useVectorBasemaps: true //Load vector tile basemaps
    //         }
    //     }
    // });
    // var basemapGalleryExpand = new Expand({
    //     id: "basemapGalleryExpand",
    //     view: view,
    //     expandTooltip: "Basemap Gallery",
    //     content: basemapGallery,
    //     autoCollapse: true,
    //     mode: "floating"
    // });
    // view.ui.add(basemapGalleryExpand, "top-left");

    // LayerList Widget
    var layerList = new LayerList({
        view: view,
        // listItemCreatedFunction: defineActionsLayerList
    });
    var layerListExpand = new Expand({
        id: "layerListExpand",
        view: view,
        expandTooltip: "Layer List",
        content: layerList,
        autoCollapse: true,
        mode: "floating"
    });
    view.ui.add(layerListExpand, {
        position: "top-right"
    });

    // ScaleBar Widget
    var scaleBar = new ScaleBar({
        view: view
    });
    view.ui.add(scaleBar, "bottom-right");

    //------------------------------------------------------------------------------------------------------------------
    // Define Overlay Layers
    //------------------------------------------------------------------------------------------------------------------
    // Define Renderers
    var natsIcon = {
        type: "simple",
        symbol: {
            type: "picture-marker",
            url: 'img/Washington-Nationals-Marker.svg',
            width: "45px",
            height: "45px"
        }
    };
    var merchIcon = {
        type: "simple",
        symbol: {
            type: "picture-marker",
            url: "img/clothing-store-15.svg",
            width: "25px",
            height: "25px"
        }
    };
    var foodIcons = {
        type: "unique-value",
        field: "type",
        uniqueValueInfos: [{
            value: "Snacks",
            symbol: {
                type: "picture-marker",
                url: "img/confectionery-15.svg",
                width: "25px",
                height: "25px"
            }
        }, {
            value: "Grill",
            symbol: {
                type: "picture-marker",
                url: "img/fast-food-15.svg",
                width: "25px",
                height: "25px"
            }
        }, {
            value: "Vegetarian",
            symbol: {
                type: "picture-marker",
                url: "img/garden-15.svg",
                width: "25px",
                height: "25px"
            }
        }, {
            value: "Ice Cream",
            symbol: {
                type: "picture-marker",
                url: "img/ice-cream-15.svg",
                width: "25px",
                height: "25px"
            }
        }, {
            value: "Premium",
            symbol: {
                type: "picture-marker",
                url: "img/restaurant-15.svg",
                width: "25px",
                height: "25px"
            }
        }, {
            value: "Pizza",
            symbol:  {
                type: "picture-marker",
                url: "img/restaurant-pizza-15.svg",
                width: "25px",
                height: "25px"
            }
        }, {
            value: "Seafood",
            symbol: {
                type: "picture-marker",
                url: "img/restaurant-seafood-15.svg",
                width: "25px",
                height: "25px"
            }
        }]
    };
    var beerIcon = {
        type: "simple",
        symbol: {
            type: "picture-marker",
            url: 'img/beer-15.svg',
            width: "25px",
            height: "25px"
        }
    };
    var restroomIcons = {
        type: "unique-value",
        field: "type",
        uniqueValueInfos: [{
            value: "Mens",
            symbol: {
                type: "picture-marker",
                url: "img/toilet-man-15.svg",
                width: "20px",
                height: "20px"
            }
        }, {
            value: "Womens",
            symbol:  {
                type: "picture-marker",
                url: "img/toilet-woman-15.svg",
                width: "20px",
                height: "20px"
            }
        }, {
            value: "Family",
            symbol: {
                type: "picture-marker",
                url: "img/toilet-family-15.svg",
                width: "20px",
                height: "20px"
            }
        }]
    };
    var gateIcon = {
        type: "simple",
        symbol: {
            type: "picture-marker",
            url: "img/roadblock-15.svg",
            width: "20px",
            height: "20px"
        }
    };
    var publicTransIcons = {
        type: "unique-value",
        field: "type",
        uniqueValueInfos: [{
            value: "Metrorail",
            symbol: {
                type: "picture-marker",
                url: "img/rail-15.svg",
                width: "20px",
                height: "20px"
            }
        }, {
            value: "Bikeshare",
            symbol:  {
                type: "picture-marker",
                url: "img/bicycle-share-15.svg",
                width: "20px",
                height: "20px"
            }
        }, {
            value: "Water Taxi",
            symbol: {
                type: "picture-marker",
                url: "img/ferry-15.svg",
                width: "20px",
                height: "20px"
            }
        }]
    };
    var parkingIcon = {
        type: "simple",
        symbol: {
            type: "picture-marker",
            url: "img/parking-15.svg",
            width: "20px",
            height: "20px"
        }
    };

    // Define Fill Symbols
    var sectionsPoly = {
        type: "simple",
        symbol: {
            type: "simple-fill",
            color: [255, 0, 0, 0.25],
            style: "solid",
            outline: {
                color: [255, 0, 0, 1],
                width: 1
            }
        }
    };
    var parkingPolyRenderer = {
        type: "simple",
        symbol: {
            type: "simple-fill",
            color: [0, 0, 0, 0.25],
            style: "solid",
            outline: {
                color: [0, 0, 0, 1],
                width: 1
            }
        }
    };
    var parkBoundaryPolyRenderer = {
        type: "simple",
        symbol: {
            type: "simple-fill",
            color: [255, 0, 0, 0.05],
            style: "solid",
            outline: {
                color: [255, 0, 0, 1],
                width: .75
            }
        }
    };

    // Define Label Classes
    const labelClass = {
        symbol: {
            type: "text",
            color: "red",
            haloColor: "white",
            haloSize: 2,
            font: {
                size: 10
            },
        },
        labelExpressionInfo: {
            expression: "$feature.section"
        },
        labelPlacement: "always-horizontal",
        minScale: 1129
    };

    // Define Feature Layers
    // Merchandise Feature Layer (points)
    var merch = new FeatureLayer({
        url: 'http://rkpalmerjr.com/arcgis/rest/services/GEOG778/NatsPark/MapServer/2',
        title: "Merchandise",
        minScale: 2257,
        renderer: merchIcon,
        visible: true,
        outFields: ["*"],
        popupTemplate: {
            title: "{name}",
            collapseEnabled: false,
            content: "<p>Concourse:  <strong>{concourse}</strong><br>" +
                "Location:  <strong>{location}</strong><br>" +
                "Section:  <strong>{section}</strong></p>"
        }
    });

    // Food Feature Layer (points)
    var food = new FeatureLayer({
        url: 'http://rkpalmerjr.com/arcgis/rest/services/GEOG778/NatsPark/MapServer/3',
        title: "Food",
        minScale: 2257,
        renderer: foodIcons,
        visible: true,
        outFields: ["*"],
        popupTemplate: {
            title: "{name}",
            collapseEnabled: false,
            content: "<p>Food Type:  <strong>{type}</strong><br>" +
                "Concourse:  <strong>{concourse}</strong><br>" +
                "Location:  <strong>{location}</strong><br>" +
                "Section:  <strong>{section}</strong></p>"
        }
    });

    // Beer Feature Layer (points)
    var beer = new FeatureLayer({
        url: 'http://rkpalmerjr.com/arcgis/rest/services/GEOG778/NatsPark/MapServer/4',
        title: "Beer and Alcohol",
        minScale: 2257,
        renderer: beerIcon,
        visible: true,
        outFields: ["*"],
        popupTemplate: {
            title: "{name}",
            collapseEnabled: false,
            content: "<p>Beer Brands:  <strong>{brands}</strong><br>" +
                "Concourse:  <strong>{concourse}</strong><br>" +
                "Location:  <strong>{location}</strong><br>" +
                "Section:  <strong>{section}</strong></p>"
        }
    });

    // Restrooms Feature Layer (points)
    var restrooms = new FeatureLayer({
        url: 'http://rkpalmerjr.com/arcgis/rest/services/GEOG778/NatsPark/MapServer/5',
        title: "Restrooms",
        minScale: 2257,
        renderer: restroomIcons,
        visible: true,
        outFields: ["*"],
        popupTemplate: {
            title: "{type} Restroom",
            collapseEnabled: false,
            content: "<p>Concourse:  <strong>{concourse}</strong><br>" +
                "Location:  <strong>{location}</strong><br>" +
                "Section:  <strong>{section}</strong></p>"
        }
    });

    // Sections Feature Layer (polygons)
    var sections = new FeatureLayer({
        url: 'http://rkpalmerjr.com/arcgis/rest/services/GEOG778/NatsPark/MapServer/7',
        title: "Sections",
        minScale: 9028,
        renderer: sectionsPoly,
        visible: true,
        labelingInfo: [labelClass],
        labelsVisible: true,
        outFields: ["*"],
        popupTemplate: {
            title: "Section {section}",
            collapseEnabled: false,
            content: "<p>Concourse:  <strong>{concourse}</strong><br>" +
                "Location:  <strong>{location}</strong></p>"
        }
    });

    // Gates Feature Layer (points)
    var gates = new FeatureLayer({
        url: 'http://rkpalmerjr.com/arcgis/rest/services/GEOG778/NatsPark/MapServer/1',
        title: "Gates",
        minScale: 9028,
        renderer: gateIcon,
        visible: true,
        outFields: ["*"],
        popupTemplate: {
            title: "{name}",
            collapseEnabled: false,
            content: "<p>Concourse:  <strong>{concourse}</strong></p>"
        }
    });

    // Public Transportation Feature Layer (points)
    var publicTrans = new FeatureLayer({
        url: 'http://rkpalmerjr.com/arcgis/rest/services/GEOG778/NatsPark/MapServer/0',
        title: "Pubic Transportation",
        minScale: 18056,
        renderer: publicTransIcons,
        visible: true,
        outFields: ["*"],
        popupTemplate: {
            title: "{name}",
            collapseEnabled: false,
            content: "<p><strong>{type}</strong></p>"
        }
    });

    // Parking Lot Feature Layer (polygons)
    var parkingPoly = new FeatureLayer({
        url: 'http://rkpalmerjr.com/arcgis/rest/services/GEOG778/NatsPark/MapServer/6',
        title: "Parking Lot or Garage Boundaries",
        minScale: 18056,
        renderer: parkingPolyRenderer,
        visible: true,
        outFields: ["*"],
        popupTemplate: {
            title: "{name}",
            collapseEnabled: false
        }
    });

    // Parking Lot Feature Layer (points)
    var parkingPoint = new FeatureLayer({
        url: 'http://rkpalmerjr.com/arcgis/rest/services/GEOG778/NatsPark/MapServer/6',
        title: "Parking Lot or Garage Icons",
        minScale: 36112,
        renderer: parkingIcon,
        visible: true,
        outFields: ["*"],
        popupTemplate: {
            title: "{name}",
            collapseEnabled: false
        }
    });

    // Park Boundary Feature Layer (polygons)
    var parkBoundaryPoly = new FeatureLayer({
        url: 'http://rkpalmerjr.com/arcgis/rest/services/GEOG778/NatsPark/MapServer/8',
        title: "Nationals Park Boundary",
        minScale: 36112,
        renderer: parkBoundaryPolyRenderer,
        // listMode: "hide"
    });

    // Park Boundary Feature Layer (points)
    var parkBoundaryPoint = new FeatureLayer({
        url: 'http://rkpalmerjr.com/arcgis/rest/services/GEOG778/NatsPark/MapServer/8',
        title: "Nationals Park Icon",
        maxScale: 36111,
        renderer: natsIcon,
        listMode: "hide"
    });

    // Group Layers
    var atParkLayers = new GroupLayer({
        title: "Nationals Park",
        // visible: false,
        // visibilityMode: "exclusive",
        layers: [parkBoundaryPoint, parkBoundaryPoly, gates, sections, restrooms, beer, food, merch]
    });

    var toParkLayers = new GroupLayer({
        title: "Transportation",
        visible: true,
        // visibilityMode: "exclusive",
        layers: [parkingPoly, parkingPoint, publicTrans]
    });

    // var parkLayers = new GroupLayer({
    //     title: "Nationals Park Boundary",
    //     visible: true,
    //     // visibilityMode: "exclusive",
    //     // listMode: "hide-children",
    //     layers: [parkBoundaryPoint, parkBoundaryPoly]
    // });

    // Add Feature Layers to Map
    // map.add(parkLayers);
    map.add(toParkLayers);
    map.add(atParkLayers);

    //------------------------------------------------------------------------------------------------------------------
    //
    //------------------------------------------------------------------------------------------------------------------

    // Search Widget
    const searchSources = [
        // Merchandise
        {
            layer: merch,
            name: "Merchandise",
            placeholder: "example: hat",
            searchFields: ["tags", "name"],
            displayField: "name",
            suggestionTemplate: "<strong>{name}</strong> - {concourse} concourse, {location}, Section {section}",
            exactMatch: false,
            outFields: ["*"],
            suggestionsEnabled: true,
            maxResults: 100,
            maxSuggestions: 100
        },
        // Food
        {
            layer: food,
            name: "Food",
            placeholder: "example: hot dog",
            searchFields: ["tags", "name", "type"],
            displayField: "name",
            suggestionTemplate: "<strong>{name}</strong> - {concourse} concourse, {location}, Section {section}",
            exactMatch: false,
            outFields: ["*"],
            suggestionsEnabled: true,
            maxResults: 100,
            maxSuggestions: 100,
            // resultSymbol:
        },
        // Beer
        {
            layer: beer,
            name: "Beer",
            placeholder: "example: Budweiser",
            searchFields: ["tags", "name", "brands"],
            displayField: "name",
            suggestionTemplate: "<strong>{name}</strong> - {concourse} concourse, {location}, Section {section}",
            exactMatch: false,
            outFields: ["*"],
            suggestionsEnabled: true,
            maxResults: 100,
            maxSuggestions: 100
        },
        // Restrooms
        {
            layer: restrooms,
            name: "Restrooms",
            placeholder: "example: mens",
            searchFields: ["tags", "type"],
            displayField: "type",
            suggestionTemplate: "<strong>{type} Restroom</strong> - {concourse} concourse, {location}, Section {section}",
            exactMatch: false,
            outFields: ["*"],
            suggestionsEnabled: true,
            maxResults: 100,
            maxSuggestions: 100
        },
        // Sections
        {
            layer: sections,
            name: "Seating Sections",
            placeholder: "example: 130",
            searchFields: ["tags", "section", "location"],
            displayField: "section",
            suggestionTemplate: "<strong>Section {section}</strong> - {concourse} concourse, {location}, Section {section}",
            exactMatch: false,
            outFields: ["*"],
            suggestionsEnabled: true,
            maxResults: 100,
            maxSuggestions: 100
        },
        // Gates
        {
            layer: gates,
            name: "Entrance Gates",
            placeholder: "example: gate",
            searchFields: ["tags", "name"],
            displayField: "name",
            suggestionTemplate: "<strong>{name}</strong> - {concourse} concourse",
            exactMatch: false,
            outFields: ["*"],
            suggestionsEnabled: true,
            maxResults: 100,
            maxSuggestions: 100
        },
        // Public Transportation
        {
            layer: publicTrans,
            name: "Public Transportation",
            placeholder: "example: metro",
            searchFields: ["tags", "name", "type"],
            displayField: "name",
            suggestionTemplate: "<strong>{name}</strong> - Type:  {type}",
            exactMatch: false,
            outFields: ["*"],
            suggestionsEnabled: true,
            maxResults: 100,
            maxSuggestions: 100
        },
        // Parking
        {
            layer: parkingPoly,
            name: "Parking Lots and Garages",
            placeholder: "example: parking",
            searchFields: ["tags", "name"],
            displayField: "name",
            suggestionTemplate: "<strong>{name}</strong> - Type:  {type}",
            exactMatch: false,
            outFields: ["*"],
            suggestionsEnabled: true,
            maxResults: 100,
            maxSuggestions: 100
        }
    ];

    var search = new Search({
        view: view,
        locationEnabled: false,
        sources: searchSources,
        includeDefaultSources: false,
        allPlaceholder: "Search here for things (merchandise, food, beer, restrooms, etc.)"
        // resultGraphic:
    });
    var searchExpand = new Expand({
        id: "searchExpand",
        view: view,
        expandTooltip: "Search here for things (merchandise, food, beer, restrooms, etc.)",
        content: search,
        autoCollapse: true,
        mode: "floating"
    });
    view.ui.add(searchExpand, "top-right");

    // Display the selected result from the search <-- NEED TO FIGURE THIS OUT
    search.on("select-result", function(event){
        console.log("The selected search result: ", event);
    });

    // Slider Widget
    // https://developers.arcgis.com/javascript/latest/sample-code/sandbox/index.html?sample=building-scene-layer-filter
    // https://developers.arcgis.com/javascript/latest/sample-code/sandbox/index.html?sample=featurefilter-attributes
    var levelLayerView = null;

    // Set the initial level filter to level 1
    filterLayers = [merch, food, beer, restrooms, sections, gates];
    filterLayers.forEach(function(layer){
        view.whenLayerView(layer).then(function(layerView) {
            levelLayerView = layerView;
            levelLayerView.filter = {
                where: "level = 1"
            };
        }).catch(console.error);
    });

    // Constructing the floor slider widget
    const floorSlider = new Slider({
        container: "floorSelector",
        min: 1,
        max: 4,
        precision: 0,
        layout: "vertical",
        steps: 1,
        tickConfigs: [
            {
                mode: "position",
                values: [1,2,3,4],
                labelsVisible: true
            }
        ],
        values: [1]
    });

    // Update the level filter based on level selected
    floorSlider.watch("values", function(values) {
        console.log("Level " + values + " selected.  Displaying features on level " + values + " only.");
        filterLayers.forEach(function(layer){
            view.whenLayerView(layer).then(function(layerView) {
                levelLayerView = layerView;
                levelLayerView.filter = {
                    where: "level = " + values
                };
            });
        });
    });

    // Reset the level filter to all levels by setting the level filter to null
    document
        .getElementById("filterReset")
        .addEventListener("click", function() {
            filterLayers.forEach(function(layer){
                view.whenLayerView(layer).then(function(layerView) {
                    levelLayerView = layerView;
                    levelLayerView.filter = null;
                });
            });
            console.log("Level filters cleared.")
        });

    var sliderExpand = new Expand({
        id: "sliderExpand",
        view: view,
        expandTooltip: "Filter by Level",
        expandIconClass: "esri-icon-filter",
        content: menu,
        autoCollapse: true,
        mode: "floating"
        // expanded: true,
    });
    view.ui.add(sliderExpand, "top-right");

    // User Feedback/Ratings Widget (Custom Widget???)

    // https://developers.arcgis.com/javascript/latest/sample-code/popup-actions/index.html

    // https://developers.arcgis.com/javascript/latest/sample-code/widgets-custom-widget/index.html
    // https://developers.arcgis.com/javascript/latest/sample-code/widgets-editor-basic/index.html
    // https://developers.arcgis.com/javascript/latest/sample-code/widgets-editor-configurable/index.html
    // https://developers.arcgis.com/javascript/latest/sample-code/editing-applyedits/index.html
    // https://developers.arcgis.com/javascript/latest/sample-code/editing-groupedfeatureform/index.html
    // https://developers.arcgis.com/javascript/latest/sample-code/popup-editaction/index.html

    //------------------------------------------------------------------------------------------------------------------
    // Define Functions
    //------------------------------------------------------------------------------------------------------------------

    // function defineActionsLayerList(event) {
    //
    // };

});
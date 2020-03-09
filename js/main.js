/* Kevin Palmer, UW-Madison, GEOG778, Spring 2020 */

// Classes from ArcGIS API for Javascript 4.14
require([
    "esri/Map",
    "esri/views/MapView",
    "esri/Basemap",
    "esri/layers/VectorTileLayer",
    "esri/widgets/Home",
    "esri/widgets/Locate",
    "esri/widgets/Expand",
    "esri/widgets/BasemapToggle",
    "esri/widgets/BasemapGallery",
    "esri/widgets/LayerList",
    "esri/widgets/Search",
    "esri/widgets/ScaleBar",
    "esri/layers/FeatureLayer",
],
// Main Function
function(Map, MapView, Basemap, VectorTileLayer, Home, Locate, Expand, BasemapToggle, BasemapGallery, LayerList, Search, ScaleBar, FeatureLayer) {
    // Colored Pencils Basemap (Vector Tiles)
    // var basemap = new Basemap({
    //     baseLayers: [
    //         new VectorTileLayer({
    //             portalItem: {
    //                 id: "4cf7e1fb9f254dcda9c8fbadb15cf0f8" // Colored Pencil Basemap
    //             }
    //         })
    //     ]
    // });
    //
    // var map = new Map({
    //     basemap: basemap
    // });

    // Basemap
    var map = new Map({
        basemap: "streets"
    });

    // View
    var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-77.0075, 38.872778], // latitude, longitude
        zoom: 14,
        minZoom: 12,
        maxZoom: 19
    });

    // Home Widget
    var homeWidget = new Home({
       view: view
    });
    view.ui.add(homeWidget, "top-left");

    // Locate Widget
    var locateWidget = new Locate({
       view: view
    });
    view.ui.add(locateWidget, "top-left");

    // Basemap Toggle Widget
    var basemapToggle = new BasemapToggle({
       view: view,
       nextBasemap: "satellite"
    });
    var basemapToggleExpand = new Expand({
       view: view,
       content: basemapToggle
    });
    view.ui.add(basemapToggleExpand, "top-right");

    // Basemap Gallery Widget
    var basemapGallery = new BasemapGallery({
        view: view,
        source: {
            portal: {
                url: "https://www.arcgis.com",
                useVectorBasemaps: true //Load vector tile basemaps
            }
        }
    });
    var basemapGalleryExpand = new Expand({
       view: view,
       content: basemapGallery
    });
    view.ui.add(basemapGalleryExpand, "top-right");

    // LayerList Widget
    var layerList = new LayerList({
       view: view
    });
    var layerListExpand = new Expand({
       view: view,
       content: layerList
    });
    view.ui.add(layerListExpand, {
       position: "top-right"
    });

    // Legend Widget???
    // https://developers.arcgis.com/javascript/latest/sample-code/widgets-legend/index.html
    // https://developers.arcgis.com/javascript/latest/sample-code/widgets-legend-card/index.html

    // Search Widget
    var search = new Search({
       view: view
    });
    var searchExpand = new Expand({
       view: view,
       content: search
    });
    view.ui.add(searchExpand, "top-left");

    // ScaleBar Widget
    var scaleBar = new ScaleBar({
       view: view
    });
    view.ui.add(scaleBar, "bottom-right");

    //------------------------------------------------------------------------------------------------------------------
    // Define Overlay Layers
    //------------------------------------------------------------------------------------------------------------------
    // Define Marker Icons
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
    var snacksIcon = {
        type: "simple",
        symbol: {
            type: "picture-marker",
            url: "img/confectionery-15.svg",
            width: "25px",
            height: "25px"
        }
    };
    var grillIcon = {
        type: "simple",
        symbol: {
            type: "picture-marker",
            url: "img/fast-food-15.svg",
            width: "25px",
            height: "25px"
        }
    };
    var vegetarianIcon = {
        type: "simple",
        symbol: {
            type: "picture-marker",
            url: "img/garden-15.svg",
            width: "25px",
            height: "25px"
        }
    };
    var iceCreamIcon = {
        type: "simple",
        symbol: {
            type: "picture-marker",
            url: "img/ice-cream-15.svg",
            width: "25px",
            height: "25px"
        }
    };
    var premiumIcon = {
        type: "simple",
        symbol: {
            type: "picture-marker",
            url: "img/restaurant-15.svg",
            width: "25px",
            height: "25px"
        }
    };
    var pizzaIcon = {
        type: "simple",
        symbol: {
            type: "picture-marker",
            url: "img/restaurant-pizza-15.svg",
            width: "25px",
            height: "25px"
        }
    };
    var seafoodIcon = {
        type: "simple",
        symbol: {
            type: "picture-symbol",
            url: "img/restaurant-seafood-15.svg",
            width: "25px",
            height: "25px"
        }
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
    var toiletManIcon = {
        type: "simple",
        symbol: {
            type: "picture-marker",
            url: "img/toilet-man-15.svg",
            width: "20px",
            height: "20px"
        }
    };
    var toiletWomanIcon = {
        type: "simple",
        symbol: {
            type: "picture-marker",
            url: "img/toilet-woman-15.svg",
            width: "20px",
            height: "20px"
        }
    };
    var toiletFamilyIcon = {
        type: "simple",
        symbol: {
            type: "picture-marker",
            url: "img/toilet-family-15.svg",
            width: "20px",
            height: "20px"
        }
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
    var metroIcon = {
        type: "simple",
        symbol: {
            type: "picture-marker",
            url: "img/rail-15.svg",
            width: "20px",
            height: "20px"
        }
    };
    var bikeIcon = {
        type: "simple",
        symbol: {
            type: "picture-marker",
            url: "img/bicycle-share-15.svg",
            width: "20px",
            height: "20px"
        }
    };
    var waterTaxiIcon = {
        type: "simple",
        symbol: {
            type: "picture-marker",
            url: "img/ferry-15.svg",
            width: "20px",
            height: "20px"
        }
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
    var parkingPoly = {
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
    var parkBoundaryPoly = {
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

    // Feature Layers
    // Merchandise Feature Layer (points)
    var merch = new FeatureLayer({
        url: 'http://rkpalmerjr.com/arcgis/rest/services/GEOG778/NatsPark/MapServer/2',
        // minZoom: 15,
        renderer: merchIcon,
        outFields: ["name","section"],
        popupTemplate: {
            title: "{name}",
            content: "<p><strong>Near Section:</strong> {section}</p>"
        }
    });

    // Food Feature Layer (points)
    var food = new FeatureLayer({
        url: 'http://rkpalmerjr.com/arcgis/rest/services/GEOG778/NatsPark/MapServer/3',
        // minZoom: 15,
        // renderer: {
        //
        // },
        outFields: ["name","section"],
        popupTemplate: {
            title: "{name}",
            content: "<p><strong>Near Section:</strong> {section}</p>"
        }

    });

    // Beer Feature Layer (points)
    var beer = new FeatureLayer({
        url: 'http://rkpalmerjr.com/arcgis/rest/services/GEOG778/NatsPark/MapServer/4',
        // minZoom: 15,
        renderer: beerIcon,
        outFields: ["name","section","brands"],
        popupTemplate: {
            title: "{name}",
            content: "<p><strong>Beer Brands:</strong> {brands}<br><strong>Near Section:</strong> {section}</p>"
        }
    });

    // Restrooms Feature Layer (points)
    var restrooms = new FeatureLayer({
        url: 'http://rkpalmerjr.com/arcgis/rest/services/GEOG778/NatsPark/MapServer/5',
        // minZoom: 15,
        // renderer: {
        //
        // },
        outFields: ["type", "section"],
        popupTemplate: {
            title: "{type}",
            content: "<p><strong>Near Section:</strong> {section}</p>"
        }
    });

    // Sections Feature Layer (polygons)
    var sections = new FeatureLayer({
        url: 'http://rkpalmerjr.com/arcgis/rest/services/GEOG778/NatsPark/MapServer/7',
        // minZoom: 14,
        renderer: sectionsPoly,
        outFields: ["section"],
        popupTemplate: {
            title: "Section: {section}"
        }
    });

    // Gates Feature Layer (points)
    var gate = new FeatureLayer({
        url: 'http://rkpalmerjr.com/arcgis/rest/services/GEOG778/NatsPark/MapServer/1',
        // minZoom: 15,
        renderer: gateIcon,
        outFields: ["name"],
        popupTemplate: {
            title: "{name}"
        }
    });

    // Public Transportation Feature Layer (points)
    var publicTrans = new FeatureLayer({
        url: 'http://rkpalmerjr.com/arcgis/rest/services/GEOG778/NatsPark/MapServer/0',
        // minZoom: 14,
        // renderer: {
        //
        // },
        outFields: ["name"],
        popupTemplate: {
            title: "{name}"
        }
    });

    // Parking Lot Feature Layer (polygons)
    var parkingPoly = new FeatureLayer({
        url: 'http://rkpalmerjr.com/arcgis/rest/services/GEOG778/NatsPark/MapServer/6',
        // minZoom: 14,
        renderer: parkingPoly,
        outFields: ["name"],
        popupTemplate: {
            title: "{name}"
        }
    });

    // Park Boundary Feature Layer (polygons)
    var parkBoundary = new FeatureLayer({
        url: 'http://rkpalmerjr.com/arcgis/rest/services/GEOG778/NatsPark/MapServer/8',
        renderer: parkBoundaryPoly
    });

    map.add(parkBoundary);
    map.add(parkingPoly);
    map.add(publicTrans);
    map.add(gate);
    map.add(sections);
    map.add(restrooms);
    map.add(beer);
    map.add(food);
    map.add(merch);

    // Feature Filter for Concourse Levels
    // https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-support-FeatureFilter.html
    // https://developers.arcgis.com/javascript/latest/sample-code/sandbox/index.html?sample=featurefilter-attributes

    // User Feedback/Ratings Widget (Custom Widget???)
    // https://developers.arcgis.com/javascript/latest/sample-code/widgets-custom-widget/index.html
    // https://developers.arcgis.com/javascript/latest/sample-code/widgets-editor-basic/index.html
    // https://developers.arcgis.com/javascript/latest/sample-code/widgets-editor-configurable/index.html
    // https://developers.arcgis.com/javascript/latest/sample-code/editing-applyedits/index.html
    // https://developers.arcgis.com/javascript/latest/sample-code/editing-groupedfeatureform/index.html
    // https://developers.arcgis.com/javascript/latest/sample-code/popup-editaction/index.html
});
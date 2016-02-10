var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});

var mapOptions = {
    zoom: 11,
    center: new google.maps.LatLng(55.6468, 37.581),
    mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
};

var map = new google.maps.Map(document.getElementById('map'), mapOptions);

var ctaLayer = new google.maps.KmlLayer({
    url: 'http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml',
    map: map
});

map.mapTypes.set('map_style', styledMap);
map.setMapTypeId('map_style');
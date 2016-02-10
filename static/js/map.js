function initMap() {
    var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"})

    var mapOptions = {
        zoom: 11,
        center: {lat: 40.7127, lng: -74.0059},
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var ctaLayer = new google.maps.KmlLayer({
        //url: 'http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml',
        url: 'https://drive.google.com/file/d/0B99r3d3UJK4vWDVfRi1EaXQ0U2M/view?usp=sharing',
        map: map
    });

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
}
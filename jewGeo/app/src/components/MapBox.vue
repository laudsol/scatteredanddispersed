<template>
    <div class="google-map" id="the-one-true-map"></div>
</template>

<script>
    export default {
        name: 'MapBox',
        methods: {
            setMapData() {
                const element = document.getElementById("the-one-true-map")
                    const options = {
                    zoom: 3,
                    center: {lat: -28.024, lng: 140.887}
                }

                const map = new google.maps.Map(element, options) 

                const locations = [
                    {lat: -31.563910, lng: 147.154312},
                    {lat: -33.718234, lng: 150.363181},
                    {lat: -33.727111, lng: 150.371124},
                    {lat: -33.848588, lng: 151.209834},
                    {lat: -33.851702, lng: 151.216968},
                    {lat: -34.671264, lng: 150.863657},
                    {lat: -35.304724, lng: 148.662905},
                    {lat: -36.817685, lng: 175.699196},
                    {lat: -36.828611, lng: 175.790222},
                    {lat: -37.750000, lng: 145.116667},
                    {lat: -37.759859, lng: 145.128708}
                ]

                const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

                const markers = locations.map(function(location, i) {
                    return new google.maps.Marker({
                        position: location,
                        label: labels[i % labels.length]
                    });
                });

                const markerCluster = new MarkerClusterer(map, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'})
            }
        },
        mounted: function() {
            this.setMapData()
        }
    }
</script>

<style scoped>
    .google-map {
        width: 800px;
        height: 600px;
        margin: 0 auto;
        background: gray;
    }
</style>
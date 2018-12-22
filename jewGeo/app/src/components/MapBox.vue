<template>
    <div class="google-map" id="the-one-true-map"></div>
</template>

<script>
import { mapState } from 'vuex';
    export default {
        name: 'MapBox',
        computed: {
            ...mapState(['geoData'])
        },
        methods: {
            setMapData() {
                const element = document.getElementById("the-one-true-map")
                    const options = {
                    zoom: 2,
                    center: this.geoData[0].coordinates
                }

                const map = new google.maps.Map(element, options) 
                const markers = this.geoData.map(obj => {
                    return new google.maps.Marker({
                        position: obj.coordinates,
                        label: obj.label
                    });
                });

                const markerCluster = new MarkerClusterer(map, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'})
            }
        },
        watch: {
            geoData: function(){
                return this.setMapData();
            }
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
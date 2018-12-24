<template>
    <div class="google-map" id="the-one-true-map"></div>
</template>

<script>
import { mapGetters } from 'vuex';
    export default {
        name: 'MapBox',
        computed: {
            ...mapGetters({
                filteredGeoData: 'GET_FILTERED_GEO_DATA'
            })
        },
        methods: {
            setMapData() {
                if(this.filteredGeoData.length === 0){
                    return
                }

                const element = document.getElementById("the-one-true-map")
                    const options = {
                    zoom: 2,
                    center: this.filteredGeoData[0].coordinates
                }

                const map = new google.maps.Map(element, options) 
                const markers = this.filteredGeoData.map(obj => {
                    return new google.maps.Marker({
                        position: obj.coordinates,
                        label: obj.label
                    });
                });

                const markerCluster = new MarkerClusterer(map, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'})
            }
        },
        watch: {
            filteredGeoData: function(){
                return this.setMapData();
            }
        }
    }
</script>

<style scoped>
    .google-map {
        width: 700px;
        height: 500px;
        margin: 0 auto;
        background: gray;
    }
</style>
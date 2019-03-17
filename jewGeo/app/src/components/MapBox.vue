<template>
    <div class="google-map" id="the-one-true-map"></div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex';
    export default {
        name: 'MapBox',
        data(){
            return {
                lastZoom: 0,
                useLastCoordinates: false,
                lastCoordinates: {}
            }
        },
        computed: {
            ...mapGetters({
                filteredGeoData: 'GET_FILTERED_GEO_DATA'
            }),
            ...mapState(['focusedDataPoint', 'singleDataPointFocus'])
        },
        methods: {
            ...mapMutations({
                setFocusedDataPoint: 'SET_FOCUSED_DATA_POINT',
                setFocus: 'SET_FOCUS'
            }),
            setMapData() {
                const mapElement = document.getElementById("the-one-true-map")
                let zoom = 5
                const center = this.useLastCoordinates
                    ? this.lastCoordinates
                    : this.singleDataPointFocus
                        ? this.focusedDataPoint.coordinates
                        : this.filteredGeoData[0].coordinates

                if (this.lastZoom > 0) {
                    zoom = this.lastZoom
                    this.lastZoom = 0
                }

                if (this.useLastCoordinates) {
                    this.useLastCoordinates = false
                }

                const map = new google.maps.Map(mapElement, {zoom, center}) 
                const markers = this.filteredGeoData.map(obj => {
                    return new google.maps.Marker({
                        position: obj.coordinates,
                        label: obj.label
                    });
                });
                const markerCluster = new MarkerClusterer(map, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'})

                this.lastCoordinates = {
                    lat: map.getCenter().lat(),
                    lng: map.getCenter().lng()
                }

                markers.map(marker => {
                        marker.addListener('click', () => {
                    })
                })

                map.addListener('zoom_changed', () => {
                    if (this.singleDataPointFocus) {
                        this.setFocusedDataPoint({})
                        this.setFocus(false)
                        this.lastZoom = map.getZoom()
                        this.useLastCoordinates = true
                    }
                });
           }
        },
        watch: {
            filteredGeoData: function(){
                if (this.filteredGeoData.length === 0) {
                    this.useLastCoordinates = true;
                }
                this.setMapData();
            },
            focusedDataPoint: function(){
                if (this.filteredGeoData.length > 0){
                    this.setMapData();
                }
            }
        }
    }
</script>

<style scoped>
    .google-map {
        width: 700px;
        height: 500px;
        margin: 0 auto;
        border: 2px solid #9292b9;
        border-radius: 1%;
    }
</style>
<template>
    <div class="google-map" id="the-one-true-map"></div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex';
    export default {
        name: 'MapBox',
        data(){
            return {
                resetZoom: false
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
                const element = document.getElementById("the-one-true-map")
                const zoom = this.singleDataPointFocus ? 8 : 2
                const center = this.singleDataPointFocus ? this.focusedDataPoint.coordinates : this.filteredGeoData[0].coordinates 

                const map = new google.maps.Map(element, {zoom, center}) 
                const markers = this.filteredGeoData.map(obj => {
                    return new google.maps.Marker({
                        position: obj.coordinates,
                        label: obj.label
                    });
                });
                const markerCluster = new MarkerClusterer(map, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'})
                
                markers.map(marker => {
                        marker.addListener('click', () => {
                    })
                })

                map.addListener('zoom_changed', () => {
                    if (this.singleDataPointFocus && map.getZoom() <= 5) {
                        this.setFocusedDataPoint({})
                        this.setFocus(false)
                        this.resetZoom = true
                    } else {
                        this.resetZoom = false
                    }
                });
           }
        },
        watch: {
            filteredGeoData: function(){
                if (this.filteredGeoData.length > 0 && !this.resetZoom){
                    return this.setMapData();
                }
            },
            focusedDataPoint: function(){
                if (this.filteredGeoData.length > 0 && !this.resetZoom){
                    return this.setMapData();
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
        background: gray;
    }
</style>
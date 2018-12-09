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
                    zoom: 14,
                    center: new google.maps.LatLng(51.501527,-0.1921837)
                }

                const map = new google.maps.Map(element, options) 
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
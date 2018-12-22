<template>
    <div>
        <div>Full Data List</div>
        <div :v-if="geoData.length > 0">
            <div v-for="dataPoint in geoData">
                <div class="single-data-point"> Year: {{ dataPoint.year}} </div>
                <div class="single-data-point"> Country: {{ dataPoint.country}} </div>
                <div class="single-data-point"> City: {{ dataPoint.city}} </div>
                <div class="single-data-point"> Population Size: {{ dataPoint.population}} </div>
                <div class="single-data-point"> Source: {{ dataPoint.source}} </div>
            </div> 
            <!-- <ul>
                <li v-for="dataPoint in geoData">
                        <div> Year: {{ dataPoint.year}} </div>
                        <div> Country: {{ dataPoint.country}} </div>
                        <div> City: {{ dataPoint.city}} </div>
                        <div> Population Size: {{ dataPoint.population}} </div>
                        <div> Source: {{ dataPoint.source}} </div>
                </li>
            </ul> -->
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
    export default {
        name: 'DataList',
         computed: {
            ...mapState(['geoData'])
        }
        // data() {
        //     return {
        //         geographicdata: []
        //     }
        // }
    }
</script>

<style>
    .single-data-point {
        text-align: left;
    }
</style>

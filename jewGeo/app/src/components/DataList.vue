<template>
    <div>
        <div>Full Data List</div>
        <div class="data-scroll-box" :v-if="filteredGeoData.length > 0">
            <div v-for="dataPoint in filteredGeoData" :key="dataPoint.label">
                <DataDescription
                    :mapLabel="dataPoint.label"
                    :year="dataPoint.year"
                    :population="dataPoint.population"
                    :country="dataPoint.country"
                    :city="dataPoint.city"
                    :source="`${dataPoint.source}`"
                ></DataDescription>
            </div> 
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import DataDescription from './DataDescription.vue'

    export default {
        name: 'DataList',
        components: {
            DataDescription
        },
        computed: {
            ...mapGetters({
                filteredGeoData: 'GET_FILTERED_GEO_DATA'
            })
        }
    }
</script>

<style>
    .data-scroll-box {
        padding-left: 10px;
        height: 300px;
        overflow: hidden;
        overflow-y:scroll;
    }
</style>

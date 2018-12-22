<template>
    <div>
        <div>Full Data List</div>
        <div class="data-scroll-box" :v-if="geoData.length > 0">
            <div v-for="dataPoint in geoData" :key="dataPoint.label">
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
import { mapState } from 'vuex';
import DataDescription from './DataDescription.vue'

    export default {
        name: 'DataList',
        components: {
            DataDescription
        },
        computed: {
            ...mapState(['geoData'])
        }
    }
</script>

<style>
    .data-scroll-box {
        padding-left: 30px;
    }
</style>

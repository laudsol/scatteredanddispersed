<template>
    <div class="description-box" @click="focusOnDataPoint(dataPoint)">
        <div class="single-data-point">Label: {{dataPoint.mapLabel}} </div>
        <div class="single-data-point">Country: {{dataPoint.country}} </div>
        <div class="single-data-point">City: {{dataPoint.city}} </div>
        <div class="single-data-point">Population: {{dataPoint.population}} </div>
        <div class="single-data-point">Year: {{dataPoint.year}} </div>
        <div class="single-data-point">Source: {{dataPoint.source}} </div>
    </div>
</template>

<script>
    export default {
        name: 'DataDescription',
        props: {
            dataPoint: {
                type: Object,
                required: true
            },
            focusOnDataPoint: {
                type: Function,
                required: true
            }
        }
    }
</script>

<style>
    .description-box {
        width: 250px;
        border: black solid 1px;
        margin: 10px;
    }
    .description-box:hover {
        background-color: yellow;
    }
    .description-box:active {
        background-color: green;
    }
    .single-data-point {
    text-align: left;
    }
</style>
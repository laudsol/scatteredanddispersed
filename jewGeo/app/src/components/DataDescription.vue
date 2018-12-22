<template>
    <div class="description-box">
        <div class="single-data-point">Label: {{mapLabel}} </div>
        <div class="single-data-point">Country: {{country}} </div>
        <div class="single-data-point">City: {{city}} </div>
        <div class="single-data-point">Population: {{population}} </div>
        <div class="single-data-point">Year: {{year}} </div>
        <div class="single-data-point">Source: {{source}} </div>

    </div>
</template>

<script>
    export default {
        name: 'DataDescription',
        props: {
            mapLabel: {
                type: String,
                required: false
            },
            year: {
                type: String,
                required: false
            },
            population: {
                type: String,
                required: false
            },
            country: {
                type: String,
                required: false
            },
            city: {
                type: String,
                required: false
            },
            source: {
                type: String,
                required: false
            },
        }
    }
</script>

<style>
    .description-box {
        width: 300px;
        border: black solid 1px;
        margin: 10px;
    }
    .single-data-point {
    text-align: left;
    }
</style>
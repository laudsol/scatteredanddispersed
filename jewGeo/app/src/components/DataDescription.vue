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
                required: true
            },
            year: {
                type: String,
                required: true
            },
            population: {
                type: String,
                required: true
            },
            country: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            source: {
                type: String,
                required: true
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
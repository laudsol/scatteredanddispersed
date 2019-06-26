<template>
    <div class="description-box" :id="isFocused" @click="focusOnMapPoint(dataPoint)">
        <div class="single-data-point">Country: {{dataPoint.country}} </div>
        <div class="single-data-point">City: {{dataPoint.city}} </div>
        <div class="single-data-point">Population: {{dataPoint.population}} </div>
        <div class="single-data-point">Year: {{year}} </div>
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
            focusOnMapPoint: {
                type: Function,
                required: true
            }
        },
        computed: {
            year: function() {
                const data = this.dataPoint
                return data.year === "" ? `${this.yearWithDesignator(data.start_year)} - ${this.yearWithDesignator(data.end_year)}` : data.year;
            },
            isFocused: function() {
                return this.dataPoint.label.indexOf('focus') > -1 ? "focused" : ""
            }
        },
        methods: {
            yearWithDesignator: function(year){
                return year > 0 ? `${year} AD` : `${year * -1} BC`;
            }
        }
    }
</script>

<style>
    .description-box {
        width: 240px;
        border: #9292b9 solid 1px;
        margin: 10px;
        border-radius: 2%;
        padding: 5px;
    }
    #focused {
        background-color: #ff9966;
    }
    .description-box:hover {
        background-color: #666699;
    }
    .description-box:active {
        background-color: #ff9966;
    }
    .single-data-point {
        text-align: left;
    }
</style>
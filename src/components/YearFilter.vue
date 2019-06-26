<template>
    <div id="filter-container">
        <div class="pull-left">Current Time Frame: {{startYearTxt}} - {{endYearTxt}} </div>
        <div class="pull-left">Set Filter Range To <input class="year-input" v-model="sliderRange"/> Years</div>
        <range-slider
            ref="rangeSlider"
            class="slider"
            min="-3000"
            max="2019"
            step="10"
            v-model="sliderValue">
        </range-slider>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    import RangeSlider from 'vue-range-slider'
    import 'vue-range-slider/dist/vue-range-slider.css'

    export default {
        name: 'YearFilter',
        components: {
            RangeSlider
        },
        data() {
            return {
                sliderRange: 250,
                sliderValue: 0,
                startRange: -2000,
                endRange: 2019,
            }
        },
        computed: {
            startYear: function(){
                return this.sliderValue - this.sliderRange/2
            },
            startYearTxt: function(){
                return this.startYear > 0 ? `${this.startYear} AD` : `${this.startYear * -1} BC` 
            },
            endYear: function(){
                return this.sliderValue + this.sliderRange/2
            },
            endYearTxt: function(){
                return this.endYear > 0 ? `${this.endYear} AD` : `${this.endYear * -1} BC`
            }
        },
        methods: {
            ...mapMutations({
                setYearFilter: 'SET_YEAR_FILTER'
            }),
            updateYearFilter(){
                this.setYearFilter({
                    startYear: this.startYear,
                    endYear: this.endYear
                })
            },
            changeSliderSize(){
                this.$refs.rangeSlider.$children[0].$el.children[3].style.width = `${700 * this.sliderRange/(this.endRange - this.startRange)}px`
            }
        },
        watch: {
            sliderRange: function(){
                this.changeSliderSize()
            },
            sliderValue: function(){
                this.updateYearFilter()
            }
        }
    }
</script>

<style>
    .pull-left {
        margin-left: 100px;
        text-align: left
    }
    .year-input {
        width: 50px;
        margin-bottom: 10px;
    }
    .slider {
        /* FIX this later by preventing scroll past the end */
        overflow: hidden;
        width: 700px;
    }
    .range-slider-knob {
        width: 35px;
        border: grey 1px solid;
        border-radius: 10px;
    }
    .range-slider-rail {
        background-color: #666699;
    }
    .range-slider-fill {
        background-color: #ff9966;
    }
</style>
<template>
    <div>
        <label>Start Year</label>
        <input v-model="startYear"/>
        <label>End Year</label>
        <input v-model="endYear"/>
        <Button @click="updateYearFilter">Update filter</Button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        name: 'YearFilter',
        data() {
            return {
                startYear: '',
                endYear: ''
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
            }
        }
    }
</script>
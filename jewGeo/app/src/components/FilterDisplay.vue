<template>
    <div>
        <div>Timeframe: {{ yearFilter.startYear }} - {{ yearFilter.endYear}}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

    export default {
        name: 'FilterDisplay',
        computed: {
            ...mapState(['yearFilter'])
        }
    }
</script>

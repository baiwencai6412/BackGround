<template>
  <div>
     <appheader></appheader>
     
     <appnavber></appnavber>

     <appmain></appmain>
  </div>
</template>

<script>
import appheader from './appheader/index'
import appnavber from './appnavber/index'
import appmain from './appmain/index'
export default {
  name: '',
  data() { 
    return {

    }
  },
  props: {

  },
  components:{
        appheader,appnavber,appmain
  },
  computed: {

  },
  created() {

  },
  mounted() {

  },
  methods:{

  },
 }
</script>

<style lang="scss">


</style>
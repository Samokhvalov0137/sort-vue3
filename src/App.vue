<template>
<div id="app">
</div>
  <v-select
  :options="categories"
  @select="optionSelect"
  :selected="selected"
  />
  <v-table
    :users_data="filteredData"

  />
</template>

<script>

import {mapActions, mapGetters} from 'vuex'
import vTable from './components/table/v-table'
import vSelect from './components/v-select'

export default {
  name: 'app',
  components: {
    vTable,
    vSelect
  },

  data: () => {
    return{
      categories: [
        {name: 'Фрукты', value: 1},
        {name: 'Овощи', value: 2},
        {name: 'Все продукты', value: 3}
      ],
      selected: "Выбрать категории:",
      sortedData: []
    }
  },
  computed: {
    ...mapGetters([
      'USERS'
    ]),
    filteredData(){
      if(this.sortedData.length){
        return this.sortedData
      } else {
       return this.USERS
      }
    }
  },
  methods: {
    optionSelect(category){
      this.sortedData = [];
      let vm = this;
      this.USERS.map(function (item) {
        if (item.category === category.name){
          vm.sortedData.push(item);
        }
      }),
      this.selected = category.name
    },
    ...mapActions([
      'GET_USERS_FROM_API'
    ])
  },

  mounted(){
    this.GET_USERS_FROM_API()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>

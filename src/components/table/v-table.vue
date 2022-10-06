<template>
  <div class="v-table">
    <div class="v-table__header">
      <p @click="sortByName">Название</p>
      <p>Дата</p>
      <p @click="sortByAmount">Количество</p>
      <p @click="sortByDistance">Расстояние</p>
    </div>
    <div class="v-table__body">
      <v-table-row
        v-for="row in paginatedUsers"
        :key="row.id"
        :row_data="row"
      />
    </div>
    <div class="v-table__pagination">
      <div class="page" 
        v-for="page in pages"
        :key="page"
        :class="{'page__selected': page === pageNumber}"
        @click="pageClick(page)"
      >{{page}}</div>
    </div>
  </div>
</template>

<script>
import vTableRow from './v-table-row'

export default {
  name: "v-table",
  components: {
    vTableRow 
  },
  props: {
    users_data: {
      type: Array,
      default: () => {
        return []
      },
    }
  },
  data() {
    return {
      usersPerPage: 5,
      pageNumber: 1
    }
  },
  computed: {
    pages(){
      return Math.ceil(this.users_data.length / 5);
    },
    paginatedUsers(){
      let from = (this.pageNumber -1) * this.usersPerPage;
      let to = from + this.usersPerPage;
      return this.users_data.slice(from, to);
    }
  },
  methods: {
    pageClick(page) {
      this.pageNumber = page;
    },
    // sortByName(){
    //   this.users_data.sort((a, b) => a.name.localeCompare(b.name))
    // this.users_data.sort((a,b) => a.name.localeCompare(b.name))
    // },
    // sortByAmount() {
    //   this.users_data.sort((a,b) => a.amount - b.amount)
    // }
    //   sortByDistance(){
    //   this.users_data.sort((a,b) => a.distance - b.distance)
    // }
  }
}
</script>

<style>
.v-table{
  max-width: 900px;
  margin: 0 auto;
}

  .v-table__header{
    display: flex;
    justify-content: space-around;
    border-bottom: solid 1px #e7e7e7;
  }
  .v-table__header p {
    flex-basis: 25%;
    text-align: left;
    cursor: pointer;
  }

  .v-table__pagination{
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center ;
  }

  .page{
    padding: 8px;
    margin-right: 10px;
    border:  solid 1px #e7e7e7;
  }

  .page:hover{
    background-color: darkgrey;
    cursor: pointer;
    color: white;
  }

  .page__selected {
    background-color: darkgrey;
    cursor: pointer;
    color: white;
  }
</style>
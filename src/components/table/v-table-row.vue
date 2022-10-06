<template>
  <div class="v-table-row">
    <div class="row row__name">{{row_data.name}}</div>
    <div class="row row__date">{{row_data.date}}</div>
    <div class="row row__amount">{{row_data.amount}}</div>
    <div class="row row__distance">{{row_data.distance}}</div>
  </div>
</template>

<script>
export default {
  name: "v-table-row",
  props: {
    row_data: {
        type: Object,
        default: () => {
            return {}
        }
    }
  },
  data() {
    return {}
  },
  computed: {}
}
</script>

<style>
    .v-table-row {
        display: flex;
        justify-content: space-around;
    }

    .row{
        flex-basis: 25%;
        padding: 8px 16px;
        text-align: left;
    }
</style>
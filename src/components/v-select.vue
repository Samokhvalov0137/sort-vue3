<template>
  <div class="v-select">
    <p 
      class="title"
      @click="areOptionsVisible = !areOptionsVisible"
      >{{selected}}</p>
    <div 
      class="options"
      v-if="areOptionsVisible"
    >
      <p
      v-for="option in options"
      :key="option.value"
      @click="selectOption(option)"
      >
        {{option.name}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
    name: "v-select",
    props:{
      options: {
        type: Array,
        default() {
          return []
        }
      },
      selected: {
        type: String,
        default: ''
      }
    },
    data(){
        return {
          areOptionsVisible: false
        }
    },
    methods: {
      selectOption(option){
      this.$emit('select', option)
      this.areOptionsVisible = false
      }
    }
}
</script>

<style>
.v-select{
  padding-bottom: 30px;
  position: relative;
  width:  200px;
  cursor: pointer;
  left: 175px;
}

.v-select p{
  margin: 0;
}

.options{
  padding: 0;
  border: solid 1px #e7e7e7;
  background-color: white;
  position: absolute;
  top: 30px;
  right: 0;
  width: 100%;
}

.options p:hover{
  background-color: #e7e7e7;
}
.title{
   border: solid 1px #e7e7e7;
}
</style>
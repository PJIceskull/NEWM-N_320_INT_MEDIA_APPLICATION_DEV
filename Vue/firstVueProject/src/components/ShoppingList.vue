<template>
  <div>
    <header>
      <h2>Shopping List</h2>
    </header>
    <input type="text" ref="inputValue" v-model="inputValue" @keyup.enter="addItem" />
    <button @click="addItem">Add Item</button>
    <!-- <p>{{ inputValue }}</p> -->

    <ul>
      <li v-for="(item, i) in shoppingList" v-bind.key="i">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
      shoppingList: []
    }
  },
  methods: {
    addItem() {
      // If item has a value, push to array
      //   this.shoppingList.push(this.inputValue)
      //   console.log(this.shoppingList)

      if (this.inputValue != '') {
        this.shoppingList.push(this.inputValue)
        // Clear input after push
        this.inputValue = ''
      }
      //   console.log(this.inputValue)
      console.log(this.shoppingList)

      // Bring focus to input for next addition
      this.$refs.inputValue.focus()
    }
  }
}
</script>

<style scoped>
h2 {
  color: red;
}
</style>

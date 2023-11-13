<template>
  <div>
    <header>
      <h2>Shopping List</h2>
    </header>
    <input type="text" ref="inputValue" v-model="inputValue" @keyup.enter="addItem" />
    <button @click="addItem">Add Item</button>
    <!-- <p>{{ inputValue }}</p> -->

    <ul>
      <li v-for="(item, i) in shoppingList" v-bind:key="i">
        {{ item }}
        <button @click="deleteItem(i)">Delete</button>
        <button @click="editItem(i)">edit</button>
      </li>
    </ul>
    <button @click="deleteItem(-1)">Delete All</button>
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
    },
    deleteItem(i) {
      this.shoppingList = i + 1 ? this.shoppingList.filter((item, x) => x !== i) : []
    },
    editItem(i) {
      this.shoppingList.forEach(function (item, k) {
        if (i == k) {
          let newValue = prompt(`Current Value: ${item}`)
          this.shoppingList.splice(k, 1, newValue)
        }
      })
    }
  }
}
</script>

<style scoped>
h2 {
  color: red;
}
</style>

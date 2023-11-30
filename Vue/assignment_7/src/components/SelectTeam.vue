<style scoped>
form {
  background-color: silver;
  border-radius: 25px;
  padding: 15px;
  /* box-shadow: ; */
}
form div {
  margin-bottom: 15px;
}
.submit {
  background-color: hsl(9, 100%, 64%);
  padding: 10px;
  width: 100px;
  border: 2px solid snow;
  border-radius: 15px;
  color: snow;
  cursor: pointer;
}
.submit:hover {
  background-color: hsl(9, 100%, 32%);
  transition: 0.25s;
}
.submit:active {
  background-color: snow;
  color: hsl(9, 100%, 32%);
  border: 2px solid hsl(9, 100%, 32%);
}
</style>

<template>
  <h2>Select Teams</h2>
  <!-- Form -->
  <form @submit.prevent="submitData">
    <!-- Input Team Name -->
    <div>
      <label>Team Name: </label>
      <input type="text" v-model="userTeamName" />
    </div>

    <!-- Team Role -->
    <div>
      <label>Role: </label>
      <select v-model="selectedRole">
        <option value="1">Developer</option>
        <option value="2">Designer</option>
        <option value="3">UI/UX</option>
      </select>
    </div>

    <!-- Submit -->
    <button class="submit" @click="$emit('select-team')">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      // Target Input Values
      teamMemberName: '',
      selectedRole: '',
      userTeamName: ''
    }
  },
  emits: ['select-team'],
  methods: {
    submitData() {
      //
      console.log(this.userTeamName)
      // Emits
      this.$emit('select-team', this.userTeamName)
    }
  }
}
</script>

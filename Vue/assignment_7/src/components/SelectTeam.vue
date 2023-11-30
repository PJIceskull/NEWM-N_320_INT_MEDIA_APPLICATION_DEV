<style scoped>
form {
  background-color: silver;
  border-radius: 25px;
  padding: 15px;
  /* box-shadow: ; */
}
button {
  background-color: hsl(9, 100%, 64%);
  padding: 10px;
  width: 100px;
  border: 2px solid snow;
  border-radius: 15px;
  color: snow;
  cursor: pointer;
}
button:hover {
  background-color: hsl(9, 100%, 32%);
}
button:active {
  background-color: snow;
  color: hsl(9, 100%, 32%);
  border: 2px solid hsl(9, 100%, 32%);
}
</style>

<template>
  <h2>Select Teams</h2>
  <!-- Form -->
  <form action="">
    <!-- Input Team Name -->
    <label>Team Name: </label>
    <input type="text" v-model="userTeamName" />
    <br />

    <!-- Team Role -->
    <label>Role: </label>
    <select v-model="selectedRole">
      <option value="1">Developer</option>
      <option value="2">Designer</option>
      <option value="3">UI/UX</option>
    </select>
    <br />

    <!-- Submit -->
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      // Target Input Values
      userTeamName: '',
      selectedRole: ''
    }
  }
}
</script>

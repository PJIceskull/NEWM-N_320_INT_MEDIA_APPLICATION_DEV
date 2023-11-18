<template>
  <form @submit.prevent="submitData">
    <label for="">Name: </label>
    <input type="text" v-model="enteredName" />
    <br />

    <!-- Student Age -->
    <label>Age: </label>
    <input type="number" v-model="enteredAge" />
    <br />

    <!-- Majors -->
    <label>Major: </label>
    <input type="text" v-model="enteredMajor" />
    <br />

    <!-- Class Rank -->
    <label for="">Class Rank: </label>
    <select v-model="enteredClass">
      <option value="1">Freshman</option>
      <option value="2">Sophomore</option>
      <option value="3">Junior</option>
      <option value="4">Senior</option>
    </select>
    <br />

    <!-- Graduate -->
    <label for="">Graduate: </label>
    <input type="checkbox" v-model="enteredGrad" name="graduate" value="true" />
    <button>Add Student</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      enteredName: '',
      enteredAge: '',
      enteredMajor: '',
      enteredClass: '',
      enteredGrad: ''
    }
  },
  // Have a list that tells you what data your passing to the list
  emits: ['add-student'],
  methods: {
    submitData() {
      // Used Emits to shared data with child and parent
      this.$emit(
        'add-student',
        this.enteredName,
        this.enteredAge,
        this.enteredMajor,
        this.enteredClass,
        this.enteredGrad
      )
    }
  }
}
</script>

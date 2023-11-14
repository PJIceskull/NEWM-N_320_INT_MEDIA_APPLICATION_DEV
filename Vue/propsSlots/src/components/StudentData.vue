<template>
  <h1>Student Data</h1>
  <div>
    <h2>{{ sName }}</h2>
    <!-- Toggle Button -->
    <button @click="toggleDetails">
      {{
        // if visible data is true show "Show"
        // if Visible data is false show "Hide"
        visibleData ? 'Show' : 'Hide'
      }}
      Details
    </button>
    <!-- Container for Sudent Info -->
    <div v-if="visibleData">
      <h2>Student Details</h2>
      <p>Age {{ sAge }}</p>
      <p>Major: {{ major }}</p>
      <p v-if="cLevel">Class Rank: {{ cLevel }}</p>
      <p v-if="graduate">Graduate</p>
      <!-- <p>Graduate: {{ graduate }}</p> -->
    </div>
  </div>
</template>

<style></style>

<script>
export default {
  data() {
    return {
      visibleData: false
    }
  },
  //   props: ['sName', 'sAge', 'major', 'cLevel', 'graduate']
  props: {
    sName: String, // Required
    sAge: Number, // Not // Required
    major: {
      // Required
      type: String,
      required: true
    },
    cLevel: {
      // Required
      // but if they have it, it has to match it
      type: Number,
      validator: function (value) {
        // Validate Info
        // must between 1 & 4
        return value > 0 && value <= 4
      }
    },
    graduate: Boolean // Must be a boolean value
  },
  methods: {
    toggleDetails() {
      this.visibleData = !this.visibleData
      // If True set = to False / Not True
      // If False set = to True / Not False
    }
  }
}
</script>

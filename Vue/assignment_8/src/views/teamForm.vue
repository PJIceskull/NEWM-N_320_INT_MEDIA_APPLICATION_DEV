<style scoped>
h1 {
  color: tomato;
}
</style>

<template>
  <h1>Team Form</h1>
  <!-- Form -->
  <div>
    <select-team @select-team="addTeamName"></select-team>
    <!-- <select-team @select-team="$emit('select-team')"></select-team> -->
  </div>
</template>

<script>
import SelectTeam from '../components/SelectTeam.vue'
export default {
  components: {
    SelectTeam
  },
  emits: ['select-team'],
  methods: {
    addTeamName(team) {
      // Assign User input Value into "team"
      this.userTeamName = team
      console.log('New Team Name:', this.userTeamName)
      this.$emit('select-team', this.userTeamName)
    }
  }
}
</script>

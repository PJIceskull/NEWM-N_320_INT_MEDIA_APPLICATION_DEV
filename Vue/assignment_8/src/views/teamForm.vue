<style scoped>
h1 {
  color: tomato;
}
</style>

<template>
  <h1>Team Form</h1>
  <!-- Form -->
  <div>
    <!-- <select-team @select-team="addTeamName"></select-team> -->
    <select-team @select-team="$emit('select-team')"></select-team>
  </div>
</template>

<script>
import SelectTeam from '../components/SelectTeam.vue'
export default {
  components: {
    SelectTeam
  },
  props: ['addTeamName'],
  emits: ['select-team', 'addTeamName'],
  methods: {}
}
</script>

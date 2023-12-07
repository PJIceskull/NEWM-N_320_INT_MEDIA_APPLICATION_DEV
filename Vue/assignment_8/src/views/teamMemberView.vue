<style scoped>
h1 {
  color: tomato;
}
</style>

<template>
  <h1>Team Data</h1>

  <!-- Team Data -->
  <div>
    <!-- <team-data @addToTeam="addToTeam" @team-data="$emit('team-data')"></team-data> -->
    <team-data
      @team-data="$emit('team-data')"
      v-for="member in members"
      :key="member.name"
      :id="member.id"
      :name="member.name"
      :phone="member.phone"
      :email="member.email"
      :role="member.role"
      :team="member.team"
      :userTeamName="userTeamName"
    ></team-data>
  </div>
</template>

<script>
import TeamData from '../components/TeamData.vue'
// import members from '../App.vue'
export default {
  components: {
    TeamData
    // members
  },
  // data() {
  //   return {
  //     members
  //   }
  // },
  emits: ['team-data', 'addToTeam'],
  props: ['members', 'id', 'name', 'phone', 'email', 'role', 'team', 'userTeamName'],
  methods: {}
}
</script>

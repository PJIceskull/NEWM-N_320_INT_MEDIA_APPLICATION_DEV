<style scoped>
h1 {
  color: tomato;
}
</style>

<template>
  <h1>Team Data</h1>

  <!-- Team Data -->
  <div>
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
      @addToTeam="addToTeam"
    ></team-data>
  </div>
</template>

<script>
import TeamData from '../components/TeamData.vue'
export default {
  components: {
    TeamData
  },
  emits: ['team-data', 'addToTeam', 'select-team'],
  props: ['members', 'id', 'name', 'phone', 'email', 'role', 'team', 'userTeamName'],
  methods: {
    addToTeam(value, teamName, idNum, mName, mPhone, mEmail, mRole) {
      console.log(value)
      teamName = value
      this.$emit('team-data', value, teamName, idNum, mName, mPhone, mEmail, mRole)
    }
  }
}
</script>

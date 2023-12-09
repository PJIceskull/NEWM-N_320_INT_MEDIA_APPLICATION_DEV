<style scoped>
h1 {
  color: tomato;
}
.userTeams {
  background-color: salmon;
  border-radius: 25px;
  padding: 15px;
}
.userTeams h2 {
  color: snow;
  text-transform: capitalize;
}
</style>

<template>
  <h1>Teams</h1>
  <!-- User's Teams -->
  <div class="userTeams">
    <h2>Team {{ userTeamName }}</h2>
    <team-data
      v-for="member in newTeamMember"
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
  props: [
    'members',
    'newTeamMember',
    'id',
    'name',
    'phone',
    'email',
    'role',
    'team',
    'userTeamName'
  ],
  methods: {
    addToTeam(value, teamName, idNum, mName, mPhone, mEmail, mRole) {
      console.log(value)
      teamName = value
      this.$emit('team-data', value, teamName, idNum, mName, mPhone, mEmail, mRole)
    }
  }
}
</script>

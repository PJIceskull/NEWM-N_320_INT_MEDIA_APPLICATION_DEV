<style scoped></style>

<template>
  <header>
    <div class="wrapper">
      <nav-header></nav-header>
    </div>
  </header>

  <!-- <RouterView /> -->
  <RouterView @select-team="addTeamName" :members="members" @team-data="addToTeam"></RouterView>

  <h1>Member Selection</h1>

  <!-- Form -->
  <!-- <div>
    <select-team @select-team="addTeamName"></select-team>
  </div> -->
  <!-- Team Data -->
  <div>
    <h2>Team Data</h2>
    <team-data
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
import navHeader from './components/navHeader.vue'
export default {
  components: {
    navHeader
  },
  data() {
    return {
      // Set userTeamName to ""
      userTeamName: '',
      teamNameList: [],
      members: [
        {
          id: 1,
          name: 'Chandler Bing',
          phone: '123 123 1234',
          email: 'cBing@gmail.com',
          role: 'Developer',
          team: ''
        },
        {
          id: 2,
          name: 'Joey Tribbiani',
          phone: '321 321 4321',
          email: 'jtribby@gmail.com',
          role: 'UI/UX',
          team: ''
        },
        {
          id: 3,
          name: 'Ross Geller',
          phone: '222 333 4444',
          email: 'rgeller@gmail.com',
          role: 'Developer',
          team: ''
        },
        {
          id: 4,
          name: 'Monica Bing',
          phone: '123 123 1235',
          email: 'mbing@gmail.com',
          role: 'Designer',
          team: ''
        },
        {
          id: 5,
          name: 'Rachel Green',
          phone: '876 345 1678',
          email: 'rgreen@gmail.com',
          role: 'UI/UX',
          team: ''
        },
        {
          id: 6,
          name: 'Phoebe Buffay',
          phone: '678 908 5686',
          email: 'pbuff@gmail.com',
          role: 'UI/UX',
          team: ''
        },
        {
          id: 7,
          name: 'Stacy Boling',
          phone: '345 679 4212',
          email: 'sBoling@gmail.com',
          role: 'Designer',
          team: ''
        },
        {
          id: 8,
          name: 'Jake Trimult',
          phone: '443 665 7888',
          email: 'jtrim@gmail.com',
          role: 'Developer',
          team: ''
        },
        {
          id: 9,
          name: 'Rose Greathouse',
          phone: '345 567 9087',
          email: 'rgreat@gmail.com',
          role: 'UI/UX',
          team: ''
        },
        {
          id: 10,
          name: 'Mindy Kellum',
          phone: '555 666 7777',
          email: 'mKellum@gmail.com',
          role: 'UI/UX',
          team: ''
        },
        {
          id: 11,
          name: 'Sarah Miller',
          phone: '987 654 1234',
          email: 'smiller@gmail.com',
          role: 'Developer',
          team: ''
        },
        {
          id: 12,
          name: 'Caroline Bender',
          phone: '111 222 3456',
          email: 'cBend@gmail.com',
          role: 'Designer',
          team: ''
        }
      ],
      newTeamMember: []
    }
  },
  methods: {
    addTeamName(team) {
      let currentTeamName = this.teamNameList.includes(team) // Check if team name exists
      // Assign User input Value into "team"
      this.userTeamName = team
      if (!currentTeamName) {
        this.teamNameList.push(team)
        console.log('Team List', this.teamNameList)
      }
      // console.log('New Team Name:', this.userTeamName)
    },
    addToTeam(value, teamName, idNum, mName, mPhone, mEmail, mRole) {
      const newMember = {
        id: idNum,
        name: mName,
        phone: mPhone,
        email: mEmail,
        role: mRole,
        team: value
      }
      // idNum = idNum - 1
      // Print to console the Team Name
      console.log('Add To Team: ', value)
      console.log(idNum)

      console.log('Team Name: ', teamName)
      teamName = value
      console.log('Team Name: ', value)

      console.log(this.members[idNum - 1].name)
      this.members[idNum - 1].team = value
      // Push Member to New Team
      this.newTeamMember.push(newMember)
      console.log(newMember)
      console.log(this.newTeamMember)
    }
  }
}
</script>

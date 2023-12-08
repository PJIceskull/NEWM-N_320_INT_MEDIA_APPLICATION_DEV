<style></style>
<template>
  <div>
    <h2>Team name</h2>
    <section class="card">
      <div class="memberTitle">
        <!-- Name -->
        <h2>{{ name }}</h2>
        <!-- Join Button -->
        <button
          class="joinBTN"
          @click="addToTeam(userTeamName, team, id, name, phone, email, role)"
        >
          Join {{ userTeamName }}
        </button>
      </div>
      <hr />

      <!-- Role -->
      <p><strong>Role:</strong> {{ role }}</p>
    </section>
  </div>
</template>

<script>
export default {
  components: {},
  emits: ['select-team', 'team-data'],
  props: []
}
</script>

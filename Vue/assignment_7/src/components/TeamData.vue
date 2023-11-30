<style scoped>
.card {
  background-color: seashell;
  padding: 15px;
  border-radius: 15px;
  border: 8px solid bisque;
  margin: 20px 10px;
}
.card h2 {
  color: tomato;
  margin: 0;
}
.memberTitle {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.joinBTN {
  background-color: hsl(9, 100%, 64%);
  padding: 7.5px 10px;
  min-width: 100px;
  border: 2px solid snow;
  border-radius: 15px;
  color: snow;
  cursor: pointer;
  font-size: 18px;
  text-transform: capitalize;
}
.joinBTN:hover {
  background-color: hsl(9, 100%, 32%);
  transition: 0.25s;
}
.joinBTN:active {
  background-color: snow;
  color: hsl(9, 100%, 32%);
  border: 2px solid hsl(9, 100%, 32%);
}
.card hr {
  /* height: 5px; */
  /* background-color: tomato; */
  border: 3px solid salmon;
}
.toggleDetails {
  color: hsl(9, 100%, 32%);
  font-weight: bold;
}
.toggleDetails:hover {
  color: tomato;
  text-decoration: underline;
  cursor: pointer;
  transition: 0.2s;
}
.toggleDetails:active {
  color: snow;
}
</style>
<template>
  <!-- Team Member Card -->
  <section class="card">
    <div class="memberTitle">
      <!-- Name -->
      <h2>{{ name }}</h2>
      <!-- Join Button -->
      <button class="joinBTN">Join {{ userTeamName }}</button>
    </div>

    <hr />

    <!-- Role -->
    <p><strong>Role:</strong> {{ role }}</p>

    <div>
      <!-- Show / Hide Detials -->
      <a class="toggleDetails" @click="toggleDetails">
        {{
          // if visible data is true show "Show"
          // if Visible data is false show "Hide"
          visibleData ? 'Hide' : 'Show More'
        }}
        Details</a
      >
    </div>

    <!-- More Details -->
    <ul v-if="visibleData">
      <!-- Phone -->
      <li><strong>Phone:</strong> {{ phone }}</li>
      <!-- Email -->
      <li><strong>Email:</strong> {{ email }}</li>
      <!-- Team -->
      <li>
        <strong
          >Team:
          <span style="color: tomato">{{ team }}</span>
        </strong>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // Visible Data
      visibleData: false
    }
  },
  props: ['name', 'phone', 'email', 'role', 'team', 'userTeamName'],
  methods: {
    toggleDetails() {
      this.visibleData = !this.visibleData
      // If True set = to False / Not True
      // If False set = to True / Not False
    }
  }
}
</script>

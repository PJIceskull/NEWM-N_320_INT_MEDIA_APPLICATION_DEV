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
  margin-bottom: 0;
}
.card hr {
  /* height: 5px; */
  /* background-color: tomato; */
  border: 3px solid salmon;
}
</style>
<template>
  <!-- Team Member Card -->
  <section class="card">
    <!-- Name -->
    <h2>{{ name }}</h2>
    <hr />

    <!-- Role -->
    <p><strong>Role:</strong> {{ role }}</p>

    <ul>
      <!-- Phone -->
      <li><strong>Phone:</strong> {{ phone }}</li>
      <!-- Email -->
      <li><strong>Email:</strong> {{ email }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: ['name', 'phone', 'email', 'role']
}
</script>

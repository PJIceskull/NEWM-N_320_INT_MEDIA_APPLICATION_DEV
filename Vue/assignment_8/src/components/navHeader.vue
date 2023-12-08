<style scoped>
nav {
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
a {
  text-decoration: none;
  background-color: hsl(9, 100%, 64%);
  padding: 15px;
  height: 100%;
  /* border: 2px solid snow; */
  border-radius: 5px;
  color: snow;
  margin-right: 10px;
}
a:hover {
  background-color: hsl(9, 100%, 32%);
  transform: scale(1.15);
  transition: 0.25s;
}
a:active {
  background-color: snow;
  color: hsl(9, 100%, 32%);
  font-weight: bold;
  border: 2px solid hsl(9, 100%, 32%);
  transition: 0.05s;
}
</style>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/teams">Teams</RouterLink>
  </nav>
</template>

<script></script>

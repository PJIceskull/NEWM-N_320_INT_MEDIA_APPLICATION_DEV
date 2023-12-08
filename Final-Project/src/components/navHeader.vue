<style>
nav {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: silver;
  border-radius: 15px;
  padding: 5px 15px;
}
nav h1 {
  color: rgb(138, 28, 28);
}
nav a {
  color: #fff;
  text-decoration: none;
  background-color: tomato;
  border: 3px solid snow;
  padding: 12px 10px;
  border-radius: 10px;
  margin-right: 15px;
}
nav a:hover {
  background-color: hsl(9, 100%, 32%);
}
nav a:active {
  background-color: #fff;
  color: hsl(9, 100%, 32%);
}
</style>

<template>
  <nav>
    <h1>Web Dev Conference</h1>
    <div>
      <RouterLink to="/">Sessions</RouterLink>
      <RouterLink to="/mysessions">My Sessions</RouterLink>
    </div>
  </nav>
</template>

<script></script>

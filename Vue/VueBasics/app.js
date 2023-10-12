const app = Vue.createApp({
  data() {
    // Always returns an Object
    return {
      courseGoal1: "Learn advanced JavaScript",
      courseGoal2: "Learn Vue",
    };
  },
});
// let myGoals = document.getElementById("myGoals");
// let paraTag = document.getElementsByTagName("p");

app.mount("#myGoals"); // similar to DOM / targeting Elements

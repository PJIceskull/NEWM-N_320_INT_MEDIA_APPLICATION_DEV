const app = Vue.createApp({
  data() {
    // Always returns an Object
    return {
      courseGoal1: "Learn advanced JavaScript",
      courseGoal2: "Learn Vue",
      vueLink: "https://vuejs.org", // Interpolatrion only works inside html tags
      courseGoal3: `<h4>Create an Application</h4>`,
    };
  },
  methods: {
    newGoal() {
      const rNum = Math.random();
      console.log(rNum);
      if (rNum < 0.2) {
        return "Vue is Awesome!";
      } else if (rNum > 0.7) {
        return "Vue SUCKS!";
      } else {
        return this.courseGoal1;
      }
    },
  },
});
// let myGoals = document.getElementById("myGoals");
// let paraTag = document.getElementsByTagName("p");

app.mount("#myGoals"); // similar to DOM / targeting Elements

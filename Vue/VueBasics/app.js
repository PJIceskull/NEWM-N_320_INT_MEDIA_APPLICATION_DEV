const app = Vue.createApp({
  data() {
    // Always returns an Object
    return {
      courseGoal1: "Learn advanced JavaScript",
      courseGoal2: "Learn Vue",
      vueLink: "https://vuejs.org", // Interpolatrion only works inside html tags
      courseGoal3: `<h4>Create an Application</h4>`,
      counter: 10,
      name: "",
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
    getTodayDate() {
      let today = new Date();
      today = today.toLocaleDateString();
      return today;
    },
    add() {
      this.counter++;
    },
    subtract() {
      this.counter--;
    },
    addMore(num) {
      this.counter += num; // Increase by "Value"
    },
    //
    // remove() {},
    setName(event) {
      this.name = event.target.value;
    },
    resetName() {
      this.name = "";
    },
    submitForm() {
      alert("Form Submitted");
    },
    consoleMe() {
      console.log("Space Bar pressed.");
    },
  },
  computed: {
    fullName() {
      if (this.name == "") {
        return "";
      } else {
        return this.name + " " + "Thomas";
      }
    },
    nameData() {
      let nameVal = [];
      // Length of fullName
      let nameLength = this.fullName;
      // nameLength = nameLength.length
      nameVal.push(nameLength.length);

      // Middle Character
      let middle = nameLength.charAt(Math.floor(nameLength.length / 2));
      nameVal.push(middle);

      return nameVal;
    },
  },
});
// let myGoals = document.getElementById("myGoals");
// let paraTag = document.getElementsByTagName("p");

app.mount("#myGoals"); // similar to DOM / targeting Elements

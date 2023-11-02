const vueMount = Vue.createApp({
  data() {
    return {
      Name: "Pierce Issah", // Name (string)
      Course: "N320", // Course (string)
      AssignmentName: "First Vue Assignment", // Assignment Name (string)
      Difficulty: 4, // Difficulty Level (integer)

      // Assignment Due Date (method call)
      //   DueDate: new Date(),
      Completed: true, // Completed (boolean)
    };
  },
  methods: {
    // Assignment Due Date (method call)
    DueDate() {
      let newDate = new Date();
      newDate.setDate(newDate.getDate() + 7); // Increase date by 7 days
      newDate = newDate.toLocaleDateString();
      return newDate;
    },
  },
});

// "My List" component
app.component("My-List", {});

// Target the article tag
vueMount.mount("article");

const vueMount = Vue.createApp({
  data() {
    return {
      Name: "Pierce Issah", // Name (string)
      Course: "", // Course (string)
      AssignmentName: "", // Assignment Name (string)
      Difficulty: 5, // Difficulty Level (integer)

      // Assignment Due Date (method call)

      Completed: true, // Completed (boolean)
    };
  },
  methods: {},
});

// Target the article tag
vueMount.mount("article");

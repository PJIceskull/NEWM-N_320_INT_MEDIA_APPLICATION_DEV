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
vueMount.component("My-List", {
  template: `<ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>`,
  data() {
    // Create an array of 7 items or more
    return {
      birds: [
        "Cardinal",
        "Falcon",
        "Penguin",
        "Eagle",
        "Vulture",
        "Robin",
        "Blue jay",
        "Tucan",
        "Crow",
      ],
    };
  },
  methods: {
    displayItems(arr) {
      // Target ul tag
      let ulTag = document.getElementsByTagName("ul");
      let liTags = document.getElementsByTagName("li");
      arr.forEach(function (i) {
        document.createElement("li"); // create li tag

        liTags[i].innerText = "text";
        liTags[i].appendChild();
      });
    },
  },
});

// Target the article tag
vueMount.mount("article");

const app = Vue.createApp({
  data() {
    // Always returns an Object
    return {
      Name: "Pierce Issah",
      date: "Oct 12, 2023",
      Title: "Vue Practice 1",
      counter: 10,
    };
  },
  methods: {
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
  },
});

// Target article tag
app.mount("article");

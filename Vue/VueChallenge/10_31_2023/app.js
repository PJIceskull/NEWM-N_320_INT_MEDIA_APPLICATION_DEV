const app = Vue.createApp({
  data() {
    // Always returns an Object
    return {
      Name: "Pierce Issah",
      date: "Oct 31, 2023",
      Title: "Vue Practice 2",
      counter: 10,
      inputText: "",
      refText: "",
    };
  },
  watch: {
    inputText(newV, oldV) {
      console.log(`Old Value: ${oldV}`);
      console.log(`New Value: ${newV}`);
    },
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
    displayText() {
      // On blur run function and put value in
      // $refs includes all of the many ref items include your code
      this.refText = this.$refs.disRef.value;
    },
  },
});

// compentent
app.component("greeting-input", {
  // Template consist of html code
  template: `<!-- Create a input -->
      <input type="text" v-model="inputText" />
      <p>{{inputText}}</p>

      <!-- reference text -->
      <input type="text" v-on:blur="displayText" ref="disRef" />
      <p>{{refText}}</p>`,
  data() {
    return {
      greeting: "",
      refText: "",
    };
  },
  watch: {
    inputText(newV, oldV) {
      console.log(`Old Value: ${oldV}`);
      console.log(`New Value: ${newV}`);
    },
  },
  methods: {
    displayText() {
      this.refText = this.$refs.disRef.value;
    },
  },
});

// Target article tag
app.mount("article");

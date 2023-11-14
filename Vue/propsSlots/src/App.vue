<!-- Styles -->
<style scoped></style>

<template>
  <h1>Props and Slots</h1>
  <div>
    <props-one :greeting="greeting" :who="who" :myVue="myVue" msg="Props are awesome!"></props-one>
    <props-two v-bind="book"></props-two>
    <div>
      <student-data
        v-for="student in students"
        :key="student.sName"
        :sName="student.sName"
        :sAge="student.sAge"
        :major="student.major"
        :cLevel="student.cLevel"
        :graduate="student.graduate"
      ></student-data>
    </div>
  </div>
</template>

<!-- Script -->
<script>
export default {
  data() {
    return {
      greeting: 'hello',
      who: 'Vue',
      count: 1,
      myVue: 'Vue.js',
      book: {
        id: 1,
        title: 'Vue 3 Development'
      },
      students: [
        {
          sName: 'Robert Smith', // Name
          sAge: 22, // Age
          major: 'Web Development',
          cLevel: 3 // Class Level
          // graduate: false
        },
        {
          sName: 'Susan Rutherford', // Name
          sAge: 25, // Age
          major: 'Informatics',
          cLevel: 1, // Class Level
          graduate: true
        }
      ]
    }
  }
}
</script>

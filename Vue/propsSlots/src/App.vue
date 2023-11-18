<!-- Styles -->
<style scoped></style>

<template>
  <h1>Props and Slots</h1>
  <div>
    <div>
      <props-one
        :greeting="greeting"
        :who="who"
        :myVue="myVue"
        msg="Props are awesome!"
      ></props-one>
      <props-two v-bind="book"></props-two>
    </div>
    <!-- Add Student Form -->
    <add-student @add-student="addStudent"></add-student>
    <div>
      <student-data
        v-for="student in students"
        :key="student.sName"
        :sName="student.sName"
        :sAge="student.sAge"
        :major="student.major"
        :cLevel="student.cLevel"
        :graduate="student.graduate"
        :isEnrolled="student.isEnrolled"
        @toggle-enrollment="toggleEnrollment"
      ></student-data>
    </div>
    <div>
      <slot-one>
        <!-- <h2>This is from App.vue</h2> -->
        <template v-slot:greeting>{{ greeting }}</template>
        <template #person></template>
      </slot-one>
    </div>
    <div>
      <slot-two>
        <ul v-if="pastStudents.length != 0">
          <li v-for="s in students" :key="s.sName">{{ s.sName }}</li>
        </ul>
      </slot-two>
    </div>
  </div>
  <!-- 11/16/2023 -->
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
          cLevel: 3, // Class Level
          // graduate: false,
          isEnrolled: true
        },
        {
          sName: 'Susan Rutherford', // Name
          sAge: 25, // Age
          major: 'Informatics',
          cLevel: 1, // Class Level
          graduate: true,
          isEnrolled: false
        }
      ],
      pastStudents: []
    }
  },
  methods: {
    // toggleGS(value) {
    //   const gStudent = this.students.find()
    // },
    addStudent(name, age, major, cLevel, graduate) {
      cLevel = parseInt(cLevel)
      if (graduate == 'true') {
        graduate = true
      } else {
        graduate = false
      }
      const newStudent = {
        sName: name,
        sAge: age,
        major: major,
        cLevel: cLevel,
        graduate: graduate
      }
      console.log(typeof newStudent.graduate)
      console.log(newStudent)
      this.students.push(newStudent)
    },
    toggleEnrollment(value) {
      const currentStudent = this.students.find(function (s) {
        s.sName === value
      })

      currentStudent.isEnrolled = !currentStudent.isEnrolled
      // this.isEnrolled = !this.isEnrolled
    }
  }
}
</script>

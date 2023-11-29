<template>
  <h1>Props</h1>
  <div>
    <slot-one></slot-one>
  </div>

  <div>
    <project-data></project-data>
  </div>
</template>

<script>
import ProjectData from '../components/projectData.vue'
export default {
  components: {
    ProjectData
  },
  props: ['greeting', 'who', 'count', 'book', 'myVue']
}
</script>

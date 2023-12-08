<style scoped>
h1 {
  color: rgb(28, 28, 138);
  font-weight: lighter;
}
</style>

<template>
  <div>
    <h1>Session Information</h1>

    <p>{{ totalSession }} Sessions</p>
    <div>
      <session-data
        @session-data="$emit('session-data')"
        v-for="session in sessions"
        :key="session.id"
        :id="session.id"
        :title="session.title"
        :desc="session.desc"
        :presenter="session.presenter"
        :tags="session.tags"
        :sTime="session.sTime"
        :sDay="session.sDay"
        :added="session.added"
      ></session-data>
    </div>
  </div>
</template>

<script>
// import sessionData from '../components/sessionData.vue'
export default {
  components: {
    // sessionData
  },
  data() {
    return {
      totalSession: this.sessions.length
    }
  },
  emits: ['session-data'],
  props: ['sessions', 'id', 'title', 'desc', 'presenter', 'tags', 'sTime', 'sDay', 'added']
}
</script>

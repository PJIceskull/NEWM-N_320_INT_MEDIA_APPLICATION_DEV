<style>
h1 {
  color: rgb(244, 54, 54);
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
        @filterByTags="filterByTags"
        @addSession="addSession"
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
  emits: ['session-data', 'filterByTags', 'addSession'],
  props: ['sessions', 'id', 'title', 'desc', 'presenter', 'tags', 'sTime', 'sDay', 'added'],
  methods: {
    filterByTags(item) {
      // console.log(item)
      this.$emit('session-data', item)
    },
    addSession(idNum, u_title, u_desc, u_presenter, u_tags, u_sTime, u_sDay, u_added) {
      this.$emit(
        'addSession',
        idNum,
        u_title,
        u_desc,
        u_presenter,
        u_tags,
        u_sTime,
        u_sDay,
        u_added
      )
    }
  }
}
</script>

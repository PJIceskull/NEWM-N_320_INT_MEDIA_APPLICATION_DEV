<style scoped></style>

<template>
  <h1>User Sessions</h1>
  <p></p>
  <div>
    <userSession-data
      @userSession-data="$emit('userSession-data')"
      v-for="session in userSessionsList"
      :key="session.id"
      :id="session.id"
      :title="session.title"
      :desc="session.desc"
      :presenter="session.presenter"
      :tags="session.tags"
      :sTime="session.sTime"
      :sDay="session.sDay"
      :added="session.added"
    ></userSession-data>
  </div>
</template>

<script>
export default {
  components: {},
  emits: ['userSession-data', 'session-data', 'addSession'],
  props: [
    'userSessionsList',
    'sessions',
    'id',
    'title',
    'desc',
    'presenter',
    'tags',
    'sTime',
    'sDay',
    'added'
  ]
}
</script>

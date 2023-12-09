<style>
section {
  border-radius: 25px;
  padding: 15px;
  box-shadow: 3px 3px 10px 2px rgba(0, 0, 0, 0.5);
  position: relative;
  margin-bottom: 30px;
  background-color: snow;
}
section h2 {
  width: 85%;
}
.sessionInfo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
}
.sessionInfo span {
  font-weight: lighter;
  color: salmon;
}
.categories {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
}
.categories label {
  margin-right: 10px;
}
.tags,
button {
  background-color: salmon;
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
}
.tags {
  margin-right: 15px;
}
.tags:hover {
  background-color: hsl(6, 93%, 40%);
  transform: scale(1.15);
  transition: 0.25s;
}
.tags p {
  margin: 0;
}
section button {
  border: 2px solid darkslateblue;
  position: absolute;
  top: 30px;
  right: 15px;
}
section button:hover {
  background-color: hsl(6, 93%, 55%);
  /* color: #fffafa; */
}
section button:active {
  background-color: snow;
  border: 2px solid hsl(6, 93%, 55%);
  color: hsl(6, 93%, 55%);
}
</style>

<template>
  <section>
    <h2>{{ title }}</h2>

    <div class="sessionInfo">
      <p>
        Presented by: <span>{{ presenter }}</span>
      </p>
      <p>{{ sDay }} by {{ sTime }}</p>
      <!-- <p>{{ sDay }} by {{ timeFormat.toLocaleTimeString() }}</p> -->
    </div>

    <hr />

    <p>
      {{ desc }}
    </p>

    <div class="categories">
      <label>Categories:</label>
      <div class="tags" v-for="tag in tags" @click="filterByTags(tag)">
        <p>{{ tag }}</p>
      </div>
    </div>
    <button @click="addSession(id, title, desc, presenter, tags, sTime, sDay, added)">
      Add Item
    </button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // timeFormat: new Date()
    }
  },
  emit: ['session-data', 'filterByTags', 'addSession'],
  //   props: ['sessions', 'id', 'title', 'desc', 'presenter', 'tags', 'sTime', 'sDay']
  props: {
    id: Number,
    title: String,
    desc: String,
    presenter: String,
    tags: Array,
    sTime: Number,
    sDay: String,
    added: Boolean
  },
  methods: {
    filterByTags(item) {
      // console.log(item)
      this.$emit('filterByTags', item)
    },
    addSession(idNum, u_title, u_desc, u_presenter, u_tags, u_sTime, u_sDay, u_added) {
      // console.log({ idNum, u_title, u_desc, u_presenter, u_tags, u_sTime, u_sDay, u_added })
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

<style>
section {
  border-radius: 25px;
  padding: 15px;
  box-shadow: 3px 3px 10px 2px rgba(0, 0, 0, 0.5);
  position: relative;
  margin-bottom: 30px;
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
}
.tags {
  margin-right: 15px;
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
  cursor: pointer;
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
    </div>

    <hr />

    <p>
      {{ desc }}
    </p>

    <div class="categories">
      <label>Categories:</label>
      <div class="tags" v-for="tag in tags">
        {{ tag }}
      </div>
    </div>
    <button>Add Item</button>
  </section>
</template>

<script>
export default {
  emit: ['session-data'],
  //   props: ['sessions', 'id', 'title', 'desc', 'presenter', 'tags', 'sTime', 'sDay']
  props: {
    id: Number,
    title: String,
    desc: String,
    presenter: String,
    tags: Array,
    sTime: Number,
    sDay: String
  }
}
</script>

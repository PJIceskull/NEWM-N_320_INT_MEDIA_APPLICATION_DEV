<style>
h1 {
  color: rgb(244, 54, 54);
  font-weight: lighter;
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
      <div class="tags" v-for="tag in tags" @click="filterByTags(tag)">
        <p>{{ tag }}</p>
      </div>
    </div>
    <button>Remove Item</button>
  </section>
</template>

<script>
export default {
  components: {},
  emits: ['userSession-data'],
  props: {
    id: Number,
    title: String,
    desc: String,
    presenter: String,
    tags: Array,
    sTime: Number,
    sDay: String,
    added: Boolean
  }
}
</script>

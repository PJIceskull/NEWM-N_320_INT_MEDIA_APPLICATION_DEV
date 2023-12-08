<style>
section {
  border-radius: 25px;
  padding: 15px;
  box-shadow: 3px 3px 10px 2px rgba(0, 0, 0, 0.5);
  position: relative;
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
  margin-right: 5px;
}
.tags,
button {
  background-color: salmon;
  padding: 10px;
  border-radius: 15px;
}
.tags {
  margin: 0 15px;
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
    <h2>Title</h2>

    <div class="sessionInfo">
      <p>Presented by: <span>Author</span></p>
      <p>Day by Time</p>
    </div>

    <hr />

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae at delectus recusandae
      natus rerum! Unde commodi accusantium dignissimos, ratione vero blanditiis vitae neque quasi
      quisquam ullam magni porro modi! Labore!
    </p>

    <div class="categories">
      <Label>Categories:</Label>
      <div class="tags">
        <p>Tags</p>
      </div>
    </div>
    <button>Add Item</button>
  </section>
</template>

<script></script>

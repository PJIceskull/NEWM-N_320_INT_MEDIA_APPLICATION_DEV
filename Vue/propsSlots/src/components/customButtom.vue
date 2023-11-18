<template>
  <button class="customBtn"><slot>Custom Button</slot></button>
</template>

<style>
.customBtn {
  background-color: gold;
  color: white;
  padding: 1em;
  border-radius: 10px;
  border-style: none;
}
.customBtn:hover {
  background-color: goldenrod;
}
</style>

<script></script>

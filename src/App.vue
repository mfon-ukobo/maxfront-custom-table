<template>
  <div id="app">
    <div class="container">
      <max-table :data="tableData" :columns="columnNames" :pagination="paginationData"></max-table>
    </div>
  </div>
</template>

<script>
import MaxTable from "./components/MaxTable.vue";

export default {
  name: "App",
  components: {
    MaxTable,
  },
  data: function () {
    return {
      tableData: [
        { name: "Mfon", age: 10 },
        { name: "Eno", age: 11 },
      ],
      columnNames: [
        { name: "name", display: "Name" },
        { name: "age", display: "Age" },
      ],
      paginationData: {
        currentPage: 15,
        pageSize: 20,
        totalPages: 20
      }
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <div class="container">
      <max-table
        :data="data"
        :columns="columnNames"
        :pagination="paginationData"
        @pageNavClicked="pageNavClicked"
        @nextPageClicked="pageNavClicked(paginationData.currentPage + 1)"
        @prevPageClicked="pageNavClicked(paginationData.currentPage - 1)"
      ></max-table>
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
        [
          { name: "Mfon", age: 10 },
          { name: "Eno", age: 11 },
        ],
        [
          { name: "Ima", age: 10 },
          { name: "Simi", age: 11 },
        ],
        [
          { name: "Mum", age: 10 },
          { name: "Dad", age: 11 },
        ]
      ],
      data: [],
      columnNames: [
        { name: "name", display: "Name" },
        { name: "age", display: "Age" },
      ],
      paginationData: {
        currentPage: 1,
        pageSize: 2,
        totalPages: 3,
      },
    };
  },
  methods: {
    pageNavClicked(page) {
      this.data = this.tableData[page - 1];
      this.paginationData.currentPage = page;
    },
  },
  created() {
    this.data = this.tableData[0];
  }
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

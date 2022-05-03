<template>
  <div>
    <!-- TABLE -->
    <div class="table-responsive">
      <table
        class="table"
        :class="[
          { 'table-striped': striped },
          { 'table-borderless': borderless },
          { 'table-bordered': bordered },
        ]"
      >
        <thead>
          <tr>
            <th>S/N</th>
            <th v-for="(column, thIndex) in columns" :key="'th-' + thIndex">
              {{ column.display }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, trIndex) in data" :key="'tr-' + trIndex">
            <th></th>
            <td v-for="(c, tdIndex) in columns" :key="'td-col-' + tdIndex">
              {{ item[c.name] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- PAGIANTION -->
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#">Previous</a>
        </li>
        <li
          class="page-item"
          v-for="(page, pagesIndex) in paginationPages"
          :key="'pages-' + pagesIndex"
        >
          <a class="page-link" href="#">
            {{ page }}
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MaxTable",
  data: function () {
    return {
      paginationData: {
        currentPage: Number,
        totalPages: Number,
        pageSize: Number,
      },
    };
  },
  props: {
    striped: {
      type: Boolean,
      default: true,
    },
    borderless: {
      type: Boolean,
      default: true,
    },
    bordered: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
      validator: function (value) {
        return value.length > 0;
      },
    },
    pagination: {
      type: Object,
      required: false,
      validator: function () {
        return true;
      },
    },
  },
  computed: {
      paginationPages() {
          let totalPages = this.paginationData.totalPages;
          let currentPage = this.paginationData.currentPage;

          if (totalPages <= 5) {
              return this.range(1, 5);
          }

          if (currentPage <= 3) {
              return this.range(1, 5);
          }

          if ((totalPages - currentPage) <= 3) {
              return this.range(totalPages - 4, totalPages);
          }

          return this.range(currentPage - 2, currentPage + 2);
      }
  },
  methods: {
      range(start, end) {
          const length = end - start + 1;
            return Array.from({ length }, (_, i) => start + i);
      }
  },
  created: function () {
    this.paginationData = this.pagination;
  },
};
</script>

<style scoped></style>

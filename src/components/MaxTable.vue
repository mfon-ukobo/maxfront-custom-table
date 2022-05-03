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
            <th v-if="showIndex">S/N</th>
            <th v-for="(column, thIndex) in columns" :key="'th-' + thIndex">
              {{ column.display }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, trIndex) in data" :key="'tr-' + trIndex">
            <th v-if="showIndex">{{itemIndex(trIndex)}}</th>
            <td v-for="(c, tdIndex) in columns" :key="'td-col-' + tdIndex">
              {{ item[c.name] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- PAGIANTION -->
    <nav class="">
      <ul class="pagination justify-content-end">
        <li class="page-item" :class="[{'disabled': !hasPrevPage}]">
          <a class="page-link" href="#" @click.prevent="prevPageClicked()">Previous</a>
        </li>
        <li
          class="page-item"
          v-for="(page, pagesIndex) in paginationPages"
          :key="'pages-' + pagesIndex"
        >
          <a class="page-link" href="#" @click.prevent="pageNavClicked(page)">
            {{ page }}
          </a>
        </li>
        <li class="page-item" :class="[{'disabled': !hasNextPage}]">
          <a class="page-link" href="#" @click.prevent="nextPageClicked()">Next</a>
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
    showIndex: {
        type: Boolean,
        default: true
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
              return this.range(1, totalPages);
          }

          if (currentPage <= 3) {
              return this.range(1, 5);
          }

          if ((totalPages - currentPage) <= 3) {
              return this.range(totalPages - 4, totalPages);
          }

          return this.range(currentPage - 2, currentPage + 2);
      },
      hasNextPage() {
          return this.paginationData.currentPage < this.paginationData.totalPages;
      },
      hasPrevPage() {
          return this.paginationData.currentPage > 1;
      }
  },
  methods: {
      range(start, end) {
          const length = end - start + 1;
            return Array.from({ length }, (_, i) => start + i);
      },
      itemIndex(index) {
          let currentPage = this.paginationData.currentPage;
          let pageSize = this.paginationData.pageSize;
          return  index + (pageSize * currentPage - 1);
      },
      nextPageClicked() {
          if (this.hasNextPage) {
              this.$emit('nextPageClicked');
          }
      },
      prevPageClicked() {
          if (this.hasPrevPage) {
              this.$emit('prevPageClicked');
          }
      },
      pageNavClicked(pageNumber) {
          this.$emit('pageNavClicked', pageNumber);
      }
  },
  created: function () {
    this.paginationData = this.pagination;
  },
};
</script>

<style scoped></style>

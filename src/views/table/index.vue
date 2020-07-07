<template>
  <div v-loading="listLoading" class="app-container">
    <div v-for="item in listData" :key="item.id">{{ item.name }}</div>
    <el-button @click="handleClick">修改</el-button>
    <el-table
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template v-slot="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="Title">
        <template v-slot="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
        <template v-slot="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Pageviews" width="110" align="center">
        <template v-slot="scope">
          {{ scope.row.pageviews }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template v-slot="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="Display_time" width="200">
        <template v-slot="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  filters: {
    /**
     * 状态 -> type 过滤
     */
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: false,
      page: 1,
      listData: [{ name: 'a', id: '1' }, { name: 'b', id: '2' }, { name: 'c', id: '3' }]
    }
  },
  watch: {
    'page': {
      handler(newV) {
        this.fetchData()
      },
      immediate: true
    }
  },
  created() {
    window.t = this
    // this.page = 2
  },
  mounted() {
    // this.fetchData()
    console.log(process.env.VUE_APP_BASE_API)
  },
  methods: {
    async fetchData() {
      this.listLoading = true
      const response = await getList()
      this.listLoading = false
      this.list = response.data.items
    },
    handleClick() {
      // this.listData[2].name = 'd'
      // this.listData[2] = { name: 'd', id: '4' }
      this.listData.length = 2
    }
  }
}
</script>

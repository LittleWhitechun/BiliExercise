<template>
  <div>
    <el-card style="width: 1750px">
      <div class="query-row">
        <div class="query-row-item">
          <label>角色名称：</label>
          <el-input placeholder="请输入" v-model="queryData.roleName">
          </el-input>
        </div>
        <div class="query-row-item">
          <label>所属区域：</label>
          <el-select v-model="queryData.region" placeholder="请选择">
            <el-option
              v-for="item in regions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="query-row-item">
          <label>节点类型：</label>
          <el-select v-model="queryData.type" placeholder="请选择">
            <el-option
              v-for="item in types"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="query-row-item">
          <label>运行状态：</label>
          <el-select v-model="queryData.state" placeholder="请选择">
            <el-option
              v-for="item in states"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="query-row-item">
          <div class="btn-group">
            <el-button>重置</el-button>
            <el-button type="danger">查询</el-button>
          </div>
        </div>
      </div>
      <div>
        <el-table
          :data="
            tableData.slice(
              (currentPage - 1) * pageSize,
              currentPage * pageSize
            )
          "
          style="width: 1679px"
          :header-cell-style="{
            color: 'rgba(0,0,0,0.85)',
            fontSize: '14px',
            backgroundColor: '#E5F1FF',
            border: '1px #0000',
            fontFamily: 'PingFangSC-Medium',
            lineHeight: '21px',
            fontWeight: '500',
          }"
        >
          <el-table-column prop="index" label="序号" width="124">
          </el-table-column>
          <el-table-column prop="name" label="指调器名称" width="162">
          </el-table-column>
          <el-table-column prop="region" label="所属区域" width="186">
          </el-table-column>
          <el-table-column prop="type" label="节点类型" width="186">
          </el-table-column>
          <el-table-column prop="state" label="指调器运行状态" width="207">
          </el-table-column>
          <el-table-column prop="totalInstruction" label="指令总量" width="153">
          </el-table-column>
          <el-table-column prop="totalData" label="指调数据总量" width="186">
          </el-table-column>
          <el-table-column prop="updateTime" label="更新时间" width="289">
          </el-table-column>
          <el-table-column prop="type" label="操作" width="186">
            <template slot-scope="scope">
              <el-button
                v-if="scope.row.state == ''"
                type="text"
                size="medium"
                @click="examine(scope.row)"
                class="table-btn"
                >审核</el-button
              >
              <el-button
                v-if="scope.row.state != ''"
                type="text"
                size="medium"
                @click="viewBaseInfo(scope.row)"
                class="table-btn"
                >基础信息</el-button
              >
              <el-button
                v-if="scope.row.state != ''"
                type="text"
                size="medium"
                @click="viewScheduleDetail(scope.row)"
                class="table-btn"
                >数据调度详情</el-button
              >
              <el-button
                v-if="scope.row.state != ''"
                type="text"
                size="medium"
                @click="viewInstructionDetail(scope.row)"
                class="table-btn"
                >指令详情</el-button
              >
              <el-button
                v-if="scope.row.state != ''"
                type="text"
                size="medium"
                @click="viewSystemDetail(scope.row)"
                class="table-btn"
                >接入系统详情</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div style="margin-top: 20px">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="tableData.length"
          @current-change="pageChange"
        >
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "Query",
  data() {
    return {
      queryData: { roleName: "", region: "", type: "", state: "" },
      regions: [
        {
          value: "北京",
          label: "北京",
        },
        {
          value: "上海",
          label: "上海",
        },
      ],
      types: [{ value: "中央", label: "中央" }],
      states: [
        { value: "正常", label: "正常" },
        { value: "故障", label: "故障" },
        { value: "离线", label: "离线" },
      ],
      tableData: [],
      currentPage: 1,
      pageSize: 9,
    };
  },
  mounted() {
    this.requestTableData();
  },
  methods: {
    examine(data) {
      console.log(data);
    },
    viewBaseInfo(data) {
      console.log(data);
    },
    viewScheduleDetail(data) {
      console.log(data);
    },
    viewInstructionDetail(data) {
      console.log(data);
    },
    viewSystemDetail(data) {
      console.log(data);
    },
    pageChange(page) {
      this.currentPage = page;
    },
    requestTableData() {
      for (let i = 0; i <= 30; i++) {
        this.tableData.push({
          index: i,
          name: "名称" + i,
          region: "北京市海淀区",
          type: "中央",
          state: i % 3 == 1 ? "正常" : "",
          totalInstruction:
            i % 3 == 1
              ? `收:${~~(Math.random() * 1000)}; 发:${~~(Math.random() * 1000)}`
              : "",
          totalData:
            i % 3 == 1
              ? `收:${~~(Math.random() * 1000)}; 发:${~~(Math.random() * 1000)}`
              : "",
          updateTime: i % 3 == 1 ? "2022-03-17 09:00:30" : "",
        });
      }
    },
  },
};
</script>
<style scoped>
.el-card {
  padding: 15px;
  margin: 15px;
}
.query-row {
  display: flex;
  margin-bottom: 24px;
}
.query-row-item {
  display: flex;
  align-items: center;
  margin-right: 31px;
}
.query-row-item label {
  width: 70px;
  line-height: 22px;
  font-family: "PingFang SC";
  font-size: 14px;
  vertical-align: middle;
}
.query-row-item .el-input {
  width: 224px;
}
.query-row-item:last-child {
  flex: 1;
}
.query-row-item .btn-group {
  margin-left: auto;
}
.table-btn {
  display: block;
  margin-left: 0 !important;
}
.el-pagination {
  text-align: right;
}
</style>
<template>
  <div>
    <el-card>
      <div slot="header">
        <span>接入平台基本信息</span>
      </div>
      <div class="platform-row">
        <el-input disabled placeholder="" v-model="company">
          <template slot="prepend">单位名称</template>
        </el-input>
        <el-input disabled placeholder="" v-model="region">
          <template slot="prepend">单位名称</template>
        </el-input>
      </div>
      <div class="platform-row">
        <el-input disabled placeholder="" v-model="position">
          <template slot="prepend">部署位置</template>
        </el-input>
        <el-input disabled placeholder="" v-model="level">
          <template slot="prepend">单位名称</template>
        </el-input>
      </div>
    </el-card>

    <el-card>
      <div slot="header">
        <span>指调器信息</span>
      </div>
      <div class="platform-row">
        <el-input disabled placeholder="" v-model="ip1">
          <template slot="prepend">指调器IP-1（直连指挥云端）</template>
        </el-input>
        <el-input disabled placeholder="" v-model="port1">
          <template slot="prepend">通信端口</template>
        </el-input>
      </div>
      <div class="platform-row">
        <el-input disabled placeholder="" v-model="ip2">
          <template slot="prepend">指调器IP-2（直连数据中心）</template>
        </el-input>
        <el-input disabled placeholder="" v-model="port2">
          <template slot="prepend">通信端口</template>
        </el-input>
      </div>
      <div class="platform-row">
        <el-input disabled placeholder="" v-model="superCommander">
          <template slot="prepend">上级指调器</template>
        </el-input>
      </div>
    </el-card>

    <el-card>
      <div slot="header">
        <span>平台联系人信息</span>
      </div>
      <div class="platform-row">
        <el-input disabled placeholder="" v-model="name">
          <template slot="prepend">姓名</template>
        </el-input>
        <el-input disabled placeholder="" v-model="phone">
          <template slot="prepend">电话</template>
        </el-input>
      </div>
      <div class="platform-row">
        <el-input disabled placeholder="" v-model="email">
          <template slot="prepend">邮箱</template>
        </el-input>
      </div>
    </el-card>

    <el-card>
      <div slot="header">
        <span>平台资源类型</span>
      </div>
      <div class="tag-group">
        <el-tag
          v-for="(tag, index) in sourceTypes"
          :key="index"
          effect="plain"
          :type="tagTypes[index]"
        >
          {{ tag }}
        </el-tag>
      </div>
    </el-card>

    <el-card>
      <div slot="header">
        <span>审核意见</span>
      </div>
      <div class="card-body">
        <el-input
          type="textarea"
          :rows="4"
          placeholder="请输入内容"
          v-model="comments"
        >
        </el-input>
        <div class="card-body-btns">
            <el-button>不通过</el-button>
            <el-button type="danger">通过</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "Examine",
  data() {
    return {
      company: "监测中心",
      region: "北京市海淀区",
      position: "北京市海淀区",
      level: "中央级",
      ip1: "10.10.24.152",
      ip2: "10.10.24.152",
      port1: "443",
      port2: "443",
      superCommander: "自动生成的上级指调器信息",
      name: "张西西",
      phone: "123456789",
      email: "123456789@163.com",
      sourceTypes: ["态势", "情报", "事件"],
      tagTypes: ["success", "danger", "warning", "danger", "info"],
    };
  },
  methods: {
    submitScheduler() {
      let submitData = {
        company: this.company,
        region: this.region,
        position: this.position,
        ip1: this.ip1,
        ip2: this.ip2,
        port1: this.port1,
        port2: this.port2,
        superCommander: this.superCommander,
        name: this.name,
        phone: this.phone,
        email: this.email,
      };
      for (let key in submitData) {
        if (submitData[key] == "") {
          if (key != "superCommander") {
            this.$message("必填项不得为空");
            return;
          }
        }
      }
    },
  },
};
</script>
<style scoped>
.el-input {
  border-radius: 4px;
  height: 54px;
}
.el-card {
  margin-bottom: 12px;
  margin-left: 15px;
}
.last-card {
  height: 300px;
}
.platform-row {
  display: flex;
  min-width: 1634px;
  width: 85.1%;
}
.custom-prepend-region {
  padding-right: 194px;
}
.custom-prepend-level {
  padding-right: 166px;
}
.platform-row .el-input /deep/ .el-input-group__prepend {
  width: 230px;
  color: black;
  background-color: #d4e4f8;
}
.platform-row /deep/ .el-input__inner {
  height: 54px;
  /* width: 564px; */
}
.platform-row /deep/ .el-input.is-disabled .el-input__inner {
  background-color: #ffff;
  cursor: auto;
  color: black;
}
.el-input .required {
  color: red;
}
.el-input__inner /deep/ .el-select {
  width: 294px;
  height: 32px;
}

.el-select /deep/ .el-input__inner {
  width: 294px;
  height: 32px;
}

.platform-row-item {
  width: 100%;
  border: 1px solid #E8E8E8;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
}

.el-tag {
  width: 74px;
  height: 32px;
  display: inline-block;
  border-radius: 4px;
  text-align: center;
  margin-right: 15px;
}
.card-body{
    display: flex;
}
.card-body .el-textarea{
    min-width: 1279px;
}
.card-body-btns{
    flex: 1;
    padding-left: 75px;
    min-width: 400px;
    padding-top:25px
}
</style>
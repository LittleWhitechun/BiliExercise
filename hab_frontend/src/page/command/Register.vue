<template>
  <div>
    <el-card>
      <div slot="header">
        <span>接入平台基本信息</span>
      </div>
      <div class="platform-row">
        <el-input placeholder="" v-model="company">
          <template slot="prepend"
            ><span class="required">*</span>单位名称</template
          >
        </el-input>
        <div class="el-input el-input-group el-input-group--prepend">
          <div class="el-input-group__prepend custom-prepend-region">
            <span class="required">*</span>所属地区
          </div>
          <div class="el-input__inner">
            <el-select v-model="region" placeholder="省/市">
              <el-option
                v-for="item in regions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div class="platform-row">
        <el-input placeholder="" v-model="position">
          <template slot="prepend"
            ><span class="required">*</span>部署位置</template
          >
        </el-input>
        <div class="el-input el-input-group el-input-group--prepend">
          <div class="el-input-group__prepend custom-prepend-level">
            <span class="required">*</span>平台所属级别
          </div>
          <div class="el-input__inner">
            <el-radio-group v-model="level">
              <el-radio label="中央级"></el-radio>
              <el-radio label="省级"></el-radio>
              <el-radio label="地市级"></el-radio>
              <el-radio label="行业级"></el-radio>
              <el-radio label="行业分支机构"></el-radio>
            </el-radio-group>
          </div>
        </div>
      </div>
    </el-card>

    <el-card>
      <div slot="header">
        <span>指调器信息</span>
      </div>
      <div class="platform-row">
        <el-input placeholder="" v-model="ip1">
          <template slot="prepend"
            ><span class="required">*</span>指调器IP-1（直连指挥云端）</template
          >
        </el-input>
        <el-input placeholder="" v-model="port1">
          <template slot="prepend"
            ><span class="required">*</span>通信端口</template
          >
        </el-input>
      </div>
      <div class="platform-row">
        <el-input placeholder="" v-model="ip2">
          <template slot="prepend"
            ><span class="required">*</span>指调器IP-2（直连数据中心）</template
          >
        </el-input>
        <el-input placeholder="" v-model="port2">
          <template slot="prepend"
            ><span class="required">*</span>通信端口</template
          >
        </el-input>
      </div>
      <div class="platform-row">
        <el-input placeholder="" v-model="superCommander">
          <template slot="prepend">上级指调器</template>
        </el-input>
      </div>
    </el-card>

    <el-card>
      <div slot="header">
        <span>平台联系人信息</span>
      </div>
      <div class="platform-row">
        <el-input placeholder="" v-model="name">
          <template slot="prepend"
            ><span class="required">*</span>姓名</template
          >
        </el-input>
        <el-input placeholder="" v-model="phone">
          <template slot="prepend"
            ><span class="required">*</span>电话</template
          >
        </el-input>
      </div>
      <div class="platform-row">
        <el-input placeholder="" v-model="email">
          <template slot="prepend"
            ><span class="required">*</span>邮箱</template
          >
        </el-input>
      </div>
    </el-card>

    <el-card class="last-card">
      <div slot="header">
        <span>平台资源类型</span>
      </div>
      <el-checkbox-group v-model="sourceTypes">
        <el-checkbox label="态势"></el-checkbox>
        <el-checkbox label="情报"></el-checkbox>
        <el-checkbox label="业务基础信息"></el-checkbox>
        <el-checkbox label="检查信息"></el-checkbox>
        <el-checkbox label="事件"></el-checkbox>
      </el-checkbox-group>
      <div class="button-row">
        <el-button type="danger" id="submit-btn" @click="submitScheduler"
          >提交</el-button
        >
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "Register",
  data() {
    return {
      company: "",
      region: "",
      position: "",
      level: "",
      ip1: "",
      ip2: "",
      port1: "",
      port2: "",
      superCommander: "",
      name: "",
      phone: "",
      email: "",
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
      sourceTypes: [],
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
        port1:this.port1,
        port2:this.port2,
        superCommander:this.superCommander,
        name:this.name,
        phone:this.phone,
        email:this.email
      };
      for(let key in submitData){
        if(submitData[key] == ''){
          if(key != 'superCommander'){
            this.$message('必填项不得为空');
            return
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
  background-color: #E5F1FF;
}
.platform-row /deep/ .el-input__inner {
  height: 54px;
  /* width: 564px; */
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
.button-row {
  display: flex;
  justify-content: center;
  margin-top: 135px;
}
</style>
<template>
  <div>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="活动名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="活动时间">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="即时配送">
      <el-switch v-model="form.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="活动性质">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
        <el-checkbox label="地推活动" name="type"></el-checkbox>
        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="特殊资源">
      <el-radio-group v-model="form.resource">
        <el-radio label="线上品牌商赞助"></el-radio>
        <el-radio label="线下场地免费"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="活动形式">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
    <hr>
    <hr>
    <hr>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item :label="item.label" v-for="(item,index) in formLabel" :key="index">
      <el-input v-model="form[item.key]" v-if="item.type == 'input'"></el-input>
      <el-select v-model="form[item.key]" v-if="item.type == 'select'" :placeholder="item.placeholder">
        <el-option v-for="(subitem,index) in item.option" :key="index" :label="subitem.label" :value="subitem.val"></el-option>
      </el-select>
      <el-col :span="11">
        <el-date-picker v-if="item.type === 'date-picker'" type="date" placeholder="选择日期" v-model="form[item.key]" style="width: 100%;"></el-date-picker>
      </el-col>
      <el-col  v-if="item.type === 'date-picker'" class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker  v-if="item.type === 'date-picker'" placeholder="选择时间" v-model="form[item.key2]" style="width: 100%;"></el-time-picker>
      </el-col>
      <el-switch v-model="form[item.key]"  v-if="item.type == 'switch'" ></el-switch>
        <el-checkbox-group  v-model="form[item.key]">
          <el-checkbox v-for="(subitem,index) in item.checkboxs" :key="index" :label="subitem.label" :name="subitem.name"></el-checkbox>
        </el-checkbox-group>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: 'zzz',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabel: [
        {
          label: '活动名称',
          key: 'name',
          type: 'input'
        },
        {
          label: '活动区域',
          key: 'region',
          type: 'select',
          placeholder: "请选择活动区域",
          option: [
            {
              label: '区域1',
              val: 'shanghai'
            },
            {
              label: '区域2',
              val: 'beijing'
            },
          ]
        },
        {
          label: '即时配送',
          key: 'delivery',
          type: 'switch'
        },
        {
          label: '活动时间',
          key: 'date1',
          key2: 'date2',
          type: 'date-picker'
        },
        {
          label: '活动性质',
          key: 'type',
          type: 'checkbox',
          checkboxs: [
            {
              label: '美食/餐厅线上活动',
              name: 'type'
            },
            {
              label: '地推活动',
              name: 'type'
            },
            {
              label: '线下主题活动',
              name: 'type'
            },
            {
              label: '单纯品牌曝光',
              name: 'type'
            },
          ]
        },
      ],
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style scoped>

</style>
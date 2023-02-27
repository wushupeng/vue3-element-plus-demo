<script lang="ts" setup>
// Method 1: Import and register icon component manually.
// 方式 1：手动导入并注册图标组件
import { Ref } from "vue";
import IconEpApple from "~icons/ep/apple";

let msg = ref("");
const state = {
  count: ref(0),
};
const acount = state.count;
const handleClick = () => {
  ElMessage.success("Hello world");
  msg.value = "hello world";
};
const addCount = (count: Ref<number>) => count.value++;
const handleChange = () => {
  // state.count++;
  //对于reactive对象的解构赋值，会失去响应式连接
  let { count } = state;
  console.log(count);
  // state.count++;
  addCount(state.count);
};
</script>

<script lang="ts">
export default defineComponent({
  components: {
    // Method 2: or we can use `unplugin-auto-import` to auto import icon component and register manally. not recommended)
    // 方法 2：或者我们还可以使用 `unplugin-auto-import` 来自动导入组件，再手动注册组件。（不推荐）
    IconEpRefresh,
  },
});
</script>
<template>
  <el-space direction="vertical">
    <IconEpApple />

    <!-- Method 2 -->
    <!-- 方法 2 -->
    <IconEpRefresh />

    <!-- (recommended) Method 3: or we can use `unplugin-vue-components` to auto register icon component -->
    <!-- （推荐）方法 3：我们可以使用 `unplugin-vue-components` 插件来自动注册图标 -->
    <!-- Please refer to vite.config.ts -->
    <!-- 请参阅 vite.config.ts -->
    <i-ep-add-location />
    <i-ep-aim />

    <!-- For more icons please refer to https://icones.js.org/ -->
    <!-- 更多图标请参阅 https://icones.js.org/ -->

    <el-button @click="handleClick">
      <el-icon><i-ep-circle-check-filled /></el-icon> Hello world
    </el-button>
    {{ acount + 1 }}
    <el-button @click="handleChange"></el-button>
    <el-input v-model="msg" />
  </el-space>

  <div v-loading="{ text: 'Loading...' }" style="height: 500px">
    Loading Area
  </div>

  <div class="box-container">
    <div class="box red"></div>
    <div class="box green"></div>
    <div class="box yellow"></div>
  </div>
</template>

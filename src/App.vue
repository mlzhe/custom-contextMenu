<template>
  <div>
    <ContextMenu class="box" :menu-list="menuList" @select="onSelect">
      <div>测试内容</div>
    </ContextMenu>
  </div>
</template>

<script setup lang="ts">
import ContextMenu from './components/ContextMenu.vue'
const menuList = [
  { label: '菜单一', value: 1 },
  { label: '菜单二', value: 2 },
  { label: '菜单三', value: 3 }
]

const menuList1 = [
  { label: '菜单一111', value: 1 },
  { label: '菜单二222', value: 2 },
  { label: '菜单三333', value: 3 }
]

const onSelect = (data: any) => {
  console.log(data)
}
</script>

<style scoped lang="scss">
.box {
  border-radius: 10px;
  width: 200px;
  height: 100px;
}

.box1 {
  background: rgb(174, 233, 56);
  border-radius: 10px;
}
</style>

<template>
  <div ref="menuRef">
    <slot></slot>
    <teleport to="body">
      <div
        class="menu-list"
        v-if="visible"
        ref="menuListRef"
        :style="{
          width: menuWidth,
          position: 'absolute',
          left: x + 'px',
          top: y + 'px',
          background,
          fontSize,
          color
        }"
      >
        <div
          :class="['menu-item', border ? 'border-bottom' : '']"
          v-for="item in menuList"
          :key="item.value"
          @click="selectMenu(item)"
        >
          {{ item.label }}
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useContextMenu } from '@/hooks/useContextMenu'
const menuRef = ref<HTMLElement | null>(null)
const { x, y, visible } = useContextMenu(menuRef)

const emits = defineEmits(['select'])

const selectMenu = (item: IMenu) => {
  emits('select', item)
}

withDefaults(
  defineProps<{
    menuList: IMenu[]
    background?: string
    fontSize?: string
    color?: string
    menuWidth?: string
    border?: boolean
  }>(),
  {
    background: '#333',
    fontSize: '14px',
    color: '#00FFFF',
    menuWidth: '100px',
    border: false
  }
)
</script>

<style lang="scss">
.menu-list {
  min-width: 80px;
  border-radius: 5px;
}
.menu-item {
  cursor: pointer;
  padding: 5px 10px;
  box-sizing: border-box;
}

.border-bottom {
  border-bottom: 1px solid #e0e0e0;
}
.menu-item:last-child {
  border-bottom: none;
}
.menu-item:hover {
  background: #66ccff;
  border-radius: 5px;
}
</style>

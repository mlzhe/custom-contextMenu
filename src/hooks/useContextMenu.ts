import { onMounted, onUnmounted, ref, type Ref } from 'vue'

const useContextMenu = (menuRef: Ref<HTMLElement | null>) => {
  const x: Ref<number> = ref(0)
  const y: Ref<number> = ref(0)

  const visible: Ref<boolean> = ref(false)

  const openMenu = (e: MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    x.value = e.clientX
    y.value = e.clientY
    visible.value = true
  }

  const hideMenu = () => {
    visible.value = false
  }

  onMounted(() => {
    const menuDiv = menuRef.value

    menuDiv?.addEventListener('contextmenu', openMenu)
    window.addEventListener('click', hideMenu, true)
    window.addEventListener('contextmenu', hideMenu, true)
  })

  onUnmounted(() => {
    const menuDiv = menuRef.value
    menuDiv?.removeEventListener('contextmenu', openMenu)
    window.removeEventListener('click', hideMenu)
    window.removeEventListener('contextmenu', hideMenu)
  })

  return {
    x,
    y,
    visible
  }
}

export { useContextMenu }

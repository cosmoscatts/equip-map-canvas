<script setup lang="ts">
import { Map } from './scripts/map'

const refParentEl = ref()
const refCanvas = ref()

let map: Map | null = null

function createMap() {
  const { value: canvas } = refCanvas
  map?.destory()
  map = new Map(canvas!.getContext('2d')!, refParentEl.value!)
}

onMounted(createMap)
</script>

<template>
  <div h-screen w-screen of-hidden flex="~ col" pb-20px>
    <div w-full flex-center h-50px text-3xl font-bold mt-20px>
      厂房设备布局（Canvas）
    </div>

    <div w-80vw mxa mt-20px flex-1 min-h-80vh>
      <div ref="refParentEl" hw-full flex-center border-1 rounded>
        <canvas ref="refCanvas" tabindex="0" />
      </div>
    </div>
  </div>
</template>

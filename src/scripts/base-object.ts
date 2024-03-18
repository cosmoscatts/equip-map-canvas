const OBJECTS: BaseObject[] = []

export class BaseObject {
  timeDelta = 0 // 距离上一帧的时间间隔（ms）
  hasCalledStart = false

  constructor() {
    OBJECTS.push(this)
  }

  start() {}

  update() {}

  beforeDestory() {}

  destory() {
    this.beforeDestory()
    const idx = OBJECTS.findIndex(i => i === toRaw(this))
    if (~idx)
      OBJECTS.splice(idx) // 删除之后的所有对象
  }
}

let lastTimestamp = 0 // 上一次执行的时间
function step(timestamp: number) {
  OBJECTS.forEach((object) => {
    if (!object.hasCalledStart) {
      object.hasCalledStart = true
      object.start()
    }
    else {
      object.timeDelta = timestamp - lastTimestamp
      object.update()
    }
  })
  lastTimestamp = timestamp
  requestAnimationFrame(step) // 递归调用
}
requestAnimationFrame(step)

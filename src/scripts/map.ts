import { BaseObject } from './base-object'
import { Equip } from './equip'

export class Map extends BaseObject {
  L = 0 // 1 单位长度
  rows = 6 // 地图行数
  cols = 12 // 地图列数

  constructor(
    public ctx: CanvasRenderingContext2D,
    private parent: HTMLElement,
  ) {
    super()

    this.ctx = ctx
    this.parent = parent
  }

  start() {
    new Equip(1, 1, this, 1, '冲压机', 1, 50, 20)
  }

  updateSize() {
    const { parent, cols, rows } = this
    const { clientWidth, clientHeight } = parent
    this.L = Number.parseInt(String(Math.min(clientWidth / cols, clientHeight / rows)))
    // 计算 canvas 宽高
    this.ctx.canvas.width = this.L * cols
    this.ctx.canvas.height = this.L * rows
  }

  update() {
    this.updateSize()
    this.render()
  }

  render() {
    const { ctx, L, cols, rows } = this

    const { height, width } = ctx.canvas
    ctx.canvas.width = width
    ctx.canvas.height = height

    ctx.clearRect(0, 0, width, height)

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        ctx.fillStyle = ((r + c) & 1) === 0
          ? 'gray'
          : '#333'
        // ctx.fillStyle = 'white'
        ctx.fillRect(c * L, r * L, L, L)
      }
    }
  }

  beforeDestory() {
    // 销毁 canvas
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  }
}

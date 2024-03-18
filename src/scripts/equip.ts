import { BaseObject } from './base-object'
import type { Map } from './map'
import imgUrl from '~/images/img.jpg'

export class Equip extends BaseObject {
  image = new Image()
  constructor(
    public r: number,
    public c: number,
    public map: Map,
    public id: number,
    public name: string,
    public state: number,
    public voltage: number,
    public current: number,
  ) {
    super()
    this.r = r
    this.c = c
    this.map = map
    this.id = id
    this.name = name
    this.state = state
    this.voltage = voltage
    this.current = current
    this.image.src = imgUrl
  }

  start() {

  }

  update() {
    this.renderPoint()
    this.renderImage()
    this.renderName()
  }

  renderPoint() {
    const { map: { ctx, L }, r, c, state } = this
    ctx.fillStyle = state === 1 ? 'green' : 'red'
    ctx.beginPath()
    ctx.arc((r - 0.1) * L, (c + 0.5) * L, L / 2 * 0.1, 0, Math.PI * 2)
    ctx.fill()

    ctx.strokeStyle = 'black'
    ctx.font = '13px Arial'
    ctx.strokeText(state === 1 ? '在线' : '离线', (r + 0.05) * L, (c + 0.54) * L)
  }

  renderName() {
    const { map: { ctx, L }, r, c, name } = this
    ctx.strokeStyle = 'black'
    ctx.font = '16px Arial'
    ctx.strokeText(name, (c - 0.2) * L, (r + 0.75) * L)
  }

  renderImage() {
    const { map: { ctx, L }, r, c, image } = this
    ctx.drawImage(image, (c - 0.5) * L, (r - 0.65) * L, L, L)
  }

  renderValues() {

  }
}

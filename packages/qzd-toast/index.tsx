import { render, Transition, ref, nextTick, withModifiers } from 'vue'
import './index.css'

type Props = {
  message: string
  duration?: number
}

const div = document.createElement('div')
div.setAttribute('id', 'temple-toast')
document.body.appendChild(div)

class Toast {
  timer: any = null
  isNode: boolean = true
  constructor() {}
  _h({ message, duration }: Props) {
    let isShow = ref(false)
    nextTick(() => (isShow.value = true))
    setTimeout(() => (isShow.value = false), duration)
    return (
      <Transition name="temple_toast">
        {isShow.value && (
          <div class="temple-toast_message" onClick={withModifiers(() => {}, ['stop'])}>
            <span class="temple-toast_message__text">{message}</span>
          </div>
        )}
      </Transition>
    )
  }
  init({ message, duration = 3000 }: Props) {
    if (this.isNode) {
      render(null, div)
      this.isNode = false
      setTimeout(() => (this.isNode = true), duration)
      const vNode = this._h({ message, duration })
      render(vNode, div)
      this.timer && clearTimeout(this.timer)
      this.timer = setTimeout(() => render(null, div), duration + 500)
    }
  }
}

const Toasts = new Toast()
export const TempleToast = (e: Props) => Toasts.init(e)

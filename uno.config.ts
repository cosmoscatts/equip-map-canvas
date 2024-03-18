import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  presetWind,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'hw-full': 'h-full w-full',
      'hw-screen': 'h-screen w-screen',
      'flex-center': 'flex justify-center items-center',
      'flex-x-center': 'flex justify-center',
      'flex-y-center': 'flex items-center',
      'flex-col-center': 'flex-col flex-center',
      'border-base': 'border-[var(--color-neutral-3)]',
      'icon-btn': 'op30 hover:op100 hover:text-primary_hover',
      'bg-body': 'bg-white dark:bg-hex-232324',
      'bg-nav': 'bg-white dark:bg-hex-232324',
      'bg-side': 'bg-white dark:bg-hex-232324',
    },
    [/^btn-(\w+)$/, ([_, color]) => `op90 px2.5 py1 transition-all duration-200 ease-out no-underline! cursor-pointer hover:(text-${color} bg-${color}/10) border border-base! rounded`],
    [/^tag-(\w+)$/, ([_, color]) => `op90 px2.5 py1 transition-all duration-200 ease-out no-underline! cursor-pointer text-${color} bg-${color}/10 border border-base! rounded`],
  ],
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons({
      scale: 1.2,
    }),
    presetWind(),
    presetWebFonts({
      fonts: {
        sans: 'Inter',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})

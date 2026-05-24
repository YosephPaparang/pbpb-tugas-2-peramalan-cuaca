declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // Mengganti {} dengan Record<string, unknown> agar sesuai standar ESLint
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, any>
  export default component
}
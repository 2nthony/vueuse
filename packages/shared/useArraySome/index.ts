import type { MaybeComputedRef } from '@vueuse/shared'
import { resolveUnref } from '@vueuse/shared'
import type { ComputedRef } from 'vue-demi'
import { computed } from 'vue-demi'

export function useArraySome<T>(
  list: MaybeComputedRef<MaybeComputedRef<T>[]>,
  fn: (element: T, index: number, array: MaybeComputedRef<T>[]) => unknown,
): ComputedRef<boolean> {
  return computed(() => resolveUnref(list).some((element, index, array) => fn(resolveUnref(element), index, array)))
}

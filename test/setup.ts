import '@testing-library/jest-dom'

import { cleanup } from '@testing-library/react'
import { afterEach, beforeEach, vi } from 'vitest'

// hooks are reset before each suite
beforeEach(() => {
  vi.useFakeTimers()
  cleanup()
})

afterEach(() => {
  vi.resetAllMocks()
})

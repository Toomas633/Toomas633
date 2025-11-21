import { describe, it, expect, vi } from 'vitest'
import { objectToString, logWithTimestamp } from '../../src/utils/helpers'

describe('helpers', () => {
	describe('objectToString', () => {
		it('should convert object to string with key-value pairs', () => {
			const obj = { name: 'John', age: 30, city: 'New York' }
			const result = objectToString(obj)
			expect(result).toBe('name: John,age: 30,city: New York')
		})

		it('should handle empty object', () => {
			const obj = {}
			const result = objectToString(obj)
			expect(result).toBe('')
		})

		it('should handle object with various value types', () => {
			const obj = { string: 'test', number: 42, boolean: true, null: null }
			const result = objectToString(obj)
			expect(result).toContain('string: test')
			expect(result).toContain('number: 42')
			expect(result).toContain('boolean: true')
			expect(result).toContain('null: null')
		})
	})

	describe('logWithTimestamp', () => {
		it('should log info message with timestamp', () => {
			const consoleSpy = vi.spyOn(console, 'info')
			logWithTimestamp('info', 'Test message')
			expect(consoleSpy).toHaveBeenCalled()
			const call = consoleSpy.mock.calls[0][0] as string
			expect(call).toContain('INFO: Test message')
			expect(call).toMatch(/\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z\]/)
			consoleSpy.mockRestore()
		})

		it('should log warn message with timestamp', () => {
			const consoleSpy = vi.spyOn(console, 'warn')
			logWithTimestamp('warn', 'Warning message')
			expect(consoleSpy).toHaveBeenCalled()
			const call = consoleSpy.mock.calls[0][0] as string
			expect(call).toContain('WARN: Warning message')
			consoleSpy.mockRestore()
		})

		it('should log error message with timestamp', () => {
			const consoleSpy = vi.spyOn(console, 'error')
			logWithTimestamp('error', 'Error message')
			expect(consoleSpy).toHaveBeenCalled()
			const call = consoleSpy.mock.calls[0][0] as string
			expect(call).toContain('ERROR: Error message')
			consoleSpy.mockRestore()
		})

		it('should include duration when provided', () => {
			const consoleSpy = vi.spyOn(console, 'info')
			logWithTimestamp('info', 'Test message', 150)
			expect(consoleSpy).toHaveBeenCalled()
			const call = consoleSpy.mock.calls[0][0] as string
			expect(call).toContain('in 150ms')
			consoleSpy.mockRestore()
		})
	})
})

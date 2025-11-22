import { describe, it, expect, vi, beforeEach } from 'vitest'
import useImageMixin from '../../src/helpers/imageMixin'

describe('imageMixin', () => {
	beforeEach(() => {
		vi.clearAllMocks()
	})

	describe('openImageInNewTab', () => {
		it('should open image in new tab', () => {
			const { openImageInNewTab } = useImageMixin()
			const windowOpenSpy = vi.spyOn(globalThis, 'open').mockReturnValue(null)

			openImageInNewTab('https://example.com/image.png')

			expect(windowOpenSpy).toHaveBeenCalledWith(
				'https://example.com/image.png',
				'_blank'
			)

			windowOpenSpy.mockRestore()
		})

		it('should call window.open with _blank target', () => {
			const { openImageInNewTab } = useImageMixin()
			const windowOpenSpy = vi.spyOn(globalThis, 'open').mockReturnValue(null)

			openImageInNewTab('/images/test.jpg')

			expect(windowOpenSpy).toHaveBeenCalledWith('/images/test.jpg', '_blank')

			windowOpenSpy.mockRestore()
		})

		it('should handle relative URLs', () => {
			const { openImageInNewTab } = useImageMixin()
			const windowOpenSpy = vi.spyOn(globalThis, 'open').mockReturnValue(null)

			openImageInNewTab('../images/photo.png')

			expect(windowOpenSpy).toHaveBeenCalledWith(
				'../images/photo.png',
				'_blank'
			)

			windowOpenSpy.mockRestore()
		})

		it('should handle data URLs', () => {
			const { openImageInNewTab } = useImageMixin()
			const windowOpenSpy = vi.spyOn(globalThis, 'open').mockReturnValue(null)
			const dataUrl = 'data:image/png;base64,iVBORw0KGgoAAAANS'

			openImageInNewTab(dataUrl)

			expect(windowOpenSpy).toHaveBeenCalledWith(dataUrl, '_blank')

			windowOpenSpy.mockRestore()
		})

		it('should handle empty string', () => {
			const { openImageInNewTab } = useImageMixin()
			const windowOpenSpy = vi.spyOn(globalThis, 'open').mockReturnValue(null)

			openImageInNewTab('')

			expect(windowOpenSpy).toHaveBeenCalledWith('', '_blank')

			windowOpenSpy.mockRestore()
		})

		it('should be called exactly once per invocation', () => {
			const { openImageInNewTab } = useImageMixin()
			const windowOpenSpy = vi.spyOn(globalThis, 'open').mockReturnValue(null)

			openImageInNewTab('image.jpg')

			expect(windowOpenSpy).toHaveBeenCalledTimes(1)

			windowOpenSpy.mockRestore()
		})
	})
})

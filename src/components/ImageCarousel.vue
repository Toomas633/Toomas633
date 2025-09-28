<template>
	<div ref="containerRef" class="position-relative">
		<v-carousel
			v-model="currentSlide"
			:hide-delimiters="autoScroll"
			:cycle="autoScroll"
			show-arrows="hover"
			hide-delimiter-background
			interval="5000"
			class="position-relative"
			:height="carouselHeight"
			style="cursor: zoom-in">
			<div
				v-if="autoScroll"
				class="position-absolute top-0 left-0 right-0"
				style="pointer-events: none; z-index: 2">
				<v-progress-linear
					:model-value="progress"
					height="5"
					color="primary"
					class="cursor-pointer bg-background"
					aria-label="Image carousel progress bar"
					style="pointer-events: auto"
					@click="navigateToImage" />
				<div
					class="position-absolute top-0 bottom-0 right-0 left-0"
					style="pointer-events: none">
					<div
						v-for="(_, index) in images.slice(1)"
						:key="index"
						:style="{
							left: `calc(${((index + 1) * 100) / images.length}% - 0.25rem)`,
						}"
						class="position-absolute bg-background top-0 bottom-0"
						style="width: 0.5rem" />
				</div>
			</div>
			<v-carousel-item
				v-for="(image, index) in images"
				:key="index"
				:value="index"
				:src="image.src"
				:alt="image.alt"
				@click="openImageInNewTab(image.src)">
				<h1
					v-if="image.title"
					class="w-100 text-center position-absolute"
					style="background-color: rgb(var(--v-theme-background), 0.7)"
					:class="autoScroll ? 'bottom-0' : 'top-0'">
					{{ image.title }}
				</h1>
			</v-carousel-item>
		</v-carousel>
	</div>
</template>
<script setup lang="ts">
import type { Image } from '@/types/image'
import useImageMixin from '@/helpers/imageMixin'
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

const props = defineProps<{ images: Image[]; autoScroll?: boolean }>()

const { openImageInNewTab } = useImageMixin()

const currentSlide = ref(0)
const progress = ref(0)
const containerRef = ref<HTMLElement | null>(null)
const containerWidth = ref(0)
const parentHeight = ref<number | undefined>(undefined)
const aspectRatios = ref<number[]>([NaN])

let resizeObserver: ResizeObserver | null = null
let parentResizeObserver: ResizeObserver | null = null

const carouselHeight = computed<number | undefined>(() => {
	const ratio = aspectRatios.value[0]
	if (!containerWidth.value || !ratio || Number.isNaN(ratio)) return undefined
	const desired = Math.round(containerWidth.value * ratio)
	if (parentHeight.value && parentHeight.value > 0) {
		return Math.min(desired, parentHeight.value)
	}
	return desired
})

let interval: ReturnType<typeof setInterval>
const totalSlides = props.images.length
const sectionWidth = 100 / totalSlides

watch(currentSlide, startProgress)

onMounted(() => {
	startProgress()
	recalcWidth()
	if (containerRef.value) {
		resizeObserver = new ResizeObserver(() => recalcWidth())
		resizeObserver.observe(containerRef.value)
		const parent = containerRef.value.parentElement
		if (parent) {
			parentResizeObserver = new ResizeObserver(() => recalcWidth())
			parentResizeObserver.observe(parent)
		}
	}
	preloadAspectRatios()
})

function startProgress() {
	if (!props.autoScroll) return
	if (interval) clearInterval(interval)

	progress.value = currentSlide.value * sectionWidth
	let currentProgress = progress.value

	interval = setInterval(() => {
		currentProgress += sectionWidth / 50
		progress.value = currentProgress
	}, 100)
}

function navigateToImage(event: MouseEvent) {
	const element = event?.currentTarget as HTMLElement
	const rect = element.getBoundingClientRect()
	const clickX = event.clientX - rect.left
	const percentage = (clickX / rect.width) * 100
	const section = Math.floor((percentage / 100) * props.images.length)
	currentSlide.value = section
}

function recalcWidth() {
	if (containerRef.value) {
		containerWidth.value = containerRef.value.clientWidth
		const parent = containerRef.value.parentElement as HTMLElement | null
		parentHeight.value = parent?.clientHeight || undefined
	}
}

function preloadAspectRatios() {
	const first = props.images[0]
	if (!first) return
	const el = new Image()
	el.src = first.src
	if (el.complete && el.naturalWidth && el.naturalHeight) {
		aspectRatios.value[0] = el.naturalHeight / el.naturalWidth
	} else {
		el.onload = () => {
			aspectRatios.value[0] = el.naturalHeight / el.naturalWidth
		}
		el.onerror = () => {
			aspectRatios.value[0] = 9 / 16
		}
	}
}

onUnmounted(() => {
	if (interval) clearInterval(interval)
	if (resizeObserver) resizeObserver.disconnect()
	if (parentResizeObserver) parentResizeObserver.disconnect()
})
</script>

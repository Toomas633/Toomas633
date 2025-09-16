<template>
	<v-container class="pa-0">
		<v-carousel
			v-model="currentSlide"
			hide-delimiters
			cycle
			show-arrows="hover"
			interval="5000">
			<div class="position-relative">
				<v-progress-linear
					:model-value="progress"
					height="5"
					color="primary"
					class="cursor-pointer"
					aria-label="Image carousel progress bar"
					@click="navigateToImage" />
				<div
					class="progress-bar-segments position-absolute top-0 bottom-0 right-0 left-0">
					<div
						v-for="(_, index) in images.slice(1)"
						:key="index"
						:style="{
							left: `calc(${((index + 1) * 100) / images.length}% - 0.25rem)`,
						}"
						class="segment-divider position-absolute bg-background top-0 bottom-0"></div>
				</div>
			</div>
			<v-carousel-item
				v-for="(image, index) in images"
				:key="index"
				:value="index">
				<v-img
					style="cursor: zoom-in"
					:src="image.src"
					:alt="image.alt"
					:cover="cover"
					@click="openImageInNewTab(image.src)">
					<h1
						v-if="image.title"
						class="w-100 text-center position-absolute bottom-0">
						{{ image.title }}
					</h1>
				</v-img>
			</v-carousel-item>
		</v-carousel>
	</v-container>
</template>
<script setup lang="ts">
import type { Image } from '@/types/image'
import useImageMixin from '@/helpers/imageMixin'
import { onMounted, onUnmounted, ref, watch } from 'vue'

const props = defineProps<{ images: Image[]; cover?: boolean }>()

const { openImageInNewTab } = useImageMixin()

const currentSlide = ref(0)
const progress = ref(0)

let interval: ReturnType<typeof setInterval>
const totalSlides = props.images.length
const sectionWidth = 100 / totalSlides

onMounted(() => {
	startProgress()
})

onUnmounted(() => {
	if (interval) clearInterval(interval)
})

const startProgress = () => {
	if (interval) clearInterval(interval)

	progress.value = currentSlide.value * sectionWidth
	let currentProgress = progress.value

	interval = setInterval(() => {
		currentProgress += sectionWidth / 50
		progress.value = currentProgress
	}, 100)
}

watch(currentSlide, startProgress)

const navigateToImage = (event: MouseEvent) => {
	const element = event?.currentTarget as HTMLElement
	const rect = element.getBoundingClientRect()
	const clickX = event.clientX - rect.left
	const percentage = (clickX / rect.width) * 100
	const section = Math.floor((percentage / 100) * props.images.length)
	currentSlide.value = section
}
</script>
<style scoped lang="scss">
.progress-bar-segments {
	pointer-events: none;
}

.segment-divider {
	width: 0.5rem;
}

.v-window {
	height: auto !important;
}

.v-img {
	height: 200px;
}

@media (width >= 600px) {
	.v-img {
		height: 300px;
	}
}

@media (width >= 800px) {
	.v-img {
		height: 400px;
	}
}

@media (width >= 1000px) {
	.v-img {
		height: 500px;
	}
}

@media (width >= 1280px) {
	.v-img {
		height: 600px;
	}

	.v-container {
		width: 1136px;
	}
}
</style>

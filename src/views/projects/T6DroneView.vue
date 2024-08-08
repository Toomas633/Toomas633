<template>
	<v-container class="pa-4">
		<h1 class="text-center">T6 Drone</h1>
		<p class="text-center">
			This is my first try at building a drone. It started as a schools
			practical work project for graduation. It is built around DJI F450 frame.
			All the 3D files, including project files and printing files, are found on
			the <a href="https://github.com/Toomas633/T6-Drone"> GitHub page</a> . 3D
			printing files in the STL form can be found on
			<a href="https://www.thingiverse.com/thing:4804605">Thingiverse</a> .
		</p>
		<v-row class="pa-4" justify="center">
			<v-col>
				<ButtonCard
					size="100"
					text="Download ZIP"
					href="https://github.com/Toomas633/T6-Drone/archive/v2.zip"
					icon="mdi-file-download-outline" />
			</v-col>
			<v-col>
				<ButtonCard
					size="100"
					text="GitHub"
					href="https://github.com/Toomas633/T6-Drone"
					icon="mdi-github" />
			</v-col>
			<v-col>
				<ButtonCard
					size="100"
					text="Thingiverse"
					href="https://www.thingiverse.com/thing:4804605"
					icon="mdi-rocket-launch"
					icon-color="blue" />
			</v-col>
		</v-row>
		<v-row class="ma-4" justify="center">
			<v-carousel
				show-arrows="hover"
				cycle
				hide-delimiters
				progress="primary"
				interval="5000"
				height="600">
				<v-carousel-item
					v-for="(item, index) in items"
					:key="index"
					:alt="item.alt">
					<v-img
						:src="item.src"
						cover
						:alt="item.alt"
						@click="openImageInNewTab(item.src)">
						<h1 class="image-title">
							{{ item.title }}
						</h1>
					</v-img>
				</v-carousel-item>
			</v-carousel>
		</v-row>
	</v-container>
</template>
<script setup lang="ts">
import ButtonCard from '@/components/ButtonCard.vue'
import render from '@/assets/images/T6Drone/render.jpg'
import electronics from '@/assets/images/T6Drone/electronics.jpg'
import model from '@/assets/images/T6Drone/model.jpg'
import complete from '@/assets/images/T6Drone/complete.jpg'
import useImageMixin from '@/helpers/imageMixin'

const items = [
	{
		src: render,
		title: 'KeyShot render',
		alt: 'KeyShot render',
	},
	{
		src: electronics,
		title: 'Electronics',
		alt: 'Electronics',
	},
	{
		src: model,
		title: 'SolidEdge model',
		alt: 'SolidEdge model',
	},
	{
		src: complete,
		title: 'Complete build',
		alt: 'Complete build',
	},
]

const { openImageInNewTab } = useImageMixin()
</script>

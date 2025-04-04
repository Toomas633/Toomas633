<template>
	<v-container class="pa-4">
		<v-row class="pa-4 d-block d-md-flex" justify="center">
			<v-col class="align-content-space-around">
				<h1 class="text-center">T6 Drone</h1>
				<p class="text-center">
					This is my first try at building a drone. It started as a schools
					practical work project for graduation. It is built around DJI F450
					frame. All the 3D files, including project files and printing files,
					are found on the
					<LinkComponent
						href="https://github.com/Toomas633/T6-Drone"
						text="GitHub page" />. 3D printing files in the STL form can be
					found on
					<LinkComponent
						href="https://www.thingiverse.com/thing:4804605"
						text="Thingiverse" />.
				</p>
			</v-col>
			<v-col
				class="align-content-space-around d-block d-md-flex pa-0"
				md="5"
				lg="5"
				xl="3">
				<v-row class="pa-0 ma-0" justify="center">
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
			</v-col>
		</v-row>
		<ImageCarosel :images="images" :cover="true" />
	</v-container>
</template>
<script setup lang="ts">
import ButtonCard from '@/components/ButtonCard.vue'
import ImageCarosel from '@/components/ImageCarosel.vue'
import LinkComponent from '@/components/LinkComponent.vue'
import render from '@/assets/images/T6Drone/render.webp'
import electronics from '@/assets/images/T6Drone/electronics.webp'
import model from '@/assets/images/T6Drone/model.webp'
import complete from '@/assets/images/T6Drone/complete.webp'
import type { Images } from '@/types/image'

const images: Images[] = [
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
</script>

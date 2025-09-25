<template>
	<v-row justify="center" class="d-block d-sm-flex">
		<v-col md="6" lg="5" class="pb-0">
			<v-carousel
				color="primary"
				hide-delimiter-background
				class="mt-3"
				style="cursor: zoom-in">
				<v-carousel-item
					:src="armImage.src"
					:alt="armImage.alt"
					@click="openImageInNewTab(armImage.src)" />
				<v-carousel-item
					:src="wiring"
					alt="Wiring"
					@click="openImageInNewTab(wiring)" />
				<v-carousel-item
					:src="list"
					alt="List"
					@click="openImageInNewTab(list)" />
			</v-carousel>
		</v-col>
		<v-col class="pl-0">
			<h1 class="text-center mt-4">V1</h1>
			<p :class="!isMobile ? 'text-center' : 'ml-4'">
				I recently salvaged a broken controller for joysticks and decided to
				take a crack at a robotic arm. Joysticks change the servo position
				values so they hold position and won't come back when you let go.
				Buttons are programmed to use the Arduino's built in pullup resistors,
				so none are needed on the ground nor on the signal lines. Serial monitor
				can show real time feedback on button values and servo positions.
			</p>
			<v-row justify="center" class="mt-4 d-block d-sm-flex">
				<v-col sm="5" md="4" lg="3">
					<ButtonCard
						size="100"
						text="Download"
						href="https://github.com/Toomas633/Arduino-Robotic-Arm/releases/download/v1/Robotic-Arm-v1.ino"
						icon="mdi-file-download-outline" />
				</v-col>
				<v-col sm="5" md="4" lg="3">
					<ButtonCard
						size="100"
						text="GitHub"
						href="https://github.com/Toomas633/Arduino-Robotic-Arm/tree/v1"
						icon="mdi-github" />
				</v-col>
				<v-col sm="5" md="4" lg="3">
					<ButtonCard
						size="100"
						text="Thingiverse"
						href="https://www.thingiverse.com/thing:5391135"
						icon="mdi-rocket-launch"
						icon-color="blue" />
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>
<script setup lang="ts">
import list from '@/assets/images/robotic-arm/v1/list.webp'
import wiring from '@/assets/images/robotic-arm/v1/wiring.webp'
import useImageMixin from '@/helpers/imageMixin'
import { Image } from '@/types/image'
import { isMobile } from '@basitcodeenv/vue3-device-detect'

defineProps<{
	armImage: Image
}>()

const { openImageInNewTab } = useImageMixin()
</script>

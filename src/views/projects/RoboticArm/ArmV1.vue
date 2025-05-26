<template>
	<v-row justify="center" class="d-block d-sm-flex">
		<v-col md="4" lg="3" class="pb-0">
			<v-img
				class="mt-3"
				rounded
				style="cursor: pointer"
				:src="armImage.src"
				:alt="armImage.alt"
				@click="openImageInNewTab(armImage.src)" />
		</v-col>
		<v-col class="pl-0 pr-0">
			<v-row class="pt-3 pl-3 d-block d-lg-flex">
				<v-col class="align-content-space-around pl-0">
					<v-card class="bg-black text-center pa-4">
						<h1>V1</h1>
						<v-card-text>
							I recently salvaged a broken controller for joysticks and decided
							to take a crack at a robotic arm. Joysticks change the servo
							position values so they hold position and won't come back when you
							let go. Buttons are programmed to use the Arduino's built in
							pullup resistors, so none are needed on the ground nor on the
							signal lines. Serial monitor can show real time feedback on button
							values and servo positions.
						</v-card-text>
					</v-card>
				</v-col>
				<v-col class="align-content-space-around pl-0" lg="4" xl="4">
					<v-row justify="center">
						<v-col md="3" lg="5" xl="4">
							<ButtonCard
								size="100"
								text="Download"
								href="https://github.com/Toomas633/Arduino-Robotic-Arm/releases/download/v1/Robotic-Arm-v1.ino"
								icon="mdi-file-download-outline" />
						</v-col>
						<v-col md="3" lg="5" xl="4">
							<ButtonCard
								size="100"
								text="GitHub"
								href="https://github.com/Toomas633/Arduino-Robotic-Arm/tree/v1"
								icon="mdi-github" />
						</v-col>
						<v-col md="3" lg="5" xl="4">
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
			<v-row class="pt-3 d-block d-md-flex" justify="center">
				<v-col md="8">
					<v-img
						rounded
						style="cursor: pointer"
						:src="wiring"
						alt="Wiring"
						@click="openImageInNewTab(wiring)" />
				</v-col>
				<v-col md="4">
					<v-img
						rounded
						style="cursor: pointer"
						:src="list"
						alt="List"
						@click="openImageInNewTab(list)" />
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>
<script setup lang="ts">
import ButtonCard from '@/components/ButtonCard.vue'
import list from '@/assets/images/RoboticArm/V1/list.webp'
import wiring from '@/assets/images/RoboticArm/V1/wiring.webp'
import useImageMixin from '@/helpers/imageMixin'
import { Image } from '@/types/image'

defineProps<{
	armImage: Image
}>()

const { openImageInNewTab } = useImageMixin()
</script>

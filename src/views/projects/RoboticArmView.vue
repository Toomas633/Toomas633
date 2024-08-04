<template>
	<v-container class="pa-4">
		<h1 class="text-center">Robotic Arm</h1>
		<p class="text-center">
			This is Arduino Uno robotic arm using joystick input. It's my first
			Arduino project that I have coded completely by myself from the beginning.
			I recently salvaged a broken controller for joysticks and decided to take
			a crack at a robotic arm. The arm needs some spare metal or weight in the
			base for extra heft so it won't tip over so easily. It's using servos with
			metal gearboxes for extra sturdiness and better power and performance.
			Currently on my setup it can lift about 1/2 to 1kg of weights.
		</p>
	</v-container>
	<v-row class="pa-4 d-flex" justify="center">
		<v-col>
			<ButtonCard
				size="100"
				text="Download"
				href="https://github.com/Toomas633/Arduino-Robotic-Arm/releases/download/v1/Robot_arm_v1.ino"
				icon="mdi-file-download-outline" />
		</v-col>
		<v-col>
			<ButtonCard
				size="100"
				text="GitHub"
				href="https://github.com/Toomas633/Arduino-Robotic-Arm"
				icon="mdi-github" />
		</v-col>
		<v-col>
			<ButtonCard
				size="100"
				text="Thingiverse"
				href="https://www.thingiverse.com/thing:5391135"
				icon="mdi-rocket-launch"
				icon-color="blue" />
		</v-col>
	</v-row>
	<v-row class="pa-4 d-flex mr-4 ml-4" justify="center">
		<v-col cols="5" md="4" lg="3">
			<v-img
				rounded
				style="cursor: pointer"
				:src="arm"
				@click="openImageInNewTab(arm)" />
		</v-col>
		<v-col>
			<v-card class="bg-black text-center pa-4" min-width="282">
				<h1>V1</h1>
				<v-card-text>
					Joysticks change the servo position values so they hold position and
					won't come back when you let go. Buttons are programmed to use the
					Arduino's built in pullup resistors, so none are needed on the ground
					nor on the signal lines. Serial monitor can show real time feedback on
					button values and servo positions.</v-card-text
				>
			</v-card>
			<v-row class="pt-6 d-block d-md-flex" justify="center">
				<v-col md="8">
					<v-img
						rounded
						style="cursor: pointer"
						:src="wiring"
						@click="openImageInNewTab(wiring)" />
				</v-col>
				<v-col md="4">
					<v-img
						rounded
						style="cursor: pointer"
						:src="list"
						@click="openImageInNewTab(list)" />
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script setup lang="ts">
import ButtonCard from '@/components/ButtonCard.vue'
import arm from '@/assets/RoboticArm/arm.jpeg'
import wiring from '@/assets/RoboticArm/wiring.png'
import list from '@/assets/RoboticArm/list.png'

const openImageInNewTab = (image: string) => {
	window.open(image, '_blank')
}
</script>

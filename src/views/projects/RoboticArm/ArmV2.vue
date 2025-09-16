<template>
	<v-row justify="center" class="d-block d-sm-flex">
		<v-col md="6" lg="5" class="pb-0">
			<v-carousel
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
		<v-col class="pl-0 pr-0">
			<v-col class="align-content-space-around pl-0">
				<v-card class="bg-black text-center pa-4">
					<h1>V2</h1>
					<v-card-text>
						Removed the custom joystick, moved servo connections down to pins
						2-7 and added a USB HID hat for using XBOX controller input via usb
						wire. For a usb hat I used
						<LinkComponent
							text="this"
							href="https://www.amazon.de/-/en/Hailege-Shield-Support-Google-Android/dp/B07YJQBGFW/ref=sr_1_1?crid=M0CZAVK8EEDM&dib=eyJ2IjoiMSJ9.uxUOWxowuN8wYjbckG61t4ETkl0BpUuPhKclKIu9ho0o56Rn-vxTOaOF1tx2MxtXGIvQPB9M4kJzaTuCvBazbLzo6LAThyz5McKRkB2MxVcqcv8Ckryv2YWeAoQTCv9OGmOkT9vNWi5bc9CLGh0TITjfdcn22-Vtc70pGIklAHo.dDYbhTCGCTeHEG1vmHcJjQNKjNQsKwl8qKGSgwjLumM&dib_tag=se&keywords=arduino+uno+usb+hat&qid=1725008057&sprefix=arduinouno+usb+hat%2Caps%2C128&sr=8-1" />
						one but any should work aslong as they are supported by the
						<LinkComponent
							text="USB Host Shield Library 2.0"
							href="https://www.arduino.cc/reference/en/libraries/usb-host-shield-library-2.0/" />
						and do not require custom drivers. The hat makes the arduino a bit
						higher and for connecting the usb you would need standoffs between
						the base of the arm and the top where servos connect.
					</v-card-text>
				</v-card>
			</v-col>
			<v-col>
				<v-row justify="center">
					<v-col sm="5" md="4" lg="3">
						<ButtonCard
							size="100"
							text="Download"
							href="https://github.com/Toomas633/Arduino-Robotic-Arm/releases/download/v2/Robotic-Arm-v2.ino"
							icon="mdi-file-download-outline" />
					</v-col>
					<v-col sm="5" md="4" lg="3">
						<ButtonCard
							size="100"
							text="GitHub"
							href="https://github.com/Toomas633/Arduino-Robotic-Arm/tree/v2"
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
			<v-col class="align-content-space-around pl-0" xl="8">
				<v-card class="bg-black pa-4 h-100">
					<h2 class="text-center mb-2">Contol scheme</h2>
					<div class="d-flex justify-center">
						<div class="d-block mr-2">
							<p class="d-flex align-center mb-2">
								<img :src="A" height="28" alt="Xbox A Button" class="ma-2" />
								Gripper open/close
							</p>
							<p class="d-flex align-center mb-2">
								<img
									:src="RightStickX"
									height="28"
									alt="Xbox Right Stick X"
									class="ma-2" />
								Rotate Left-Right
							</p>
							<p class="d-flex align-center mb-2">
								<img
									:src="RightStickY"
									height="28"
									alt="Xbox Right Stick Y"
									class="ma-2" />
								Move Up-Down
							</p>
						</div>
						<div class="spacer"></div>
						<div class="d-block ml-2">
							<p class="d-flex align-center mb-2">
								<img
									:src="LeftStickX"
									height="28"
									alt="Xbox Left Stick X"
									class="ma-2" />
								Rotate Gripper Left-Right
							</p>
							<p class="d-flex align-center mb-2">
								<img
									:src="LeftStickY"
									height="28"
									alt="Xbox Left Stick Y"
									class="ma-2" />
								Extend-Retract
							</p>
							<p class="d-flex align-center mb-2">
								<span class="d-flex ma-2">
									<img :src="B" height="28" alt="Xbox B Button" />
									<v-icon icon="mdi-plus" />
									<img :src="LeftStickY" height="28" alt="Xbox Left Stick Y" />
								</span>
								Gripper Up-Down
							</p>
						</div>
					</div>
				</v-card>
			</v-col>
		</v-col>
	</v-row>
</template>
<script setup lang="ts">
import wiring from '@/assets/images/RoboticArm/V2/wiring.webp'
import list from '@/assets/images/RoboticArm/V2/list.webp'
import useImageMixin from '@/helpers/imageMixin'
import A from '@/assets/icons/controller/A.svg'
import B from '@/assets/icons/controller/B.svg'
import RightStickX from '@/assets/icons/controller/Right-Stick-X.svg'
import RightStickY from '@/assets/icons/controller/Right-Stick-Y.svg'
import LeftStickX from '@/assets/icons/controller/Left-Stick-X.svg'
import LeftStickY from '@/assets/icons/controller/Left-Stick-Y.svg'
import { Image } from '@/types/image'

defineProps<{
	armImage: Image
}>()

const { openImageInNewTab } = useImageMixin()
</script>
<style scoped lang="scss">
.spacer {
	border-right: 0.125rem solid rgb(var(--v-theme-background));
	margin-left: 0.5rem;
	margin-right: 0.5rem;
}
</style>

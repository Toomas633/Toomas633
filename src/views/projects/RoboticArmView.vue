<template>
	<v-container class="pa-4">
		<h1 class="text-center">Robotic Arm</h1>
		<div class="chips">
			<LicenseChip repo="arduino-robotic-arm" />
		</div>
		<p class="text-center mb-2">
			This is Arduino Uno robotic arm using joystick input. It's my first
			Arduino project that I have coded completely by myself from the beginning.
			The arm needs some spare metal or weight in the base for extra heft so it
			won't tip over so easily. It's using servos with metal gearboxes for extra
			sturdiness and better power and performance. Currently on my setup it can
			lift about 1kg of weights.
		</p>
		<LangGraph repo="arduino-robotic-arm" />
		<v-tabs v-model="tab" align-tabs="center" class="bg-black" grow stacked>
			<v-tab :value="Tabs.V1">
				<v-icon icon="mdi-robot-industrial" /> V1
			</v-tab>
			<v-tab :value="Tabs.V2">
				<v-icon icon="mdi-robot-industrial" /> V2
			</v-tab>
		</v-tabs>
		<v-tabs-window v-model="tab" class="v-tabs-wrapper">
			<v-tabs-window-item :value="Tabs.V1">
				<ArmV1 :arm-image="armImage" />
			</v-tabs-window-item>
			<v-tabs-window-item :value="Tabs.V2">
				<ArmV2 :arm-image="armImage" />
			</v-tabs-window-item>
		</v-tabs-window>
	</v-container>
</template>

<script setup lang="ts">
import { Tabs } from '@/enums/roboticArm'
import ArmV1 from './RoboticArm/ArmV1.vue'
import { ref } from 'vue'
import ArmV2 from './RoboticArm/ArmV2.vue'
import arm from '@/assets/images/RoboticArm/arm.webp'
import { Image } from '@/types/image'
import LicenseChip from '@/components/LicenseChip.vue'
import LangGraph from '@/components/LangGraph.vue'

const tab = ref<Tabs>(Tabs.V1)
const armImage = ref<Image>({
	src: arm,
	alt: 'Arm',
})
</script>
<style scoped>
.v-slide-group {
	border-radius: 4px;
}
</style>

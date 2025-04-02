<template>
	<div :id="id" class="map-container"></div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import L from 'leaflet'
import { forCountry } from 'world-geojson'

const props = defineProps<{
	id: string
}>()

onMounted(() => {
	const map = L.map(props.id).setView([58.61, 25.0136], 7)

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution:
			'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	}).addTo(map)

	L.geoJSON(forCountry('Estonia'), {
		style: {
			color: 'red',
			weight: 1,
			opacity: 0.7,
			fillOpacity: 0,
			className: 'dotted-line',
		},
	}).addTo(map)
})
</script>
<style>
.map-container {
	min-height: 25rem;
	border-radius: 0.25rem;
}

.dotted-line {
	stroke-dasharray: 2, 2;
}
</style>

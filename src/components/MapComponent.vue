<template>
	<div :id="id" class="map-container"></div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { map, tileLayer, geoJSON } from 'leaflet'
import type { GeoJsonObject } from 'geojson'
import estoniaGeoJSON from '@/assets/json/estonia.json'

const props = defineProps<{
	id: string
}>()

onMounted(() => {
	const customMap = map(props.id).setView([58.61, 25.0136], 7)

	tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution:
			'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	}).addTo(customMap)
	geoJSON(estoniaGeoJSON as GeoJsonObject, {
		style: {
			color: 'red',
			weight: 1,
			opacity: 0.7,
			fillOpacity: 0,
			className: 'dotted-line',
		},
	}).addTo(customMap)
})
</script>
<style lang="scss">
.map-container {
	min-height: 25rem;
	border-radius: 0.25rem;
}

.dotted-line {
	stroke-dasharray: 2, 2;
}
</style>

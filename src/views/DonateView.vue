<template>
	<v-container class="px-4 py-1">
		<h1 class="text-center">For those who wish to help</h1>
		<p class="text-center">
			Here are links to support my projects, for any amount you feel like.
			Everything helps as I am a student who is doing projects on the side.
		</p>
		<v-row class="pt-4" justify="center">
			<v-col xl="3" lg="4" md="5" sm="6">
				<ButtonCard
					size="260"
					title="Amazon DE"
					href="https://www.amazon.de/hz/wishlist/ls/2MCH6EAMYMPHL?ref_=wl_share"
					icon="fa:fa-brands fa-amazon" />
			</v-col>
			<v-col xl="3" lg="4" md="5" sm="6">
				<PayPalBtn :is-btn="false" />
			</v-col>
		</v-row>
	</v-container>
</template>

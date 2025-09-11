<template>
	<v-container class="px-4 py-1">
		<h1 class="text-center">Terms of Service</h1>
		<p class="text-center"><b>Effective Date:</b> 12 July 2024</p>
		<div class="pa-4">
			<h2>1. Acceptance of Terms</h2>
			<p>
				By accessing or using
				<LinkComponent href="/" text="Toomas633's Dungeon" />, you agree to be
				bound by these Terms of Service and our Privacy Policy. If you do not
				agree to these terms, please do not use our website.
			</p>
			<h2 class="pt-2">2. Use of the Website</h2>
			<p>
				You agree to use our website in accordance with all applicable laws and
				regulations. You must not use the website for any unlawful purpose or in
				any manner that could damage, disable, or impair the site.
			</p>
			<h2 class="pt-2">3. Intellectual Property</h2>
			<p>
				All content on our website, including text, graphics, logos, and images,
				is the property of
				<LinkComponent href="/" text="Toomas633's Dungeon" /> or its licensors
				and is protected by copyright, trademark, and other intellectual
				property laws.
			</p>
			<h2 class="pt-2">4. Limitation of Liability</h2>
			<p>
				To the fullest extent permitted by law,
				<LinkComponent href="/" text="Toomas633's Dungeon" /> is not liable for
				any direct, indirect, incidental, or consequential damages arising from
				your use of the website or any content therein.
			</p>
			<h2 class="pt-2">5. Third-Party Links</h2>
			<p>
				Our website may contain links to third-party sites. We are not
				responsible for the content or practices of these external sites.
			</p>
			<h2 class="pt-2">6. Changes to Terms</h2>
			<p>
				We may update these Terms of Service from time to time. The revised
				terms will be posted on our website, and your continued use of the site
				constitutes acceptance of the new terms.
			</p>
			<h2 class="pt-2">7. Governing Law</h2>
			<p>
				These Terms of Service are governed by the laws of European Union,
				without regard to its conflict of laws principles.
			</p>
			<h2 class="pt-2">8. Contact Us</h2>
			<p>
				If you have any questions about these Terms of Service, please contact
				us at: <br />
				<LinkComponent
					href="mailto:info@toomas633.com"
					text="info@toomas633.com" />
			</p>
		</div>
	</v-container>
</template>
<script setup lang="ts">
import LinkComponent from '@/components/LinkComponent.vue'
</script>

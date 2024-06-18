<template>
	<v-card class="pa-4 bg-black elevation-0">
		<h1>Comments</h1>
		<div
			v-for="comment in comments"
			:key="comment.id"
			class="bg-secondary pa-2 mb-4 rounded d-flex">
			<div style="width: 95px">
				<strong>{{ comment.author }}:</strong>
				<p style="font-size: 80%">{{ formattedDate(comment.timestamp) }}</p>
			</div>
			<p class="comment ml-2">
				{{ comment.text }}
			</p>
		</div>
		<v-form class="add-comment d-block d-md-flex" v-model="valid">
			<v-text-field
				:rules="textRules"
				v-model="author"
				placeholder="Displayname"
				class="pa-2"
				counter="10"
				required
				prepend-inner-icon="mdi-account-circle-outline"
				max-width="200" />
			<v-text-field
				:rules="textRules"
				v-model="newComment"
				placeholder="Add a comment"
				prepend-inner-icon="mdi-format-text"
				counter="250"
				class="pa-2"
				required />
			<v-btn class="ml-4 ma-2" :disabled="!valid" @click="addComment" icon
				><v-icon icon="mdi-send" class="mr-1"
			/></v-btn>
		</v-form>
	</v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { format, isToday } from 'date-fns'

export default defineComponent({
	name: 'CommentsComponent',
	data: () => ({
		valid: false,
		comments: [
			{
				id: 1,
				author: 'User1',
				text: 'This is a great article!',
				timestamp: new Date(),
			},
			{
				id: 2,
				author: 'User2',
				text: 'Thanks for the information.',
				timestamp: new Date(),
			},
		],
		newComment: '',
		author: '',
	}),
	created() {
		this.fetchComments()
	},
	computed: {
		textRules() {
			return [
				(value: string) => !!value || 'Required.',
				(value: string) => (value && value.length >= 3) || 'Min 3 characters',
				(value: string) =>
					(value && value.length < 250) || 'Max 250 characters',
			]
		},
	},
	methods: {
		async fetchComments() {
			try {
				const response = await fetch('/api/comments', {
					method: 'GET',
				})

				if (!response.ok) {
					alert('Error fetching comments')
				}

				this.comments = await response.json()
			} catch (error) {
				console.error('Error fetching comments:', error)
			}
		},
		async addComment() {
			if (!this.isValidComment(this.newComment)) {
				alert('Invalid comment. Please make sure it is not empty or spam.')
				return
			}

			try {
				const response = await fetch('/api/comments', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						author: this.author,
						text: this.newComment,
						timestamp: new Date(),
					}),
				})

				if (!response.ok) {
					alert('Error adding comment')
				}

				const data = await response.json()
				this.comments.push(data)
				this.newComment = ''
			} catch (error) {
				console.error('Error adding comment:', error)
			}
		},
		isValidComment(comment: string) {
			if (!comment.trim()) {
				return false
			}

			if (comment.length < 5) {
				return false
			}

			if (this.detectSpam(comment)) {
				return false
			}

			return true
		},
		detectSpam(comment: string) {
			const spamKeywords = ['spam', 'advertisement']
			const repeatedChars = /([a-zA-Z])\1{3,}/

			if (spamKeywords.some((keyword) => comment.includes(keyword))) {
				return true
			}

			if (repeatedChars.test(comment)) {
				return true
			}

			return false
		},
		formattedDate(date: Date) {
			if (isToday(date)) {
				return `Today: ${format(date, 'HH:MM')}`
			} else {
				return format(date, 'dd.MM.yyyy')
			}
		},
	},
})
</script>

<style>
.comment {
	word-wrap: break-word;
	white-space: normal;
}
</style>

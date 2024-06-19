<template>
	<v-row class="pa-4 d-block d-sm-flex" justify="center">
		<v-col>
			<h1 class="text-center">File Organizer</h1>
			<p class="text-center">
				General use file organizer for removing all but the wanted file
				extensions, moving files out of subfolders and deleting empty folders.
				Default file is set up for using with Plex for cleaning up torrent
				downloads (movies and tv shows), but extensions can simply be changed in
				the python script. PS! The code needs a command line argument for the
				working directory.
			</p>
			<p class="text-center">
				<strong>
					I AM NOT RESPONSIBLE FOR ANY DATA LOSS UPON WRONG CONFIGURATION OR
					CODE CHANGES!
				</strong>
			</p>
		</v-col>
		<v-col lg="2" md="3" sm="4">
			<ButtonCard
				size="100"
				text="GitHub"
				href="https://github.com/Toomas633/File-organizer/releases"
				icon="mdi-github" />
		</v-col>
	</v-row>
	<v-row class="pa-4 pt-0 d-block d-sm-flex" justify="center">
		<v-col>
			<v-card class="bg-black ml-8 mr-8 pa-4">
				<h1 class="text-center">Organizer features</h1>
				<ul class="ml-4">
					<li>
						Log file in the same dir that gets organized called organizer.log
						(time stamp and operation) (editable in code)
					</li>
					<li>
						Location to the directory containing desired folders for organizing
						asked as command line argument
					</li>
					<li>Removes unwanted files</li>
					<li>Moves certain files out of subfolders</li>
					<li>Deletes empty folders</li>
					<li>
						Default config for torrenting uses the .!qB extention for not
						deleting mid download files (check qbittorrent settings for enabling
						it)
					</li>
				</ul>
			</v-card>
		</v-col>
		<v-col>
			<v-card class="bg-black ml-8 mr-8 pa-4">
				<h1 class="text-center">Running</h1>
				<ul class="ml-4">
					<li>
						Download with
						<code>
							<mark class="bg-secondary">
								sudo wget
								https://raw.githubusercontent.com/Toomas633/File-organizer/main/organizer.py</mark
							></code
						>
						and place it into the folder you want it to search through (see
						example below)
					</li>
					<li>
						Run it in the backround while being in the same folder with
						<code
							><mark class="bg-secondary"
								>nohup python3 organizer.py &lt;path_to_folder&gt;</mark
							></code
						>
					</li>
					<li>
						Or run it always after reboot with cron job by adding
						<code
							><mark class="bg-secondary"
								>0 * * * * python3 /&lt;path_to_script&gt;/organizer.py
								&lt;path_to_folder&gt;</mark
							></code
						>&nbsp;using&nbsp;<code
							><mark class="bg-secondary">sudo crontab -e</mark></code
						>&nbsp;and adding it to the end of the file
					</li>
				</ul>
			</v-card>
		</v-col>
	</v-row>
	<v-row class="pa-4 pt-0 d-block d-sm-flex" justify="center">
		<v-col>
			<v-card class="bg-black ml-8 mr-8 pa-4"
				><h1 class="text-center pb-2">Takes in</h1>
				<v-treeview
					:items="inputItems"
					item-key="name"
					class="bg-secondary"
					expand-icon="mdi-folder"
					collapse-icon="mdi-folder-open"
					density="compact"
					rounded
					activatable>
					<template v-slot:prepend="{ item }">
						<v-icon>
							{{ files[item.file] }}
						</v-icon>
					</template>
				</v-treeview>
			</v-card></v-col
		>
		<v-col
			><v-card class="bg-black ml-8 mr-8 pa-4"
				><h1 class="text-center pb-2">Returns</h1>
				<v-treeview
					:items="outputItems"
					item-key="name"
					class="bg-secondary"
					expand-icon="mdi-folder"
					collapse-icon="mdi-folder-open"
					density="compact"
					rounded
					activatable>
					<template v-slot:prepend="{ item }">
						<v-icon>
							{{ files[item.file] }}
						</v-icon>
					</template>
				</v-treeview>
			</v-card>
		</v-col>
	</v-row>
</template>

<script lang="ts">
import ButtonCard from '@/components/ButtonCard.vue'
import { defineComponent } from 'vue'

interface Files {
	[key: string]: string
}

export default defineComponent({
	name: 'FileOrganizerView',
	components: { ButtonCard },
	data: () => ({
		files: {
			txt: 'mdi-file-document-outline',
			folder: 'mdi-folder',
			mkv: 'mdi-movie-outline',
		} as Files,
		inputItems: [
			{
				title: 'your files',
				file: 'folder',
			},
			{
				title: 'movies',
				file: 'folder',
				children: [
					{
						title: 'movie folder 1',
						file: 'folder',
						children: [
							{
								title: 'movie.mkv',
								file: 'mkv',
							},
							{
								title: 'sub.srt',
								file: 'txt',
							},
							{
								title: 'other files',
								file: 'txt',
							},
						],
					},
					{
						title: 'movie folder 2',
						file: 'folder',
						children: [
							{
								title: 'movie.mp4',
								file: 'mkv',
							},
							{
								title: 'subs',
								children: [
									{
										title: 'sub.srt',
										file: 'txt',
									},
								],
							},
							{
								title: 'other files',
								file: 'txt',
							},
						],
					},
				],
			},
			{
				title: 'tv',
				file: 'folder',
				children: [
					{
						title: 'show folder 1',
						file: 'folder',
						children: [
							{
								title: 'show.mkv',
								file: 'mkv',
							},
							{
								title: 'subs',
								file: 'folder',
								children: [
									{
										title: 'sub.srt',
										file: 'txt',
									},
								],
							},
							{
								title: 'other files',
								file: 'txt',
							},
						],
					},
					{
						title: 'show folder 2',
						file: 'folder',
						children: [
							{
								title: 'episode or season folder',
								file: 'folder',
								children: [
									{
										title: 'show.mp4',
										file: 'mkv',
									},
									{
										title: 'subs',
										file: 'folder',
										children: [
											{
												title: 'sub.srt',
												file: 'txt',
											},
										],
									},
									{
										title: 'other files',
										file: 'txt',
									},
								],
							},
						],
					},
				],
			},
			{
				title: 'your files.txt',
				file: 'txt',
			},
		],
		outputItems: [
			{
				title: 'your folders',
				file: 'folder',
			},
			{
				title: 'movies',
				file: 'folder',
				children: [
					{
						title: 'movie folder 1',
						file: 'folder',
						children: [
							{
								title: 'movie.mkv',
								file: 'mkv',
							},
							{
								title: 'sub.srt',
								file: 'txt',
							},
						],
					},
					{
						title: 'movie folder 2',
						file: 'folder',
						children: [
							{
								title: 'movie.mp4',
								file: 'mkv',
							},
							{
								title: 'sub.srt',
								file: 'txt',
							},
						],
					},
				],
			},
			{
				title: 'tv',
				file: 'folder',
				children: [
					{
						title: 'show folder 1',
						file: 'folder',
						children: [
							{
								title: 'show.mkv',
								file: 'mkv',
							},
							{
								title: 'sub.srt',
								file: 'txt',
							},
						],
					},
					{
						title: 'show folder 2',
						file: 'folder',
						children: [
							{
								title: 'episode or season folder',
								file: 'folder',
								children: [
									{
										title: 'show.mp4',
										file: 'mkv',
									},
									{
										title: 'sub.srt',
										file: 'txt',
									},
								],
							},
						],
					},
				],
			},
			{
				title: 'your files.txt',
				file: 'txt',
			},
		],
	}),
})
</script>

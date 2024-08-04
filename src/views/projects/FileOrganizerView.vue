<template>
	<v-container class="pa-4">
		<v-row class="pr-4 pl-4 mt-0 d-block d-sm-flex" justify="center">
			<v-col>
				<h1 class="text-center">File Organizer</h1>
				<p class="text-center">
					General use file organizer for removing all but the wanted file
					extensions, moving files out of subfolders and deleting empty folders.
					Default file is set up for using with Plex for cleaning up torrent
					downloads (movies and tv shows), but extensions can simply be changed
					in the python script. PS! The code needs a command line argument for
					the working directory.
				</p>
				<p class="text-center">
					<strong>
						I AM NOT RESPONSIBLE FOR ANY DATA LOSS UPON WRONG CONFIGURATION OR
						CODE CHANGES!
					</strong>
				</p>
			</v-col>
			<v-col lg="3" md="4" sm="5">
				<ButtonCard
					size="100"
					text="GitHub"
					href="https://github.com/Toomas633/File-organizer"
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
							Location to the directory containing desired folders for
							organizing asked as command line argument
						</li>
						<li>Removes unwanted files</li>
						<li>Moves certain files out of subfolders</li>
						<li>Deletes empty folders</li>
						<li>
							Default config for torrenting uses the .!qB extention for not
							deleting mid download files (check qbittorrent settings for
							enabling it)
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
								<mark>
									sudo wget
									https://raw.githubusercontent.com/Toomas633/File-organizer/main/organizer.py
								</mark>
							</code>
							and place it into the folder you want it to search through (see
							example below)
						</li>
						<li>
							Run it in the backround while being in the same folder with
							<code>
								<mark>nohup python3 organizer.py &lt;path_to_folder&gt; </mark>
							</code>
						</li>
						<li>
							Or run it always after reboot with cron job by adding
							<code>
								<mark>
									0 * * * * python3 /&lt;path_to_script&gt;/organizer.py
									&lt;path_to_folder&gt;
								</mark>
							</code>
							&nbsp;using&nbsp;
							<code> <mark> sudo crontab -e </mark> </code> &nbsp;and adding it
							to the end of the file
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
						<template #prepend="{ item }">
							<v-icon>
								{{ fileIcons[item.file as FileType] }}
							</v-icon>
						</template>
					</v-treeview>
				</v-card>
			</v-col>
			<v-col>
				<v-card class="bg-black ml-8 mr-8 pa-4">
					<h1 class="text-center pb-2">Returns</h1>
					<v-treeview
						:items="outputItems"
						item-key="name"
						class="bg-secondary"
						expand-icon="mdi-folder"
						collapse-icon="mdi-folder-open"
						density="compact"
						rounded
						activatable>
						<template #prepend="{ item }">
							<v-icon>
								{{ fileIcons[item.file as FileType] }}
							</v-icon>
						</template>
					</v-treeview>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup lang="ts">
import ButtonCard from '@/components/ButtonCard.vue'
import { inputItems, outputItems, fileIcons } from '@/constants/fileOrganizer'
import { FileType } from '@/enums/fileType'
</script>

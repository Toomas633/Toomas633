<template>
	<v-container class="px-4 py-1">
		<v-row class="pa-4 d-block d-sm-flex" justify="center">
			<v-col class="align-content-space-around">
				<h1 class="text-center d-flex justify-center align-items-center">
					Plex Organizer
				</h1>
				<StatsAndChips repo="plex-organizer" />
				<p class="text-center">
					Plex Organizer is a Python-based utility designed to help manage and
					organize media files for Plex Media Server. It automates tasks such as
					renaming files, deleting unwanted files, moving directories, and
					cleaning up empty folders.
				</p>
				<p class="text-center">
					<b>
						<i>
							Any data loss is not on me, but you can still report any bugs or
							faults you find in issues
						</i>
					</b>
				</p>
			</v-col>
			<v-col class="align-content-space-around" lg="2" md="3" sm="4" xl="1">
				<ButtonCard
					size="100"
					text="GitHub"
					href="https://github.com/Toomas633/Plex-Organizer"
					icon="mdi-github" />
			</v-col>
		</v-row>
		<v-row class="pa-4 pt-0 d-block d-sm-flex" justify="center">
			<v-col>
				<v-card class="bg-black pa-4 h-100">
					<h1 class="text-center">Features</h1>
					<ul class="ml-4">
						<li>
							<b>Torrent Removal:</b>
							Removes torrents from the client after processing.
						</li>
						<li>
							<b>File Renaming:</b>
							Automatically renames media files based on predefined rules for TV
							shows and movies.
						</li>
						<li>
							<b>Unwanted File Deletion:</b>
							Removes unnecessary files from specified directories.
						</li>
						<li>
							<b>Directory Management:</b>
							Moves directories to their appropriate locations and deletes empty
							directories.
						</li>
						<li>
							<b>Customizable Directories:</b>
							Supports separate directories for TV shows and movies.
						</li>
						<li>
							<b>Handle Plex:</b>
							Handles plex directories and optimized versions.
						</li>
						<li>
							<b>Config File:</b>
							Ini file for common configuration options that can be set,
							disabled or enabled (beware, some settings might not do anything
							if already run and info removed from file names, for example
							turning off quality inclusion and then enabling it)
						</li>
					</ul>
				</v-card>
			</v-col>
			<v-col>
				<v-card class="bg-black pa-4 h-100">
					<h1 class="text-center">Installation</h1>
					<ul class="ml-4">
						<li>
							Python 3.x and dependencies listed in
							<InlineCode code="requirements.txt" />
						</li>
						<li>
							Clone the repository:
							<CodeBlock
								code="git clone https://github.com/Toomas633/Plex-Organizer.git
								cd Plex-Organizer" />
						</li>
						<li>
							Set up a virtual environment:
							<CodeBlock
								code="python -m venv venv
								source venv/bin/activate" />
						</li>
						<li>
							Install dependencies:
							<CodeBlock code="pip install -r requirements.txt" />
						</li>
					</ul>
				</v-card>
			</v-col>
		</v-row>
		<v-row class="pa-4 pt-0 d-block d-sm-flex" justify="center">
			<v-col>
				<v-card class="bg-black pa-4 h-100">
					<h1 class="text-center">Update</h1>
					<ul class="ml-4">
						<li>
							To update to the latest version just run
							<InlineCode code="./update.sh" />
						</li>
						<li>
							or manually
							<CodeBlock
								code="git fetch --all
git reset --hard origin/$(git rev-parse --abbrev-ref HEAD)
git clean -fd" />
						</li>
					</ul>
				</v-card>
			</v-col>
			<v-col>
				<v-card class="bg-black pa-4 h-100">
					<h1 class="text-center">Configuration</h1>
					<ul class="ml-4">
						<li>
							All user configurations are handled in the
							<InlineCode code="config.ini" /> file.
							<b>
								<i>
									Make sure the host value under qBittorrent is correct.
									Otherwise it will fail to delete the completed torrent if
									desired.
								</i>
							</b>
						</li>
						<li>
							Start directory should have either...
							<ul class="ml-4">
								<li>
									The folders for movies and tv as shown in the example. Show
									names are taken from the parent folder inside tv folder and
									only episode, season and quality are taken from the file
									names.
								</li>
								<li>
									Just the given torrent save path folder (%D option in
									qBittorrent)
								</li>
							</ul>
						</li>
					</ul>
				</v-card>
			</v-col>
		</v-row>
		<v-card class="bg-black ma-4 pa-4">
			<h1 class="text-center">Usage</h1>
			<v-row class="d-block d-md-flex" justify="center">
				<v-col>
					<ul class="ml-4">
						<h2>Manual running</h2>
						To run manually just go to the Plex-Organizer cloned or downloaded
						folder and run:
						<InlineCode code="./run.sh <start_directory>" />
						<v-divider
							thickness="2"
							class="border-opacity-100 mt-6 mb-6"
							color="primary" />
						<h2>Automated running</h2>
						Add this command to qBittorrent options under "Run external program
						on torrent finished":
						<br />
						<InlineCode
							code="/bin/bash <path_to_script>/run.sh <start_directory> <torrent_hash>" />
						<br />
						<b>Arguments:</b>
						<ul class="ml-4">
							<li>
								&lt;start_directory&gt;: The base directory containing the tv
								and movies subdirectories. Either the full path to the folder
								containing movies and tv folders or <b>%D</b> to organize only
								the specific completed torrent folder.
							</li>
							<li>
								&lt;torrent_hash&gt; <i>(Optional)</i>: The hash of the torrent
								to be removed (omit for testing purposes or to ignore torrent
								automatic removal). Argument %I in qBittorrent ui.
							</li>
						</ul>
					</ul>
					<v-divider
						thickness="2"
						class="border-opacity-100 mt-6 mb-6"
						color="primary" />
					<h2>Configuration options</h2>
					Config.ini is updated and created on run automatically if missing or
					if updated options added. Will not clear user changes.
					<CodeBlock :code="exampleConfig" />
				</v-col>
				<v-col md="6" lg="5">
					<v-img
						class="mt-2"
						rounded
						style="cursor: zoom-in"
						:src="Example"
						alt="qBittorrent example configuration"
						position="center"
						@click="openImageInNewTab(Example)" />
				</v-col>
			</v-row>
		</v-card>
		<v-row class="pa-4 pt-0 d-block d-sm-flex" justify="center">
			<v-col>
				<v-card class="bg-black pa-4">
					<h1 class="text-center pb-2">Takes in</h1>
					<v-treeview
						:items="inputItems"
						item-key="name"
						class="bg-secondary"
						expand-icon="mdi-folder"
						collapse-icon="mdi-folder-open"
						density="compact"
						fluid
						open-on-click
						rounded>
						<template #prepend="{ item }">
							<v-icon v-if="!(item.file === 'folder' && item.children?.length)">
								{{ fileIcons[item.file as FileType] }}
							</v-icon>
						</template>
					</v-treeview>
				</v-card>
			</v-col>
			<v-col>
				<v-card class="bg-black pa-4">
					<h1 class="text-center pb-2">Returns</h1>
					<v-treeview
						:items="outputItems"
						item-key="name"
						class="bg-secondary"
						expand-icon="mdi-folder"
						collapse-icon="mdi-folder-open"
						density="compact"
						fluid
						open-on-click
						rounded>
						<template #prepend="{ item }">
							<v-icon v-if="!(item.file === 'folder' && item.children?.length)">
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
import { inputItems, outputItems, fileIcons } from '@/constants/plexOrganizer'
import { FileType } from '@/enums/fileType'
import Example from '@/assets/images/PlexOrganizer/example.png'
import useImageMixin from '@/helpers/imageMixin'

const { openImageInNewTab } = useImageMixin()

const exampleConfig = `[qBittorrent]
host = http://localhost:8081 #host address and port of qBittorrent webui api

[Settings]
delete_duplicates = true #should duplicate files be deleted or kept
include_quality = false #should quality be included in file names
capitalize = true #should file names be capitalized

[Logging]
enable_logging = true #if logging should be enabled
log_file = qbittorrent.log #log file name
clear_log = false #if log should be cleared on start
timestamped_log_files = false #if log files should be timestamped and not overwritten on each run
`
</script>

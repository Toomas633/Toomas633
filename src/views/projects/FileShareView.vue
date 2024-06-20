<template>
	<v-row class="pa-4 d-block d-sm-flex" justify="center">
		<v-col>
			<h1 class="text-center">FileShare</h1>
			<p class="text-center">
				Easy file sharing website featuring (direct) link generation and delete
				timer.
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
				href="https://github.com/Toomas633/FileShare"
				icon="mdi-github" />
		</v-col>
		<v-col lg="2" md="3" sm="4">
			<ButtonCard
				size="100"
				text="Docker Hub"
				href="https://hub.docker.com/r/toomas633/fileshare"
				icon="mdi-docker"
				icon-color="blue" />
		</v-col>
	</v-row>
	<v-row class="pa-4 pt-0 d-block d-sm-flex" justify="center">
		<v-col>
			<v-card class="bg-black ml-8 mr-8 pa-4">
				<h1 class="text-center">Features</h1>
				<ul class="ml-4">
					<li>Single file upload</li>
					<li>Random name toggle</li>
					<li>Status popups</li>
					<li>File preview icons</li>
					<li>Delete time slider (1-12h, 24h, never)</li>
					<li>Easy link copy</li>
					<li>
						Admin page
						<ul class="ml-4">
							<li>Display timezone</li>
							<li>Delete and download buttons</li>
							<li>Delete time</li>
							<li>Hyperlink to download page</li>
							<li>Custom link address</li>
						</ul>
					</li>
					<li>
						Download page
						<ul class="ml-4">
							<li>Download, delete buttons</li>
							<li>Delete time</li>
						</ul>
					</li>
					<li>Automatic file deletion</li>
					<li>Responsive css for all screen sizes</li>
				</ul>
			</v-card>
		</v-col>
		<v-col>
			<v-card class="bg-black ml-8 mr-8 pa-4">
				<h1 class="text-center">Requirements</h1>
				<ul class="ml-4">
					<li>
						Make sure you have PHP installed on your local machine. You can
						check this by running the command
						<code> <mark> php -v </mark> </code>
						in your terminal. If you don't have PHP installed, you can download
						it from the <a href="https://www.php.net/">official PHP website</a>
					</li>
					<li>
						Install Python on your Windows machine if it is not already
						installed. You can download the latest version of Python from the
						official website at
						<a href="https://www.python.org/downloads/"
							>https://www.python.org/downloads/</a
						>
					</li>
					<li>
						Change the values of
						<code> <mark> post_max_size </mark> </code>
						and
						<code> <mark> upload_max_filesize </mark> </code>
						in <code> php.ini </code> to a desired size amount, or bigger files
						can't be uploaded (defaults are 8M and 2M in the file, so the
						uploaded file can only be of size 2MB and less). Not needed on
						docker image
					</li>
					<li>
						Check that you have php-sqlite3 and php-curl installed and enabled.
						<ul class="ml-4">
							<li>
								On debian run
								<code>
									<mark> sudo apt install php-sqlite3 php-curl </mark>
								</code>
								, windows should have the .dll files included in the php folder
							</li>
							<li>
								Edit <code> php.ini </code> and uncomment
								<code> <mark> extension=pdo_sqlite </mark> </code> ,
								<code> <mark> extension=sqlite3 </mark> </code> ,
								<code> <mark> extension=curl </mark> </code>
								and assign the php installation directory path to
								<code> <mark> sqlite3.extension_dir = </mark> </code> , for
								example
								<code> <mark> sqlite3.extension_dir = C:\php </mark> </code>
								on windows if you put php on C drive root
							</li>
						</ul>
					</li>
					<li>
						Check that you have pytz and datetime install for python by running
						<code> <mark> pip install pytz datetime </mark> </code>
					</li>
				</ul>
			</v-card>
		</v-col>
	</v-row>
	<v-container>
		<h1 class="text-center pb-2">Running instructions</h1>
		<ul class="ml-4">
			<li>Install PHP and Python (and add to system path on windows)</li>
			<li>
				Clone the GitHub repository to your local machine using the command
				<code>
					<mark class="bg-grey">
						git clone https://github.com/Toomas633/FileShare.git
					</mark>
				</code>
				or download the zip from releases and unpack it to desired destination
			</li>
			<li>
				Start a local server to access the website in your browser. You can do
				this by running the command
				<code> <mark class="bg-grey"> php -S localhost:8000 </mark> </code>
				(or a different port number) in your terminal from the project directory
			</li>
			<li>
				For timed file delete also run
				<code> <mark class="bg-grey"> cleanup.py </mark> </code>
				on the backround
			</li>
			<li>
				Access the website in your browser. Once the server is running, you can
				access the website by navigating to
				<a href="http://localhost:8000"> http://localhost:8000 </a> (or the
				appropriate URL) in your web browser
			</li>
		</ul>
	</v-container>
	<v-row class="pa-4 d-block d-sm-flex" justify="center">
		<v-col>
			<v-card class="bg-black ml-8 mr-8 pa-4">
				<h1 class="text-center pb-2">Debian service</h1>
				<ul class="ml-4">
					<li>
						Create a new systemd service file for your PHP website by running
						the command
						<code>
							<mark> sudo nano /etc/systemd/system/FileShare.service </mark>
						</code>
					</li>
					<li>
						Download systemd service to
						<code> <mark> /etc/systemd/system/ </mark> </code>
						by running
						<code>
							<mark>
								sudo wget
								https://raw.githubusercontent.com/Toomas633/FileShare/main/examples/FileShare.service
							</mark>
						</code>
						in
						<code> <mark> cd /etc/systemd/system/ </mark> </code>
					</li>
					<li>
						Make sure to replace "/path/to/start.sh" with the path to the
						FileShare website folder that contains the start.sh file on your
						server
					</li>
					<li>
						Reload the systemd daemon to recognize the new service by running
						the command
						<code> <mark> sudo systemctl daemon-reload </mark> </code>
					</li>
					<li>
						Start the new service by running the command
						<code> <mark> sudo systemctl start FileShare.service </mark> </code>
					</li>
					<li>
						Verify that the service is running properly by checking the status
						with the command
						<code>
							<mark> sudo systemctl status FileShare.service </mark>
						</code>
					</li>
					<li>
						If the service is running correctly, enable it to start at boot time
						by running the command
						<code>
							<mark> sudo systemctl enable FileShare.service </mark>
						</code>
					</li>
				</ul>
			</v-card>
		</v-col>
		<v-col>
			<v-card class="bg-black ml-8 mr-8 pa-4">
				<h1 class="text-center pb-2">Windows</h1>
				<ul class="ml-4">
					<li>
						Enable running the website in the background (or just double click
						to run once in a dialog box)
						<ul class="ml-4">
							<li>
								Open the Task Scheduler by pressing the Windows key + R, typing
								"taskschd.msc" and hitting Enter.
							</li>
							<li>
								Click on the "Create Task" option in the Actions pane on the
								right-hand side of the window.
							</li>
							<li>
								In the "General" tab of the "Create Task" dialog box, enter a
								name for the task in the "Name" field.
							</li>
							<li>
								In the "Security options" section, select the user account you
								want to run the task under.
							</li>
							<li>Click on the "Triggers" tab and click "New".</li>
							<li>
								In the "New Trigger" dialog box, select "At startup" from the
								"Begin the task" drop-down menu.
							</li>
							<li>Click "OK" to save the trigger.</li>
							<li>Click on the "Actions" tab and click "New".</li>
							<li>
								In the "New Action" dialog box, select "Start a program" from
								the "Action" drop-down menu.
							</li>
							<li>
								In the "Program/script" field, enter the full path to the
								<code> <mark> start.bat </mark> </code>
								file.
							</li>
							<li>Click "OK" twice to save the action and task.</li>
						</ul>
					</li>
				</ul>
			</v-card>
		</v-col>
	</v-row>
	<v-row class="pa-4 pt-0 pb-8 d-block d-sm-flex" justify="center">
		<v-col>
			<v-card class="bg-black ml-8 mr-8 pa-4">
				<h1 class="text-center pb-2">Docker</h1>
				<p style="padding-top: 0; padding-bottom: 0">
					Create a
					<code> <mark> docker-compose.yml </mark> </code> , copy the contents
					under here and run it with
					<code> <mark> docker-compose up -d </mark> </code>
					(or download the .yml from
					<code>
						<mark>
							https://raw.githubusercontent.com/Toomas633/FileShare/main/examples/docker-compose.yml
						</mark>
					</code>
					and edit it)
				</p>
				<pre class="mt-4 pa-2 rounded">
version: '3.9'
services:
  fileshare:
    image: ghcr.io/toomas633/fileshare:latest #or version number instead of latest
	container_name: fileshare #container name, can be set different
	ports:
	  - "8080:80" #map port 8080 from host to 80 on container
	environment:
      - TZ=Europe/London #default timezone for the container and on first database creation
	  - MAX_FILESIZE=5M #allowed uploaded file size
	  - PASSWORD=Password.123 #password for settings page login, set your own or change it on the page
	volumes:
	  - /host/path1:/var/www/html/uploads/ # volume or host dir to a folder where uploads will be held
	  - /host/path2:/var/www/html/db/ # volume or host dir to a folder where the database will be held 
	restart: always</pre
				>
			</v-card>
		</v-col>
	</v-row>
</template>

<script lang="ts">
import ButtonCard from '@/components/ButtonCard.vue'
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'FileShareView',
	components: { ButtonCard },
})
</script>

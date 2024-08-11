<template>
	<v-container class="pa-4">
		<v-row class="pa-4 d-block d-sm-flex" justify="center">
			<v-col class="align-content-space-around">
				<h1 class="text-center">About me</h1>
				<p class="text-center">
					I'm a hobbyist who loves robots, space, video games, tech, cars and 3D
					printing. Currently going to
					<a href="https://taltech.ee/en/" target="_blank" rel="noopener">
						TalTech
					</a>
					university learning cyber-physical systems and working as a full time
					dev (Vue, Angular).<br />From early in my life, I was salvaging and
					repairing old electronics and worked with LEGO Mindstorms and
					Technics. I recently picked up Arduinos and have started making
					projects of my own. All my projects are licenced under
					<a
						href="https://www.tldrlegal.com/license/gnu-general-public-license-v3-gpl-3"
						target="_blank"
						rel="noopener">
						GPL-3
					</a>
					or
					<a
						href="https://choosealicense.com/licenses/cern-ohl-s-2.0/#"
						target="_blank"
						rel="noopener">
						CERN OHL v2
					</a>
					and are free to be used by anyone.
				</p>
			</v-col>
			<v-col
				class="align-content-space-around pa-0"
				sm="3"
				md="5"
				lg="4"
				xl="3">
				<v-row class="pa-0 ma-0" justify="center">
					<v-col>
						<ButtonCard
							size="100"
							text="GitHub"
							href="https://github.com/Toomas633/"
							icon="mdi-github" />
					</v-col>
					<v-col>
						<ButtonCard
							size="100"
							text="Thingiverse"
							href="https://www.thingiverse.com/toomas633/designs"
							icon="mdi-rocket-launch"
							icon-color="blue" />
					</v-col>
				</v-row>
			</v-col>
		</v-row>
		<v-row class="pa-4 d-block d-sm-flex">
			<v-col>
				<v-card class="bg-black pa-4 h-100">
					<h1 class="text-center">Programming</h1>
					<div class="d-sm-flex justify-center text-center">
						<LinkImage href="https://www.cprogramming.com/" :src="C" alt="C" />
						<LinkImage href="https://www.java.com/" :src="Java" alt="Java" />
						<LinkImage
							href="https://www.python.org/"
							:src="Python"
							alt="Python" />
						<LinkImage href="https://www.php.net/" :src="PHP" alt="PHP" />
						<LinkImage
							href="https://www.javascript.com/"
							:src="JS"
							alt="JavaScript" />
						<LinkImage
							href="https://www.typescriptlang.org/"
							:src="TS"
							alt="TypeScript" />
					</div>
				</v-card>
			</v-col>
			<v-col>
				<v-card class="bg-black pa-4 h-100">
					<h1 class="text-center">Backend</h1>
					<div class="d-sm-flex justify-center text-center">
						<LinkImage href="https://www.nginx.com/" :src="Nginx" alt="Nginx" />
						<LinkImage href="https://spring.io/" :src="Spring" alt="Spring" />
						<LinkImage href="https://nodejs.org/" :src="NodeJS" alt="Node.js" />
					</div>
				</v-card>
			</v-col>
			<v-col>
				<v-card class="bg-black pa-4 h-100">
					<h1 class="text-center">Frontend</h1>
					<div class="d-sm-flex justify-center text-center">
						<LinkImage href="https://vuejs.org/" :src="Vue" alt="Vue" />
						<LinkImage
							href="https://vuetifyjs.com/"
							:src="Vuetify"
							alt="Vuetify" />
						<LinkImage
							href="https://angular.io/"
							:src="Angular"
							alt="Angular" />
						<LinkImage href="https://sass-lang.com/" :src="Sass" alt="Sass" />
						<LinkImage
							href="https://wordpress.com/"
							:src="Wordpress"
							alt="Wordpress" />
					</div>
				</v-card>
			</v-col>
			<v-col>
				<v-card class="bg-black pa-4 h-100">
					<h1 class="text-center">Devops</h1>
					<div class="d-sm-flex justify-center text-center">
						<LinkImage
							href="https://www.gnu.org/software/bash/"
							:src="Bash"
							alt="Bash" />
						<LinkImage
							href="https://www.docker.com/"
							:src="Docker"
							alt="Docker" />
						<LinkImage href="https://k3s.io/" :src="K3S" alt="K3S" />
					</div>
				</v-card>
			</v-col>
			<v-col>
				<v-card class="bg-black pa-4 h-100">
					<h1 class="text-center">Visualization</h1>
					<div class="d-sm-flex justify-center text-center">
						<LinkImage
							href="https://grafana.com/"
							:src="Grafana"
							alt="Grafana" />
					</div>
				</v-card>
			</v-col>
			<v-col>
				<v-card class="bg-black pa-4 h-100">
					<h1 class="text-center">Databases</h1>
					<div class="d-sm-flex justify-center text-center">
						<LinkImage href="https://www.mysql.com/" :src="MySQL" alt="MySQL" />
						<LinkImage
							href="https://sqlite.org/index.html"
							:src="SQLite"
							alt="SQLite3" />
						<LinkImage
							href="https://www.postgresql.org/"
							:src="PostgreSQL"
							alt="PostgreSQL" />
						<LinkImage
							href="https://www.oracle.com/database/"
							:src="Oracle"
							alt="Oracle" />
					</div>
				</v-card>
			</v-col>
			<v-col>
				<v-card class="bg-black pa-4 h-100">
					<h1 class="text-center">Cloud</h1>
					<div class="d-sm-flex justify-center text-center">
						<LinkImage href="https://aws.amazon.com/" :src="AWS" alt="AWS" />
						<LinkImage
							href="https://www.oracle.com/cloud/"
							:src="OracleCloud"
							alt="Oracle Cloud" />
					</div>
				</v-card>
			</v-col>
			<v-col>
				<v-card class="bg-black pa-4 h-100">
					<h1 class="text-center">3D</h1>
					<div class="d-sm-flex justify-center text-center">
						<LinkImage
							href="https://www.blender.org/"
							:src="Blender"
							alt="Blender" />
						<LinkImage
							href="https://www.sketchup.com/"
							:src="SketchUp"
							alt="SketchUp" />
						<LinkImage
							href="https://solidedge.siemens.com/en/"
							:src="SolidEdge"
							alt="Solid Edge" />
						<LinkImage
							href="https://ultimaker.com/software/ultimaker-cura"
							:src="Cura"
							alt="Cura" />
					</div>
				</v-card>
			</v-col>
			<v-col>
				<v-card class="bg-black pa-4 h-100">
					<h1 class="text-center">Hardware</h1>
					<div class="d-sm-flex justify-center text-center">
						<LinkImage
							href="https://www.raspberrypi.org/"
							:src="RPi"
							alt="Raspberry Pi" />
						<LinkImage
							href="https://www.arduino.cc/"
							:src="Arduino"
							alt="Arduino" />
					</div>
				</v-card>
			</v-col>
			<v-col>
				<v-card class="bg-black pa-4 h-100">
					<h1 class="text-center">Op systems</h1>
					<div class="d-sm-flex justify-center text-center">
						<LinkImage
							href="https://www.microsoft.com/en-us/windows"
							:src="Windows"
							alt="Windows" />
						<LinkImage href="https://ubuntu.com/" :src="Ubuntu" alt="Ubuntu" />
					</div>
				</v-card>
			</v-col>
			<v-col>
				<v-card class="bg-black pa-4 h-100">
					<h1 class="text-center">Version control</h1>
					<div class="d-sm-flex justify-center text-center">
						<LinkImage href="https://git-scm.com/" :src="Git" alt="Git" />
						<LinkImage
							href="https://maven.apache.org/"
							:src="Maven"
							alt="Maven" />
						<LinkImage href="https://gradle.org/" :src="Gradle" alt="Gradle" />
					</div>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup lang="ts">
import ButtonCard from '@/components/ButtonCard.vue'
import LinkImage from '@/components/LinkImage.vue'
import C from '@icons/c.svg'
import Java from '@icons/java.svg'
import Python from '@icons/python.svg'
import PHP from '@icons/php.svg'
import JS from '@icons/javascript.svg'
import TS from '@icons/typescript.svg'
import Nginx from '@icons/nginx.svg'
import Spring from '@icons/spring.svg'
import NodeJS from '@icons/nodejs.svg'
import Vue from '@icons/vue.svg'
import Vuetify from '@icons/vuetify.svg'
import Angular from '@icons/angular.svg'
import Sass from '@icons/sass.svg'
import Wordpress from '@icons/wordpress.svg'
import Bash from '@icons/bash.svg'
import Docker from '@icons/docker.svg'
import K3S from '@icons/k3s.svg'
import Grafana from '@icons/grafana.svg'
import MySQL from '@icons/mysql.svg'
import SQLite from '@icons/sqlite.svg'
import PostgreSQL from '@icons/postgresql.svg'
import Oracle from '@icons/oracle.svg'
import AWS from '@icons/aws.svg'
import OracleCloud from '@icons/oracle-cloud.svg'
import Blender from '@icons/blender.svg'
import SketchUp from '@icons/sketchup.svg'
import SolidEdge from '@icons/solid-edge.svg'
import Cura from '@icons/cura.svg'
import RPi from '@icons/raspberry-pi.svg'
import Arduino from '@icons/arduino.svg'
import Windows from '@icons/windows.svg'
import Ubuntu from '@icons/ubuntu.svg'
import Git from '@icons/git.svg'
import Maven from '@icons/maven.svg'
import Gradle from '@icons/gradle.svg'
</script>

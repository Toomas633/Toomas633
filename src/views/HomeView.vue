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
						<a
							href="https://www.cprogramming.com/"
							target="_blank"
							rel="noopener">
							<img class="ma-2" :src="C" alt="C" height="75" />
						</a>
						<a href="https://www.java.com/" target="_blank" rel="noopener">
							<img class="ma-2" :src="Java" alt="Java" height="75" />
						</a>
						<a href="https://www.python.org/" target="_blank" rel="noopener">
							<img class="ma-2" :src="Python" alt="Python" height="75" />
						</a>
						<a href="https://www.php.net/" target="_blank" rel="noopener">
							<img class="ma-2" :src="PhP" alt="PHP" height="75" />
						</a>
						<a
							href="https://www.javascript.com/"
							target="_blank"
							rel="noopener">
							<img class="ma-2" :src="JS" alt="JavaScript" height="75" />
						</a>
						<a
							href="https://www.typescriptlang.org/"
							target="_blank"
							rel="noopener">
							<img class="ma-2" :src="TS" alt="TypeScript" height="75" />
						</a>
					</div>
				</v-card>
			</v-col>
			<v-col>
				<v-card class="bg-black pa-4 h-100">
					<h1 class="text-center">Backend</h1>
					<div class="d-sm-flex justify-center text-center">
						<a href="https://www.nginx.com/" target="_blank" rel="noopener">
							<img class="ma-2" :src="Nginx" alt="Nginx" height="75" />
						</a>
						<a href="https://spring.io/" target="_blank" rel="noopener">
							<img class="ma-2" :src="Spring" alt="Spring" height="75" />
						</a>
						<a href="https://nodejs.org/" target="_blank" rel="noopener">
							<img class="ma-2" :src="NodeJS" alt="Node.js" height="75" />
						</a>
					</div>
				</v-card>
			</v-col>
			<v-col>
				<v-card class="bg-black pa-4 h-100">
					<h1 class="text-center">Frontend</h1>
					<div class="d-sm-flex justify-center text-center">
						<a href="https://vuejs.org/" target="_blank" rel="noopener">
							<img class="ma-2" :src="Vue" alt="Vue" height="75" />
						</a>
						<a href="https://vuetifyjs.com/" target="_blank" rel="noopener">
							<img class="ma-2" :src="Vuetify" alt="Vuetify" height="75" />
						</a>
						<a href="https://angular.io/" target="_blank" rel="noopener">
							<img class="ma-2" :src="Angular" alt="Angular" height="75" />
						</a>
						<a href="https://sass-lang.com/" target="_blank" rel="noopener">
							<img class="ma-2" :src="Sass" alt="Sass" height="75" />
						</a>
						<a href="https://wordpress.com/" target="_blank" rel="noopener">
							<img class="ma-2" :src="Wordpress" alt="Wordpress" height="75" />
						</a>
					</div>
				</v-card>
			</v-col>
			<v-col>
				<v-card class="bg-black pa-4 h-100">
					<h1 class="text-center">Devops</h1>
					<div class="d-sm-flex justify-center text-center">
						<a
							href="https://www.gnu.org/software/bash/"
							target="_blank"
							rel="noopener">
							<img class="ma-2" :src="Bash" alt="Bash" height="75" />
						</a>
						<a href="https://www.docker.com/" target="_blank" rel="noopener">
							<img class="ma-2" :src="Docker" alt="Docker" height="75" />
						</a>
						<a href="https://k3s.io/" target="_blank" rel="noopener">
							<img class="ma-2" :src="K3S" alt="K3S" height="75" />
						</a>
					</div>
				</v-card>
			</v-col>
			<v-col>
				<v-card class="bg-black pa-4 h-100">
					<h1 class="text-center">Visualization</h1>
					<div class="d-sm-flex justify-center text-center">
						<a href="https://grafana.com/" target="_blank" rel="noopener">
							<img class="ma-2" :src="Grafana" alt="Grafana" height="75" />
						</a>
					</div>
				</v-card>
			</v-col>
			<v-col>
				<v-card class="bg-black pa-4 h-100">
					<h1 class="text-center">Databases</h1>
					<div class="d-sm-flex justify-center text-center">
						<a href="https://www.mysql.com/" target="_blank" rel="noopener">
							<img class="ma-2" :src="MySQL" alt="MySQL" height="75" />
						</a>
						<a
							href="https://sqlite.org/index.html"
							target="_blank"
							rel="noopener">
							<img class="ma-2" :src="SQLite" alt="SQLite3" height="75" />
						</a>
						<a
							href="https://www.postgresql.org/"
							target="_blank"
							rel="noopener">
							<img class="ma-2" :src="Postgres" alt="PostgreSQL" height="75" />
						</a>
						<a
							href="https://www.oracle.com/database/"
							target="_blank"
							rel="noopener">
							<img class="ma-2" :src="Oracle" alt="Oracle" height="75" />
						</a>
					</div>
				</v-card>
			</v-col>
			<v-col>
				<v-card class="bg-black pa-4 h-100">
					<h1 class="text-center">Cloud</h1>
					<div class="d-sm-flex justify-center text-center">
						<a href="https://aws.amazon.com/" target="_blank" rel="noopener">
							<img class="ma-2" :src="AWS" alt="AWS" height="75" />
						</a>
						<a
							href="https://www.oracle.com/cloud/"
							target="_blank"
							rel="noopener">
							<img class="ma-2" :src="OracleCloud" alt="Oracle" height="75" />
						</a>
					</div>
				</v-card>
			</v-col>
			<v-col>
				<v-card class="bg-black pa-4 h-100">
					<h1 class="text-center">3D</h1>
					<div class="d-sm-flex justify-center text-center">
						<a href="https://www.blender.org/" target="_blank" rel="noopener">
							<img class="ma-2" :src="Blender" alt="Blender" height="75" />
						</a>
						<a href="https://www.sketchup.com/" target="_blank" rel="noopener">
							<img class="ma-2" :src="SketchUp" alt="SketchUp" height="75" />
						</a>
						<a
							href="https://solidedge.siemens.com/en/"
							target="_blank"
							rel="noopener">
							<img class="ma-2" :src="SolidEdge" alt="Solid Edge" height="75" />
						</a>
						<a
							href="https://ultimaker.com/software/ultimaker-cura"
							target="_blank"
							rel="noopener">
							<img class="ma-2" :src="Cura" alt="Cura" height="75" />
						</a>
					</div>
				</v-card>
			</v-col>
			<v-col>
				<v-card class="bg-black pa-4 h-100">
					<h1 class="text-center">Hardware</h1>
					<div class="d-sm-flex justify-center text-center">
						<a
							href="https://www.raspberrypi.org/"
							target="_blank"
							rel="noopener">
							<img class="ma-2" :src="RPi" alt="Raspberry Pi" height="75" />
						</a>
						<a href="https://www.arduino.cc/" target="_blank" rel="noopener">
							<img class="ma-2" :src="Arduino" alt="Arduino" height="75" />
						</a>
					</div>
				</v-card>
			</v-col>
			<v-col>
				<v-card class="bg-black pa-4 h-100">
					<h1 class="text-center">Op systems</h1>
					<div class="d-sm-flex justify-center text-center">
						<a
							href="https://www.microsoft.com/en-us/windows"
							target="_blank"
							rel="noopener">
							<img class="ma-2" :src="Windows" alt="Windows" height="75" />
						</a>
						<a href="https://ubuntu.com/" target="_blank" rel="noopener">
							<img class="ma-2" :src="Ubuntu" alt="Ubuntu" height="75" />
						</a>
					</div>
				</v-card>
			</v-col>
			<v-col>
				<v-card class="bg-black pa-4 h-100">
					<h1 class="text-center">Version control</h1>
					<div class="d-sm-flex justify-center text-center">
						<a href="https://git-scm.com/" target="_blank" rel="noopener">
							<img class="ma-2" :src="Git" alt="Git" height="75" />
						</a>
						<a href="https://maven.apache.org/" target="_blank" rel="noopener">
							<img class="ma-2" :src="Maven" alt="Maven" height="75" />
						</a>
						<a href="https://gradle.org/" target="_blank" rel="noopener">
							<img class="ma-2" :src="Gradle" alt="Gradle" height="75" />
						</a>
					</div>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup lang="ts">
import ButtonCard from '@/components/ButtonCard.vue'
import C from '@icons/c.svg'
import Java from '@icons/java.svg'
import Python from '@icons/python.svg'
import PhP from '@icons/php.svg'
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
import Postgres from '@icons/postgresql.svg'
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

import fs from 'fs'
import path from 'path'
import { promisify } from 'util'

const readFile = promisify(fs.readFile)
const readdir = promisify(fs.readdir)

const srcDir = path.resolve('src')
const vuetifyComponentsPattern = /<v-[\w-]+/gi

const foundElements = []

async function findVuetifyComponents(dir) {
	const items = await readdir(dir, { withFileTypes: true })
	const files = items.filter(
		(item) => item.isFile() && item.name.endsWith('.vue')
	)
	const directories = items.filter((item) => item.isDirectory())

	for (const file of files) {
		const filePath = path.join(dir, file.name)
		const content = await readFile(filePath, 'utf8')
		const matches = content.match(vuetifyComponentsPattern)

		if (matches) {
			matches.forEach((match) => {
				match = match
					.replace('<', '')
					.replace(/-([a-z])/g, (match, p1) => p1.toUpperCase())
					.replace(/\b\w/g, (char) => char.toUpperCase())
				if (!foundElements.includes(match)) {
					foundElements.push(match)
				}
			})
		}
	}

	for (const directory of directories) {
		const directoryPath = path.join(dir, directory.name)
		await findVuetifyComponents(directoryPath)
	}
}

findVuetifyComponents(srcDir)
	.then(() => {
		foundElements.sort()
		for (const element of foundElements) {
			// eslint-disable-next-line no-console
			console.log(`${element},`)
		}
	})
	.catch((err) => {
		console.error('Error:', err)
	})

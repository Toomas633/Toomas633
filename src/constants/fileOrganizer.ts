import { FileType } from '@/enums/fileType'

export const fileIcons: Record<FileType, string> = {
	[FileType.Txt]: 'mdi-file-document-outline',
	[FileType.Folder]: 'mdi-folder',
	[FileType.Mkv]: 'mdi-movie-outline',
}

export const inputItems = [
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
]

export const outputItems = [
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
]

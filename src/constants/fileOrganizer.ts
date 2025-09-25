import { FileType } from '@/enums/fileType'

export const inputItems = [
	{
		title: 'your files',
		file: FileType.Folder,
	},
	{
		title: 'movies',
		file: FileType.Folder,
		children: [
			{
				title: 'movie folder 1',
				file: FileType.Folder,
				children: [
					{
						title: 'movie.mkv',
						file: FileType.Video,
					},
					{
						title: 'sub.srt',
						file: FileType.Txt,
					},
					{
						title: 'other files',
						file: FileType.Txt,
					},
				],
			},
			{
				title: 'movie folder 2',
				file: FileType.Folder,
				children: [
					{
						title: 'movie.mp4',
						file: FileType.Video,
					},
					{
						title: 'subs',
						file: FileType.Folder,
						children: [
							{
								title: 'sub.srt',
								file: FileType.Txt,
							},
						],
					},
					{
						title: 'other files',
						file: FileType.Txt,
					},
				],
			},
		],
	},
	{
		title: 'tv',
		file: FileType.Folder,
		children: [
			{
				title: 'show folder 1',
				file: FileType.Folder,
				children: [
					{
						title: 'show.mkv',
						file: FileType.Video,
					},
					{
						title: 'subs',
						file: FileType.Folder,
						children: [
							{
								title: 'sub.srt',
								file: FileType.Txt,
							},
						],
					},
					{
						title: 'other files',
						file: FileType.Txt,
					},
				],
			},
			{
				title: 'show folder 2',
				file: FileType.Folder,
				children: [
					{
						title: 'episode or season folder',
						file: FileType.Folder,
						children: [
							{
								title: 'show.mp4',
								file: FileType.Video,
							},
							{
								title: 'subs',
								file: FileType.Folder,
								children: [
									{
										title: 'sub.srt',
										file: FileType.Txt,
									},
								],
							},
							{
								title: 'other files',
								file: FileType.Txt,
							},
						],
					},
				],
			},
		],
	},
	{
		title: 'your files.txt',
		file: FileType.Txt,
	},
]

export const outputItems = [
	{
		title: 'your folders',
		file: FileType.Folder,
	},
	{
		title: 'movies',
		file: FileType.Folder,
		children: [
			{
				title: 'movie folder 1',
				file: FileType.Folder,
				children: [
					{
						title: 'movie.mkv',
						file: FileType.Video,
					},
					{
						title: 'sub.srt',
						file: FileType.Txt,
					},
				],
			},
			{
				title: 'movie folder 2',
				file: FileType.Folder,
				children: [
					{
						title: 'movie.mp4',
						file: FileType.Video,
					},
					{
						title: 'sub.srt',
						file: FileType.Txt,
					},
				],
			},
		],
	},
	{
		title: 'tv',
		file: FileType.Folder,
		children: [
			{
				title: 'show folder 1',
				file: FileType.Folder,
				children: [
					{
						title: 'show.mkv',
						file: FileType.Video,
					},
					{
						title: 'sub.srt',
						file: FileType.Txt,
					},
				],
			},
			{
				title: 'show folder 2',
				file: FileType.Folder,
				children: [
					{
						title: 'episode or season folder',
						file: FileType.Folder,
						children: [
							{
								title: 'show.mp4',
								file: FileType.Video,
							},
							{
								title: 'sub.srt',
								file: FileType.Txt,
							},
						],
					},
				],
			},
		],
	},
	{
		title: 'your files.txt',
		file: FileType.Txt,
	},
]

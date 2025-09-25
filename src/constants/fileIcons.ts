import { FileType } from '@/enums/fileType'

export const fileIcons: Record<FileType, string> = {
	[FileType.Txt]: 'mdi-file-document-outline',
	[FileType.Folder]: 'mdi-folder',
	[FileType.Video]: 'mdi-movie-outline',
	[FileType.Code]: 'mdi-file-code-outline',
	[FileType.License]: 'mdi-file-certificate-outline',
	[FileType.Config]: 'mdi-file-cog-outline',
	[FileType.Lock]: 'mdi-file-lock-outline',
}

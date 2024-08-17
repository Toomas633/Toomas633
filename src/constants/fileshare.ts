export const dockerCompose = `version: '3.9'
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
	restart: always`

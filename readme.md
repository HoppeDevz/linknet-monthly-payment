# Readme

## Introduction

Welcome to our project! This README file provides information on how to get started with the project. 

## Get Started

To get started with the project, follow the instructions below:

1. Install docker
```shell
sudo pacman -Syu
sudo pacman -S docker
```

2. Create a docker volume using `docker volume create pgdata`.
3. Create a docker container using the created volume using the command below:

```shell
docker run -it --rm --name linknet-postgres -v pgdata:/var/lib/postgresql/data \
-e POSTGRES_USER=YOUR_USERNAME -e POSTGRES_PASSWORD=YOUR_PASSWORD \
-e POSTGRES_DB=linknet -p 5432:5432 -d postgres
```

4. Run database migrations:
```shell
yarn postgres:migrations
```

5. Pull the official NodeJS Image
```
sudo docker pull node
```

6. Fill .env file

For dev enviroment run `sudo yarn docker:dev`
For prod enviroment run `sudo yarn docker`

Read the QR-Code that will appear in the terminal and enjoy!

## Conclusion

That's it! You should now be able to run the project locally and connect to the database. If you have any questions or issues, please refer to the project documentation or contact us for support.
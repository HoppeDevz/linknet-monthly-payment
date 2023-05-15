# Readme

## Introduction

Welcome to our project! This README file provides information on how to get started with the project. 

## Get Started

To get started with the project, follow the instructions below:

1. Clone the repository to your local machine using `git clone https://github.com/HoppeDevz/linknet-monthly-payment.git`.
2. Install all dependencies using `npm install` or `yarn install`.
3. Create a `.env` file and configure your environment variables. See `.env.example` for reference.
4. Start the development server using `npm start` or `yarn start`.
5. Open your browser and go to `http://localhost:<ENV_API_PORT>`.

## Database

Before you can run the project, you need to create a docker volume for the database. Follow the instructions below:

1. Create a docker volume using `docker volume create pgdata`.
2. Create a docker container using the created volume using the command below:

```shell
docker run -it --rm --name linknet-postgres -v pgdata:/var/lib/postgresql/data \
-e POSTGRES_USER=YOUR_USERNAME -e POSTGRES_PASSWORD=YOUR_PASSWORD \
-e POSTGRES_DB=linknet -p 5432:5432 -d postgres
```

## Conclusion

That's it! You should now be able to run the project locally and connect to the database. If you have any questions or issues, please refer to the project documentation or contact us for support.
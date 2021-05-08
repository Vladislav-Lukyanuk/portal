CREATE DATABASE "teach-me"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Russian_Russia.1251'
    LC_CTYPE = 'Russian_Russia.1251'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

CREATE TABLE users (
    id INT GENERATED ALWAYS AS IDENTITY,
    email VARCHAR NOT NULL,
    password_hash VARCHAR NOT NULL,
    role SMALLINT NOT NULL,
    has_ban BOOLEAN NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE tokens (
    id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    refresh_token VARCHAR NOT NULL,
    is_declined BOOLEAN NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_user_token
          FOREIGN KEY(user_id)
    	  REFERENCES users(id)
);

CREATE TABLE words (
    id INT GENERATED ALWAYS AS IDENTITY,
    word VARCHAR,
    trans VARCHAR,
    PRIMARY KEY(id)
);

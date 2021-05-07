CREATE DATABASE "teach-me"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Russian_Russia.1251'
    LC_CTYPE = 'Russian_Russia.1251'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

CREATE TABLE users (
    id SERIAL,
    email VARCHAR NOT NULL,
    password_hash VARCHAR NOT NULL,
    role SMALLINT NOT NULL,
    has_ban BOOLEAN NOT NULL
);

CREATE TABLE words (
    id SERIAL,
    word VARCHAR,
    trans VARCHAR
);

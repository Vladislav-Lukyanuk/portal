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

CREATE TABLE categories (
    id INT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    icon_src VARCHAR,
    PRIMARY KEY(id)
);

CREATE TABLE words (
    id INT GENERATED ALWAYS AS IDENTITY,
    category_id INT NOT NULL,
    word VARCHAR NOT NULL,
    transcription VARCHAR NOT NULL,
    image_src VARCHAR,
    PRIMARY KEY(id),
    CONSTRAINT fk_word_category
            FOREIGN KEY(category_id)
            REFERENCES categories(id)
);

CREATE TABLE user_words_pools (
    id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    name VARCHAR NOT NULL,
    learned_number INT NOT NULL,
    total_number INT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_user_pool
            FOREIGN KEY(user_id)
            REFERENCES users(id)
);

CREATE TABLE pool_words (
    id INT GENERATED ALWAYS AS IDENTITY,
    user_pool_id INT NOT NULL,
    word_id INT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_user_words_pool
            FOREIGN KEY(user_pool_id)
            REFERENCES user_words_pools(id),
    CONSTRAINT fk_pool_word
            FOREIGN KEY(word_id)
            REFERENCES words(id)
);

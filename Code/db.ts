import { Database } from "bun:sqlite";

const db = new Database("database.sqlite");

const query = db.query(`
    CREATE TABLE IF NOT EXISTS users (
        id              INTEGER PRIMARY KEY AUTOINCREMENT,
        username        TEXT NOT NULL UNIQUE,
        email           TEXT NOT NULL UNIQUE,
        password_hash   TEXT NOT NULL
    );
`);

const query = db.query(`
    CREATE TABLE IF NOT EXISTS characters (
        id              INTEGER PRIMARY KEY AUTOINCREMENT,
        name            TEXT NOT NULL,
        description     TEXT
    );
`);

query.run();

export { db } 
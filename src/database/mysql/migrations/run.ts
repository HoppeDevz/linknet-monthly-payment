import { query } from "../index";
import { usersMigration } from "./users.migration";

export const runMySQLMigrations = async () => {

    await query(usersMigration);
}
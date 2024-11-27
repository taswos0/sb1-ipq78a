import { Sqlite } from '@nativescript/sqlite';
import { databaseConfig } from '../config/database.config';

export class DatabaseService {
  private database: Sqlite;

  async initialize(): Promise<void> {
    try {
      this.database = await new Sqlite(databaseConfig.name);
      await this.createTables();
    } catch (error) {
      console.error('Database initialization error:', error);
      throw error;
    }
  }

  private async createTables(): Promise<void> {
    for (const table of databaseConfig.tables) {
      const columns = table.columns
        .map(col => {
          const nullable = col.nullable ? '' : 'NOT NULL';
          return `${col.name} ${col.type} ${nullable}`;
        })
        .join(', ');

      const query = `CREATE TABLE IF NOT EXISTS ${table.name} (${columns}, PRIMARY KEY (${table.primaryKey}))`;
      await this.database.execute(query);
    }
  }

  async execute(query: string, params: any[] = []): Promise<any> {
    try {
      return await this.database.execute(query, params);
    } catch (error) {
      console.error('Database query error:', error);
      throw error;
    }
  }
}
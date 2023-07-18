import knex from "knex"
import path from "path"

const sqliteConfig = {
  development: {
    client: 'better-sqlite3',
    connection: {
      // filename: process.env.NODE_ENV === 'development'
      //   ? 'C:/Users/elias/Desktop/Javascript/Electron/electron_express_build/data/dev/db.db'
      //   : path.join(process.env.ELECTRON_APP_PATH, 'data', 'db.db')
      filename: 'C:/Users/elias/Desktop/Javascript/Electron/electron_express_build/data/dev/db.db'
    },
    useNullAsDefault: true,
  }
};

export default knex(sqliteConfig.development)
import { join } from 'path';
import { DB_URL } from '@config';
import mongoose from 'mongoose';
import { log } from 'winston';
import { logger } from '@/utils/logger';

// export const dbConnection: ConnectionOptions = {
//   type: 'postgres',
//   host: DB_HOST,
//   port: Number(DB_PORT),
//   username: DB_USER,
//   password: DB_PASSWORD,
//   database: DB_DATABASE,
//   synchronize: true,
//   logging: false,
//   entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
//   migrations: [join(__dirname, '../**/*.migration{.ts,.js}')],
//   subscribers: [join(__dirname, '../**/*.subscriber{.ts,.js}')],
//   cli: {
//     entitiesDir: 'src/entities',
//     migrationsDir: 'src/migration',
//     subscribersDir: 'src/subscriber',
//   },
// };
export class dbConnection{
  public static db:mongoose.Connection;
  public static connect(){
    mongoose.connect(DB_URL);
    dbConnection.db = mongoose.connection;
    dbConnection.db.on('error',(error)=>logger.error(error))
    dbConnection.db.once('open',()=>logger.info('Connected to db!'))
  }
}
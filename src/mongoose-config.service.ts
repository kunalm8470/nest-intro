import { MongooseOptionsFactory, MongooseModuleOptions } from '@nestjs/mongoose';
import * as config from 'config';

export class MongooseConfigService implements MongooseOptionsFactory {
    createMongooseOptions(): MongooseModuleOptions  {
        const connectionString = config.get('mongodbConnectionString');
        return {
            uri: connectionString,
            useNewUrlParser: true
        };
    }
}
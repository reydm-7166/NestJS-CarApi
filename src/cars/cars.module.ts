import { Module } from '@nestjs/common';
import { CarsController } from './controllers/cars/cars.controller';

@Module({
  controllers: [CarsController]
})
export class CarsModule {}

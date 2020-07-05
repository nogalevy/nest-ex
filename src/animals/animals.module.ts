import { Module } from '@nestjs/common';
import { AnimalsController } from './animals.controller';
import { AnimalsService } from './animals.service';
import { Animals } from './animals.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Animals])],
    controllers: [AnimalsController],
    providers: [AnimalsService],
})
export class AnimalsModule { }

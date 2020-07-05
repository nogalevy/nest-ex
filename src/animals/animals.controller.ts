import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AnimalsService } from './animals.service';

@Controller('what')
export class AnimalsController {
    constructor(private readonly animalService: AnimalsService) { }

    @Post()
    postNewAnimal(
        @Body('name') animalName: string,
        @Body('legs') animalLegsNum: number
    ): any {
        return this.animalService.insertAnimal(animalName, animalLegsNum);
        // return { id: "res" }
    }

    @Get()
    getAllAnimals() {
        return this.animalService.getAll();
    }

    @Get(':id')
    getAnimalById(@Param('id') id: number) {
        return this.animalService.getAnimal(id);
    }
}

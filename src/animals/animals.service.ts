import { Injectable, NotFoundException } from '@nestjs/common';
import { Animals } from './animals.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AnimalsService {
    constructor(
        @InjectRepository(Animals)
        private readonly animalsRepository: Repository<Animals>,
    ) { }

    // private animals: Animal[] = []

    getAll() {
        // return [...this.animals];
    }

    insertAnimal(name: string, legs: number) {
        let data: object = { name, legs }
        this.animalsRepository.save(data);
        return { success: true }
        // const animalId = Math.floor(Math.random() * 10)
        // const newAnimal = new Animal(animalId, name, legs);
        // this.animals.push(newAnimal);
        // return animalId;
    }

    getAnimal(id) {
        // const animal = this.animals.find((a) => a.id == id);
        // if (!animal) throw new NotFoundException("Could not find animal")
        // return { ...animal }
    }
}
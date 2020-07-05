import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todos } from './todos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {
    constructor(@InjectRepository(Todos)
    private readonly todosRepository: Repository<Todos>
    ) { }

    getAll() {
        return this.todosRepository.find({})
    }

    postTodo(data: object) {
        this.todosRepository.save(data)
        return { success: true }
    }
}

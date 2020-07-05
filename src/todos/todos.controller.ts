import { Controller, Get, Put, Post, Delete, Body } from '@nestjs/common';
import { TodosService } from './todos.service'


@Controller('todos')
export class TodosController {
    constructor(private readonly todoService: TodosService) { }

    //get all
    @Get()
    getTodos() {
        return this.todoService.getAll()
    }

    //post todo
    // @Post()
    // postTodo(@Body('title') title: string, @Body('description') description: string, @Body('done') done: boolean) {
    //     let data = { title, description, done }
    //     return this.todoService.postTodo(data)
    // }

    // @Put(':id')
    // updateTodo() {

    // }

    //delete todo
    // @Delete(':id')
    // deleteTodo() {

    // }

    //get single todo
    // @Get(':id')
    // getSingleTodo() {

    // }
}

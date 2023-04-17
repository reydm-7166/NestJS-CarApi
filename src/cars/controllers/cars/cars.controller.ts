import { Body, Controller, Get, Post, Param, Patch, Put, Delete } from '@nestjs/common';
import { CreateCarDto } from 'src/cars/dto/CreateCar.dto';

@Controller('api/v1/cars')
export class CarsController {
    
    // ***** GET ALL CARS *****//
    @Get()
    async getCars() {
        let data = await fetch('http://localhost:3000/cars')
        return data.json();
    }

    // ***** CREATE NEW CAR *****//
    @Post('')
    async addCar(@Body() carData: CreateCarDto) {
        // use async and try catch for saving data to json-server (using api endpoint of the server) 
        // await the result, if it is ok/successful 
        // then return a json object with status 200 and a message
        try {
            const response = await fetch('http://localhost:3000/cars', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(carData)
            });
            if (response.ok) {
                return {
                    status: 200,
                    message: "Car Added Successfully!"
                };
            }
            return {
                status: 404,
                message: "Something went wrong!"
            }
        } catch (error) {
            throw new Error('Error adding car: ' + error);
        }
    }
    // ***** ONE/SPECIFIC CAR FETCH *****//
    @Get(':id')
    async getCar(@Param('id') id: string) {
        // retreive specific car by ID
        const response = await fetch(`http://localhost:3000/cars/${id}`);
        return await response.json();
    }
    // ***** UPDATE CAR (PATCH) partially *****//
    @Patch(':id')
    async updateCarPartially(@Param('id') id: string, @Body() carData: CreateCarDto) {
        try {
            const response = await fetch(`http://localhost:3000/cars/${id}`, {
                method: 'PATCH',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(carData)
            });
            if (response.ok) {
                return {
                    status: 200,
                    message: "Car Updated Successfully!"
                };
            }
            return {
                status: 404,
                message: "Car not found!"
            }
        } catch (error) {
            throw new Error('Error updating car: ' + error);
        }
    }

    // ***** UPDATE CAR (PATCH) whole *****//
    @Put(':id')
    async updateCar(@Param('id') id: string, @Body() carData: CreateCarDto) {
        try {
            const response = await fetch(`http://localhost:3000/cars/${id}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(carData)
            });
            if (response.ok) {
                return {
                    status: 200,
                    message: "Car Updated Successfully!"
                };
            }
            return {
                status: 404,
                message: "Car not found!"
            }
            
        } catch (error) {
            throw new Error('Error updating car: ' + error);
        }
    }

    @Delete(':id')
    async deleteCar(@Param('id') id: string) {
        try {
            const response = await fetch(`http://localhost:3000/cars/${id}`, {
                method: 'DELETE',
                headers: {
                'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                return {
                    status: 200,
                    message: "Car Deleted Successfully!"
                };
            }
            return {
                status: 404,
                message: "Car not found!"
            }
        } catch (error) {
            throw new Error('Error deleting car: ' + error.message);
        }
    }

}

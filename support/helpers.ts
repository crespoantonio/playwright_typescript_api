import { faker } from '@faker-js/faker';
import { IBookingDetails } from './types';
import { expect, APIResponse, APIRequestContext } from '@playwright/test';


export class Helpers {

    /**
     * TODO:Change the user and password to get the credentials from an env file
     */

    private user:string = 'admin';
    private password:string = 'password123';

    public HTTP_OK:number = 200;
    public HTTP_CREATED:number = 201;
    public HTTP_NOT_FOUND:number = 404;
    public METHOD_NOT_ALLOWED:number = 405;

    private getRandomName(): string {
        return faker.person.firstName();
    }

    private getRandomLastname(): string {
        return faker.person.lastName();
    }

    private getRandomPrice(): number {
        return parseFloat(faker.commerce.price({ min: 100, max: 200, dec: 0 }));
    }

    private getRandomCheckInValue(): String {
        return faker.date.recent().toISOString().slice(0,10);
    }

    private getRandomCheckOutValue(): String {
        return faker.date.soon().toISOString().slice(0,10);
    }

    private getRandomText(): string {
        return faker.person.bio();
    }


    createNewBookingDetails(): IBookingDetails {
        const bookingDetails:IBookingDetails ={
            firstname: this.getRandomName(),
            lastname: this.getRandomLastname(),
            totalprice: this.getRandomPrice(),
            depositpaid: true,
            bookingdates:{
                checkin: this.getRandomCheckInValue(),
                checkout: this.getRandomCheckOutValue()
            },
            additionalneeds: this.getRandomText()
        }

        return bookingDetails
    }

    createBookingResponseValidator():any{
        return {
            bookingid: expect.any(Number),
            booking: this.getBookingResponseValidator()
        }
    }

    getBookingResponseValidator():any{
        return {
            firstname: expect.any(String),
            lastname: expect.any(String),
            totalprice: expect.any(Number),
            depositpaid: expect.any(Boolean),
            bookingdates:expect.any(Object),
            additionalneeds:expect.any(String)
        }
    }

    async getAuthToken(request:APIRequestContext):Promise<any>{
        return await request.post('/auth', {
            data:{
                username: this.user,
                password: this.password
            }
        }).then(async (response:APIResponse)=>{
            const json = await response.json();
            return json.token;
        })
    }


}

export const helpers = new Helpers();

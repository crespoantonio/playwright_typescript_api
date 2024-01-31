import { faker } from '@faker-js/faker';
import { IBookingDetails } from './types';
import { expect } from '@playwright/test';


export class Helpers {
    private getRandomName(): string {
        return faker.person.firstName();
    }

    private getRandomLastname(): string {
        return faker.person.lastName();
    }

    private getRandomPrice(): number {
        return parseFloat(faker.commerce.price({ min: 100, max: 200, dec: 0 }));
    }

    private getRandomCheckInValue(): Date {
        return faker.date.recent();
    }

    private getRandomCheckOutValue(): Date {
        return faker.date.soon();
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

}

export const helpers = new Helpers();
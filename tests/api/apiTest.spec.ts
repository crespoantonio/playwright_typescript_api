import {test, expect, APIResponse} from '@playwright/test'
import { helpers } from '../../support/helpers';
import { IBookingDetails } from '../../support/types';

test('Create a new booking', async ({ request }) => {
    const bookingDetails:IBookingDetails = helpers.createNewBookingDetails();
    const response:APIResponse = await request.post("/booking", {
        data: bookingDetails
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody:any = await response.json();
    expect(responseBody).toMatchObject(helpers.createBookingResponseValidator());
});

test('Get booking details', async ({request}) => {
    const getBookingId:number = 1
    const response:APIResponse = await request.get(`/booking/${getBookingId}`)
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toMatchObject(helpers.getBookingResponseValidator());
})
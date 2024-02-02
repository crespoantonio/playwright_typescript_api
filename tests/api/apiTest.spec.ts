import {test, expect, APIResponse} from '@playwright/test'
import { helpers } from '../../support/helpers';
import { IBookingDetails } from '../../support/types';

test.describe('/booking', ()=>{
    let getBookingId:number
    test.beforeAll('Get all bookings', async({request})=>{
        const response:APIResponse = await request.get('/booking');
        const responseBody:any = await response.json();
        getBookingId = (responseBody[0].bookingid);
        
    })
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
    
    test('Get booking details by booking id', async ({request}) => {
        const response:APIResponse = await request.get(`/booking/${getBookingId}`)
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody).toMatchObject(helpers.getBookingResponseValidator());
    })
})
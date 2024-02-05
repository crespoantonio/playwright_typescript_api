import {test, expect, APIResponse} from '@playwright/test'
import { helpers } from '../../support/helpers';
import { IBookingDetails } from '../../support/types';

test.describe('/booking', ()=>{
    let getBookingId:number
    let deleteBookingId:number
    const nonexistentBookingId:number = 100000
    
    test.beforeAll('Get all bookings', async({request})=>{
        const response:APIResponse = await request.get('/booking');
        const responseBody:any = await response.json();
        getBookingId = responseBody[0].bookingid;
        deleteBookingId = responseBody[1].bookingid;
    })
    test('Create a new booking', async ({ request }) => {
        const bookingDetails:IBookingDetails = helpers.createNewBookingDetails();
        const response:APIResponse = await request.post("/booking", {
            data: bookingDetails
        });
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(helpers.HTTP_OK);
        const responseBody:any = await response.json();
        expect(responseBody).toMatchObject(helpers.createBookingResponseValidator());
        expect(responseBody.booking).toMatchObject(bookingDetails);
    })
    
    test('Get booking details by booking id', async ({request}) => {
        const response:APIResponse = await request.get(`/booking/${getBookingId}`)
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(helpers.HTTP_OK);
        const responseBody:any = await response.json();
        expect(responseBody).toMatchObject(helpers.getBookingResponseValidator());
    })
    
    test('Update booking details', async ({request}) => {
        const token = await helpers.getAuthToken(request);
        const bookingDetails:IBookingDetails = helpers.createNewBookingDetails();
        const response:APIResponse = await request.put(`/booking/${getBookingId}`, {
            data: bookingDetails,
            headers: {
                "Cookie":`token=${token}`
            }
        });
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(helpers.HTTP_OK);
        const responseBody:any = await response.json();
        expect(responseBody).toMatchObject(helpers.getBookingResponseValidator());
        expect(responseBody).toMatchObject(bookingDetails);
    })
    
    test('Delete booking', async ({request}) => {
        const token = await helpers.getAuthToken(request);
        const response:APIResponse = await request.delete(`/booking/${deleteBookingId}`, {
            headers: {
                "Cookie":`token=${token}`
            }
        });
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(helpers.HTTP_CREATED);
        expect(response.statusText()).toBe('Created');
    })

    test('Attempt to get details for a non-existing booking', async({request})=>{
        const response:APIResponse = await request.get(`/booking/${nonexistentBookingId}`);
        expect(response.ok()).toBeFalsy();
        expect(response.status()).toBe(helpers.HTTP_NOT_FOUND);
        expect(response.statusText()).toBe('Not Found');
    })
})
export interface IBookingDetails {
    firstname?: string;
    lastname?: string;
    totalprice?: number;
    depositpaid?: boolean;
    bookingdates: {
        checkin?: Date;
        checkout?: Date;
    };
    additionalneeds?: string;
}
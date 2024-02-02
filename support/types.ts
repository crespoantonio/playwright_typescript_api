export type IBookingDetails = {
    firstname?: string;
    lastname?: string;
    totalprice?: number;
    depositpaid?: boolean;
    bookingdates: {
        checkin?: String;
        checkout?: String;
    };
    additionalneeds?: string;
}
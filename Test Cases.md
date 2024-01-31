# API Testing with Playwright Example Project

## Create a new booking:

- Send a POST request to create a new booking.
- Verify that the response code is 200 OK.
- Check that the booking is created successfully.

## Get booking details:

- Send a GET request to retrieve details for a specific booking ID.
- Verify that the response code is 200 OK.
- Check that the returned data matches the expected details.

## Update booking details:

- Send a PUT request to update the details of an existing booking.
- Verify that the response code is 200 OK.
- Check that the booking details are updated as expected.

## Delete a booking:

- Send a DELETE request to delete a booking by ID.
- Verify that the response code is 200 OK.
- Confirm that the booking is deleted.

## Attempt to get details for a non-existing booking:

- Send a GET request for a booking with an invalid ID.
- Verify that the response code is 404 Not Found.

## Attempt to update details for a non-existing booking:

- Send a PUT request for a booking with an invalid ID.
- Verify that the response code is 404 Not Found.

## Attempt to delete a non-existing booking:

- Send a DELETE request for a booking with an invalid ID.
- Verify that the response code is 404 Not Found.

## Attempt to create a booking with incomplete data:

- Send a POST request to create a booking with missing required fields.
- Verify that the response code is 400 Bad Request.

## Get a list of available booking IDs:

- Send a GET request to retrieve a list of all booking IDs.
- Verify that the response code is 200 OK.
- Check that the list contains valid booking IDs.

## Filter bookings by date:

- Send a GET request to retrieve bookings for a specific date.
- Verify that the response code is 200 OK.
- Check that the returned data matches bookings for the specified date.

## Attempt to create a booking with past check-in date:

- Send a POST request to create a booking with a past check-in date.
- Verify that the response code is 400 Bad Request.

## Attempt to create a booking with past check-out date:

- Send a POST request to create a booking with a past check-out date.
- Verify that the response code is 400 Bad Request.

## Attempt to create a booking with an invalid room number:

- Send a POST request to create a booking with an invalid room number.
- Verify that the response code is 400 Bad Request.

## Attempt to update a booking with invalid data:

- Send a PUT request to update a booking with invalid data.
- Verify that the response code is 400 Bad Request.

## Get total price for a booking:

- Send a GET request to retrieve the total price for a specific booking.
- Verify that the response code is 200 OK.
- Check that the returned total price matches the expected amount.

## Get all bookings for a specific user:

- Send a GET request to retrieve all bookings for a specific user.
- Verify that the response code is 200 OK.
- Check that the returned data includes bookings for the specified user.

## Attempt to create a booking without an authentication token:

- Send a POST request to create a booking without providing an authentication token.
- Verify that the response code is 403 Forbidden.

## Attempt to update a booking without an authentication token:

- Send a PUT request to update a booking without providing an authentication token.
- Verify that the response code is 403 Forbidden.

## Attempt to delete a booking without an authentication token:

- Send a DELETE request to delete a booking without providing an authentication token.
- Verify that the response code is 403 Forbidden.

## Get booking by name:

- Send a GET request to retrieve booking details based on the guest's name.
- Verify that the response code is 200 OK.
- Check that the returned data includes bookings for the specified guest's name.

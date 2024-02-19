# AdaptNXT Assignment

## Project Overview

This project is a React-based web application that recreates the interface shown in the provided image. It allows users to view and manage orders through a user-friendly dashboard.

## Technologies Used

- React JS
- CSS for styling
- Netlify for deployment

## Running the Project Locally

To run this project locally, follow these steps:

1. Clone this repository to your local machine using the following command:

2. Navigate to the project directory:

3. Install dependencies using npm

4. Start the development server:

5. Open your web browser and visit http://localhost:3000 to view the application.

## Components

- **Dashboard**: The main component that serves as the container for other components. It includes a navigation bar with an "Order" button and a settings button.

- **Orders**: A component responsible for displaying orders. It includes a navigation bar with different order statuses and options to import orders, accept orders, and print orders. It also includes a refresh button and a table displaying order data.

- **DataTable**: A component responsible for rendering the table of order data. It receives an array of orders as props and dynamically generates table rows based on the data.

- **Header**: A component representing the header section of the application. It includes a logo, a menu button for toggling the side menu, and several header links.

- **SideMenu**: A component representing the side menu of the application. It includes links to different sections of the dashboard, such as Dashboard, Inventory, Orders, Shipping, and Channel.

- **NotFound**: A component to be rendered when a user navigates to a non-existent route.

## Deployment

This project is deployed on Netlify. You can access the deployed site [here](https://frontendadaptnxt.netlify.app/).

## Additional Information

- This project was created as part of an assignment for AdaptNXT.
- Dummy data is used for demonstration purposes.
- Feel free to explore and customize the code to fit your requirements.

## Credits

- Created by Tarun Bommali
- Contact: btaruntej143@gmail.com

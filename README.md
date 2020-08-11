This is my project for the ReactJS Course at The Software University

The Project was inspired by websites like https://vsi4kibri4ki.com/ , https://www.mobile.bg and my passion for sport cars.
It is a e-catlog for a car dealership which offers new and used cars.

To start the project you have to:
    1) Open cmd in the folder of the project and enter the following command: npm install.
    2) Open cmd in the "REST API" folder and enter the following command: npm install
    3) Open cmd in the "REST API" folder and enter the following command: npm start
    4) Open cmd in the folder of the project and enter the following command: npm start


The front-end part of the project was written with the React framework.
The back-end part was written with the Express framework.
I used Mongo Atlas to store the data.

There are three types of users:

    1) Guest User (Unauthenticated):

        This user can access the following pages:
            - Guest Home Page
            - Contacts Page
            - Login Page
            - Register Page
    
    2) Regular User (Authenticated):

        This user can access the following pages:
            - User Profile Page
            - User Home Page
            - Catalog Page
            - Details Page
    
    3) Admin User (Authenticated):

        This user can access the following pages:
            - Admin Profile Page
            - User Home Page
            - Catalog Page
            - Details Page
            - Create Page
            - Update Page

The Pages are:

- Contacts Page -  you can see how you can get in touch with us;

- Login Page -  registerd users can login

- Register Page -  you can create your account

- User Profile Page - Regular Users can see the cars that they have liked and are interested in

- User home Page - Regular Users can see our best offers

- Catalog Page - Users can see all available cars and can filter them by brand

- Details Page  - Users can find out more about the car. They can 'like' it and the car will apper in their profile page or 'dislike' it if they are not interested in this offer any more. Users can also ask questions or leave comments under the car info.

- Admin Profile Page - The Admin User can see the top 10 most liked cars with the likes each car has

- Create Page - The Admin User can create a new car

- Update Page - The Admin User can update the information for the car
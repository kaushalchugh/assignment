# Assignment

## Installation

To run this project locally for development purposes, follow these steps:

1. Clone the repository to your local machine:

    ```shell
   git clone https://github.com/kaushalchugh/assignment.git
   ```

2. Navigate to the project directory:

   ```shell
   cd assignment
   ```

3. Install dependencies:

   ```shell
   npm install
   ```

4. Start the development server:

   ```shell
   npm start
   ```

5. Open your web browser and explore the project locally at [http://localhost:3000/](http://localhost:3000/).

## Implementation

-Login Component :
The component helps for login functionality. It uses the `useState` Hook from React for handling state and use `useContext`  hook to access the `AuthContext` for authentication purposes. The `useNavigate` hook from `react-router-dom` is used for navigating the user to the dashboard page after successful login.

The component contains a form with two fields: email and password. The `handleSubmit` function is used to handle form submission. The function uses `isValidEmail` for validation purposes.

The function then searches for the user in the `mockData` array using the input values.

- Dashboard Component:
The component shows the Welcome message to the user after successful  login. It also contains a navbar for  navigation between Home , About, Forgot Password and userProfile.

- Forgot Password :
The `ForgotPassword` component uses the `useContext` hook to access the `AuthContext` and `useState` hook to handle the email.
The component contains a form with one field : email. The `handleSubmit` function is used to handle the form submission.

- Userprofile :
The UserProfile component uses the `useContext` to access the `AuthContext` and uses the `useState` hook to manage the states of name, email. This component contains two button, one is for edit and other for `logout.

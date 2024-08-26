
# 🍕 Max's Food Delivery App
# React + Vite

Note: This is only the frontend part

Welcome to **Max's Food Delivery App**! This project is a full-featured food delivery application built using **ReactJS**. It's designed to provide users with an intuitive and seamless experience when browsing, ordering, and tracking their favorite meals from local restaurants.
## Live Demo: https://hotel-website-4s1i.vercel.app/

## ✨ Features

1. **User Authentication**: 
   - Secure login and registration system.
   - Profile management and order history.

2. **Restaurant & Menu Listings**:
   - Display available restaurants.
   - Filter and search through menus by cuisine, price, and more.

3. **Real-Time Order Tracking**:
   - Users can track their order status in real-time.
   - Integration with Google Maps for delivery tracking.

4. **Responsive Design**:
   - Optimized for mobile and desktop devices.
   - Smooth, responsive layout transitions.

5. **Notifications**:
   - Real-time notifications for order updates.
   - Alerts for special offers and promotions.

6. **Payment Gateway**:
   - Integration with Stripe for secure and fast payments.
   - Multiple payment options available.

## 🛠️ Tech Stack

**Frontend**:
- **ReactJS**: Core framework for building the user interface.
- **Redux**: State management for handling global app state.
- **React Router**: Navigation between different views.
- **Axios**: HTTP client for API requests.
- **Styled Components**: Component-level styling for a modular design.
- **React Icons**: For consistent and visually appealing icons.

**Backend**:
- **Node.js**: Server-side runtime environment.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing user and order data.
- **Firebase**: Authentication and real-time notifications.

**APIs**:
- **Google Maps API**: Used for delivery tracking and location services.
- **Stripe API**: Payment processing and integration.

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your machine:
- **Node.js** (version 14.x or higher)
- **npm** (version 6.x or higher)
- **MongoDB** (for local development)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/food-delivery-app.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd food-delivery-app
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Set up environment variables**:
   - Create a `.env` file in the root directory.
   - Add the following keys with your configuration:
     ```env
     REACT_APP_API_URL=http://localhost:5000
     REACT_APP_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
     REACT_APP_STRIPE_API_KEY=your-stripe-api-key
     ```

5. **Run the app**:
   ```bash
   npm start
   ```

6. **Backend Setup** (optional, if you're using a custom backend):
   - Navigate to the `backend` directory.
   - Install server dependencies:
     ```bash
     npm install
     ```
   - Start the backend server:
     ```bash
     npm run dev
     ```

## 📱 Screenshots
![Screenshot 2024-08-24 at 22 35 58](https://github.com/user-attachments/assets/4d9308ba-e11a-49b7-ae85-9183118207c2)
![Screenshot 2024-08-24 at 22 36 19](https://github.com/user-attachments/assets/d017228e-4e31-4a7a-b1c5-c0b2654b5e54)
![Screenshot 2024-08-24 at 22 44 28](https://github.com/user-attachments/assets/b275834d-e52e-48b5-8df2-a9b6d0db68f6)
![Screenshot 2024-08-24 at 22 36 46](https://github.com/user-attachments/assets/1952facf-9645-46a7-98d8-a799d93a91d0)




## 🧩 Contributing

Contributions are welcome! Whether it's fixing bugs, improving documentation, or adding new features, your help is appreciated. Here’s how you can contribute:

1. **Fork the repository**.
2. **Create a new branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit your changes**:
   ```bash
   git commit -m "Add your feature description"
   ```
4. **Push to your branch**:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Create a pull request** and explain your changes.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- Thanks to the **ReactJS** community for providing such a robust and flexible framework.
- Special mention to **Firebase** for easy integration of authentication and real-time features.
- Gratitude to all contributors and users who have supported the development of this app.

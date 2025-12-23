# 🛍️ E-Commerce Product Page Demo (Next.js)

A fully responsive **Product Page** demo built with **Next.js** that simulates a modern e-commerce experience. The project focuses on **pixel-perfect UI**, API integration, and interactive features, following the design provided in **Figma**.

**Figma Design Reference:** [View Design](https://www.figma.com/design/LwAzcMC020tu1lX5CtK7La/Untitled?node-id=1-386)


🌐 Live Demo: [View Live](https://your-vercel-link.vercel.app)

---

## ⚙️ Features

### 📝 Authentication Flow (Simulated)
- **Register Page** with Full Name, Email, Password, Phone Number, and Country Code.
- **Login Page** with Email and Password.
- **Account Verification** page using a test verification code: `123456`.
- **Note:** Authentication is temporarily **commented out** in `ProductPage` to showcase the UI and code.  
  Auth flow is implemented using **NextAuth.js**, structured for future API integration.

---

### 🎨 Design & UI
- **Pixel-perfect implementation** based on Figma design.
- **Same colors, fonts, and images** as in the design.
- Fully **responsive** for mobile, tablet, and desktop.
- **Interactive elements**:
  - Product color selection
  - Add to Cart & Wishlist with live count updates in the **Navbar**
  - SweetAlert2 notifications for user actions
- **Icons** implemented using **lucide-react**.
- Product gallery carousel implemented with **Swiper.js**.

---

### 📦 Product Data Simulation
- Product data is **mocked** to simulate API responses.
- Supports:
  - Product details: title, price, old price, images, colors
  - Similar items for carousel display
- Ready for **API integration** using **Axios**.

---

### 🛒 Interactive Features
- **Cart & Wishlist Simulation**  
  - Add products to cart or wishlist  
  - Navbar icons update dynamically  
  - SweetAlert2 notifications for user actions  

- **Responsive Product Carousel**  
  - Implemented using **Swiper.js**  
  - Infinite loop (`loop={true}`)  
  - Each card includes icons for **Add to Cart** and **Add to Wishlist**  
  - Fully matches the **Figma design**

---

### 🧩 Components Structure
- **Breadcrumb** – Navigation path  
- **ProductClient** – Product details and image gallery  
- **RatingSummary** – Product rating overview  
- **ReviewList** – User reviews section  
- **SectionTitle** – Section headers  
- **SimilarItemsCarousel** – Carousel for similar products  

> All components are **reusable and modular**, following **Next.js best practices**

---

### 🚀 Tech Stack & Dependencies
- **Next.js 16** – Server & client components  
- **React 19**  
- **Axios** – API integration  
- **NextAuth.js** – Authentication (simulated)  
- **lucide-react** – Icons  
- **Swiper.js** – Product carousel  
- **SweetAlert2** – Notifications  
- **Tailwind CSS** – Styling and responsive design


---

### 🗂 Folder Structure

```plaintext
src/
├── app/
│   └── product/
│       ├── page.js
│       └── components/
├── services/
│   └── product.service.js
└── lib/
    └── api.js
```

---

### 📱 Responsiveness
- Mobile-first design using **Tailwind CSS**  
- Hero section, product gallery, reviews, and similar items carousel **adapt seamlessly** to different screen sizes  
- Interactive elements remain fully functional on all devices

---

### ✅ Notes
- Authentication flow is **commented out** for demonstration purposes  
- All product data is **simulated**, ready for real API integration  
- Design is **pixel-perfect**, matching the Figma reference  
- Page is **interactive**, dynamic, and demonstrates modern e-commerce behaviors


---

### 🙏 Thank You
Thank you for taking the time to review this project.  
I look forward to your feedback and any suggestions for improvement!  

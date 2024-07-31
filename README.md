INSTALACIÓN--
npm mongoose
npm express
nom dotenv
npm cors
npm react-hot-toast (Add beautiful notifications to your React app with react-hot-toast)
npm bcrypt
npm i jsonwebtoken
npm nodemon
npm i cookie-parser/// cookie parser middleware function using the given secret and options
npm axios 
npm install -D tailwindcss






Project Title: CarWash Shop - Car Washing Service with Subscription

Description: CarWash Shop is an application offering on-demand car washing services as well as monthly subscriptions. The app allows users to request car washes from any location at designated car wash centers. Additionally, users can opt for a monthly subscription that provides benefits such as unlimited washes, discounts on additional services.

Mid-Fi Wireframe:

Home Page:
    Application Logo ✅
    Navigation Menu (Home, Services, Subscriptions, Contact, Login/Register)
    Information section about services

Registration/Login ✅
    Form to complete for login with Email and password.
    Button to submit for login or registration.

User Profile:
    Personal Information (name, email, address) 🗸
    Wash History and Purchases. 🗸
    Subscription status and option to update or cancel.

Select Services:
    List of wash types with descriptions and prices. 🗸
    Option to schedule washes (date & time)

Product Selection ✅
    Selection of products for interior cleaning 
    Selection of exterior products 

PAYMENTS (Awaiting Antonio)

History:✅
    List of previous washes and buys  
    Date of each one  

API Design:

Endpoints:

    LOGIN✅
        POST/register ---- Register new users 🗸
        POST/login ---- Authenticate users 🗸
        GET/Profile ---- Get user profile details 🗸
        POST/logout ----- Logout of the profile 🗸

    SERVICES✅
        GET/all --- Get list of available wash services 🗸
        POST/create -- Create a service list 🗸
        POST/:id -- Delete a service 🗸
        POST/:id ----- Edit a service 🗸

     PRODUCTS✅
        POST/Product/create-- create product 🗸
        GET/product/all--- get all product 🗸
        PUT/product/:id---edit product by id 🗸
        DELETE/product/:id-- delete product by id 🗸      

    WASH✅
        POST/washes --- Create a wash 🗸
        GET/AllWashes --- Get all washes 🗸
        GET/washes/:id -- Get wash by ID 🗸
        PUT/washes/:id --- Update by ID 🗸
        DELETE/washes/:id --- Delete by ID 🗸

    REVIEWS
        POST/Reviews/:id ----- Create a review for a wash
        GET/Reviews/wash/:wash_id ---- Get all reviews associated with a specific wash
        PUT/Reviews/:id ---- Update an existing review by ID
        DELETE/Reviews/:id -- Delete an existing review by ID
        POST/pay ----- Process payment for a service (Ask Antonio) (npm stripe??)

Database Design MongoDB:

Usuarios  ✅
const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
  suscripcion: { type: Boolean, default: false }
});


SERVICES ✅
const serviceSchema = new mongoose.Schema({
  imagen: { type: String, required: true },
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true }
});

PRODUCTS✅
const productSchema = new mongoose.Schema({
  imagen: { type: String, required: true },
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true }
});


WASH✅
const LavadoSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  service_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  fecha: { type: Date, default: Date.now },
  ubicacion: { type: String, required: true },
  estado: { type: String, enum: ['pendiente', 'completado', 'cancelado'], default: 'pendiente' }
});


REVIEWS
const reviewSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  wash_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Wash', required: true },
  comentario: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  fecha: { type: Date, default: Date.now }
});


SUBSCRIPTION (PREGUNTAR MIGUEL)
const subscriptionSchema = new mongoose.Schema({
   user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
   service_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
   descipcion:{type: String},
   precio: {type: Sting},
   duracion:{type:String}, (monthly & Year)
   dia: { type: Date, required: true, default: Date.now } (DATE?¿?¿)
});


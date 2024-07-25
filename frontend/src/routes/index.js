import {
    App,
    HomePage,
    LoginPage,
    SignUpPage,
    ForgotPasswordPage,
    AdminPanelPage,
    AllUsersPage,
    AllProductsPage,
    CategoryProductPage,
    ProductDetailsPage,
    CartPage,
    SearchProductPage,
    createBrowserRouter
} from "../utils/imports";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <HomePage />
            },
            {
                path: "login",
                element: <LoginPage />
            },
            {
                path: "forgot-password",
                element: <ForgotPasswordPage />
            },
            {
                path: "signup",
                element: <SignUpPage />
            },
            {
                path: "product-category",
                element: <CategoryProductPage />
            },
            {
                path: "cart",
                element: <CartPage />
            },
            {
                path: "product/:id",
                element: <ProductDetailsPage />
            },
            {
                path: "search",
                element: <SearchProductPage />
            },
            {
                path: "admin-panel",
                element: <AdminPanelPage />,
                children: [
                    {
                        path: "all-users",
                        element: <AllUsersPage />
                    },
                    {
                        path: "all-products",
                        element: <AllProductsPage />
                    }
                ]
            }
        ]
    }
]);


export default router;
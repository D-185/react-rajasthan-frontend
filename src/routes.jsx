import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";
import MainLayout from "./layouts/MainLayout";
import { DynamicPage, HomePage, ErrorPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <HomePage />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/:slug",
    element: (
      <MainLayout>
        <DynamicPage />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default function AppRouter() {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}

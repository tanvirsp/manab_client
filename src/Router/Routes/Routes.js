import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import AddEmployee from "../../Pages/AddEmployee/AddEmployee";
import Employee from "../../Pages/Employee/Employee";
import EmployeeDetails from "../../Pages/EmployeeDetails/EmployeeDetails";
import Login from "../../Pages/Login/Login";
import FullWidth from "../../Layout/FullWidth";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element : <PrivateRoute> <Main /> </PrivateRoute>,
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/addEmployee',
                element: <AddEmployee />
            },
            {
                path: '/manageEmployee',
                element: <Employee />
            },
            {
                path: '/employeeDetails/:employeeId',
                loader:  async({params})=>{
                    return fetch(`url/${params.employeeId}`)
                },
                element: <EmployeeDetails />
            },
            {
                path:'/signUp',
                element: <SignUp />
            }
            



        ]
    },

    {
        path: '/login',
        element : <FullWidth />,
        children: [
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
]);


export default router;
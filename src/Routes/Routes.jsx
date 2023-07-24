import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import CollegeInfo from "../Pages/CollegeInfo/CollegeInfo";
import CollegeDetailsData from "../Pages/CollegeDetailsData/CollegeDetailsData";
import ThreeCollegeData from "../Pages/Home/ThreeCollegeData/ThreeCollegeData";
import Admission from "../Pages/Admission/Admission";
import AdmissionForm from "../Pages/AdmissionForm/AdmissionForm";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path:'/collegeinfo',
                element:<CollegeInfo></CollegeInfo>
            },
            {
                path: '/collegedetailsdata/:Id',
                element:<CollegeDetailsData></CollegeDetailsData>,
                loader:async({params})=> {
                  const res =await fetch('http://localhost:5000/collegeinfo/')
                  const data =await res.json()
                  const collegeHistory =data.find(singeldata=> singeldata?._id==params.Id)
                  return collegeHistory
                }
              },   
            {
                path: '/threecollegedata/:Id',
                element:<ThreeCollegeData></ThreeCollegeData>,
                loader:async({params})=> {
                  const res =await fetch('http://localhost:5000/collegeinfo/')
                  const data =await res.json()
                  const collegeHistory =data.find(singeldata=> singeldata?._id==params.Id)
                  return collegeHistory
                }
            },
            {
                path: '/admissionform/:Id',
                element:<AdmissionForm></AdmissionForm>,
                loader:async({params})=> {
                  const res =await fetch('http://localhost:5000/admission')
                  const data =await res.json()
                  const collegeHistory =data.find(singeldata=> singeldata?._id==params.Id)
                  return collegeHistory
                }
            },
            {
                path:'/admission',
                element: <Admission></Admission>
            },
            {
                path:"/mycollege",
                
            } 
        ]
    },
]);
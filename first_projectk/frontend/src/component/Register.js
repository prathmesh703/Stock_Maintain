import React, { useState } from "react";
import Header from "./Header.js";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/userSlice.js";
import { setLoading } from "../redux/userSlice.js";
import {useNavigate} from "react-router-dom"
import { API_END_POINT } from "../utils/constant.js";



const Register = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()  



  const isLoading = useSelector(store => store.user.isLoading)
  
  const LoginHandler = () => {
    setIsLogin(!isLogin);
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    if (isLogin) {
      try {
        console.log(1)
           dispatch(setLoading(true))
            const user = {username,password}
            console.log(user)
            const res =await axios.post(`${API_END_POINT}/login`,user,{
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials:true,
    
            })
            console.log(res)
            dispatch(setUser(res.data.user))
            if(res.data.success){
                toast.success(res.data.msg)
            }
            navigate('/browse')
     
      } catch (error) {
        toast.error(error.response.data.msg)
    }
    finally{
      dispatch(setLoading(false))
    }
    }
    else{
        try {
          dispatch(setLoading(true));
          const user = { name, username, email, password };
          
          const res = await axios.post(`${API_END_POINT}/signup`, user, {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          });
          console.log(res);
          
          if (res.data.success) {
            toast.success(res.data.msg);
          }
          setIsLogin(true);
        } catch (error) {
          toast.error(error.response.data.msg)}
        finally{
          dispatch(setLoading(false))
        }
       
    }
    setEmail('')
       setName('')
       setPassword('')
       setUsername('')
  };
  return (
    <>
      <div className=" text-white">
        <Header user={isLogin} />
      </div>

      <div className="w-full">
        <div className=" absolute w-full h-screen overflow-hidden">
          <img
            className="w-full h-[vh]"
            src="https://www.unleashedsoftware.com/wp-content/uploads/2018/04/inventory-warehouse-boxes.jpg"
            alt="stock"
          />
        </div>
        <form
          onSubmit={SubmitHandler}
          className=" absolute  bg-grey-800 w-3/12 left-0 right-0   mx-auto "
        >
          <div className="bg-gray-600  opacity-85  flex flex-col gap-4 rounded-md my-36 px-4 py-6  items-center ">
            <h1 className="text-white text-3xl font-bold">{isLogin?"Login":"SignUp"}</h1>
            {!isLogin &&(<input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="outline-none rounded-sm bg-gray-800 w-10/12 my-2  p-2 text-sm text-white"
              placeholder="Name"
            ></input>)}
            <input
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className="outline-none rounded-sm bg-gray-800 w-10/12 my-2  p-2 text-sm text-white"
              placeholder="UserName"
            ></input>
            {!isLogin && (
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
                className="outline-none w-10/12 rounded-sm bg-gray-800 my-2 p-2 text-sm text-white"
              ></input>
            )}
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              className="outline-none w-10/12 rounded-sm bg-gray-800 my-1 p-2 text-sm text-white"
            ></input>
            <p className="text-sm text-white">
              {isLogin ? "Create New Account!" : "Already an User!"}{" "}
              <span
                onClick={LoginHandler}
                className="text-sm text-blue-400 underline"
              >
                {isLogin ? "SigUp" : "Login"}
              </span>
            </p>
            <button className="p-2 py-1 flex gap-1  hover:bg-red-600 rounded-md text-white  bg-red-500">
              {isLoading?"loading ...":(isLogin ? "Login" : "SignUp")}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Register;

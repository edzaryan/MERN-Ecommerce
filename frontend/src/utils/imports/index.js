
import React, {
    useContext,
    useEffect,
    useRef,
    useState,
    createContext,
    useCallback
} from 'react';

import {
    Link,
    useLocation,
    useNavigate,
    Outlet,
    createBrowserRouter,
    useParams
} from 'react-router-dom';

import {
    FaAngleLeft,
    FaAngleRight,
    FaShoppingCart,
    FaCloudUploadAlt,
    FaTiktok,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaFacebook,
    FaEye,
    FaStar,
    FaStarHalf
} from 'react-icons/fa';


import styled, { css } from 'styled-components';



import { FaRegCircleUser, FaXTwitter } from 'react-icons/fa6';
import { IoSearch } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { IoMdClose, IoMdEyeOff } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { CiCamera } from "react-icons/ci";


import Context from '../../context';
import UserContext from '../../context/userContext';

import fetchCategoryWiseProduct from '../helpers/fetchCategoryWiseProduct';
import displayINRCurrency from '../helpers/displayCurrency';
import addToCart from '../helpers/addToCart';
import productCategory from "../helpers/productCategory";
import uploadImage from "../helpers/uploadImage";
import scrollTop from "../helpers/scrollTop";

import moment from "moment";

import SummaryApi from '../../common';
import role from '../../common/role';

import { toast } from 'react-toastify';
import imageToBase64 from "../../utils/helpers/imageToBase64";


import SearchInput from '../../components/SearchInput';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import NavLink from "../../components/NavLink";
import SliderButton from "../../components/SliderButton";
import DisplayImage from "../../components/DisplayImage";
import AdminEditProduct from "../../components/AdminEditProduct";
import AdminProductCard from "../../components/AdminProductCard";
import AdminUploadProduct from "../../components/AdminUploadProduct";
import ChangeUserRole from "../../components/ChangeUserRole";
import VerticalCard from "../../components/VerticalCard";
import CategoryList from "../../components/CategoryList";
import BannerProduct from "../../components/BannerProduct";
import ProductSliderSmall from "../../components/HorizontalCardProduct";
import VerticalProductCard from "../../components/VerticalProductCard";
import CategoryWiseProductDisplay from "../../components/CategoryWiseProductDisplay";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";


import image1 from "../../assets/banner/img1.webp";
import image2 from "../../assets/banner/img2.webp";
import image3 from "../../assets/banner/img3.jpg";
import image4 from "../../assets/banner/img4.jpg";
import image5 from "../../assets/banner/img5.webp";

import image1Mobile from "../../assets/banner/img1_mobile.jpg";
import image2Mobile from "../../assets/banner/img2_mobile.webp";
import image3Mobile from "../../assets/banner/img3_mobile.jpg";
import image4Mobile from "../../assets/banner/img4_mobile.jpg";
import image5Mobile from "../../assets/banner/img5_mobile.png";

import loginIcons from "../../assets/icons/signin.gif";
import resetPasswordIcons from "../../assets/icons/forgotpasswnedSend.gif";
import lock from "../../assets/icons/lock.png";

import App from "../../App";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import SignUpPage from "../../pages/SignUpPage";
import ForgotPasswordPage from "../../pages/ForgotPasswordPage";
import AdminPanelPage from "../../pages/AdminPanelPage";
import AllUsersPage from "../../pages/AllUsersPage";
import AllProductsPage from "../../pages/AllProductsPage";
import CategoryProductPage from "../../pages/CategoryProductPage";
import ProductDetailsPage from "../../pages/ProductDetailsPage";
import CartPage from "../../pages/CartPage";
import SearchProductPage from "../../pages/SearchProductPage";

import { ToastContainer } from "react-toastify";


export {
    styled,
    css,
    App,
    HomePage,
    LoginPage,
    SignUpPage,
    ForgotPasswordPage,
    AdminPanelPage,
    AllUsersPage,
    ToastContainer,
    AllProductsPage,
    CategoryProductPage,
    ProductDetailsPage,
    CartPage,
    SearchProductPage,
    Header,
    Footer,
    image1,
    image2,
    image3,
    image4,
    image5,
    image1Mobile,
    image2Mobile,
    image3Mobile,
    image4Mobile,
    image5Mobile,
    loginIcons,
    createBrowserRouter,
    React,
    FaStar,
    FaStarHalf,
    Link,
    NavLink,
    useContext,
    useEffect,
    useRef,
    imageToBase64,
    useState,
    createContext,
    scrollTop,
    FaAngleLeft,
    FaAngleRight,
    Context,
    fetchCategoryWiseProduct,
    displayINRCurrency,
    addToCart,
    useParams,
    FaEye,
    CategoryWiseProductDisplay,
    SummaryApi,
    toast,
    CategoryList,
    BannerProduct,
    ProductSliderSmall,
    VerticalProductCard,
    role,
    useCallback,
    IoMdClose,
    UserContext,
    VerticalCard,
    AdminEditProduct,
    SearchInput,
    Button,
    Logo,
    useLocation,
    useNavigate,
    FaRegCircleUser,
    FaShoppingCart,
    IoSearch,
    SliderButton,
    CgClose,
    FaCloudUploadAlt,
    MdDelete,
    DisplayImage,
    productCategory,
    CiCamera,
    uploadImage,
    MdModeEditOutline,
    FaTiktok,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaFacebook,
    FaXTwitter,
    IoMdEyeOff,
    Outlet,
    AdminProductCard,
    AdminUploadProduct,
    moment,
    MdModeEdit,
    ChangeUserRole,
    resetPasswordIcons,
    lock
};
import {
    useContext,
    useState,
    loginIcons,
    FaEye,
    IoMdEyeOff,
    Link,
    useNavigate,
    SummaryApi,
    toast,
    Context
} from "../utils/imports";


const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const navigation = useNavigate();
    const { fetchUserDetails, fetchUserAddToCart } = useContext(Context);


    const handleChange = (e) => {
        const { name, value } = e.target;
    
        setData(prev => ({...prev, [name]: value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataResponse = await fetch(SummaryApi.signIn.url, {
            method: SummaryApi.signIn.method,
            credentials: "include",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const dataApi = await dataResponse.json();

        if (dataApi.success) {
            toast.success(dataApi.message);
            navigation("/");
            fetchUserDetails();
            fetchUserAddToCart();
        }

        if (dataApi.error) {
            toast.error(dataApi.message);
        }
    }

    return (
        <div className="m-10">
            <form
                className="bg-white rounded-sm shadow-sm py-7 px-5 w-full flex flex-col max-w-sm mx-auto gap-2"
                onSubmit={handleSubmit}>
                <div className="w-20 h-20 mx-auto rounded-full">
                    <img className="rounded-full" src={loginIcons} alt="login icons" />
                </div>
                <div className="grid">
                    <label htmlFor="email">Email</label>
                    <div className="bg-slate-100 mt-1 p-2 rounded-sm">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            onChange={handleChange}
                            value={data.email}
                            placeholder="Enter email"
                            className="w-full h-full outline-none bg-transparent"
                        />
                    </div>
                </div>
                <div className="grid">
                    <label htmlFor="password">Password</label>
                    <div className="bg-slate-100 mt-1 p-2 flex rounded-sm">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            required
                            onChange={handleChange}
                            value={data.password}
                            placeholder="Enter password"
                            className="w-full h-full outline-none bg-transparent"
                        />
                        <div className="cursor-pointer text-xl" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEye /> : <IoMdEyeOff />}</div>
                    </div>
                    <Link to="/forgot-password" className="block w-fit ml-auto hover:underline hover:text-red-600 mt-2">Forgot password?</Link>
                </div>
                <button className="bg-red-600 hover:bg-red-700 text-white py-2 w-full max-w-[150px] rounded-full mx-auto my-5">Login</button>
                <div>Don't have an account? <Link to="/signup" className="text-red-600 hover:text-red-700 hover:underline">Sign up</Link></div>
            </form>
        </div>
    );
};


export default LoginPage;

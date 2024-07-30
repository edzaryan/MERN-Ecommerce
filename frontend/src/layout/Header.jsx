import {
    React,
    useContext,
    useState,
    FaShoppingCart,
    FaRegCircleUser,
    Link,
    useLocation,
    useNavigate,
    SummaryApi,
    toast,
    role,
    Context,
    UserContext,
    SearchInput,
    Button,
    NavLink,
    Logo,
} from "../utils/imports";


const Header = () => {
    const { user, setUser } = useContext(UserContext);
    const [menuDisplay, setMenuDisplay] = useState(false);
    const context = useContext(Context);
    const navigate = useNavigate();
    const searchInput = useLocation();
    const [search, setSearch] = useState(searchInput?.search?.split("=")[1]);

    const handleLogout = async () => {
        const fetchData = await fetch(SummaryApi.logout_user.url, {
            method: SummaryApi.logout_user.method,
            credentials: "include",
        });

        const data = await fetchData.json();

        if (data.success) {
            toast.success(data.message);
            setUser(null);
            navigate("/");
        }

        if (data.error) {
            toast.error(data.message);
        }
    }

    const handleSearch = (e) => {
        const { value } = e.target;
        setSearch(value);

        value
            ? navigate(`/search?v=${value}`)
            : navigate("/search");
    }

    return (
        <div className="fixed top-0 left-0 right-0 border-b border-1 z-50 shadow-sm bg-white">
            <div className="mx-auto h-16 container grid md:grid-cols-[1fr_500px_1fr] grid-cols-[auto_1fr_auto] md:gap-0 gap-10">
                <div className="flex items-center justify-start">
                    <Link className="grid align-middle" to="/">
                        <Logo w={90} h={50} />
                    </Link>
                </div>

                <div className="flex items-center">
                    <SearchInput onChange={handleSearch} value={search} text="Search for anything" />
                </div>

                <div className="flex items-center justify-end">
                    <div className="flex items-center gap-6">
                        {user?._id && (
                            <>
                                <div className="relative">
                                    <div className="cursor-pointer" onClick={() => setMenuDisplay(prev => !prev)}>
                                        {user?.profilePicture ? (
                                            <div
                                                className="w-[40px] h-[40px] rounded-full bg-cover bg-center bg-no-repeat"
                                                style={{backgroundImage: `url(${user?.profilePicture })`}}>
                                            </div>
                                        ) : (
                                            <FaRegCircleUser size={40} />
                                        )}
                                    </div>
                                    {menuDisplay && user?.role === role.ADMIN && (
                                        <div className="absolute grid top-14 left-[-40px] w-[140px] bg-white shadow-sm rounded-sm">
                                            <Link
                                                to="admin-panel"
                                                onClick={() => setMenuDisplay(prev => !prev)}
                                                className="text-gray-800 grid gap-1 py-2 px-4 transition duration-150 hover:bg-gray-100"
                                            >
                                                Admin Panel
                                            </Link>
                                        </div>
                                    )}
                                </div>
                                <Link to="/cart" className="relative no-underline">
                                    <FaShoppingCart size={28} />
                                    <div className="grid align-middle justify-center absolute top-[-10px] right-[-10px] w-5 h-5 bg-red-600 rounded-full text-white text-sm">
                                        {context?.cartProductCount}
                                    </div>
                                </Link>
                            </>
                        )}
                        {user?._id
                            ? <Button onClick={handleLogout} size="md" shape="rounded" variant="danger">Logout</Button>
                            : <NavLink to="/login" variant="danger">Login</NavLink>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Header;




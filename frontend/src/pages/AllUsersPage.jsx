import {
  useEffect,
  useState,
  SummaryApi ,
  toast,
  moment,
  MdModeEdit,
  ChangeUserRole
} from "../utils/imports";


const AllUsersPage = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [openUpdateRole, setOpenUpdateRole] = useState(false);
  const [updateUserDetails, setUpdateUserDetails] = useState({
    _id: "",
    email: "",
    name: "",
    role: ""
  });

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    const fetchData = await fetch(SummaryApi.allUser.url, {
      method: SummaryApi.allUser.method,
      credentials: "include"
    });

    const dataResponse = await fetchData.json();

    if (dataResponse.success) {
      setAllUsers(dataResponse.data);
    }

    if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
  };


  return (
    <div className="bg-white">
      <table className="w-full userTable">
        <thead>
          <tr className="bg-black text-white">
            <th>Sr.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Created Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            allUsers.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.role}</td>
                  <td>{moment(user?.createdAt).format("LL")}</td>
                  <td>
                    <button
                        className="bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white"
                        onClick={() => {
                          setUpdateUserDetails(user);
                          setOpenUpdateRole(true);
                        }}>
                      <MdModeEdit />
                    </button>
                  </td>
                </tr>
            ))
          }
        </tbody>
      </table>
      {
        openUpdateRole && (
          <ChangeUserRole
              {...updateUserDetails}
              onClose={() => setOpenUpdateRole(false)}
              callFunc={fetchAllUsers}
          />
        )
      }  
    </div>
  );
};


export default AllUsersPage;

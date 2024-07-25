import {
    useState,
    IoMdClose,
    SummaryApi,
    toast,
    role as allRoles
} from "../utils/imports";


export const ChangeUserRole = ({ userId, name, email, role, onClose, callFunc }) => {
    const [userRole, setUserRole] = useState(role);

    const updateUserRole = async () => {
        const fetchResponse = await fetch(SummaryApi.updateUser.url, {
            method: SummaryApi.updateUser.method,
            credentials: "include",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                userId,
                role: userRole
            })
        });

        const responseData = await fetchResponse.json();

        if (responseData.success) {
            toast.success("User role updated successfully");
            onClose();
            callFunc();
        } else {
            toast.error(responseData.message);
        }
    };


    return (
        <div
            onClick={onClose}
            className="fixed top-0 bottom-0 left-0 right-0 w-full h-full z-10 flex justify-center items-center bg-slate-200 bg-opacity-50">
            <div
                onClick={e => e.stopPropagation()}
                className="mx-auto bg-white shadow-md p-4 w-full max-w-sm">
                <button className="block ml-auto" onClick={onClose}>
                    <IoMdClose />
                </button>
                <div className="pb-4 text-lg font-medium">Change User Role</div>
                <div>Name: {name}</div>
                <div>Email: {email}</div>
                <div className="flex items-center justify-between my-4">
                    <div>Role</div>
                    <select className="border px-4 py-1" value={userRole} onChange={(e) => setUserRole(e.target.value)}>
                        {Object.values(allRoles).map(el =>
                            <option key={el} value={el}>{el}</option>)}
                    </select>
                </div>
                <button
                    className="w-fit mx-auto block py-1 px-3 rounded-full bg-red-600 text-white hover:bg-red-700"
                    onClick={updateUserRole}>
                    Change Role
                </button>
            </div>
        </div>
    );
};


export default ChangeUserRole;

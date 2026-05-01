import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineVerified } from "react-icons/md";
import { MdVerified } from "react-icons/md";
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { BACK_END_API } from "../Constants";
import { useDispatch, useSelector } from "react-redux";
import { allUser, updateRole, deleteCustomer } from "../store/slices/customerSlice"

const roleOptions = ["user", "admin", "rider"];

const AdminCustomersPage = () => {
  const dispatch = useDispatch();
  const customer = useSelector(state => state.customers?.users);
  const user = useSelector((state) => state.user);


  const fetchUsers = async () => {
    try {
      const res = await fetch(`${BACK_END_API}/api/customers/all`);
      const result = await res.json();
      if (result.success) {
        dispatch(allUser({ data: result.data }));
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleRoleChange = async (id, role) => {
    try {
      const res = await fetch(
        `${BACK_END_API}/api/customers/update-role/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({ role }),
        }
      );

      const result = await res.json();
      if (result.success) {
        toast.success("Role updated");
        dispatch(updateRole({ id, role }))
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };


  const handleDelete = async (id) => {
    if (!confirm("Are you sure to delete this user?")) return;
    try {
      const res = await fetch(`${BACK_END_API}/api/customers/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        }
      }
      );
      const result = await res.json();
      console.log(result)
      if (result.success) {
        toast.success("User deleted");
        dispatch(deleteCustomer({ id }))
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="p-6 text-white">
      <div className="overflow-x-auto flexCenter">
        <table className="w-300 border border-white/10 rounded-lg">
          <thead className="bg-white/5">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Email Verified</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Role</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {customer?.map((SingleUser) => (
              SingleUser.email !== user.email &&
              <tr
                key={SingleUser._id}
                className="border-t border-white/10"
              >
                <td className="p-3">{SingleUser.name}</td>
                <td className="p-3 text-gray-300 text-sm">
                  {SingleUser.email}
                </td>
                <td className="p-3">{SingleUser?.phone || "-"}</td>
                <td className="p-3">{SingleUser?.isEmailVerified ? <span className="flexCenter text-green-700 gap-1"><MdVerified size={22} /> Verfied Email</span> : <span className="flexCenter gap-1"><MdOutlineVerified size={22} />Not Verified</span>}</td>


                {/* Role */}
                <td className="p-3">
                  <select
                    value={SingleUser.role}
                    onChange={(e) =>
                      handleRoleChange(SingleUser._id, e.target.value)
                    }
                    className="bg-black border border-white/20 p-1 rounded"
                  >
                    {roleOptions.map((role) => (
                      <option key={role}>{role}</option>
                    ))}
                  </select>
                </td>

                {/* Actions */}
                <td className="p-3">
                  <button
                    onClick={() => handleDelete(SingleUser._id)}
                    className="bg-red-600 flexCenter gap-2 hover:bg-red-700 px-3 py-1 rounded text-sm"
                  >
                    <AiOutlineDelete size={22} />  Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminCustomersPage;
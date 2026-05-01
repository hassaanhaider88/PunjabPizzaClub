import { useState } from "react";
import {
  MdDashboard,
  MdPeople,
  MdShoppingCart,
  MdInventory2,
  MdVerified,
  MdOutlineVerified,
  MdLogout,
  MdMenu,
  MdClose,
  MdAttachMoney,
  MdTrendingUp,
  MdLocalShipping,
  MdMoreVert,
  MdFilterList,
  MdSearch,
} from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { FiPackage, FiUsers, FiShoppingBag, FiDollarSign } from "react-icons/fi";
import { BsCircleFill } from "react-icons/bs";
import { HiOutlineChevronDown } from "react-icons/hi";

const INITIAL_DATA = {
  usersCount: [
    {
      _id: "69f42536cea8777bb9fd4be7",
      name: "Customer One",
      email: "cuctmerone@pp.com",
      isEmailVerified: true,
      role: "user",
      phone: "03437117831",
      address: "ME lalian se hon",
      createdAt: "2026-05-01T03:59:50.294Z",
    },
    {
      _id: "69f42cb4706f59735bd2fc2b",
      name: "I'M Admin",
      email: "admin@admin.com",
      isEmailVerified: false,
      role: "admin",
      phone: "",
      address: "",
      createdAt: "2026-05-01T04:31:48.207Z",
    },
    {
      _id: "69f433f797bd13d8efd3804e",
      name: "Rider One",
      email: "riderOne@gmail.com",
      isEmailVerified: true,
      role: "rider",
      phone: "",
      address: "",
      createdAt: "2026-05-01T05:02:47.812Z",
    },
    {
      _id: "69f4341497bd13d8efd38050",
      name: "Rider Two",
      email: "ridertwo@gmail.com",
      isEmailVerified: true,
      role: "rider",
      phone: "",
      address: "",
      createdAt: "2026-05-01T05:03:16.601Z",
    },
    {
      _id: "69f4343097bd13d8efd38052",
      name: "Rider Three",
      email: "riderthree@gmail.com",
      isEmailVerified: true,
      role: "rider",
      phone: "",
      address: "",
      createdAt: "2026-05-01T05:03:44.004Z",
    },
    {
      _id: "69f4430c52c464282c86ac39",
      name: "Rider Four",
      email: "riderfour@gmail.com",
      isEmailVerified: true,
      role: "rider",
      phone: "",
      address: "",
      createdAt: "2026-05-01T05:03:44.004Z",
    },
  ],
  ordersCount: [
    {
      _id: "69f44135a95aab492cb8059d",
      orderBy: "69f42536cea8777bb9fd4be7",
      items: [
        {
          name: "10 Nuggets",
          size: "default",
          price: 250,
          quantity: 1,
          url: "https://i.pinimg.com/originals/11/dd/5f/11dd5fbafb0d51b0bf59ca58138e0142.jpg",
        },
      ],
      paymentMethod: "COD",
      orderStatus: "placed",
      paymentStatus: "paid",
      deliveryAddress: "ME lalian se hon",
      city: "lalian",
      street: "usmain masjid",
      contactNumber: "03437117831",
      totalPrice: 250,
      orderAssignTo: "69f4341497bd13d8efd38050",
      createdAt: "2026-05-01T05:59:17.830Z",
    },
    {
      _id: "69f442842cdbcb3c0e55c49d",
      orderBy: "69f42536cea8777bb9fd4be7",
      items: [
        {
          name: "Chicken Tikka B.B.Q",
          size: "Small",
          price: 300,
          quantity: 1,
          url: "https://foodish-api.com/images/pizza/pizza4.jpg",
        },
      ],
      paymentMethod: "COD",
      orderStatus: "confirmed",
      paymentStatus: "unpaid",
      deliveryAddress: "ME lalian se hon",
      city: "lalian",
      street: "usmain masjid",
      contactNumber: "03437117831",
      totalPrice: 300,
      orderAssignTo: "69f4430c52c464282c86ac39",
      createdAt: "2026-05-01T06:04:52.057Z",
    },
  ],
  productsCount: 50,
};

const roleOptions = ["user", "admin", "rider"];

const CURRENT_ADMIN_EMAIL = "admin@admin.com";

const roleColors = {
  admin: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
  rider: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
  user: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
};

const orderStatusColors = {
  placed: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
  confirmed: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
  delivered: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
  cancelled: "bg-red-500/20 text-red-400 border border-red-500/30",
};

const paymentStatusColors = {
  paid: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
  unpaid: "bg-red-500/20 text-red-400 border border-red-500/30",
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-PK", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function getInitials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function avatarColor(name) {
  const colors = [
    "bg-purple-500",
    "bg-pink-500",
    "bg-amber-500",
    "bg-teal-500",
    "bg-blue-500",
    "bg-rose-500",
  ];
  let sum = 0;
  for (let i = 0; i < name.length; i++) sum += name.charCodeAt(i);
  return colors[sum % colors.length];
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [users, setUsers] = useState(INITIAL_DATA.usersCount);
  const [orders, setOrders] = useState(INITIAL_DATA.ordersCount);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [orderFilter, setOrderFilter] = useState("all");
  const [toastMsg, setToastMsg] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);

  function showToast(msg, type = "success") {
    setToastMsg({ msg, type });
    setTimeout(() => setToastMsg(null), 3000);
  }

  function handleRoleChange(id, role) {
    setUsers((prev) =>
      prev.map((u) => (u._id === id ? { ...u, role } : u))
    );
    showToast("Role updated successfully");
  }

  function handleDeleteUser(id) {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    setUsers((prev) => prev.filter((u) => u._id !== id));
    showToast("User deleted", "error");
  }

  function handleDeleteOrder(id) {
    if (!window.confirm("Delete this order?")) return;
    setOrders((prev) => prev.filter((o) => o._id !== id));
    showToast("Order removed", "error");
  }

  function handleOrderStatusChange(id, status) {
    setOrders((prev) =>
      prev.map((o) => (o._id === id ? { ...o, orderStatus: status } : o))
    );
    showToast("Order status updated");
  }

  const totalRevenue = orders.reduce((s, o) => s + o.totalPrice, 0);
  const paidOrders = orders.filter((o) => o.paymentStatus === "paid").length;
  const riders = users.filter((u) => u.role === "rider").length;
  const customers = users.filter((u) => u.role === "user").length;

  const filteredUsers = users.filter((u) => {
    const matchSearch =
      u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchRole = roleFilter === "all" || u.role === roleFilter;
    return matchSearch && matchRole && u.email !== CURRENT_ADMIN_EMAIL;
  });

  const filteredOrders = orders.filter((o) => {
    const matchStatus = orderFilter === "all" || o.orderStatus === orderFilter;
    return matchStatus;
  });

  const navItems = [
    { id: "overview", label: "Overview", icon: MdDashboard },
    { id: "orders", label: "Orders", icon: MdShoppingCart },
    { id: "customers", label: "Users", icon: MdPeople },
  ];

  const statCards = [
    {
      label: "Total Revenue",
      value: `Rs. ${totalRevenue.toLocaleString()}`,
      icon: FiDollarSign,
      color: "from-amber-500/20 to-amber-600/10",
      iconColor: "text-amber-400",
      border: "border-amber-500/20",
    },
    {
      label: "Total Orders",
      value: orders.length,
      icon: FiShoppingBag,
      color: "from-blue-500/20 to-blue-600/10",
      iconColor: "text-blue-400",
      border: "border-blue-500/20",
    },
    {
      label: "Total Products",
      value: INITIAL_DATA.productsCount,
      icon: FiPackage,
      color: "from-purple-500/20 to-purple-600/10",
      iconColor: "text-purple-400",
      border: "border-purple-500/20",
    },
    {
      label: "Total Users",
      value: users.length,
      icon: FiUsers,
      color: "from-emerald-500/20 to-emerald-600/10",
      iconColor: "text-emerald-400",
      border: "border-emerald-500/20",
    },
  ];

  return (
    <div className="flex h-screen bg-[#0a0a0f] text-white font-sans overflow-hidden">
      {toastMsg && (
        <div
          className={`fixed top-5 right-5 z-50 px-5 py-3 rounded-xl text-sm font-medium shadow-2xl transition-all border ${toastMsg.type === "error"
              ? "bg-red-950 text-red-300 border-red-700/50"
              : "bg-emerald-950 text-emerald-300 border-emerald-700/50"
            }`}
        >
          {toastMsg.msg}
        </div>
      )}

      {selectedOrder && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setSelectedOrder(null)}
        >
          <div
            className="bg-[#13131a] border border-white/10 rounded-2xl p-6 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-semibold text-white">Order Details</h2>
              <button
                onClick={() => setSelectedOrder(null)}
                className="text-gray-400 hover:text-white"
              >
                <MdClose size={20} />
              </button>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-gray-400">Order ID</span>
                <span className="text-white font-mono text-xs truncate max-w-[160px]">
                  #{selectedOrder._id.slice(-8).toUpperCase()}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-gray-400">Date</span>
                <span>{formatDate(selectedOrder.createdAt)}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-gray-400">Payment</span>
                <span>{selectedOrder.paymentMethod}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-gray-400">City</span>
                <span className="capitalize">{selectedOrder.city}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-gray-400">Street</span>
                <span className="capitalize">{selectedOrder.street}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-gray-400">Contact</span>
                <span>{selectedOrder.contactNumber}</span>
              </div>
              <div className="pt-2">
                <p className="text-gray-400 mb-2">Items</p>
                {selectedOrder.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white/5 rounded-xl p-3"
                  >
                    <img
                      src={item.url}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover"
                      onError={(e) => {
                        e.target.src =
                          "https://placehold.co/48x48/1a1a2e/888?text=IMG";
                      }}
                    />
                    <div className="flex-1">
                      <p className="font-medium text-white">{item.name}</p>
                      <p className="text-gray-400 text-xs">
                        Size: {item.size} · Qty: {item.quantity}
                      </p>
                    </div>
                    <span className="text-amber-400 font-semibold">
                      Rs. {item.price}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between pt-3 text-base font-semibold">
                <span>Total</span>
                <span className="text-amber-400">
                  Rs. {selectedOrder.totalPrice}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <aside
        className={`${sidebarOpen ? "w-60" : "w-16"
          } transition-all duration-300 bg-[#0d0d14] border-r border-white/5 flex flex-col shrink-0`}
      >
        <div className="flex items-center gap-3 px-4 py-5 border-b border-white/5">
          <div className="w-8 h-8 rounded-xl bg-amber-500 flex items-center justify-center shrink-0">
            <MdInventory2 size={16} className="text-black" />
          </div>
          {sidebarOpen && (
            <span className="font-bold text-base tracking-tight truncate">
              FoodAdmin
            </span>
          )}
        </div>

        <nav className="flex-1 px-2 py-4 space-y-1">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-sm font-medium ${activeTab === id
                  ? "bg-amber-500/15 text-amber-400 border border-amber-500/20"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
            >
              <Icon size={18} className="shrink-0" />
              {sidebarOpen && <span>{label}</span>}
            </button>
          ))}
        </nav>

        <div className="px-2 pb-4 border-t border-white/5 pt-4">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all text-sm font-medium">
            <MdLogout size={18} className="shrink-0" />
            {sidebarOpen && <span>Sign Out</span>}
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0d0d14]">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {sidebarOpen ? <MdClose size={20} /> : <MdMenu size={20} />}
            </button>
            <div>
              <h1 className="font-semibold text-white text-base leading-none">
                {navItems.find((n) => n.id === activeTab)?.label}
              </h1>
              <p className="text-xs text-gray-500 mt-0.5">
                {new Date().toLocaleDateString("en-PK", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 text-xs font-bold">
              A
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-white leading-none">
                I'M Admin
              </p>
              <p className="text-xs text-gray-500 mt-0.5">Administrator</p>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {statCards.map((card) => (
                  <div
                    key={card.label}
                    className={`bg-gradient-to-br ${card.color} border ${card.border} rounded-2xl p-5 flex flex-col gap-3`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                        {card.label}
                      </span>
                      <div
                        className={`w-9 h-9 rounded-xl bg-black/30 flex items-center justify-center ${card.iconColor}`}
                      >
                        <card.icon size={18} />
                      </div>
                    </div>
                    <p className="text-2xl font-bold text-white">{card.value}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-[#0d0d14] border border-white/5 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-white">Recent Orders</h3>
                    <button
                      onClick={() => setActiveTab("orders")}
                      className="text-xs text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      View all
                    </button>
                  </div>
                  <div className="space-y-3">
                    {orders.map((order) => (
                      <div
                        key={order._id}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/3 hover:bg-white/5 transition-colors cursor-pointer"
                        onClick={() => setSelectedOrder(order)}
                      >
                        <img
                          src={order.items[0]?.url}
                          alt={order.items[0]?.name}
                          className="w-10 h-10 rounded-xl object-cover shrink-0"
                          onError={(e) => {
                            e.target.src =
                              "https://placehold.co/40x40/1a1a2e/888?text=IMG";
                          }}
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white truncate">
                            {order.items[0]?.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {formatDate(order.createdAt)}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-sm font-semibold text-amber-400">
                            Rs. {order.totalPrice}
                          </p>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full font-medium ${orderStatusColors[order.orderStatus]
                              }`}
                          >
                            {order.orderStatus}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#0d0d14] border border-white/5 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-white">User Breakdown</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      {
                        label: "Customers",
                        count: customers,
                        total: users.length,
                        color: "bg-emerald-500",
                      },
                      {
                        label: "Riders",
                        count: riders,
                        total: users.length,
                        color: "bg-blue-500",
                      },
                      {
                        label: "Admins",
                        count: users.filter((u) => u.role === "admin").length,
                        total: users.length,
                        color: "bg-amber-500",
                      },
                    ].map((item) => (
                      <div key={item.label} className="space-y-1.5">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">{item.label}</span>
                          <span className="text-white font-medium">
                            {item.count}
                          </span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${item.color} rounded-full transition-all duration-500`}
                            style={{
                              width: `${Math.round(
                                (item.count / item.total) * 100
                              )}%`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5">
                    <h4 className="text-sm font-medium text-gray-400 mb-3">
                      Payment Overview
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 text-center">
                        <p className="text-2xl font-bold text-emerald-400">
                          {paidOrders}
                        </p>
                        <p className="text-xs text-emerald-600 mt-1">
                          Paid Orders
                        </p>
                      </div>
                      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 text-center">
                        <p className="text-2xl font-bold text-red-400">
                          {orders.length - paidOrders}
                        </p>
                        <p className="text-xs text-red-600 mt-1">Unpaid Orders</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "orders" && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 bg-[#0d0d14] border border-white/10 rounded-xl px-3 py-2 flex-1 min-w-[200px]">
                  <MdSearch size={16} className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search orders..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent text-sm text-white placeholder-gray-500 outline-none flex-1"
                  />
                </div>
                <div className="flex items-center gap-2 bg-[#0d0d14] border border-white/10 rounded-xl px-3 py-2">
                  <MdFilterList size={16} className="text-gray-400" />
                  <select
                    value={orderFilter}
                    onChange={(e) => setOrderFilter(e.target.value)}
                    className="bg-transparent text-sm text-gray-300 outline-none cursor-pointer"
                  >
                    <option value="all" className="bg-[#0d0d14]">
                      All Status
                    </option>
                    <option value="placed" className="bg-[#0d0d14]">
                      Placed
                    </option>
                    <option value="confirmed" className="bg-[#0d0d14]">
                      Confirmed
                    </option>
                    <option value="delivered" className="bg-[#0d0d14]">
                      Delivered
                    </option>
                    <option value="cancelled" className="bg-[#0d0d14]">
                      Cancelled
                    </option>
                  </select>
                </div>
              </div>

              <div className="bg-[#0d0d14] border border-white/5 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/5">
                        {[
                          "Order",
                          "Item",
                          "Total",
                          "Payment",
                          "Status",
                          "Assigned To",
                          "Date",
                          "Actions",
                        ].map((h) => (
                          <th
                            key={h}
                            className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {filteredOrders.length === 0 ? (
                        <tr>
                          <td
                            colSpan={8}
                            className="px-5 py-10 text-center text-gray-500 text-sm"
                          >
                            No orders found
                          </td>
                        </tr>
                      ) : (
                        filteredOrders.map((order) => {
                          const assignedRider = users.find(
                            (u) => u._id === order.orderAssignTo
                          );
                          return (
                            <tr
                              key={order._id}
                              className="hover:bg-white/2 transition-colors"
                            >
                              <td className="px-5 py-4 text-xs font-mono text-gray-400">
                                #{order._id.slice(-6).toUpperCase()}
                              </td>
                              <td className="px-5 py-4">
                                <div className="flex items-center gap-3">
                                  <img
                                    src={order.items[0]?.url}
                                    alt={order.items[0]?.name}
                                    className="w-9 h-9 rounded-lg object-cover shrink-0"
                                    onError={(e) => {
                                      e.target.src =
                                        "https://placehold.co/36x36/1a1a2e/888?text=IMG";
                                    }}
                                  />
                                  <div>
                                    <p className="text-sm text-white font-medium">
                                      {order.items[0]?.name}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                      Size: {order.items[0]?.size}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-5 py-4 text-sm font-semibold text-amber-400">
                                Rs. {order.totalPrice}
                              </td>
                              <td className="px-5 py-4">
                                <span
                                  className={`text-xs px-2.5 py-1 rounded-full font-medium ${paymentStatusColors[order.paymentStatus]
                                    }`}
                                >
                                  {order.paymentStatus}
                                </span>
                              </td>
                              <td className="px-5 py-4">
                                <select
                                  value={order.orderStatus}
                                  onChange={(e) =>
                                    handleOrderStatusChange(
                                      order._id,
                                      e.target.value
                                    )
                                  }
                                  className={`text-xs px-2.5 py-1 rounded-full font-medium border bg-transparent cursor-pointer outline-none ${orderStatusColors[order.orderStatus]
                                    }`}
                                >
                                  {[
                                    "placed",
                                    "confirmed",
                                    "delivered",
                                    "cancelled",
                                  ].map((s) => (
                                    <option
                                      key={s}
                                      value={s}
                                      className="bg-[#0d0d14] text-white"
                                    >
                                      {s}
                                    </option>
                                  ))}
                                </select>
                              </td>
                              <td className="px-5 py-4">
                                {assignedRider ? (
                                  <div className="flex items-center gap-2">
                                    <div
                                      className={`w-7 h-7 rounded-full ${avatarColor(
                                        assignedRider.name
                                      )} flex items-center justify-center text-white text-xs font-bold`}
                                    >
                                      {getInitials(assignedRider.name)}
                                    </div>
                                    <span className="text-sm text-gray-300 hidden md:block">
                                      {assignedRider.name}
                                    </span>
                                  </div>
                                ) : (
                                  <span className="text-xs text-gray-500">
                                    Unassigned
                                  </span>
                                )}
                              </td>
                              <td className="px-5 py-4 text-xs text-gray-400">
                                {formatDate(order.createdAt)}
                              </td>
                              <td className="px-5 py-4">
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={() => setSelectedOrder(order)}
                                    className="text-xs px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                                  >
                                    View
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleDeleteOrder(order._id)
                                    }
                                    className="text-xs px-3 py-1.5 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 transition-colors"
                                  >
                                    <AiOutlineDelete size={14} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === "customers" && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 bg-[#0d0d14] border border-white/10 rounded-xl px-3 py-2 flex-1 min-w-[200px]">
                  <MdSearch size={16} className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent text-sm text-white placeholder-gray-500 outline-none flex-1"
                  />
                </div>
                <div className="flex items-center gap-2 bg-[#0d0d14] border border-white/10 rounded-xl px-3 py-2">
                  <MdFilterList size={16} className="text-gray-400" />
                  <select
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value)}
                    className="bg-transparent text-sm text-gray-300 outline-none cursor-pointer"
                  >
                    <option value="all" className="bg-[#0d0d14]">
                      All Roles
                    </option>
                    {roleOptions.map((r) => (
                      <option key={r} value={r} className="bg-[#0d0d14]">
                        {r.charAt(0).toUpperCase() + r.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="text-xs text-gray-500 px-3 py-2 bg-[#0d0d14] border border-white/10 rounded-xl">
                  {filteredUsers.length} result{filteredUsers.length !== 1 && "s"}
                </div>
              </div>

              <div className="bg-[#0d0d14] border border-white/5 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/5">
                        {[
                          "User",
                          "Email",
                          "Phone",
                          "Email Verified",
                          "Role",
                          "Joined",
                          "Actions",
                        ].map((h) => (
                          <th
                            key={h}
                            className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {filteredUsers.length === 0 ? (
                        <tr>
                          <td
                            colSpan={7}
                            className="px-5 py-10 text-center text-gray-500 text-sm"
                          >
                            No users found
                          </td>
                        </tr>
                      ) : (
                        filteredUsers.map((u) => (
                          <tr
                            key={u._id}
                            className="hover:bg-white/2 transition-colors"
                          >
                            <td className="px-5 py-4">
                              <div className="flex items-center gap-3">
                                <div
                                  className={`w-9 h-9 rounded-full ${avatarColor(
                                    u.name
                                  )} flex items-center justify-center text-white text-xs font-bold shrink-0`}
                                >
                                  {getInitials(u.name)}
                                </div>
                                <span className="text-sm text-white font-medium">
                                  {u.name}
                                </span>
                              </div>
                            </td>
                            <td className="px-5 py-4 text-sm text-gray-400">
                              {u.email}
                            </td>
                            <td className="px-5 py-4 text-sm text-gray-400">
                              {u.phone || (
                                <span className="text-gray-600">—</span>
                              )}
                            </td>
                            <td className="px-5 py-4">
                              {u.isEmailVerified ? (
                                <span className="flex items-center gap-1.5 text-emerald-400 text-xs font-medium">
                                  <MdVerified size={15} />
                                  Verified
                                </span>
                              ) : (
                                <span className="flex items-center gap-1.5 text-gray-500 text-xs font-medium">
                                  <MdOutlineVerified size={15} />
                                  Unverified
                                </span>
                              )}
                            </td>
                            <td className="px-5 py-4">
                              <select
                                value={u.role}
                                onChange={(e) =>
                                  handleRoleChange(u._id, e.target.value)
                                }
                                className={`text-xs px-3 py-1.5 rounded-full font-medium border bg-transparent cursor-pointer outline-none ${roleColors[u.role]
                                  }`}
                              >
                                {roleOptions.map((r) => (
                                  <option
                                    key={r}
                                    value={r}
                                    className="bg-[#0d0d14] text-white"
                                  >
                                    {r}
                                  </option>
                                ))}
                              </select>
                            </td>
                            <td className="px-5 py-4 text-xs text-gray-500">
                              {formatDate(u.createdAt)}
                            </td>
                            <td className="px-5 py-4">
                              <button
                                onClick={() => handleDeleteUser(u._id)}
                                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 transition-colors font-medium"
                              >
                                <AiOutlineDelete size={14} />
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
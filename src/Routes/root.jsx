import { Outlet,Link } from "react-router-dom";

export function SideBar() {
  return (
    <div
      className="bg-gray-600 rounded-lg  fixed  ml-3"
      style={{ minHeight: "calc(100vh - 34px)", width: "300px" }}
    >
      <div className="flex items-center flex-col	">
        <img src="/public/AOS.png" alt="" style={{ width: "195px" }} />
      </div>
      <div className="text-white text-2xl font-bold text-center mb-5">
        <Link to="/home">Home</Link>
      </div>
      <div className="text-white text-2xl font-bold  text-center mb-5">
        <Link to="/shop">Shop</Link>
      </div>
      <div className="text-white text-2xl font-bold  text-center">
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );  
}
export default function Root() {
  return (
    <div className="relative">
      <SideBar />
      <div className="flex justify-end gap-10  my-4 ">
        <div
          className="  rounded-lg "
          style={{ flexBasis: "70%", minHeight: "calc(100vh - 34px)" }}
        >
          <div className="bg-gray-600 h-20 w-100 rounded-lg"></div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
  
}
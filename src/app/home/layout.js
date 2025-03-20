import Sidebar from "@/components/Sidebar";

export default function Layout({ children }) {
    return (
        <div className="app min-h-screen min-w-full bg-slate-500 flex">
        <Sidebar />
        <div className="children md:ml-38 flex-grow flex-wrap lg:ml-48 ">
          {children}
        </div>
      </div>
    );
  }
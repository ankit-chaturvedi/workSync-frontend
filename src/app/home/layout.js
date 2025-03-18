import Sidebar from "@/components/Sidebar";

export default function Layout({ children }) {
    return (
        <div className="app min-h-screen min-w-full bg-slate-500 flex">
        <Sidebar/>
        <div className="children ml-48 flex-grow">
          {children}
        </div>
      </div>
    );
  }
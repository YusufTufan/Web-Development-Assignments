import ProfileTable from "./components/ProfileTable";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
          <Toaster richColors position="top-right" expand={true} />
          <ProfileTable />
        </div>
        <div className="text-center mt-6 text-gray-400 text-sm">
          &copy; Öğrenci Yönetim Sistemi
        </div>
      </div>
    </div>
  );
}

export default App;
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";
// Using UserCheck icon for a "Profile Completed" status
import {
  Search,
  Loader2,
  UserCheck,
  GraduationCap,
  Phone,
  MapPin,
  School,
} from "lucide-react";

const StudentProfiles = () => {
  const { token, backendUrl } = useContext(AppContext);
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchProfiles = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        backendUrl + "/api/admin/student-profiles",
        {
          headers: { token },
        },
      );

      if (data.success) {
        setProfiles(data.profiles || []);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchProfiles();
  }, [token]);

  // Search logic covers both possible name fields and phone
  const filteredProfiles = profiles.filter((student) => {
    const name = student?.name || student?.fullName || "";
    const phone = student?.phoneNumber || "";
    return (
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      phone.includes(searchTerm)
    );
  });

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader2 className="animate-spin text-blue-600" size={40} />
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-10 p-4 md:p-0">
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl md:text-3xl font-extrabold text-blue-600 tracking-tight uppercase">
            Completed Profiles
          </h1>
          <p className="text-gray-500 text-sm font-medium">
            Viewing {filteredProfiles.length} verified student records.
          </p>
        </div>

        <div className="relative w-full md:w-80">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search student name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm font-medium"
          />
        </div>
      </div>

      {/* --- 💻 DESKTOP TABLE --- */}
      <div className="hidden md:block bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Student Full Name
                </th>
                <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Academic Details
                </th>
                <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Institution
                </th>
                <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-widest text-center">
                  Contact
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredProfiles.map((student, index) => (
                <tr
                  key={student._id || index}
                  className="hover:bg-blue-50/30 transition-colors"
                >
                  <td className="p-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                        <UserCheck size={20} />
                      </div>
                      <div>
                        {/* Check both common field names for the student name */}
                        <p className="font-extrabold text-gray-900 text-base">
                          {student?.name ||
                            student?.fullName ||
                            "Unknown Student"}
                        </p>
                        <p className="text-[10px] text-blue-500 font-black uppercase tracking-wider">
                          {student?.gender || "Not Provided"}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-5">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1 text-gray-700">
                        <GraduationCap size={14} className="text-gray-400" />
                        <span className="text-xs font-bold uppercase">
                          {student?.track}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-md w-fit">
                        LEVEL: {student?.level}
                      </span>
                    </div>
                  </td>
                  <td className="p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <School size={14} className="text-gray-400" />
                      <p className="text-sm font-bold text-gray-700">
                        {student?.schoolName}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <MapPin size={12} />
                      <span className="text-xs font-medium">
                        {student?.location}
                      </span>
                    </div>
                  </td>
                  <td className="p-5 text-center">
                    <a
                      href={`https://wa.me/${student?.phoneNumber}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-50 text-green-600 text-xs font-bold hover:bg-green-600 hover:text-white transition-all shadow-sm"
                    >
                      <Phone size={14} />
                      {student?.phoneNumber ? student.phoneNumber : "No Number"}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- 📱 MOBILE CARDS --- */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {filteredProfiles.map((student, index) => (
          <div
            key={student._id || index}
            className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <UserCheck size={24} />
              </div>
              <div>
                <p className="font-black text-gray-900 text-lg leading-tight">
                  {student?.name || student?.fullName || "Unknown Student"}
                </p>
                <p className="text-[10px] font-bold text-blue-500 uppercase">
                  {student?.gender} • {student?.track}
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-2xl space-y-2">
              <p className="text-xs font-bold text-gray-700 flex items-center gap-2">
                <School size={14} className="text-blue-500" />{" "}
                {student?.schoolName}
              </p>
              <p className="text-[11px] font-medium text-gray-500 flex items-center gap-2">
                <MapPin size={14} /> {student?.location}
              </p>
            </div>

            <a
              href={`https://wa.me/${student?.phoneNumber}`}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-green-600 text-white rounded-2xl font-bold text-sm shadow-md"
            >
              <Phone size={18} />
              {student?.phoneNumber
                ? student.phoneNumber
                : "No Number Provided"}
            </a>
          </div>
        ))}
      </div>

      {/* --- EMPTY STATE --- */}
      {filteredProfiles.length === 0 && (
        <div className="p-20 text-center bg-white rounded-3xl border border-dashed border-gray-200 text-gray-400">
          <Search className="mx-auto mb-2 opacity-20" size={40} />
          <p className="font-bold uppercase tracking-widest text-xs">
            No records found matching your search
          </p>
        </div>
      )}
    </div>
  );
};

export default StudentProfiles;

import { Table, TableBody, TableHead, TableHeadCell } from "flowbite-react";
import type { Profile } from "../types/Profile";
import { ProfileRow } from "./ProfileRow";
import { useEffect, useState } from "react";
import { ProfileFormModal } from "./ProfileFormModal";
import { api } from "../helper/api";

const ProfileTable = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  function fetchProfiles() {
    api.get("profiles")
      .then((res) => setProfiles(res.data))
      .catch((err) => console.error("Hata:", err));
  }

  useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <div className="p-4">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Kullanıcı Listesi</h2>
          <p className="text-gray-500 text-sm mt-1">Sistemdeki kayıtlı kullanıcıları yönetin</p>
        </div>
        <ProfileFormModal fetchProfiles={fetchProfiles} profile={null} />
      </div>
      
      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
        <Table hoverable>
          <TableHead className="bg-gray-100 text-gray-700 uppercase text-xs font-bold">
            <tr>
              <TableHeadCell className="py-4">Fotoğraf</TableHeadCell>
              <TableHeadCell>Kullanıcı Adı</TableHeadCell>
              <TableHeadCell>Email</TableHeadCell>
              <TableHeadCell>Tip</TableHeadCell>
              <TableHeadCell>İşlemler</TableHeadCell>
            </tr>
          </TableHead>
          <TableBody className="divide-y divide-gray-200 bg-white">
            {profiles.map((p) => (
              <ProfileRow key={p.id} fetchProfiles={fetchProfiles} profile={p} />
            ))}
          </TableBody>
        </Table>
        {profiles.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            Henüz kayıtlı profil bulunamadı.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileTable;
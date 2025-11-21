import { Button, Modal, ModalBody, ModalHeader, TableCell, TableRow } from "flowbite-react";
import type { Profile } from "../types/Profile";
import { ProfileFormModal } from "./ProfileFormModal";
import { FaTrash } from "react-icons/fa";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useState } from "react";
import { api } from "../helper/api";
import { toast } from "sonner";

interface Props {
  fetchProfiles: () => void;
  profile: Profile;
}

export const ProfileRow = ({ fetchProfiles, profile }: Props) => {
  const [showDelete, setShowDelete] = useState(false);

  return (
    <>
      <Modal show={showDelete} size="md" position="center" onClose={() => setShowDelete(false)} dismissible>
        <ModalHeader />
        <ModalBody>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400" />
            <h3 className="mb-5 text-lg font-normal text-gray-500">
              Bu profili silmek istediğinize emin misiniz?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="red" onClick={() => {
                  api.delete("profiles/" + profile.id)
                    .then(() => {
                      fetchProfiles();
                      setShowDelete(false);
                      toast.success("Profil silindi");
                    })
                    .catch(() => toast.error("Hata oluştu"));
                }}>
                Evet, Sil
              </Button>
              <Button color="gray" onClick={() => setShowDelete(false)}>İptal</Button>
            </div>
          </div>
        </ModalBody>
      </Modal>

      <TableRow>
        <TableCell>
          {profile.photo ? (
             <img src={profile.photo} alt="Profile" className="w-10 h-10 rounded-full object-cover border border-gray-300" />
          ) : (
             <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs">No Img</div>
          )}
        </TableCell>
        <TableCell>{profile.username}</TableCell>
        <TableCell>{profile.email}</TableCell>
        <TableCell>{profile.profileType?.name}</TableCell>
        <TableCell>
          <div className="flex gap-2">
            <ProfileFormModal fetchProfiles={fetchProfiles} profile={profile} />
            <Button size="xs" color="red" onClick={() => setShowDelete(true)}>
              <FaTrash />
            </Button>
          </div>
        </TableCell>
      </TableRow>
    </>
  );
};
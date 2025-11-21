import {
  Button,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  TextInput,
  FileInput,
  Select,
} from "flowbite-react";
import { useState, useEffect } from "react";
import { showErrors } from "../helper/helper";
import type { Profile } from "../types/Profile";
import type { ProfileType } from "../types/ProfileType";
import { FaEdit, FaUserPlus } from "react-icons/fa";
import { api } from "../helper/api";
import { toast } from "sonner";

interface Props {
  fetchProfiles: () => void;
  profile: Profile | null;
}

export const ProfileFormModal = ({ fetchProfiles, profile }: Props) => {
  const [show, setShow] = useState(false);
  const [profileTypes, setProfileTypes] = useState<ProfileType[]>([]);
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileTypeId, setProfileTypeId] = useState("");
  const [photoFile, setPhotoFile] = useState<File | null>(null);

  useEffect(() => {
    if (show) {
      api.get("profileTypes").then((res) => {
        setProfileTypes(res.data);
        if (!profile && res.data.length > 0) {
          setProfileTypeId((prev) => prev || res.data[0].id.toString());
        }
      });

      if (profile) {
        setUsername(profile.username);
        setEmail(profile.email);
        setProfileTypeId(profile.profileType?.id.toString() || "");
      } else {
        setUsername("");
        setEmail("");
      }
      setPassword("");
      setConfirmPassword("");
      setPhotoFile(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, profile]);

  function handleSave() {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);

    if (password) formData.append("password", password);
    if (confirmPassword) formData.append("confirmPassword", confirmPassword);
    if (profileTypeId) formData.append("profileTypeId", profileTypeId);
    if (photoFile) formData.append("photo", photoFile);

    const request = profile
      ? api.patch("profiles/" + profile.id, formData, { headers: { "Content-Type": "multipart/form-data" } })
      : api.post("profiles", formData, { headers: { "Content-Type": "multipart/form-data" } });

    request
      .then(() => {
        fetchProfiles();
        toast.success(profile ? "Kayıt güncellendi" : "Yeni kayıt oluşturuldu");
        setShow(false);
      })
      .catch((error) => showErrors(error));
  }

  function getButton() {
    if (profile == null)
      return (
        <Button color="blue" onClick={() => setShow(true)}>
          <FaUserPlus className="mr-2 h-4 w-4" /> Yeni Profil Ekle
        </Button>
      );
    return (
      <Button size="xs" color="gray" className="border-gray-300 text-blue-600 hover:bg-blue-50" onClick={() => setShow(true)}>
        <FaEdit />
      </Button>
    );
  }

  const inputStyle = "text-black bg-white border-gray-400 focus:border-blue-500 focus:ring-blue-500";

  return (
    <>
      {getButton()}
      <Modal show={show} size="md" position="center" onClose={() => setShow(false)} dismissible>
        <ModalHeader>
           {profile == null ? "Yeni Kullanıcı Oluştur" : "Profili Düzenle"}
        </ModalHeader>
        <ModalBody>
          <div className="space-y-4">            
            <div>
              <div className="mb-2 block"><Label className="text-gray-700 font-bold">Kullanıcı Adı</Label></div>
              <TextInput 
                className={inputStyle}
                style={{ color: 'black', backgroundColor: 'white' }}
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Örn: ahmetyilmaz" 
              />
            </div>

            <div>
              <div className="mb-2 block"><Label className="text-gray-700 font-bold">Email Adresi</Label></div>
              <TextInput 
                type="email" 
                className={inputStyle}
                style={{ color: 'black', backgroundColor: 'white' }}
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="isim@sirket.com" 
              />
            </div>

            <div>
              <div className="mb-2 block"><Label className="text-gray-700 font-bold">Kullanıcı Yetkisi</Label></div>
              <Select 
                className={inputStyle}
                style={{ color: 'black', backgroundColor: 'white' }}
                value={profileTypeId} 
                onChange={(e) => setProfileTypeId(e.target.value)}
              >
                <option value="" disabled>Yetki Seçiniz</option>
                {profileTypes.map((pt) => (
                  <option key={pt.id} value={pt.id} className="text-black">{pt.name}</option>
                ))}
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="mb-2 block"><Label className="text-gray-700 font-bold">Şifre</Label></div>
                <TextInput 
                  type="password" 
                  className={inputStyle}
                  style={{ color: 'black', backgroundColor: 'white' }}
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  placeholder={profile ? "Boş bırakılabilir" : "***"} 
                />
              </div>
              <div>
                <div className="mb-2 block"><Label className="text-gray-700 font-bold">Şifre Tekrar</Label></div>
                <TextInput 
                  type="password" 
                  className={inputStyle}
                  style={{ color: 'black', backgroundColor: 'white' }}
                  value={confirmPassword} 
                  onChange={(e) => setConfirmPassword(e.target.value)} 
                  placeholder="***" 
                />
              </div>
            </div>

            <div>
              <div className="mb-2 block"><Label className="text-gray-700 font-bold">Profil Fotoğrafı</Label></div>
              <FileInput onChange={(e) => setPhotoFile(e.target.files ? e.target.files[0] : null)} />
              <p className="mt-1 text-xs text-gray-500">PNG, JPG veya JPEG (Max. 2MB)</p>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
           <Button color="blue" className="w-full" onClick={handleSave}>
              {profile ? "Değişiklikleri Kaydet" : "Kaydı Tamamla"}
           </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
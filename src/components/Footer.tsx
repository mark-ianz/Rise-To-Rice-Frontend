import { MailIcon, PhoneCall } from "lucide-react";
import BarangaySilanganLogo from "./logo/BarangaySilanganLogo";
import BazerowLogo from "./logo/BazerowLogo";

export default function Footer() {
  return (
    <footer className="bg-tertiary text-secondary-light px-20 p-4 flex items-center gap-6">
      <BarangaySilanganLogo />
      <div>
        <p>BRGY. BAGONG SILANGAN, QUEZON CITY</p>
        <span className="flex gap-2">
          <MailIcon size={20} />
          <p>barangaybagongsilangan123@gmail.com</p>
        </span>
        <span className="flex gap-2">
          <PhoneCall size={20} />
          <p>
            Hotlines: BHERT -(02 856-456-47) / 09515157591 : BPSO - (02 )
            82831259 CCTV - (02) 8260-73-40
          </p>
        </span>
      </div>
      <div className="flex items-center gap-2 flex-1 justify-end">
        <span className="text-center">
          <p>WILFREDO L. CARA</p>
          <p>Punong Barangay</p>
        </span>
        <BazerowLogo />
      </div>
    </footer>
  );
}

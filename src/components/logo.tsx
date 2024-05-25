// import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { bricolage_grotesque } from "@/lib/fonts";
import CorporateFareIcon from '@mui/icons-material/CorporateFare';

export default function Logo({ className, textColorClassName="text-white", textSizeClassName="text-[44px]" }: { className?: string, textSizeClassName?: string, textColorClassName?: string }) {
  return (
    <div
      className={`${bricolage_grotesque.className} ${className} ${textColorClassName} flex items-center leading-none`}
    >
      <CorporateFareIcon className="w-10 h-10" />
      <p className={`${textSizeClassName}`}>RA</p>
    </div>
  );
}

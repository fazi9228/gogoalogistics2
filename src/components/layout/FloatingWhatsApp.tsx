import { whatsappLink, defaultWhatsappMessage } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/Icon";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(defaultWhatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with GoGoa Logistics on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2.5 bg-[#25D366] py-3 pl-3 pr-4 text-white shadow-lg transition-transform hover:scale-[1.03] sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden text-sm font-semibold sm:inline">
        Chat on WhatsApp
      </span>
    </a>
  );
}

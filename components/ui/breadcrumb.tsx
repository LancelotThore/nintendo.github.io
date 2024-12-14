import { ChevronRightIcon } from "@/components/ui/icons";

export default function Breadcrumb() {
  return (
    <ul className="flex items-center gap-2 text-fg-detail text-xs font-bold col-span-5">
      <li className="breadcrumb-item">
        <a href="/">Store</a>
      </li>
      <li>
        <ChevronRightIcon className="w-2.5 text-fg-detail" />
      </li>
      <li className="breadcrumb-item">
        <a href="/category">Games</a>
      </li>
      <li>
        <ChevronRightIcon className="w-2.5 text-fg-detail" />
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        Stardew Valley
      </li>
    </ul>
  );
}

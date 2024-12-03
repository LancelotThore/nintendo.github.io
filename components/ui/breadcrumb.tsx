import { ChevronRightIcon } from '@/components/ui/icons';

export default function Breadcrumb() {
    return (
        <ul className="flex items-center">
            <li className="breadcrumb-item"><a href="/">Store</a></li>
            <li><ChevronRightIcon className="w-4 text-secondary-foreground"/></li>
            <li className="breadcrumb-item"><a href="/category">Games</a></li>
            <li><ChevronRightIcon className="w-4 text-secondary-foreground"/></li>
            <li className="breadcrumb-item active" aria-current="page">Stardew Valley</li>
        </ul>
    )
}
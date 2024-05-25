import { BadgeCheckIcon, BadgeDollarSignIcon, BuildingIcon, HomeIcon, UsersIcon } from "lucide-react";

export const ObjectRoutes = [
  { name: 'Dashboard', Component: HomeIcon, href: '/dashboard' },
  { name: 'People', Component: UsersIcon, href: '/people' },
  { name: 'Companies', Component: BuildingIcon, href: '/companies' },
  { name: 'Leads', Component: BadgeCheckIcon, href: '/leads' },
  { name: 'Deals', Component: BadgeDollarSignIcon, href: '/deals' },
]
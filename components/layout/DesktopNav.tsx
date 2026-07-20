import { navigation } from "@/constants/navigation";
import { NavLink } from "./NavLink";

export function DesktopNav() {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navigation.map((item) => (
        <NavLink key={item.label} href={item.href}>
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
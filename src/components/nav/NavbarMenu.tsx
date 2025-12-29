import { navbarData } from '@/components/nav/navbar.data'

export default function NavbarMenu() {
  const navbarMenu = navbarData.menu

  return (
    <ul className="flex gap-4 items-center">
      {navbarMenu.map((item) => (
        <li key={item.label}>
          <a href={item.href} className="hover:underline">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

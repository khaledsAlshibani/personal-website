import NavbarMenu from '@/components/nav/NavbarMenu'
import ThemeSwitcher from '@/components/nav/ThemeSwitcher'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between mt-8">
      <NavbarMenu />
      <div className="flex gap-8 items-center">
        {/* <LangSwitcher /> */}
        <ThemeSwitcher />
      </div>
    </nav>
  )
}

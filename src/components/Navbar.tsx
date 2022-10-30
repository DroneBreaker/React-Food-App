interface NavProps {
    name: string
    route: string
}

const navitems: Array<NavProps> = [
    {name: 'Home', route: '/'},
    {name: 'Menu', route: '/'},
    {name: 'Shop', route: '/'},
    {name: 'COntact', route: '/'},
]
export default function Navbar() {
  return (
    <div>
        <nav>
            <ul></ul>
        </nav>
    </div>
  )
}

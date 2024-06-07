import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex dark:bg-gray-700 bg-amber-100 p-4 lg:text-lg justify-center gap-6 ">
        <NavbarItem tittle='Trending' param= 'fetchTrending'/>
        <NavbarItem tittle='Top Rated' param= 'fetchTopRated'/>
    </div>
  )
}

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-16 flex items-center bg-gray-300">
      <div className="container mx-auto px-5 flex items-center justify-between">
        <Link href={"/"} className="block uppercase text-2xl font-semibold">
          Abbas App
        </Link>
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/articles">Articles</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-5">
          <Link
            href="/login"
            className="bg-white py-1 px-3 rounded-sm text-[15px] font-medium hover:bg-gray-100 transition-colors duration-300z"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-white py-1 px-3 rounded-sm text-[15px] font-medium hover:bg-gray-100 transition-colors duration-300z"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { Button } from "@/Components/ui/button.jsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu.jsx";

function MenuDropDown() {
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2.5">
        <DropdownMenuItem>About</DropdownMenuItem>
        <DropdownMenuItem>Blog</DropdownMenuItem>
        <DropdownMenuItem>Contact</DropdownMenuItem>
        <DropdownMenuSeparator className="mx-2"/>
        <DropdownMenuItem>Action</DropdownMenuItem>
        <DropdownMenuItem>Acother action</DropdownMenuItem>
        <DropdownMenuItem>Dropdown submenu</DropdownMenuItem>
        <DropdownMenuItem>404 page</DropdownMenuItem>
        <DropdownMenuItem className="flex">
          <Button variant="outline">Log in</Button>
          <Button>Sign up</Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default MenuDropDown;

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

function DropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>Features</div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Action</DropdownMenuItem>
        <DropdownMenuItem>Acother action</DropdownMenuItem>
        <DropdownMenuItem>Dropdown submenu</DropdownMenuItem>
        <DropdownMenuItem>404 page</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropDown;

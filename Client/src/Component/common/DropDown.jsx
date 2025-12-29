import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

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

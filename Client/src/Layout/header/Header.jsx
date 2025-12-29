import DropDown from "@/Component/common/DropDown";
import MenuDropDown from "@/Component/common/MenuDropDown";
import { Button } from "@/components/ui/button";

function Header() {
  const navItem = ["About", "Blog", "Contact"];
  return (
    <section className="flex justify-between items-center py-6 px-20 ">
      <div className="order-1 lg:order-2 flex lg:hidden">
        <MenuDropDown />
      </div>

      <div>
        <span className="font-bold order-2 lg:order-1">Tailwind</span> css
      </div>
      <div>
        <nav className="hidden lg:flex">
          <ul className="center-flex gap-15">
            <li className="cursor-pointer">
              <DropDown />
            </li>
            {navItem.map((item, index) => (
              <li key={index}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="gap-3 hidden lg:flex">
        <Button variant="outline">Log in</Button>
        <Button>Sign up</Button>
      </div>
    </section>
  );
}

export default Header;

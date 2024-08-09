
import { Navbar } from "flowbite-react";

function NavbarComponet() {
    return (
        <Navbar className="bg-zinc-300 py-4 "  >
          <Navbar.Brand >
            <span className="self-center whitespace-nowrap text-xl  font-sf-pro ">Dashboard</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link  active>
              Home
            </Navbar.Link>
            <Navbar.Link  >
              About
            </Navbar.Link>
            <Navbar.Link >Services</Navbar.Link>
            <Navbar.Link >Pricing</Navbar.Link>
            <Navbar.Link >Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      );
}

export default NavbarComponet
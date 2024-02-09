
import NavBar from "./NavBar";
import { Screen,render } from "@testing-library/react";
test("testing the navbar for text ",()=>{
render(<NavBar/>)
const testext = screen.getByText(/home/);
expect((testext).toBeInTheDocument());




})
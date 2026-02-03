import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NavBar from "@/components/NavBar";

describe("NavBar", () => {
  it("renders Hire Me and Join Me links with correct hrefs", () => {
    render(<NavBar />);
    const hireMeLink = screen.getByRole("link", { name: /hire me/i });
    const joinMeLink = screen.getByRole("link", { name: /join me/i });
    expect(hireMeLink).toBeInTheDocument();
    expect(hireMeLink).toHaveAttribute("href", "/hire-me");
    expect(joinMeLink).toBeInTheDocument();
    expect(joinMeLink).toHaveAttribute("href", "/join-me");
  });
});

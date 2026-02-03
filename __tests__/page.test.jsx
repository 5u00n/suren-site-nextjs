import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

// Mock ProjectSection so we don't render async ProjectsShowcase (Jest doesn't support async Server Components)
jest.mock("@/app/home/ProjectSection", () => {
  return function MockProjectSection() {
    return <section data-testid="projects-section">Projects</section>;
  };
});

describe("Home page", () => {
  it("renders the main heading for accessibility", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", {
      name: "Suren Hembram",
      level: 1,
    });
    expect(heading).toBeInTheDocument();
  });
});

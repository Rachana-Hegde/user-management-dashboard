import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import UserTable from "../components/UserTable/UserTable";
describe("UserTable", () => {

  test("renders table headers", () => {

    render(
      <UserTable
        users={[]}
        sortField="id"
        sortOrder="asc"
        onSort={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    );

    expect(screen.getByText("ID")).toBeInTheDocument();

    expect(screen.getByText("First Name")).toBeInTheDocument();

    expect(screen.getByText("Last Name")).toBeInTheDocument();

    expect(screen.getByText("Email")).toBeInTheDocument();

  });

});
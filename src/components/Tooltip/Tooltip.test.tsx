import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"
import { Tooltip } from "./Tooltip"

describe("Tooltip", () => {
  it("displays tooltip content on hover", async () => {
    const user = userEvent.setup()
    render(
      <Tooltip content="Tooltip Content">
        <button>Hover me</button>
      </Tooltip>
    )

    const trigger = screen.getByRole("button", { name: "Hover me" })
    expect(screen.queryByText("Tooltip Content")).not.toBeInTheDocument()

    await user.hover(trigger)

    await waitFor(() => {
      expect(screen.getByText("Tooltip Content")).toBeInTheDocument()
    })
  })
})

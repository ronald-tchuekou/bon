import { expect } from "@jest/globals"
import {sum} from "./register"

test("Teste sur ma fonction sum", () => {
    const result = sum(3, 7)
    expect(result).toBe(10)
})
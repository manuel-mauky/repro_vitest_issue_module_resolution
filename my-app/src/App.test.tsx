import { render } from '@testing-library/react';
import React from "react";
import App from "./App";

describe("App", () => {
    it("should create the app", () => {
        const { container } = render(<App/>)
        const app = container.querySelector(".App")
        expect(app).toBeDefined()

        expect((app as HTMLDivElement).textContent).toEqual("hello world index.esm.js")
    })
})

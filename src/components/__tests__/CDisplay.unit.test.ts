import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import CDisplay from "../CDisplay.vue";

describe("CDisplay", () => {
  it("should mount component", () => {
    const wrapper = mount(CDisplay);
    expect(wrapper.vm).toBeDefined();
  });

  it("should render props history and calculation", () => {
    const wrapper = mount(CDisplay, {
      props: {
        calculation: "123",
        history: ["calc", "math"]
      }
    });
    expect(wrapper.text()).toContain('123');
    expect(wrapper.text()).toContain('calc');
    expect(wrapper.text()).toContain('math');
  });
});

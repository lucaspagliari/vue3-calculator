import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import CDisplay from "../CDisplay.vue";

describe("CDisplay", () => {
  it("should mount component", () => {
    const wrapper = mount(CDisplay);
    expect(wrapper.vm).toBeDefined();
  });

  it("should render text on slot", () => {
    const text = "my operation";
    const wrapper = mount(CDisplay, {
      slots: {
        default: text,
      },
    });
    expect(wrapper.text()).toContain(text);
  });
});

import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import BaseButton from "../BaseButton.vue";

describe("BaseButton", () => {
  it("should mount component", () => {
    const wrapper = mount(BaseButton);
    expect(wrapper.vm).toBeDefined();
  });

  it("should bind prop color to class", () => {
    const wrapper = mount(BaseButton, {
      props: {
        color: "white",
      },
    });
    expect(wrapper.classes()).toContain("white");
  });

  it("should renders text on slot", () => {
    const text = "calculator button";
    const wrapper = mount(BaseButton, { slots: { default: text } });
    expect(wrapper.text()).toContain(text);
  });
});

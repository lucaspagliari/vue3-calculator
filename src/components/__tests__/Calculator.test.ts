import Calculator from "../Calculator.vue";
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import CDisplayVue from "../CDisplay.vue";
import CButtonsVue from "../CButtons.vue";

describe("Calculator ", () => {
  it("should mount component", () => {
    const wrapper = mount(Calculator);
    expect(wrapper.vm).toBeDefined();
  });

  it("should render CDisplay and CButtons", () => {
    const wrapper = mount(Calculator);
    const display = wrapper.findComponent(CDisplayVue);
    const buttons = wrapper.findComponent(CButtonsVue);

    expect(display.vm).toBeDefined();
    expect(buttons.vm).toBeDefined();
  });
});

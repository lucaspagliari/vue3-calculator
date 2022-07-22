import CButtons from "../CButtons.vue";
import { describe, it, expect, beforeEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import BaseButton from "../BaseButton.vue";

describe("CButtons", () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(CButtons);
  });

  it("should mount component", () => {
    expect(wrapper.vm).toBeDefined();
  });

  it("should render all buttons", () => {
    // 10 numbers, 4 operations, 2 commands
    
    const buttons = wrapper.findAllComponents(BaseButton);
    expect(buttons).toHaveLength(16);
  });

  it("should emit event 'click' with key value when button is clicked", async () => {
    const button = wrapper.findComponent(BaseButton);
    await button.trigger("click");

    const event = wrapper.emitted("click");

    expect(event).toHaveLength(1);
    expect(event?.at(0)).toEqual([button.text()]);
  });
});

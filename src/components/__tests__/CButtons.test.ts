import CButtons from "../CButtons.vue";
import { describe, it, expect, beforeEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import BaseButton from "../BaseButton.vue";

describe("CButtons", () => {
  beforeEach(() => {});

  it("should mount component", () => {
    const wrapper = mount(CButtons);
    expect(wrapper.vm).toBeDefined();
  });

  it("should render all buttons", () => {
    const wrapper = mount(CButtons);
    const buttons = wrapper.findAllComponents(BaseButton);
    // 10 numbers, 4 operations, 2 commands
    expect(buttons).toHaveLength(16);
  });

  it("should emit event 'click' with key value when button is clicked", async () => {
    const wrapper = mount(CButtons);

    const button = wrapper.findComponent(BaseButton);
    await button.trigger("click");
    const event = wrapper.emitted("click");

    expect(event).toHaveLength(1);
    expect(event?.at(0)).toEqual([button.text()]);
  });
});

import Calculator from "../Calculator.vue";
import { describe, it, expect, beforeEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import CBtn from "../BaseButton.vue";
import CDisplay from "../CDisplay.vue";

describe("Calculator ", () => {
  let wrapper: VueWrapper;
  beforeEach(() => {
    wrapper = mount(Calculator);
  });

  it("should mount component", () => {
    expect(wrapper.vm).toBeDefined();
  });

  it('should diplay buttons clicked', () => {
  });
});

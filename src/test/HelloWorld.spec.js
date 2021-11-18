import Vue from "vue";
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "../components/HelloWorld";

function mountComponentWithProps(Component, propsData) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({
    propsData,
  }).$mount();

  return vm.$el;
}

describe("HelloWorld.vue", () => {
  it("should be the correct color", () => {
    const headingData = mountComponentWithProps(HelloWorld, { color: "blue" });
    const styleData = headingData.style.getPropertyValue("color");

    console.log(styleData);

    expect(styleData).toEqual("blue");
  });

  it("should have the correct title", () => {
    const headingData = mountComponentWithProps(HelloWorld, {
      title: "Hello, Vue!",
    });
    const titleData = headingData.textContent;

    expect(titleData).toEqual("Hello, Vue!");
  });
});

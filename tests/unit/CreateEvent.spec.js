import { mount } from "@vue/test-utils";
import CreateEvent from "@/views/CreateEvent.vue";

describe("CreateEvent", () => {
  test("it has an <h1> heading", () => {
    const wrapper = mount(CreateEvent);

    expect(wrapper.contains("h1")).toBe(true);
  });

  test("it should have a h1 heading saying Create an Event", () => {
    const wrapper = mount(CreateEvent);
    expect(wrapper.get("h1").text()).toBe("Create an Event");
  });

  test("it contains a form element", () => {
    const wrapper = mount(CreateEvent);

    expect(wrapper.contains("form")).toBe(true);
  });

  test("it should contains a title input field", () => {
    const wrapper = mount(CreateEvent);

    expect(wrapper.contains("input[type='text'][name='title']")).toBe(true);
  });

  test("it should contains a submit button with the value Create", () => {
    const wrapper = mount(CreateEvent);

    expect(wrapper.contains("input[type='submit'][value='Create']")).toBe(true);
  });

  test("it should contain an input field for the title with the placeholder 'Add a Title'", () => {
    const wrapper = mount(CreateEvent);
    const titleInput = wrapper.get("input[name='title']");
    expect(titleInput.attributes("placeholder")).toBe("Add a Title");
  });
});

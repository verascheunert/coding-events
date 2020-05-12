import { mount } from "@vue/test-utils";
import CreateEvent from "@/views/CreateEvent.vue";
import { createEvent } from "@/service/event-service.js";

//Jest wizardry
jest.mock("@/services/event-ervice.js");

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

  test("it should have an event data property", () => {
    const wrapper = mount(CreateEvent);

    expect(wrapper.vm.event).toEqual({
      title: ""
    });
  });

  test("it should bind the event title to the user input", () => {
    const wrapper = mount(CreateEvent);

    const titleInput = wrapper.get("input[name='title']");

    titleInput.setValue("JS Pair Programming Session");

    expect(wrapper.vm.event.title).toBe("JS Pair Programming Session");
  });

  test("it should have a submit method", () => {
    const wrapper = mount(CreateEvent);

    expect(wrapper.vm.submit).toBeDefined();
    expect(typeof wrapper.vm.submit).toBe("function");
  });

  test("it should call the submit method on submit event on the form", () => {
    const wrapper = mount(CreateEvent);

    //Add a spy mock function, overriding my method
    wrapper.vm.submit = jest.fn();
    // Triggering the submit event on the form
    wrapper.get("form").trigger("submit");
    // expect that the spy mock function has been called
    expect(wrapper.vm.submit).toHaveBeenCalled();
  });

  test("it should call the event service, after the user has input the title and hit submit", () => {
    createEvent.mockReset();
    const wrapper = mount(CreateEvent);

    //User inputs a title
    wrapper.get("input[name='title']").setValue("Go to the zoo");

    // User hits submit
    wrapper.get("form").trigger("submit");

    expect(createEvent).toHaveBeenCalledWith({ title: "Go to the zoo" });
  });
});

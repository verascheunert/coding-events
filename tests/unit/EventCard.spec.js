import { mount } from "@vue/test-utils";
import EventCard from "@/components/EventCard.vue";

jest.mock("@/services/event-service.js");

describe("EventCard", () => {
  test("it should be able to mount the component", () => {
    const wrapper = mount(EventCard);
    expect(wrapper).toBeDefined();
  });
});

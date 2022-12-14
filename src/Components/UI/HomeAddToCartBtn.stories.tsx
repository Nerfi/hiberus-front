import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withReactContext } from 'storybook-react-context';

//the real component
import HomeAddToCartBtn from "./HomeAddToCartBtn";


//π This default export determines where your story goes in the story list


export default {
  /* π The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "HomeAddToCartBtn", 
  component: HomeAddToCartBtn,
  decorators: [withReactContext],
} as ComponentMeta<typeof HomeAddToCartBtn>;

//π We create a βtemplateβ of how args map to rendering
const Template: ComponentStory<typeof HomeAddToCartBtn> = (args) => < HomeAddToCartBtn {...args}/>;

export const FirstStory = Template.bind({});

/* so far I think we will need none*/
FirstStory.args = {
  /*π The args you need here will depend on your component*/
};
 

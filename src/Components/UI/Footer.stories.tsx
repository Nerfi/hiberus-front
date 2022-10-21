import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SmallWithSocial from "./Footer";

export default {
  title: "Footer",
  component: SmallWithSocial,
} as ComponentMeta<typeof SmallWithSocial>;

export const Primary: ComponentStory<typeof SmallWithSocial> = () => (
  <SmallWithSocial></SmallWithSocial>
);

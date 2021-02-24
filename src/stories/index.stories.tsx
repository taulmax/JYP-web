import React from "react";
import Button from "../components/Button";
import { withKnobs } from "@storybook/addon-knobs";
export default { title: "Button", component: Button, decorators: [withKnobs] };

export const withText = () => <Button>Hello 버튼</Button>;

export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

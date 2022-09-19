import Component from './Component'
import { mockComponentProps } from './Component.mocks'

const Story = {
  title: 'templates/Component',
  component: Component,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
}

export default Story

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Component {...args} />

export const Base = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockComponentProps.base,
}

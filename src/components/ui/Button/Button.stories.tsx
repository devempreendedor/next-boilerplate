import { Button } from '.'
import { ButtonProps } from './Button'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    variant: { control: 'color' },
  },
}

const Template = ({ children, ...args }: ButtonProps) => (
  <Button {...args}>{children}</Button>
)

export const Primary = Template.bind({})
Primary.args = {
  children: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Button',
  variant: 'secondary',
}

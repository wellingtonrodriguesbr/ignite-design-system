import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  borderRadius: '$sm',
  backgroundColor: '$ignite300',
  border: 0,
  color: '$white',
  fontWeight: '$bold',
  variants: {
    size: {
      small: {
        padding: '$2 $4',
      },
      big: {
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>

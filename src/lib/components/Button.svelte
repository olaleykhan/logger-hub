<script lang="ts">
    import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
  
    type Element = 'button' | 'a';
  
    interface ButtonComponentElements {
      button: HTMLButtonAttributes;
      a: HTMLAnchorAttributes;
    }
  
    type ButtonProps = ButtonComponentElements[Element] & {
      element: Element;
      variant?: 'contained' | 'outlined' | 'danger';
      className?: string;
      disabled?: boolean;
    };
  
    export let element: Element;
    export let variant: 'contained' | 'outlined' | 'danger' = 'contained';
    export let className: string = '';
    export let disabled: boolean = false;
  
    let node: HTMLAnchorElement | HTMLButtonElement;
  
    export function focus() {
      node.focus();
    }
  
    const baseClasses = 'inline-flex items-center justify-center font-medium focus:outlined-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150 rounded-lg px-4 py-2';
    const variantClasses = {
      contained: 'bg-green-600 text-white hover:bg-green-400 active:bg-green-400',
      outlined: 'border-1 border-green-500 text-green-500 hover:bg-green-50 active:bg-green-100 active:outlined-none ',
      danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800',
    };
    const glassEffect = 'backdrop-filter backdrop-blur-lg border border-gray-200 shadow-md';
    const disabledClasses = 'opacity-50 cursor-not-allowed';
  
    const computedClasses = `${baseClasses} ${variantClasses[variant]} ${glassEffect} ${className} ${disabled ? disabledClasses : ''}`;
  </script>
  
  <svelte:element
    this={element}
    bind:this={node}
    class={computedClasses}
    on:click
    aria-disabled={disabled}
    role={element === 'button' ? undefined : 'button'}
    tabindex={element === 'button' ? undefined : 0}
    {...$$restProps}
  >
    <slot />
  </svelte:element>
  
  <style global>
    .ripple {
      position: relative;
      overflow: hidden;
    }
  
    .ripple::after {
      content: '';
      display: block;
      position: absolute;
      background: white;
      border-radius: 50%;
      opacity: 0.75;
      pointer-events: none;
      transform: scale(10, 10);
      animation: ripple 0.6s linear;
    }
  
    @keyframes ripple {
      from {
        transform: scale(0, 0);
        opacity: 0.75;
      }
      to {
        transform: scale(10, 10);
        opacity: 0;
      }
    }
  </style>
  
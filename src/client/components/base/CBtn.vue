<template>
  <a
    v-if="href"
    :href="href"
    :class="buttonClasses"
  >
    <slot></slot>
  </a>
  <router-link
    v-else-if="to"
    :to="to"
    :class="buttonClasses"
  >
    <slot></slot>
  </router-link>
  <button
    v-else
    type="button"
    :class="buttonClasses"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    href: String,
    to: String,
    variant: {
      type: String,
      default: 'primary'
    },
    size: String,
    rounded: Boolean,
    block: Boolean
  },
  computed: {
    buttonClasses() {
      return {
        'btn': true,
        'btn--primary': this.variant === 'primary',
        'btn--secondary': this.variant === 'secondary',
        'btn--text': this.variant === 'text',
        'btn--primary-white': this.variant === 'primary-white',
        'btn--secondary-white': this.variant === 'secondary-white',
        'btn--sm': this.size === 'sm',
        'btn--rounded': this.rounded,
        'btn--block': this.block
      }
    }
  }
}
</script>

<style lang="scss">
.btn {
  display: inline-block;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  text-transform: uppercase;
  color: $black;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 5px 16px;
  appearance: none;
  border-radius: 4px;

  &:hover {
    color: $black;
    text-decoration: none;
  }

  &:focus {
    outline: 0;
    box-shadow: $input-btn-focus-box-shadow;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.65;
  }

  &--sm {
    font-size: 12px;
    line-height: 16px;
    padding: 4px 8px;
    border-radius: 2px;
  }

  &--primary {
    background-color: $light-blue;
    color: $white;

    &:hover {
      background-color: adjust-color($light-blue, $lightness: 5%);
      color: $white;
    }

    &-white {
      background-color: $white;
      color: $dark-blue;

      &:hover {
        background-color: $blue-gray;
        color: $dark-blue;
      }
    }
  }

  &--secondary {
    border-color: $light-blue;
    color: $light-blue;

    &:hover {
      color: $light-blue;
      background-color: rgba($light-blue, 0.05);
    }

    &-white {
      border-color: $white;
      color: $white;

      &:hover {
        background-color: rgba($white, 0.05);
        color: $white;
      }
    }
  }

  &--text {
    color: $dark-gray;

    &:hover, &:focus {
      background-color: $light-gray;
      color: $black;
    }

    &:focus {
      box-shadow: none;
    }
  }

  &--rounded {
    border-radius: 32px;
  }

  &--block {
    display: block;
    width: 100%;
  }
}
</style>

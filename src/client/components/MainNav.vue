<template>
  <header class="mainnav" tabindex="-1">
    <nav class="mainnav__nav" aria-label="Main Navigation">
      <div class="mainnav__navbar">
        <router-link to="/" class="mainnav__logo">Linkkit</router-link>
        <button
          class="mainnav__menu-toggle"
          type="button"
          aria-label="Toggle Navigation"
          aria-controls="mainnav__menu"
          :aria-expanded="menuOpen ? 'true' : 'false'"
          @click="menuOpen = !menuOpen"
          ref="menuToggleBtn"
        >
          <span class="mainnav__menu-toggle__icon" />
        </button>
      </div>
      <div
        class="mainnav__menu"
        id="mainnav__menu"
        v-show="menuOpen"
        ref="menu"
      >
        <div class="mainnav__menu-container">
          <ul class="mainnav__menu__list">
            <li class="mainnav__menu__list-item">
              <router-link to="/" class="mainnav__menu__list-link">About</router-link>
            </li>
          </ul>
          <c-btn
            to="/log-in"
            class="mainnav__menu__btn"
            variant="secondary-white"
            rounded
            block
          >
            Log in
          </c-btn>
          <c-btn
            to="/sign-up"
            class="mainnav__menu__btn"
            rounded
            block
          >
            Sign up
          </c-btn>
        </div>
        <div class="mainnav__menu-backdrop" v-if="menuOpen" @click="menuOpen = false"></div>
      </div>
    </nav>
  </header>
</template>

<script>
import CBtn from '@/components/base/CBtn.vue';

const CLASSES = {
  isOpen: 'js-mainnav-open'
};

const ESCAPE_KEY = 27;

export default {
  data() {
    return {
      menuOpen: false
    }
  },
  watch: {
    menuOpen(isOpen) {
      if (isOpen) {
        document.body.classList.add(CLASSES.isOpen);
        document.addEventListener('focusin', this.restrictFocus, false);
        document.addEventListener('keydown', this.handleKeydown, false);
        this.$refs.menu.scrollTop = 0;
      } else {
        document.body.classList.remove(CLASSES.isOpen);
        document.removeEventListener('focusin', this.restrictFocus, false);
        document.removeEventListener('keydown', this.handleKeydown, false);
        this.$refs.menuToggleBtn.focus();
      }
    },
    $route() {
      this.menuOpen = false
    },
  },
  methods: {
    restrictFocus(e) {
      if (
        document !== e.target &&
        this.$el !== e.target &&
        !this.$el.contains(e.target)
      ) {
        this.$el.focus();
      }
    },
    handleKeydown(e) {
      if (e.keyCode && e.keyCode === ESCAPE_KEY) {
        this.menuOpen = false;
      }
    },
  },
  beforeDestroy() {
    document.body.classList.remove('js-mainnav-open');
    document.removeEventListener('focusin', this.restrictFocus, false);
    document.removeEventListener('keydown', this.handleKeydown, false);
  },
  components: {
    CBtn
  }
}
</script>

<style lang="scss">
  body {
    &.js-mainnav-open {
      overflow: hidden;
    }
  }

  .mainnav {
    height: 48px;

    &__navbar {
      height: 48px;
      padding: 0 $gutter;
      display: flex;
      align-items: center;
      position: fixed;
      z-index: 999;
      top: 0;
      left: 0;
      width: 100%;
      background: $dark-blue;

      &:after {
        content: "";
        position: absolute;
        height: 100%;
        box-shadow: 0 3px 5px 0 rgba($true-black,.2);
        z-index: -1;
        left: 0;
        right: 0;
        top: 0;
      }
    }

    &__logo {
      font-size: 18px;
      font-weight: 500;
      color: adjust-color($white, $lightness: -25%);
      text-decoration: none;
    }

    &__menu-toggle {
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      border: 0;
      padding: 0;
      appearance: none;
      cursor: pointer;
      margin-left: auto;
      margin-right: -((44px - 20px) / 2);

      &:focus {
        outline: 1px solid rgba($white, 0.25);
      }

      &__icon {
        display: block;
        width: 20px;
        height: 2px;
        background: $white;
        position: relative;

        &:before, &:after {
          content: "";
          position: absolute;
          left: 50%;
          margin-left: -7px;
          width: 14px;
          height: 2px;
          background: $white;
        }

        &:before {
          top: -8px;
        }

        &:after {
          bottom: -8px;
        }
      }
    }

    &__menu {
      background: rgba($true-black, 0.3);
      position: fixed;
      top: 48px;
      left: 0;
      bottom: 0;
      width: 100%;
      z-index: 1000;
      overflow-x: hidden;
      overflow-y: auto;
      overscroll-behavior: contain;

      &-container {
        background: $dark-blue;
        padding: 10px $gutter 24px;
        margin-bottom: 90px;
        position: relative;
        z-index: 1;
      }

      &-backdrop {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
      }

      &__list {
        list-style: none;
        margin: 0;
        padding: 0;

        &-item {
          margin-bottom: 20px;
        }

        &-link {
          font-size: 16px;
          line-height: 19px;
          font-weight: 500;
          color: $white;
          display: block;

          &:hover, &:focus {
            color: $white;
            text-decoration: none;
          }
        }
      }

      &__btn {
        & + & {
          margin-top: 10px;
        }
      }
    }
  }
</style>

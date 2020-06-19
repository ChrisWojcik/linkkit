import Vue from 'vue';

const createIconComponent = (name, svgContent = '') => {
  return Vue.extend({
    name,
    render(h) {
      return h('span', {
        class: {
          icon: true
        },
        attrs: {
          'aria-hidden': true,
          focusable: false
        },
        domProps: {
          innerHTML: svgContent
        }
      });
    }
  });
};

export const IconArrowDown = createIconComponent('IconArrowDown', require('@/icons/svg/arrow-down.svg'));
export const IconArrowUp = createIconComponent('IconArrowUp', require('@/icons/svg/arrow-up.svg'));
export const IconComment = createIconComponent('IconComment', require('@/icons/svg/comment.svg'));
export const IconExternalLink = createIconComponent('IconExternalLink', require('@/icons/svg/external-link.svg'));

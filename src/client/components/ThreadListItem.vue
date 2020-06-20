<template>
  <article class="threadlist-item" @click="onClick">
    <header class="threadlist-item__header">
      <p class="threadlist-item__meta">
        Posted by u/{{author}}
        <span aria-hidden="true" class="threadlist-item__meta-separator">•</span>
        <a :href="permalink" @click.stop>
          <time :datetime="created_at">{{timeAgo}}</time>
        </a>
      </p>
      <h2 class="threadlist-item__title">
        <a
          :href="permalink"
          class="threadlist-item__title-link"
          ref="link"
          @click.stop
        >
          {{title}}
        </a>
      </h2>
    </header>
    <div class="threadlist-item__body">
      <a
        v-if="outbound_link"
        :href="outbound_link"
        class="threadlist-item__outbound-link"
        rel="noopener nofollow"
        target="_blank"
        @click.stop
      >
        {{shortenedOutboundLink}} <icon-external-link />
      </a>
      <p v-if="text" class="threadlist-item__text">{{text}}</p>
    </div>
    <footer class="threadlist-item__footer">
      <div class="threadlist-item__footer-toolbar">
        <c-btn
          :href="permalink"
          variant="text"
          size="sm"
          class="threadlist-item__footer-toolbar-btn"
          @click.native.stop
        >
          <icon-comment /> {{friendlyCommentCount}} Comments
        </c-btn>
      </div>
    </footer>
  </article>
</template>

<script>
import CBtn from '@/components/base/CBtn.vue';
import { IconComment, IconExternalLink, IconArrowUp, IconArrowDown } from '@/icons';
import roundWithPrecision from '@/scripts/roundWithPrecision';
import timeAgo from '@/scripts/timeAgo';
import shortenLink from '@/scripts/shortenLink';

export default {
  props: {
    id: String,
    permalink: String,
    outbound_link: String,
    title: String,
    text: String,
    num_comments: Number,
    score: Number,
    author: String,
    created_at: String
  },
  computed: {
    shortenedOutboundLink() {
      return shortenLink(this.outbound_link, 24);
    },
    friendlyCommentCount() {
      if (this.num_comments < 1000) {
        return this.num_comments;
      } else {
        return roundWithPrecision(this.num_comments / 1000, 1) + 'k';
      }
    },
    timeAgo() {
      return timeAgo(this.created_at);
    }
  },
  methods: {
    onClick() {
      if (window.getSelection().toString().length > 0) {
        return;
      }

      this.$refs.link.click();
    }
  },
  components: {
    IconArrowDown,
    IconArrowUp,
    IconComment,
    IconExternalLink,
    CBtn
  }
}
</script>

<style lang="scss">
  .threadlist-item {
    background: $white;
    margin: 0 0 5px;
    border: 1px solid transparent;
    cursor: pointer;

    &:hover {
      background-color: $white-hover;
    }

    &:focus-within {
      background-color: $white-hover;
    }

    &__header {
      display: flex;
      flex-direction: column;
    }

    &__title {
      padding: 0 $gutter;
      font-size: 18px;

      &-link {
        color: $black;

        &:hover {
          color: $black;
          text-decoration: none;
        }
      }
    }

    &__meta {
      padding: 14px $gutter 10px;
      margin: 0;
      font-size: 12px;
      color: $dark-gray;

      &-separator {
        padding: 0 4px;
      }

      a {
        color: $dark-gray;
        text-decoration: none;
        padding: 8px 0;

        &:hover, &:focus {
          text-decoration: underline;
          color: $black;
        }
      }
    }

    &__body {
      padding: 0 $gutter 6px;
    }

    &__outbound-link {
      font-size: 12px;
      padding: 4px 8px 4px 0;
    }

    &__text {
      font-family: 'Noto Sans', serif;
      font-size: 14px;
      margin: 12px 0 4px;
    }

    &__footer {
      padding: 10px $gutter;
      font-size: 12px;
      color: $dark-gray;

      &-toolbar {
        margin-left: -8px;
        margin-right: -8px;

        &-btn {
          .icon {
            margin-right: 4px;
          }
        }
      }
    }
  }
</style>

<template>
  <section class="threadlist">
    <h1 class="sr-only">Latest Threads</h1>
    <ul class="threadlist__list">
      <li class="threadlist__list-item" v-for="thread in threads" :key="thread.id">
        <thread-list-item v-bind="thread" />
      </li>
    </ul>
  </section>
</template>

<script>
import ThreadListItem from './ThreadListItem.vue';

export default {
  data() {
    return {
      threads: [{
        "id": "dda17b12-25a2-4366-bc71-6c4dc4812c2a",
        "permalink": "/",
        "outbound_link": "http://www.example.com/?param=123456789",
        "title": "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
        "num_comments": 7291,
        "score": 3774,
        "author": "dalday0",
        "created_at": "2020-05-09T06:13:41Z"
      }, {
        "id": "a9feda95-3f60-47ee-bd88-400557076bb6",
        "permalink": "/",
        "title": "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
        "text": "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        "num_comments": 4358,
        "score": 6660,
        "author": "gthunnerclef1",
        "created_at": "2019-10-09T07:23:50Z"
      }, {
        "id": "addb9251-537e-4bb0-ae6c-8ca17a9d6c40",
        "permalink": "/",
        "outbound_link": "http://www.example.com/?param=123456789",
        "title": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
        "num_comments": 1377,
        "score": 2820,
        "author": "mhumbert2",
        "created_at": "2019-11-03T10:28:32Z"
      }, {
        "id": "61cc8408-42b4-4ca3-8d99-80a1d572512a",
        "permalink": "/",
        "outbound_link": "http://www.example.com/?param=123456789",
        "title": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
        "num_comments": 198,
        "score": 3823,
        "author": "cdelisle3",
        "created_at": "2019-12-14T02:18:36Z"
      }, {
        "id": "07fb9824-a0d4-4efa-875d-9a822c27fec5",
        "permalink": "/",
        "outbound_link": "http://www.example.com/?param=123456789",
        "title": "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
        "num_comments": 4229,
        "score": 5859,
        "author": "akarle4",
        "created_at": "2019-10-01T13:10:27Z"
      }, {
        "id": "35f37351-d130-49cf-bc4c-2768133cf0d0",
        "permalink": "/",
        "outbound_link": "http://www.example.com/?param=123456789",
        "title": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
        "num_comments": 7560,
        "score": 1142,
        "author": "dowen5",
        "created_at": "2020-02-24T08:38:43Z"
      }, {
        "id": "1f0384e6-1d28-43d2-b9ab-4bcc54667346",
        "permalink": "/",
        "title": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
        "num_comments": 438,
        "score": 5686,
        "author": "rvandenbroek6",
        "created_at": "2020-01-30T07:13:47Z"
      }, {
        "id": "82640a75-16f6-4695-a689-7cfeb16208a3",
        "permalink": "/",
        "outbound_link": "http://www.example.com/?param=123456789",
        "title": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
        "num_comments": 5488,
        "score": 8724,
        "author": "ewallhead7",
        "created_at": "2019-09-02T09:27:58Z"
      }, {
        "id": "c7ad3247-96e8-41e1-af17-f12f57494e36",
        "permalink": "/",
        "outbound_link": "http://www.example.com/?param=123456789",
        "title": "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
        "num_comments": 4202,
        "score": 6489,
        "author": "mbolderoe8",
        "created_at": "2019-09-30T00:27:10Z"
      }, {
        "id": "3bd84fc3-29ef-4d97-bfc2-99b23a34b298",
        "permalink": "/",
        "outbound_link": "http://www.example.com/?param=123456789",
        "title": "Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        "num_comments": 5803,
        "score": 7345,
        "author": "agrumbridge9",
        "created_at": "2020-04-01T21:11:57Z"
      }, {
        "id": "ef312191-1519-44c2-8fe7-3bf60c20c548",
        "permalink": "/",
        "outbound_link": "http://www.example.com/?param=123456789",
        "title": "In quis justo.",
        "num_comments": 6062,
        "score": 7232,
        "author": "abuckama",
        "created_at": "2020-01-27T12:56:46Z"
      }, {
        "id": "8df527d4-ea84-40d9-8c8b-bada3b7e7d5e",
        "permalink": "/",
        "title": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
        "num_comments": 970,
        "score": 7935,
        "author": "aritchb",
        "created_at": "2019-11-15T00:19:50Z"
      }, {
        "id": "77c4ae0b-4a14-48c9-8476-8011aab3e5b8",
        "permalink": "/",
        "outbound_link": "http://www.example.com/?param=123456789",
        "title": "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        "num_comments": 6436,
        "score": 6656,
        "author": "jhennerc",
        "created_at": "2019-06-29T03:06:37Z"
      }, {
        "id": "7b77889e-e46d-44d0-afc0-e51724720e9b",
        "permalink": "/",
        "outbound_link": "http://www.example.com/?param=123456789",
        "title": "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
        "num_comments": 5712,
        "score": 8959,
        "author": "tropertd",
        "created_at": "2019-09-21T02:07:45Z"
      }, {
        "id": "2c19703d-2249-4c25-bc36-61a0dfc85190",
        "permalink": "/",
        "outbound_link": "http://www.example.com/?param=123456789",
        "title": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
        "num_comments": 2759,
        "score": 2590,
        "author": "esaccoe",
        "created_at": "2020-05-17T14:37:02Z"
      }, {
        "id": "9d87b63b-9a61-4471-bcc8-53ee57db78f4",
        "permalink": "/",
        "outbound_link": "http://www.example.com/?param=123456789",
        "title": "Phasellus sit amet erat.",
        "num_comments": 4090,
        "score": 9786,
        "author": "lsaleryf",
        "created_at": "2020-02-12T20:28:01Z"
      }, {
        "id": "08b2bded-4338-4955-87fb-50ca459b51bd",
        "permalink": "/",
        "outbound_link": "http://www.example.com/?param=123456789",
        "title": "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
        "num_comments": 5535,
        "score": 3472,
        "author": "bkenwortheyg",
        "created_at": "2019-11-22T11:34:58Z"
      }, {
        "id": "a03a699a-43b6-4bae-a6b8-c0e9d91ca7bb",
        "permalink": "/",
        "outbound_link": "http://www.example.com/?param=123456789",
        "title": "Vivamus vestibulum sagittis sapien.",
        "title": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
        "num_comments": 8967,
        "score": 7103,
        "author": "mayersh",
        "created_at": "2020-03-31T05:00:17Z"
      }, {
        "id": "7cef2ebf-7325-49cf-90b1-d34f3691c43d",
        "permalink": "/",
        "outbound_link": "http://www.example.com/?param=123456789",
        "title": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
        "num_comments": 554,
        "score": 5271,
        "author": "maskeri",
        "created_at": "2019-11-22T17:14:51Z"
      }, {
        "id": "11caf50b-ce80-407b-b317-be09391f92f6",
        "permalink": "/",
        "outbound_link": "http://www.example.com/?param=123456789",
        "title": "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
        "num_comments": 9695,
        "score": 962,
        "author": "mcossorj",
        "created_at": "2020-05-08T09:34:36Z"
      }, {
        "id": "474b54c2-59fa-4578-b89e-d61a389a5f78",
        "permalink": "/",
        "outbound_link": "http://www.example.com/?param=123456789",
        "title": "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        "num_comments": 2193,
        "score": 4029,
        "author": "rgaddiek",
        "created_at": "2019-07-07T00:14:00Z"
      }, {
        "id": "89f7ed4f-202a-44af-b6d8-7ac88228331b",
        "permalink": "/",
        "outbound_link": "http://www.example.com/?param=123456789",
        "title": "Fusce posuere felis sed lacus.",
        "num_comments": 5236,
        "score": 2647,
        "author": "cjiranl",
        "created_at": "2020-02-12T15:23:58Z"
      }, {
        "id": "43bb4145-57a5-41b3-9567-4584479035b9",
        "permalink": "/",
        "outbound_link": "http://www.example.com/?param=123456789",
        "title": "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        "num_comments": 191,
        "score": 8161,
        "author": "jbirtwellm",
        "created_at": "2020-05-06T22:42:34Z"
      }, {
        "id": "937e8142-fa06-4ccf-97e5-e5940eff70ea",
        "permalink": "/",
        "outbound_link": "http://www.example.com/?param=123456789",
        "title": "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
        "num_comments": 9417,
        "score": 1888,
        "author": "oscousen",
        "created_at": "2019-12-11T09:35:44Z"
      }, {
        "id": "951c30cd-f99d-4ac3-9ec0-725400793188",
        "permalink": "/",
        "outbound_link": "http://www.example.com/?param=123456789",
        "title": "Morbi quis tortor id nulla ultrices aliquet.",
        "num_comments": 4672,
        "score": 9836,
        "author": "gmalchero",
        "created_at": "2019-07-08T11:44:38Z"
      }]
    }
  },
  components: {
    ThreadListItem
  }
}
</script>

<style lang="scss">
  .threadlist {
    background: $blue-gray;
    padding: 20px 10px 10px;

    &__list {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  }
</style>

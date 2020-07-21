<template>
  <div class="font-sans">
    <the-header :slides="sliders" />
  </div>
</template>

<script>

import TheHeader from '~/components/header/TheHeader'
export default {
  components: { TheHeader },
  data () {
    return {
      posts: {
        slides: [
          'industrie Forestière',
          'Industrie du textile',
          'eau et énergie',
          'production de caoutchouc et',
          'Fabrique des machines',
          'industrie extractive',
          'fabricatioon de meubles'
        ]
      },
      sliders: [
        {
          title: 'Consequuntur esse fuga libero maxime officia. Aliquam culpa delectus',
          img: 'https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        },
        {
          title: 'Slide 3',
          img: 'https://images.unsplash.com/photo-1560285509-3ebfa70a171d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=80'
        },
        {
          title: 'Slide 4',
          img: 'https://images.unsplash.com/photo-1582787252196-55af238b3cf8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        },
        {
          title: 'Slide 4',
          img: 'https://images.unsplash.com/photo-1582787252196-55af238b3cf8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        },
        {
          title: 'Slide 4',
          img: 'https://images.unsplash.com/photo-1582787252196-55af238b3cf8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        },
        {
          title: 'Slide 4',
          img: 'https://images.unsplash.com/photo-1582787252196-55af238b3cf8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        },
        {
          title: 'Slide 4',
          img: 'https://images.unsplash.com/photo-1582787252196-55af238b3cf8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        },
        {
          title: 'Slide 4',
          img: 'https://images.unsplash.com/photo-1582787252196-55af238b3cf8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        },
        {
          title: 'Slide 4',
          img: 'https://images.unsplash.com/photo-1582787252196-55af238b3cf8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        },
        {
          title: 'Slide 4',
          img: 'https://images.unsplash.com/photo-1582787252196-55af238b3cf8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        },
        {
          title: 'Slide 4',
          img: 'https://images.unsplash.com/photo-1582787252196-55af238b3cf8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        }
      ]
    }
  }
}
</script>

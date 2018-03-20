<template>
  <div class="home">
    <textarea :value="input" @input="update"></textarea>
    <div class="output" v-html="compiledMarkdown"></div>
  </div>
</template>

<script>

import marked from 'marked'
import _ from 'lodash'
import * as hljs from 'highlight.js'

export default {
  name: 'marked',
  data: function() {
    return {
      input: `# Markdown Editor
Welcome to markdown editor for blog
Created using Vue framework and marked javascript parser library
This project is created in conjuction with Gatsby blog site where I am using markdown to write blogs or article (whatever you want to call them).
## Vue
A frontend framework created by Evan You who also worked on Angular, inspired from all
other three major frameworks which are Angular by Google, React by Facebook and Polymer by 
Google again and combined features of all three in a single framework, making it one of the
light weight frontend availible. [Check it out](vuejs.org)
## Marked
A markdown parser library with many featurs like Github flavoured markdown parser, sanitizer etc.
Also include code syntax highlighting feature.

![Vue Logo](https://vuejs.org/images/logo.png)
`
    }
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.input, { 
        sanitize: true, 
        gfm: true,
        highlight: function(code) {
          return hljs.highlightAuto(code).value
        }

      })
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value
    }, 300)
  },
  components: {
    
  }
}
</script>

<style scoped>
  .home {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  textarea {
    height: 100vh;
    width: 50%;
  }
  .output {
    height: 100vh;
    width: 50%;
    margin-left: 6px;
    border: 1px solid black;
    padding: 3px;
  }
</style>



<template>
  <!-- <div class="home">
    <textarea :value="input" @input="update"></textarea>
    <div class="output" v-html="compiledMarkdown"></div>
  </div> -->
  <v-layout>
    <v-flex xs6>
      <v-text-field
        name="input-7-2"
        label="Markedown Input"
        :value="input"
        @input.native="update"
        class="input-group--focused"
        rows="20"
        auto-grow
        textarea
      ></v-text-field>
    </v-flex>
    <v-flex xs6>
      <v-card hover>
        <v-card-title primary-title>
          <div>Output (Check output and save as index.md file)</div><br/>
          <v-divider></v-divider>
          <div v-html="compiledMarkdown"></div>
        </v-card-title>
        <v-card-actions>
          <v-btn round color="secondary" @click="saveAsMarkdown" raised>Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
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

</style>



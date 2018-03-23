<template>
  <!-- <div class="home">
    <button @click="saveAsMarkdown">Save</button>
    <textarea id="textArea" :value="input" @input="update"></textarea>
    <div class="output" v-html="compiledMarkdown"></div>
  </div> -->
  <v-layout justify-space-around class="mb-2">
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

import Remarkable from 'remarkable'
import _ from 'lodash'
import * as hljs from 'highlight.js'
import FileSaver from 'file-saver'

export default {
  name: 'editor',
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
## Remarkable
A similar markdown parser library with features like using html tag inside markdown, typography settings and many more. Here is the example of using image tag inside markdown.
<img src="https://vuejs.org/images/logo.png" width="60">
`
    }
  },
  computed: {
    compiledMarkdown: function() {
      var md = new Remarkable({
        html: true,
        xhtmlOut: true,
        breaks: true,
        linkify: true,
        typographer: true,
        highlight: function(code) {
          return hljs.highlightAuto(code).value
        }
      })
      return md.render(this.input)
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value
    }, 300),
    saveAsMarkdown: function() {
      var textToWrite = this.input;
      var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain'});
      var fileNameToSave = "index.md";
      
      FileSaver.saveAs(textFileAsBlob, fileNameToSave);
	    
    }
  },
  components: {
    
  }
}
</script>

<style scoped>
  v-text-field {
    height: 100vh;
  }  
</style>



<template>
  <v-row justify="center">
    // eslint-disable-next-line vue/no-mutating-props
    <v-dialog v-model="dialog"
          
      fullscreen
      dark
      hide-overlay
      
    >     
      <v-card>
        <v-toolbar dark color="black">
          <v-btn icon dark @click="$emit('closeDialog')">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex xl7 md7 class="ma-auto">
              <v-img
                src="../../static/pdf/CV-Dev-EliasBraga_page-0001.jpg" 
              ></v-img>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "DialogComp",
  emits:['closeDialog'],
  data() {
    return {  
      dialog:false    
    };
  },
  methods: {
    closeDialog() {
      this.dialog = !this.dialog;
    }
  },
  props: {
    switchDialog:Boolean
  },
  watch: {
    switchDialog(newValue) {
      this.dialog = newValue
    }
  }
};
</script>

<style scoped>
</style>
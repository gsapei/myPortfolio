<template>
    <v-card class="px-2 elevation-1" id="resume"> 
      
      <div class="headerCard px-8 py-4" id="cardTitle" style="opacity: 1;">
        <v-row>
          <v-col>
            <userHeader/>

          </v-col>
          <v-col>
            <v-card-actions class="notPrintable">
              <v-spacer></v-spacer>
              <v-btn class="actionButton" size="small" variant="plain" icon="fa-solid fa-print" @click="printContainer()"></v-btn>
            </v-card-actions>
            
          </v-col>
        </v-row>
      </div>

        
      <v-row class="py-4 px-8" id="content">  
        <!--- Left Paragraph ---->       
        <v-col cols="4" class="py-6 px-4 leftParagraph">
          <v-row>
            <v-col><userContact/></v-col>
          </v-row>

          <v-row class="pt-5">
            <v-col><userEducation/></v-col>  
          </v-row>

          <v-row class="pt-5">
            <v-col><userLanguages/></v-col>
          </v-row>
          
          <v-row class="pt-5">
            <v-col><userSkills/></v-col>
          </v-row>

        </v-col>

        <!--- Divider --->
        <v-col cols="1" class="pt-4 centerParagraph">
          <div class="divider text-primary"></div>  
        </v-col>
        
        <!--- Right Paragraph --->
        <v-col cols="7" class="pl-8 pr-4 py-6 rightParagraph">

          <v-row>
            <v-col><userDescription/></v-col>
          </v-row>

          <v-row class="pt-6">
            <v-col><userExperience/></v-col>
          </v-row>

        </v-col>
      </v-row>

    <v-row style="height: 20px;"/>

    </v-card>
</template>

<script>
import userHeader from '@/components/UserHeader.vue';
import userSkills from '@/components/userSkillsCV.vue';
import userLanguages from '@/components/UserLanguages.vue';
import userExperience from '@/components/UserExperienceCV.vue';
import userContact from '@/components/UserContact.vue';
import userEducation from '@/components/UserEducation.vue';
import userDescription from '@/components/UserDescription.vue';

export default {
  name: "printCV",
  setup() {
    
    const printContainer = () => {
        // Get HTML to print from element
        const prtHtml = document.getElementById('resume').innerHTML;

        // Get all stylesheets HTML
        let stylesHtml = '';
        for (const node of [...document.querySelectorAll('link[rel="stylesheet"], style')]) {
        stylesHtml += node.outerHTML;
        }

        // Open the print window
        const WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');

        WinPrint.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
              ${stylesHtml}
          </head>
          <body>
              ${prtHtml}
          </body>
        </html>`
        );
        WinPrint.document.close();

        setTimeout(() => {
          WinPrint.focus();
          WinPrint.print();
          WinPrint.close();
        }, 300);

    }

    return{
        printContainer,
    }
  },
  components: {
    userHeader,
    userSkills,
    userLanguages,
    userExperience,
    userContact,
    userEducation,
    userDescription,
  }
}
</script>

<style lang="scss" scoped>

  p {
  color: black;
  }

  h4 {
  color: black;
  }


  .divider {
      width: 0;
      margin: 0 auto;
      height: 100%;
      border: 2px solid;
    }

  
  .leftParagraph{
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    background-color: rgba(0,0,0,.05);
    border-radius: 10px;
  }

</style>

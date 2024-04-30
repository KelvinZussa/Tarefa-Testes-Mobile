import { $ } from '@wdio/globals'



class cadastro {

   async Logar (SignUp) {
      await $(`//android.widget.TextView[@text="${SignUp}"]`).click()
   }



}

export default new cadastro ();

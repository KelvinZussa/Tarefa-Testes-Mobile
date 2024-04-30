import { $ } from '@wdio/globals'



class Perfil {
   async perfilnome (name) {
    return await $(`//android.widget.TextView[@text="${name}"]`)
   }



}

export default new Perfil();

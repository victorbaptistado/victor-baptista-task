import Vue from 'vue'
window.Vue = Vue
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'



//Acess vue file within folder *components
const requireComponent = require.context(
    './components/',
    true,
    /[A-Z]\w+\.(vue|js)$/
)
requireComponent.keys().forEach(fileName => {
    //Get component config
    console.log(fileName);
    const componentConfig = requireComponent(fileName)

    //Formating name from *components folder to be used
    const componentName = upperFirst(
        camelCase(
            fileName
            .split('/')
            .pop()
            .replace(/\.\w+$/, '')
        )
    )

    //Register Components 
    Vue.component(
        componentName,componentConfig.default || componentConfig
    )
})


window.components = Vue.extend({})




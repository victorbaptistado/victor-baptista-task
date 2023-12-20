import Vue from 'vue'
window.Vue = Vue
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
    './components/',
    true,
    /[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)

    const componentName = upperFirst(
        camelCase(
            fileName
            .split('/')
            .pop()
            .replace(/\.\w+$/, '')
        )
    )

    Vue.component(
        componentName,componentConfig.default || componentConfig
    )
})

window.components = Vue.extend({})

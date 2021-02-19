
import "../src/main.less"
import * as Icons from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';

const iconList = Object
  .keys(Icons)
  .filter(key => key !== "fas" && key !== "prefix" )
  .map(icon => Icons[icon])

library.add(...iconList)


export const parameters = {
  actions: { 
    argTypesRegex: "^on[A-Z].*"
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#111',
      },
      {
        name: 'main',
        value: 'peru',
      },
      {
        name: 'white',
        value: 'white',
      }
    ],
  }
}
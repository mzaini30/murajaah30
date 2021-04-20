
/**
 * @roxi/routify 2.15.1
 * File generated Wed Apr 21 2021 00:11:48 GMT+0800 (Waktu Indonesia Tengah)
 */

export const __version = "2.15.1"
export const __timestamp = "2021-04-20T16:11:48.925Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "root": true,
  "children": [
    {
      "isIndex": true,
      "isPage": true,
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    }
  ],
  "path": "/"
}


export const {tree, routes} = buildClientTree(_tree)


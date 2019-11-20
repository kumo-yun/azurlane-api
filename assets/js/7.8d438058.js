(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{206:function(s,t,a){"use strict";a.r(t);var r=a(0),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"ship"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ship"}},[s._v("#")]),s._v(" Ship")]),s._v(" "),a("p",[s._v("Used to get ship info.")]),s._v(" "),a("p",[a("strong",[s._v("URL")]),s._v(" : "),a("code",[s._v("/ship")])]),s._v(" "),a("p",[a("strong",[s._v("URL Parameters")]),s._v(" :")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("ship=[string]")]),s._v(" where "),a("code",[s._v("ship")]),s._v(" is the name of the ship you want to get.")]),s._v(" "),a("li",[a("code",[s._v("id=[string]")]),s._v(" where "),a("code",[s._v("id")]),s._v(" is the id of the ship you want to get.")])]),s._v(" "),a("p",[a("strong",[s._v("Method")]),s._v(" : "),a("code",[s._v("GET")])]),s._v(" "),a("p",[a("strong",[s._v("Auth required")]),s._v(" : NO")]),s._v(" "),a("h2",{attrs:{id:"success-response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#success-response"}},[s._v("#")]),s._v(" Success Response")]),s._v(" "),a("p",[a("strong",[s._v("Code")]),s._v(" : "),a("code",[s._v("200 OK")])]),s._v(" "),a("p",[a("strong",[s._v("Content return types")])]),s._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" Names "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" en"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" cn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" jp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" kr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" Skin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" title"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" image"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" chibi"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" Stars "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// example: ★★★☆☆☆")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" count"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Int\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" Stat "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" image"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" Stats "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" level100"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" List"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Stat"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" level120"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" List"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Stat"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" base"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" List"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Stat"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" retrofit100"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" List"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Stat"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" retrofit120"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" List"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Stat"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" MiscellaneousData "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" link"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" Miscellaneous "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" artist"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" MiscellaneousData"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" web"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" MiscellaneousData"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" pixiv"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" MiscellaneousData"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" twitter"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" MiscellaneousData"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" voiceActress"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" MiscellaneousData"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" Ship "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" wikiUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" names"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Names\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" thumbnail"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" skins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" List"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Skin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" buildTime"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" rarity"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" stars"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Stars\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" `"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v("`"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" nationality"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" nationalityShort"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" hullType"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" stats"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Stats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" miscellaneous"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Miscellaneous\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" Response "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" statusCode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Int\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" statusMessage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" message"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" ship"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Ship\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"error-response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-response"}},[s._v("#")]),s._v(" Error Response")]),s._v(" "),a("p",[a("strong",[s._v("Condition")]),s._v(" : If something server-side goes wrong.")]),s._v(" "),a("p",[a("strong",[s._v("Code")]),s._v(" : "),a("code",[s._v("500 Internal Server Error")])]),s._v(" "),a("p",[a("strong",[s._v("Content return types")]),s._v(" :")]),s._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" ErrorResponse "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" statusCode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Int\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" statusMessage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" message"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" error"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[a("strong",[s._v("Condition")]),s._v(" : Bad request param.")]),s._v(" "),a("p",[a("strong",[s._v("Code")]),s._v(" : "),a("code",[s._v("400 Bad Request")])]),s._v(" "),a("p",[a("strong",[s._v("Content return types")]),s._v(" :")]),s._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" ErrorResponse "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" statusCode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Int\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" statusMessage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" message"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" error"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);
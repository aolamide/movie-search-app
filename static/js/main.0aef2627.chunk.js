(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),o=a.n(r),i=(a(15),a(1)),c=a(2),s=a(5),u=a(3),h=a(6),m=(a(17),a(4)),p=a.n(m),g={margin:"10px",borderRadius:"5px",width:"150px",display:"inline-block",height:"300px"},A=function(e){var t=e.movie,a=e.singleMovie,n=t.Poster,r=t.Title,o=t.Year,i=t.imdbID;return l.a.createElement("div",{onClick:function(){return a(i)},className:"card",style:g},l.a.createElement("img",{width:"150px",height:"200px",src:"N/A"===n?p.a:n,alt:r}),l.a.createElement("h4",null,r," "),l.a.createElement("p",null,o))},E=function(){return l.a.createElement("div",{style:{textAlign:"center",background:"orange"}},l.a.createElement("p",null,"Made with ",l.a.createElement("i",{className:"fa fa-heart"})," by Aboyeji Olamide"),l.a.createElement("div",null,l.a.createElement("a",{href:"https://linkedin.com/in/aolamide",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-linkedin fa-2x"})),l.a.createElement("a",{href:"https://github.com/aolamide",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-github fa-2x"})),l.a.createElement("a",{href:"mailto:aboyejiolamide15@gmail.com",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-envelope fa-2x"}))))},d=function(e){var t=e.data,a=e.singleMovie,n=e.searchText;return e.loading?l.a.createElement("div",{className:"loader"}):t.Error?l.a.createElement("h3",{style:{paddingTop:"100px"}},t.Error):t.length>0?l.a.createElement("div",{style:{paddingTop:"70px"}},l.a.createElement("p",null,'Showing results for "',n,'"'),t.map(function(e){return l.a.createElement(A,{singleMovie:a,key:e.imdbID,movie:e})}),l.a.createElement(E,null)):l.a.createElement("p",null)},f=(a(19),function(e){var t=e.movieInfo,a=e.changeRoute,n=t.Title,r=t.Poster,o=t.Rated,i=t.Released,c=t.Runtime,s=t.Actors,u=t.Plot,h=t.imdbRating,m=t.BoxOffice,g=t.Production,A=t.Type,d=t.Genre,f=t.Writer,v=t.Language,y=t.Country,C=t.Ratings;return n?l.a.createElement("div",{className:"infoPage"},l.a.createElement("button",{onClick:a,style:{position:"fixed",top:"5px",left:"5px",backgroundColor:"orange",padding:"5px",borderRadius:"50%",width:"25px"}},l.a.createElement("i",{className:"fa fa-arrow-left"})),l.a.createElement("div",{className:"main"},l.a.createElement("img",{className:"poster",src:"N/A"===r?p.a:r,alt:"poster"}),l.a.createElement("div",{className:"info"},l.a.createElement("h3",null,n),l.a.createElement("p",null,"Type : ".concat(A||"N/A")),l.a.createElement("p",null,"Genre : ".concat(d||"N/A")),l.a.createElement("p",null,"Released : ".concat(i||"N/A")),l.a.createElement("p",null,"Runtime : ".concat(c||"N/A")),l.a.createElement("p",null,"Rated ".concat(o||"N/A")))),l.a.createElement("div",null,l.a.createElement("p",null,u)),l.a.createElement("div",{className:"moreInfo"},l.a.createElement("p",null,"Actors : ".concat(s||"N/A")),l.a.createElement("p",null,"Writer : ".concat(f||"N/A")),l.a.createElement("p",null,"Language : ".concat(v||"N/A")),l.a.createElement("p",null,"Country : ".concat(y||"N/A")),l.a.createElement("p",null,"imdbRating  : ".concat(h||"N/A")),l.a.createElement("fieldset",null,l.a.createElement("legend",null,"OTHER RATINGS:"),C.map(function(e){return l.a.createElement("p",null,"".concat(e.Source," : ").concat(h.Value||"N/A"))})),l.a.createElement("p",null,"Production  : ".concat(g||"N/A")),l.a.createElement("p",null,"Box Office :  ".concat(m||"N/A"))),l.a.createElement(E,null)):l.a.createElement("div",{className:"loader"})}),v={padding:"15px",width:"auto",margin:"auto",fontSize:"10px"},y={borderRadius:"0 16px 16px 0",backgroundColor:"#c7c7c7",minWidth:"40px",padding:"7px"},C={padding:"7px",borderRadius:"16px 0 0 16px",outline:"none"},R=function(e){var t=e.onInputChange,a=e.onSearch;return l.a.createElement("form",{style:v,onSubmit:a},l.a.createElement("input",{style:C,placeholder:"Search for movies, series, tv shows...",type:"text",onChange:t}),l.a.createElement("button",{style:y},l.a.createElement("i",{className:"fa fa-search"})))},w={marginTop:"50px",color:"rgb(236, 159, 15)"},S=function(){return l.a.createElement("div",{style:w},l.a.createElement("h1",{className:"app-title",style:{marginBottom:"0",fontFamily:'"Permanent Marker", cursive'}},"MOVIE SEARCH APP"),l.a.createElement("p",{style:{fontSize:"0.8rem",marginTop:"0",fontFamily:'"Lobster", cursive'}},"Search and read a little about your favorite movies..."))},G=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).singleMovie=function(e){fetch("https://omdbapi.com/?apikey=61fddd85&i=".concat(e,"&plot=full")).then(function(e){return e.json()}).then(function(e){return a.setState({movieinfo:e})}).then(a.setState({route:"singlemovie"})).catch(function(e){return console.log("oops",e)})},a.changeRoute=function(){a.setState({route:"moviecards"}),a.setState({movieinfo:[]})},a.state={route:"moviecards",movieinfo:[]},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return"moviecards"===this.state.route?l.a.createElement("div",null,l.a.createElement("div",{className:"app-head"},l.a.createElement(S,null),l.a.createElement(R,{onInputChange:this.props.onInputChange,onSearch:this.props.onSearch})),l.a.createElement("div",{className:"app-body"},l.a.createElement(d,{singleMovie:this.singleMovie,data:this.props.result,searchText:this.props.searchText,loading:this.props.loading}))):l.a.createElement(f,{changeRoute:this.changeRoute,movieInfo:this.state.movieinfo})}}]),t}(l.a.Component),x=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).onInputChange=function(t){e.setState({input:t.target.value})},e.onSearch=function(t){t.preventDefault(),document.querySelector("input").blur(),e.setState({loading:!0}),fetch("https://omdbapi.com/?apikey=61fddd85&s=".concat(e.state.input)).then(function(e){return e.json()}).then(function(t){t.Error?e.setState({result:t}):e.setState({result:t.Search,searchText:e.state.input,loading:!1})}).catch(function(e){return console.log("oops",e)})},e.state={input:"",result:[],searchText:null,loading:!1},e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(G,{onInputChange:this.onInputChange,onSearch:this.onSearch,result:this.state.result,searchText:this.state.searchText,loading:this.state.loading}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},4:function(e,t){e.exports="data:image/gif;base64,R0lGODlhXgFeAbMAAK+vr+Tk5MnJyZqamvj4+Kenp+vr69bW1vHx8by8vKGhocLCwtDQ0N3d3ZOTk////yH5BAAAAAAALAAAAABeAV4BAAT/0MlJq7046827/2AojmRpnmiqrmzrvnAsz3Rt33iu73wvPsCgcEgsGo/IpHLJbDqf0Kh0Sq1ar1ELdsvter/gsHhMDmrL6LR6zW67s5W3fE6v2+/GM37P7/v/TXqAg4SFhmuCh4qLjI2BcY6RkpOLiZSXmJlvlpqdnp9cnKCjpKVJoqapqqOoq66vk62ws7SFsrW4uXe3ur2+iJC/wsNsvMTHyFTGyczNSsvO0dJA0NPWydXX2sLZ29653d/isOHj5qnl5+qg6evume3v8pLx8/aVwff6pPX7/n79/gnclW+gwUgBDyosVnChQ0IJH0oME3GixVANL2qcU3GjRzgU/z6K3JRxpEkxHU+qJJJypcsHLV+qjCnTJM2aIm/i9Khzp8aePi0CDSpxKFGHRo8qTKrUINOmAp9C9Sd1qr6qVu1hzSpvK1d3Xr+qCyvWHNmy4s6i9aZ2rba2bq3BjSttLl1ndu8yy6sXGd++xP4C5lZy8EjBhnshTgyuMOONix/TiiyZnOPKEyljXqV5M7rLnhd2Ds0PNGmnpk9HTa2aKuvWV1/D1ip7dtfatsHizj12N2+zvn+nDS6cLfHib48jl6t8ed3mzvFCj753OnW/1q8Hzq6dcMjutL+Dvy1+vO7y5nujTw98Pfvh7t8bjy8/Of36zO/jf65/v/T+/lUHYP+A2A1oiAEAJKigggIgseCDCx5QBoIQVihhXKMZEYAGDRzRQYNkbPghXRkWISIGAyCQBwcgjnHiBi2uVaKGCWBQwBEIMABABQosEMAaBjBQgAUANKDiXTMeYcCQFiyQhAAUHOkGkxMQAFiSR7xIwY84TgDAHDsaaBWWRwxwwQBWeihBAmByN5ObdoRJpIMSxNiGnBIMRqYRYZpZgZ1ChAnoGng6oCecdYS5AJUTcEmEoEogsACeBSxgwBWFmiiAgkze+ICkVBZwYRCSKjCBqEsYsCgFBSTgKBIGJEClAgkcEMCtuAYg5RAHAOCnA62+SsmeRQhqwK8SKJDmEJAeQUD/jRkAsGsUmRIB5QUPLGCjlQRoe0EByxKBoAYAhDsEAYXCSEQApmJQLibEPlrnAwzMKa8DgwJxLAcDdDhFtUNcS6QGBSDAqL1EHICsu0YQcDCLvHIA7iXxMjvvA+kycG+++57qbwAHC+sEwEIg0AC0FygAQLsU/Koyy40SgYDL/hpcwaiBsqqizRjEeEDLFzaA7JfDIkpHswTALMGlOeNrBKMTB+Fwy+Y2QTIR3rLqaL0WFLB1BWwOkbUDAwiRNAVEC2FABVISgKzIn1Kt9s1Fi8lIsw+szWO4eAshsATTxk1B2FBcPYSW7zbt5b0SpB3E1T9PULbYaFM+AeGKO4Az/xB4Ou5IxU3HyPXgoReBLOaZO1D1EoYLoWXVo0sAe0NjG+p6Q3ja2QAFCsjMexGx206P0W06nbrmj18sxO4U+Jsw3YU7pqWJGU0/xMwTaHz7erkfTjvp61YAtyKgJ2+81AsPwHTfQNQeuL5gUyt99fS7h4AAAjAtde2MO+Dk8rgbXK5wFbzxHaJ8nFNeELQELCuxD2OOqYDnmNC6BdZvAtQDEAF6ha2AscpyjWOJCLSHEOLJ4YEP+JsEnPTAClKjctG7j/W8554ZFmGD6VoPAsSHPgpsDiYiyNcBTfgGFEKwAg144MKQIEH5yfCCeQpffBCQgIWpLCN/61feoFYEHv9VCEI/xIfdFmFE7LWsXYByIRAXF0MMZgmKwtueG3m1MFc9wIZCqJ0F1NdFCghREwg8ohCZd4E0RhCGT1AjHoGwyDs2JHKn0l8jgaBCtK1ujQpkBRHdYMT29ax/DnjfAwhQgf8lcn41hOO5kBU1Rv6uCJDknR2PALMJfiKQnQTCw84XhOA5bwiElMAvrYbKOcoxijQ0Jr3YlkwH2PJErWRdBS7JSGoOcYyK8JMtS7YwXgJhh+DDmtzaiMwMKtOVqUQPyhzQu4ix0WJrekIskWeEHQ4gjOTbJBtIKYHJIWGe3gTCOtFEBLeF85RPTOc5HYkeSlkLkZlrFf7wZytd3RD/WcriU7Jioc81/I2ER1hnQAU3AVMGYWwpkkKhRMnQhTYSjytVGyuL5QGvPZRVVUPZMBlRsSClqwAM0F9BGZWv4IE0ePhEAgICUEkFMEBk40KbUKN6uakWylK9rEABLnW/C4AUfh/46tRaFtRRJvFydVuoJHKIio6NVKA8WsAClIY6JTDwky3FQF6xddfvGDQD3ZTAq4T2gWG6lVwU6ygZ2OqY0f2RAYGVXFLfOKK9aqGvGMQsMgEqOVVdwFEBYOyZZLZLCph0eNgExKS+uKAk5PJTVdxjAlgKK9Y+6EIUYm3ebPul3H5xeUobwALStIBfDWC2lNTqRPGXgJXxMGG7/wSAAXmqWE8EgAEUnS4mmIq/AFTtVrsK5gAMuE4hmmyiRupEIDfCqMnyM5OuWO9P+kOBr8a3uoaZJhKCKdRXyPciMKur1Ki0TVX81yIqLNK5DgCz/voXv4MZq1YTFNzJfia1zkGXB6SliwNrRFWlrRRt74vh7iwVVyOehYcJ1IUVs3gLLn7xFWIs4yrQuMZTuDGOQaLWHW+nxC5BgIO5QADtMsG7w9BxJHpVK7UpSGlDjsJqr+qEKTfROz02ydgIh1kjU5BhxLxAgScD4TpAy8J3ACcFmNZlLLB1zKB8py90/Fc434GBziuyABbmZSYY4KwQTRUHA93hMs8hlimuA/8DRaalPjuhllJglJ0fDGRJELUQf+3n6p7LhbFNugh/+zRnDP0GvU2gnYToGB/7GLMuhFoKr8ZyOV2hx536ochIXlGruRBrKPR6zqR2QzcF/LkteeHXTkB2oSvdCM6qDl7GdjWhmaDsxjD7bhiwb7F3vYVqL8HbtYixmlXoqSIYYIADXBa6cfVdATQXAN3N0q0OMFEA4JPTRmjAphIkgLIiIdYG2PcCGDBicAchSO8WwAESve0sg+Ja5VpYlEXrqAy8SgBKOzXcMqBrwTYstmKOcgrRFtoLJICaBi+5yRkuRod/ol0SEimxKW4GDHBpSRz4IcdZ7XFxRbazRsiiBlb/fdMQBn0DRIdHsNXAvMmZup9GOMAuVaa/TVVAuCo6W7Jq1YDaETSPOey4A6DqsgU04AAiLbcHxdzNpAfB2yg1OwNgllJALj0N0DKl0pJ62GeL61TL8vQxHaBtBChN7CLrXlabB2oejQpkWq1atYPZSgk7U713L8N79Re8MQeT8EUg5K7w5E+4ytlvJcH3C08Ps0H9LaNmOxiglJ3pultwzXa/tiG4pvb3ToC2MEN101AHuZZpKPXRFsLQQHj5ojf/eld3/gRjJ2Bk/ZG6ui8EzIcg0tMOoYDQ73kQYom6SU5S9Q9Y51er7W2RDlPZMINb53Lv8kyY2lyfF35Bl4/6/+f7jd/4VxLnl3xS824/JHjSl2+ltHZGRyolsU76x1HZNwjQMgAVYgG2FgQitSvbtwQ4JAoDyG1KJSRXxoD+ZzYlmFyn52wbQH+zNgqZ1gFj9nTnwzwRWFCD1kFSpFbodz0kKGaNd3pCoFUm6DmV1AEuGEekwIIZYE2kZz5/pHItI4DIJ4JCkINgVoRHcDBa2H8hkISqwCTwtlzLdTDaNn50A05fJy6FIlznZnzm9IKrJ37AxSMC0FVCOHJ5mEDogWwqZBkT6AemxlL5lwTLBy3EdlgDIABp8iLbFIJ0CATzdE9vd1CVuIcPMFNeeIJ/SGn1RwnQAmcS92/i4yfvo/91/SRUsfOIVRiJaiYB0fQ3rjdtc8iJgTZPjgZtgcgHf2VhtUNs33R1DehOIuhtkDh23DdO5gNfejiMc+NHXXhwFXCGUoN5u7gHkGRNeXN1TngBGehQ0dhMSlhzIhhg/TOLexg8/aVsmhh1WqR014gHYrgEe4cEDHSDfOiMzXiCt8eDBIhJAaV44SgEkpaAyfiPUtMu1Ih9nxgJjrUEwQN7RqA01Ign+md52/R5iDcE8SNT0ChOUUIEnycyyvaKZPM+KMNyEJF5XhA7W6UEAFUwRxA81CRSj3cwEplH6Od7JwhlQUBY01Yo0XRY3pd+LeNgXoczCCAnC8mQckgJWNj/MgDgfQnycwVgS743ZjEJAKWlMgBwKQiyS1fJOb6yR1+pgmjjXN+SIMczAE/FVPw3flz5LSZlef2UIIwCjA33lJNwhITmAUaAMhYmWnP3WZYFCRvAJai4R8FjTKIFNubil86oYRugl3s5jpcgmfoImBlUeg2TQwrwI33HR5plO4l5cNGlIgAlfGEiKhnXT2GkmbYEWRigABkogQ3JDLcicsD0bgDQZFJDb/EWBr2iID5SMtjVb/0VJje3bwkCnFzQdQtidpoUj3ERALd5DkrmY49gndypi7n5nSrGkuK5B9tZnkxEnuhpB+e5njzHl+4ZbuoZn3LQnvRJjuF5n6Xh/536eU352Z+3NJ8Aqgb2qZ8Fep8HSp8JGp8L6p4Nup4Pip4RWp4TKp4V+p0Xyp0Z6mMbumMdimMfWmMhKmMj+mIlymInSiApGiAr6h8tuh8vih8xWh8zKh81+h43yh45mh47ah49Oh4/Ch5B2h1Dqh1Feh1HSh1JGh1L6hxNuhxPihxRWhxTKhxV+htXyhtZmhtbahtdOhtfChth2hpjqhplehpnShppGhpr6hltuhlvihlxWhlzKhl1+hh3yhh5mhh7ml8COqBo0KeHwp+ACgiCeiV/WqhjcKh9wah64ahIkqiKShGSOqlfAKkkUqmW2mKauqkw1qmeOmOgGqo2NuSqpJpjpnqqPAafqgqerNqqafWqsIpa/zmrhoCpGJKqtroEuOoWvSojurqrpxCswqomhFqsBEqsyCpCx7qsZfCraAGtZSGtYkGtX2GtXIGtWaGtY6KszoqfsvqtK9ms4kqp5Fqul+qt4sqtU8GuUOGuTQGvSiGvR0GvRGGvQYGvPqGvO8GvOOGvNQGwMiGwL0GwLmGwK4Gwb3Ku6MqpDNuwn/qwECuqEjuxpVqxFouqGJuxq4qZHPsHCnsSIWsT6vqtI3sYPpCyKruyLNuyLvuyMBuzMjuzNFuzNnuzOJuzOnsBEQAAOw=="},9:function(e,t,a){e.exports=a(21)}},[[9,2,1]]]);
//# sourceMappingURL=main.0aef2627.chunk.js.map
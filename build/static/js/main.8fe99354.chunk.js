(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){},39:function(e,t,a){e.exports=a(88)},45:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},79:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(24),i=a.n(s),o=(a(45),a(91)),c=a(92),r=a(93),u=a(2),m=a(3),d=a(6),h=a(5),g=a(7),p=a(9),f=(a(26),a(12)),v=a(37),E=a(13),b=a.n(E),y=(a(65),a(66),a(16)),C=(a(78),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).state={form:{doc_name:"",place:"",quali:"",sample:"",chemist:["","","","","",""],associate:"",misc:"",value:0},options:[{name:"Select number of chemists",value:0},{name:"1",value:1},{name:"2",value:2},{name:"3",value:3},{name:"4",value:4},{name:"5",value:5},{name:"6",value:6}],isLoading:!1},a.notify=function(e){"submitted"===e?y.toast.info("Form Submitted Successfully !",{position:y.toast.POSITION.BOTTOM_CENTER}):"error"===e&&y.toast.error("Check Your Internet Connection !",{position:y.toast.POSITION.BOTTOM_CENTER})},a.handleChemist=function(e,t){var n=Object(v.a)(a.state.form.chemist);n[t]=e.target.value,a.setState({form:Object(p.a)({},a.state.form,{chemist:n})})},a.handleChange=function(e){a.setState({form:Object(p.a)({},a.state.form,Object(f.a)({},e.target.id,e.target.value))})},a.handleSubmit=function(e){a.setState({isLoading:!0});var t=Object(p.a)({},a.state.form,{username:a.props.send.username,location:a.props.send.loc,fullAddress:a.props.send.fullAddress});console.log(t),b.a.post("https://www.eugenicspharma.in/react_eugenics_reporting/insert.php",{submit_form:t}).then(function(e){a.setState({form:{doc_name:"",place:"",quali:"",sample:"",chemist:["","","","","",""],associate:"",misc:"",value:0},isLoading:!1}),a.notify("submitted"),console.log(e.data)}).catch(function(e){a.setState({isLoading:!1}),console.log(e),a.notify("error")})},a.validateForm=function(){var e=a.state.form;return e.doc_name.length>1&&e.place.length>1&&e.quali.length>1&&e.associate.length>1},a.chemistno=function(){for(var e=[],t=function(t){e.push(l.a.createElement("input",{id:"chemist".concat(t),key:t,type:"text",placeholder:" Chemist ".concat(t+1),onChange:function(e){a.handleChemist(e,t)},value:a.state.form.chemist[t]}))},n=0;n<a.state.form.value;n++)t(n);return e},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{id:"content"},l.a.createElement("input",{id:"doc_name",type:"text",placeholder:" Doctor's Name",onChange:this.handleChange,value:this.state.form.doc_name}),l.a.createElement("input",{id:"place",type:"text",placeholder:" Place",onChange:this.handleChange,value:this.state.form.place}),l.a.createElement("input",{id:"quali",type:"text",placeholder:" Qualification",onChange:this.handleChange,value:this.state.form.quali}),l.a.createElement("input",{id:"sample",type:"text",placeholder:" Sample",onChange:this.handleChange,value:this.state.form.sample}),l.a.createElement("select",{id:"value",onChange:this.handleChange,value:this.state.form.value},this.state.options.map(function(e){return l.a.createElement("option",{key:e.value,value:e.value},e.name)})),this.chemistno(),l.a.createElement("input",{id:"associate",type:"text",placeholder:" Associate",onChange:this.handleChange,value:this.state.form.associate}),l.a.createElement("input",{id:"misc",type:"text",placeholder:" Miscellaneous",onChange:this.handleChange,value:this.state.form.misc}),l.a.createElement("button",{type:"button",className:"btn btn-success ld-ext-right running",onClick:this.handleSubmit,disabled:!this.validateForm()},l.a.createElement("i",{className:"fas fa-notes-medical pad-takeinput fa-lg"}),!0===this.state.isLoading?l.a.createElement("div",{className:"ld ld-ring ld-spin"}):null,l.a.createElement("span",null,"Submit")),l.a.createElement(y.ToastContainer,null)))}}]),t}(n.Component)),w=a(89),k=(a(79),["#689F38","#26A69A","#8BC34A","#4FC3F7","#D500F9","#FFA726","#1565C0","#00BCD4"]),N=function(){return k[Math.floor(7*Math.random()+1)]};Date.prototype.toShortFormat=function(){var e=this.getDate(),t=this.getMonth(),a=this.getFullYear();return e+" "+["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t]+" "+a};var S=function(e){return l.a.createElement("li",{className:"w3-bar"},l.a.createElement("div",{className:"circle-listitem w3-hide-small",style:{backgroundColor:N()}},"Dr"===e.data.docname.substring(0,2)?e.data.docname.substring(3,e.data.docname.length).trim()[0].toUpperCase():e.data.docname[0].toUpperCase()),l.a.createElement("div",{className:"items"},l.a.createElement("div",{className:"left-elements"},l.a.createElement("span",{className:"name-listitem"},e.data.docname," "),l.a.createElement("span",{className:"place-listitem"},e.data.place)),l.a.createElement("span",{className:"date-listitem"},new Date(e.data.date).toShortFormat())))},O=a(36),x=a.n(O),j=(a(82),function(){return l.a.createElement("div",{className:"lds-ring"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null))}),D=function(e){return l.a.createElement("select",{onChange:e.sort,className:"dropdown-select"},l.a.createElement("option",{value:"date"},"Date"),l.a.createElement("option",{value:"place"},"Place"),l.a.createElement("option",{value:"quali"},"Qualification"))},A=a(15),L=(a(83),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(f.a)({},e.target.id,e.target.value))},a.validateForm=function(){return 10===a.state.firstDate.length&&10===a.state.secondDate.length},a.handleClick=function(e){console.log(a.state);var t=a.state,n=t.firstDate,l=t.secondDate,s="https://eugenicspharma.in/react_eugenics_reporting/jsonDate.php?username=".concat(a.props.username,"&firstDate=").concat(n,"&secondDate=").concat(l);a.setState(Object(p.a)({},a.state,{URL:s})),console.log(s)},a.state={firstDate:"",secondDate:""},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"downloadCSV-date"},l.a.createElement("div",null,l.a.createElement("label",null,"Start date:"),l.a.createElement("input",{type:"date",id:"firstDate",onChange:this.handleChange,value:this.state.firstDate})),l.a.createElement("div",null,l.a.createElement("label",null,"End date:"),l.a.createElement("input",{type:"date",id:"secondDate",onChange:this.handleChange,value:this.state.secondDate})),l.a.createElement("a",{href:this.state.URL,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("button",{type:"button",onClick:this.handleClick,className:"btn btn-info btn-xs",disabled:!this.validateForm()},"Download",l.a.createElement("i",{className:"far fa-file-excel fa-lg"})))))}}]),t}(n.Component)),P=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={nav:"sidebar",loc:"",fullAddress:"",sidebarPadding:"260px",activePage:1,isLoading:!1,askingInput:!0,askingList:!1,askingDownload:!1},a.getLocation=function(){var e={longitude:"",latitude:""};navigator.geolocation?navigator.geolocation.getCurrentPosition(function(t){e={longitude:t.coords.longitude,latitude:t.coords.latitude},console.log(e);var n="https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=".concat(e.latitude,"&lon=").concat(e.longitude);fetch(n).then(function(e){return e.json()}).then(function(e){a.setState({fullAddress:e.display_name,loc:e.display_name.split(",",1)[0]})}).catch(function(e){console.log("Unable to fetch location: ",e)})}):console.log("Geo Location not supported by browser")},a.logout=function(){localStorage.removeItem("LoginData"),window.location.href="/"},a.handlePageChange=function(e){a.fetchEntries(e,_),a.setState({activePage:e})},a.handleClick=function(){a.setState({nav:"sidebar"===a.state.nav?"sidebar sidebar-active":"sidebar",sidebarPadding:"260px"===a.state.sidebarPadding?"20px":"260px"})},a.handleTab=function(e){A.isMobile&&a.handleClick();var t=e.target.id;"home"===t?a.setState({askingInput:!0,askingList:!1,askingDownload:!1}):"entries"===t?a.setState({askingInput:!1,askingList:!0,askingDownload:!1}):"download"===t&&a.setState({askingInput:!1,askingList:!1,askingDownload:!0}),console.log(t)},a.fetchEntries=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"date";a.setState({isLoading:!0});var n="https://www.eugenicspharma.in/react_eugenics_reporting/json.php?username=".concat(a.state.username,"&pagenumber=").concat(e,"&sortby=").concat(t);console.log(n),a.axiosRequest(n)},a.axiosRequest=function(e){b.a.get(e).then(function(e){a.setState(Object(p.a)({},a.state,{json:e.data,isLoading:!1})),console.log(a.state.json)}).catch(function(e){console.log("Unable to fetch: ",e)})},a.sortDropmenu=function(e){var t=e.target.value;_=t,console.log(t),a.fetchEntries(a.state.activePage,t)},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(this.getLocation(),localStorage.getItem("LoginData")){var t=JSON.parse(localStorage.getItem("LoginData"));this.setState(Object(p.a)({},t),function(){e.fetchEntries(e.state.activePage)})}}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"wrapper"},l.a.createElement("nav",{className:this.state.nav},l.a.createElement("div",{className:"sidebar-header"},l.a.createElement("img",{src:"/logo.png",alt:"company logo"}),l.a.createElement("h3",null,"Eugenics")),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("p",null,l.a.createElement("i",{className:"fas fa-user fa-lg",style:{paddingRight:"0.2em"}}),this.state.name),l.a.createElement("li",{className:this.state.askingInput?"active":null},l.a.createElement("p",{onClick:this.handleTab,id:"home"},"Home")),l.a.createElement("li",{className:this.state.askingList?"active":null},l.a.createElement("p",{onClick:this.handleTab,id:"entries"},"Entries")),l.a.createElement("li",{className:this.state.askingDownload?"active":null},l.a.createElement("p",{onClick:this.handleTab,id:"download"},"Download")),l.a.createElement("li",{className:null},l.a.createElement("p",{onClick:this.handleTab,id:"contact"},"Contact"))),l.a.createElement("ul",{className:"list-unstyled CTAs"},l.a.createElement("li",null,l.a.createElement(w.a,{to:"",className:"download"},l.a.createElement("i",{className:"fas fa-map-marker-alt fa-lg",style:{paddingRight:"0.2em"}}),this.state.loc)),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.eugenicspharma.in",className:"article"},"Back to website")))),l.a.createElement("div",{id:"content",style:{paddingLeft:this.state.sidebarPadding}},l.a.createElement("nav",{className:"navbar navbar-light bg-light"},l.a.createElement("button",{type:"button",onClick:this.handleClick,className:"btn btn-info btn-xs"},l.a.createElement("i",{className:"fas fa-align-left fa-lg"})),"sidebar"===this.state.nav&&A.isMobile?null:this.state.askingList?l.a.createElement(D,{sort:this.sortDropmenu}):null,"sidebar"===this.state.nav&&A.isMobile?null:l.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.logout},"Logout",l.a.createElement("i",{className:"fas fa-sign-out-alt fa-lg logoutbtn"}))),"sidebar"===this.state.nav&&A.isMobile?null:this.state.askingInput?l.a.createElement(C,{send:this.state}):null,"sidebar"===this.state.nav&&A.isMobile?null:this.state.askingList?this.state.isLoading?l.a.createElement(j,null):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"w3-container"},l.a.createElement("ul",{className:"w3-ul w3-card-4"},this.state.json?this.state.json.map(function(e,t){return l.a.createElement(S,{data:e,key:t})}):null)),l.a.createElement("div",{className:"pagination-listview"},l.a.createElement(x.a,{activePage:this.state.activePage,itemsCountPerPage:10,totalItemsCount:450,pageRangeDisplayed:5,itemClass:"page-item",linkClass:"page-link",onChange:this.handlePageChange}))):null,"sidebar"===this.state.nav&&A.isMobile?null:this.state.askingDownload?l.a.createElement(L,{username:this.state.username}):null)))}}]),t}(n.PureComponent),_="date",F=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(P,{isInput:!0}))}}]),t}(n.Component),T=(a(84),new(function(){function e(){Object(u.a)(this,e),this.authenticated=!1}return Object(m.a)(e,[{key:"login",value:function(e){this.authenticated=!0,e()}},{key:"logout",value:function(e){this.authenticated=!1,e()}},{key:"isAuthenticated",value:function(){return this.authenticated}}]),e}())),I=(a(85),function(){return l.a.createElement("div",{className:"loader"},"loading")}),R=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={username:"",password:"",name:"",place:"",isSuccess:"",isloading:!1},a.handleChange=function(e){a.setState(Object(f.a)({},e.target.id,e.target.value))},a.validateForm=function(){return a.state.username.length>4&&a.state.password.length>4},a.handleClick=function(e){a.setState({isloading:!0});var t={username:a.state.username,password:a.state.password};b.a.post("https://www.eugenicspharma.in/react_eugenics_reporting/login.php",{login:t}).then(function(e){a.setState({isSuccess:e.data.success,isloading:!1,name:e.data.name,place:e.data.place}),0===a.state.isSuccess?q.display="block":q.display="none"}).catch(function(e){a.setState({isloading:!1}),console.log(e)})},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){if(localStorage.getItem("LoginData")){var e=JSON.parse(localStorage.getItem("LoginData"));this.setState(Object(p.a)({},e))}}},{key:"componentDidUpdate",value:function(){var e=this;this.state.isSuccess&&T.login(function(){localStorage.setItem("LoginData",JSON.stringify(e.state)),e.props.history.push("/main")})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"body-login"},l.a.createElement("div",{className:"container-login"},l.a.createElement("div",{className:"header-login"},l.a.createElement("i",{className:"fas fa-user-lock fa-lg"}),l.a.createElement("br",null),"LOG IN"),l.a.createElement("div",{className:"tbox-login"},l.a.createElement("i",{className:"fas fa-user"}),l.a.createElement("input",{id:"username",type:"text",placeholder:"username",style:M,onChange:this.handleChange,value:this.state.username})),l.a.createElement("div",{className:"tbox-login"},l.a.createElement("i",{className:"fas fa-lock"}),l.a.createElement("input",{id:"password",type:"password",placeholder:"password",style:M,onChange:this.handleChange,value:this.state.password})),l.a.createElement("button",{className:"btn-login",type:"submit",onClick:this.handleClick,disabled:!this.validateForm()},"Login"),l.a.createElement("div",{className:0===this.state.isSuccess?"wrong-login-visible":"wrong-login-hidden"},"Invalid username or password"),l.a.createElement(w.a,{className:"l1-login",to:"/forgot-password"},"FORGOT PASSWORD"),l.a.createElement(w.a,{className:"l2-login",to:"/create-account"},"CREATE AN ACCOUNT"),this.state.isloading?l.a.createElement(I,null):null)))}}]),t}(n.Component),M={background:"none",border:"none",outline:"none",textAlign:"center",margin:"auto",fontFamily:"Poppins",width:"90%",lineHeight:"37px",fontSize:"14px",color:"#333"},q={display:"block",width:"260px",padding:"5px 0",color:"red",textAlign:"center",margin:"0px auto",transition:"0.5s all"},U=R,J=function(){return l.a.createElement("h1",null,"NotFound")},B=a(38),H=a(90),z=function(e){var t=e.component,a=Object(B.a)(e,["component"]);return l.a.createElement(r.a,Object.assign({},a,{render:function(e){return T.isAuthenticated()?l.a.createElement(t,e):l.a.createElement(H.a,{to:{pathname:"/",state:{from:e.location}}})}}))},G=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={password:"",re_password:"",email:"",token:"",isSuccess:"",isloading:!1,redirect:!1},a.handleChange=function(e){a.setState(Object(f.a)({},e.target.id,e.target.value))},a.handleClick=function(e){a.verifyToken()},a.verifyToken=function(){a.request("https://www.eugenicspharma.in/react_eugenics_reporting/verifyToken.php")},a.request=function(e){a.setState({isloading:!0});var t=a.state,n=t.token,l=t.email,s=t.password;b.a.post(e,{token:n,email:l,password:s}).then(function(e){a.setState({isloading:!1,isSuccess:e.data.status,redirect:!0}),console.log(e.data)}).catch(function(e){a.setState({isloading:!1}),console.log(e)})},a.renderRedirect=function(){setTimeout(function(){a.state.redirect&&(console.log("redirecting"),a.props.history.push("/"))},5e3)},a.validateForm=function(){return a.state.password.length>9&&a.state.re_password.length>9&&a.state.password===a.state.re_password},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=e.token,a=e.email;this.setState({email:a,token:t}),console.log(t,a)}},{key:"render",value:function(){return l.a.createElement("div",null,this.renderRedirect(),l.a.createElement("div",{className:"body-login"},l.a.createElement("div",{className:"container-login"},l.a.createElement("div",{className:"header-login"},l.a.createElement("i",{className:"fas fa-lock-open fa-lg"}),l.a.createElement("br",null),"Reset Password!"),l.a.createElement("div",{className:"tbox-login"},l.a.createElement("i",{className:"fas fa-user"}),l.a.createElement("input",{id:"email",type:"text",style:Y,disabled:!0,value:this.state.email})),l.a.createElement("div",{className:"tbox-login"},l.a.createElement("i",{className:"fas fa-lock"}),l.a.createElement("input",{id:"password",type:"password",placeholder:"Enter Password",style:Y,onChange:this.handleChange,value:this.state.password})),l.a.createElement("div",{className:"tbox-login"},l.a.createElement("i",{className:"fas fa-lock"}),l.a.createElement("input",{id:"re_password",type:"password",placeholder:"Re-enter Password",style:Y,onChange:this.handleChange,value:this.state.re_password})),l.a.createElement("button",{className:"btn-login",type:"submit",onClick:this.handleClick,disabled:!this.validateForm()},"Submit"),l.a.createElement("div",{style:W},l.a.createElement("b",null,1===this.state.isSuccess?"Password Changed Successfully! \n Redirecting.....":null)),l.a.createElement("div",{style:Q},l.a.createElement("b",null,0===this.state.isSuccess?"Token Has Expired!":null)),l.a.createElement(w.a,{className:"l2-login",to:"/"},"CREATE AN ACCOUNT"),this.state.isloading?l.a.createElement(I,{style:{margin:"50px"}}):null)))}}]),t}(n.Component),Y={background:"none",border:"none",outline:"none",textAlign:"center",margin:"auto",fontFamily:"Poppins",width:"90%",lineHeight:"37px",fontSize:"14px",color:"#333"},W={display:"block",width:"260px",padding:"5px 0",color:"green",textAlign:"center",margin:"0px auto",transition:"0.5s all"},Q=Object(p.a)({},W,{color:"red"}),V=G,K=(a(87),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={email:"",isSuccess:-1,isloading:!1},a.axiosRequest=function(e){a.setState({isloading:!0});var t=a.state.email;b.a.post(e,{email:t}).then(function(e){a.setState({isloading:!1,isSuccess:e.data.status}),console.log(e.data)}).catch(function(e){a.setState({isloading:!1}),console.log(e)})},a.handleclick=function(e){e.preventDefault(),a.axiosRequest("https://www.eugenicspharma.in/react_eugenics_reporting/tokenmailer.php")},a.handlechange=function(e){a.setState({email:e.target.value})},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"body-login"},l.a.createElement("div",{className:"container-login"},l.a.createElement("div",{className:"header-login"},l.a.createElement("i",{className:"fas fa-lock fa-lg"}),l.a.createElement("br",null),"FORGOT PASSWORD?",l.a.createElement("p",null,"You can reset your password here.")),l.a.createElement("div",{className:"tbox-login"},l.a.createElement("i",{className:"fas fa-user"}),l.a.createElement("input",{id:"email",type:"text",onChange:this.handlechange,placeholder:"Enter your email address",style:X})),l.a.createElement("button",{className:"btn-login",type:"submit",onClick:this.handleclick},"Send"),l.a.createElement("div",{style:Z},l.a.createElement("b",null,1===this.state.isSuccess?"Please Check Your Mail!":null)),l.a.createElement("div",{style:$},l.a.createElement("b",null,0===this.state.isSuccess?"Invalid Email!":null)),l.a.createElement("a",{href:"google.com",className:"l2-login",to:"/"},"CREATE NEW ACCOUNT"),this.state.isloading?l.a.createElement(I,null):null)))}}]),t}(n.Component)),X={background:"none",border:"none",outline:"none",textAlign:"center",margin:"auto",fontFamily:"Poppins",width:"90%",lineHeight:"37px",fontSize:"14px",color:"#333"},Z={display:"block",width:"260px",padding:"5px 0",color:"green",textAlign:"center",margin:"0px auto",transition:"0.5s all"},$=Object(p.a)({},Z,{color:"red"}),ee=K,te=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={username:"",password:"",name:"",place:"",isSuccess:"",isloading:!1},a.handleChange=function(e){a.setState(Object(f.a)({},e.target.id,e.target.value))},a.validateForm=function(){return a.state.username.length>4&&a.state.password.length>4},a.handleClick=function(e){a.setState({isloading:!0});var t={username:a.state.username,password:a.state.password};b.a.post("https://www.eugenicspharma.in/react_eugenics_reporting/login.php",{login:t}).then(function(e){a.setState({isSuccess:e.data.success,isloading:!1,name:e.data.name,place:e.data.place}),0===a.state.isSuccess?ne.display="block":ne.display="none"}).catch(function(e){a.setState({isloading:!1}),console.log(e)})},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"body-login"},l.a.createElement("div",{className:"container-login"},l.a.createElement("div",{className:"header-login"},l.a.createElement("i",{className:"fas fa-address-card fa-lg"}),l.a.createElement("br",null),"Create Account"),l.a.createElement("div",{className:"tbox-login"},l.a.createElement("i",{className:"fas fa-fingerprint"}),l.a.createElement("input",{id:"name",type:"text",placeholder:"name",style:ae,onChange:this.handleChange,value:this.state.name})),l.a.createElement("div",{className:"tbox-login"},l.a.createElement("i",{className:"fas fa-user"}),l.a.createElement("input",{id:"username",type:"text",placeholder:"username",style:ae,onChange:this.handleChange,value:this.state.username})),l.a.createElement("div",{className:"tbox-login"},l.a.createElement("i",{className:"fas fa-envelope"}),l.a.createElement("input",{id:"email",type:"text",placeholder:"email",style:ae,onChange:this.handleChange,value:this.state.email})),l.a.createElement("div",{className:"tbox-login"},l.a.createElement("i",{className:"fas fa-lock"}),l.a.createElement("input",{id:"password",type:"password",placeholder:"password",style:ae,onChange:this.handleChange,value:this.state.password})),l.a.createElement("button",{className:"btn-login",type:"submit",onClick:this.handleClick,disabled:!this.validateForm()},"Create Account"),this.state.isloading?l.a.createElement(I,null):null)))}}]),t}(n.Component),ae={background:"none",border:"none",outline:"none",textAlign:"center",margin:"auto",fontFamily:"Poppins",width:"90%",lineHeight:"37px",fontSize:"14px",color:"#333"},ne={display:"block",width:"260px",padding:"5px 0",color:"red",textAlign:"center",margin:"0px auto",transition:"0.5s all"},le=te,se=l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(c.a,null,l.a.createElement(r.a,{path:"/",component:U,exact:!0}),l.a.createElement(r.a,{path:"/forgot-password",component:ee,exact:!0}),l.a.createElement(z,{path:"/main",component:F}),l.a.createElement(r.a,{path:"/:token/:email",component:V,exact:!0}),l.a.createElement(r.a,{path:"/create-account",component:le,exact:!0}),l.a.createElement(r.a,{component:J}))));i.a.render(se,document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.8fe99354.chunk.js.map
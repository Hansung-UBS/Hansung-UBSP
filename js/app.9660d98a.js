(function(){"use strict";var e={450:function(e,n,r){var t=r(9963),o=r(6252);function s(e,n,r,t,s,i){const a=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(a,{onOnLogin:n[0]||(n[0]=e=>{i.loginEvent,s.UserInformations=e})})}r(7658);var i={name:"App",components:{},data(){return{UserInformations:{}}},methods:{loginEvent(){this.UserStatus="User",console.log(this.UserInformations)}},mounted(){},watch:{$route(e){"/Register"==e.path?this.$store.commit("UserRegisterF"):"Unknown"==this.$store.state.UserStatus?this.$router.push("/Login"):"Register"==this.$store.state.UserStatus&&"/Register"!=e.path&&(this.$router.push("/Login"),this.$store.commit("UserUnknownF"))}}},a=r(3744);const u=(0,a.Z)(i,[["render",s]]);var d=u,l=r(2201);const p={class:"login-container"},c=(0,o._)("h2",null,"로그인",-1),g={class:"form-group"},m=(0,o._)("label",{for:"username"},"아이디:",-1),f={class:"form-group"},h=(0,o._)("label",{for:"password"},"비밀번호:",-1),w=(0,o._)("div",{class:"form-group"},[(0,o._)("button",{type:"submit"},"로그인")],-1),v={class:"signup-link"};function y(e,n,r,s,i,a){return(0,o.wg)(),(0,o.iD)("div",p,[c,(0,o._)("form",{onSubmit:n[2]||(n[2]=(0,t.iM)(((...e)=>a.login&&a.login(...e)),["prevent"]))},[(0,o._)("div",g,[m,(0,o.wy)((0,o._)("input",{type:"text",style:{width:"92%"},id:"userid","onUpdate:modelValue":n[0]||(n[0]=e=>i.userid=e),name:"userid",required:""},null,512),[[t.nr,i.userid]])]),(0,o._)("div",f,[h,(0,o.wy)((0,o._)("input",{type:"password",style:{width:"92%"},id:"password","onUpdate:modelValue":n[1]||(n[1]=e=>i.password=e),name:"password",required:""},null,512),[[t.nr,i.password]])]),w],32),(0,o._)("p",v,[(0,o.Uk)("계정이 없으신가요? "),(0,o._)("a",{style:{"text-decoration":"underline"},onClick:n[3]||(n[3]=n=>e.$router.push("/Register"))},"회원가입")])])}var _=r(6154),b={data(){return{userid:"",password:""}},methods:{login(){_.Z.get("https://hansung-ubs.github.io/Hansung-UBSP/data/"+this.userid+"_Uinfo.json").then((e=>{const n=e.data;console.log(typeof n),console.log(this.password),this.returnData.pw==this.password&&this.$emit("onLogin",{id:this.userid,userName:e.data.userName})}))}}};const U=(0,a.Z)(b,[["render",y]]);var k=U;const O={class:"signup-container"},q=(0,o._)("h2",null,"회원가입",-1),x={class:"form-group"},F=(0,o._)("label",{for:"username"},"아이디:",-1),S={class:"form-group"},$=(0,o._)("label",{for:"password"},"비밀번호:",-1),V={key:0},j={class:"form-group"},I=(0,o._)("label",{for:"name"},"이름:",-1),R={class:"form-group"},A=(0,o._)("label",{for:"age"},"나이:",-1),L={class:"form-group"},C=(0,o._)("label",{for:"gender"},"성별:",-1),N=(0,o._)("option",{value:"male"},"남성",-1),P=(0,o._)("option",{value:"female"},"여성",-1),D=[N,P],E={class:"form-group"},M=(0,o._)("label",{for:"email"},"이메일:",-1),Z={class:"form-group"},B=(0,o._)("label",{for:"student-id"},"학번:",-1),T={class:"form-group"},H=(0,o._)("label",{for:"dob"},"생년월일:",-1),z=(0,o._)("div",{class:"form-group"},[(0,o._)("button",{type:"submit"},"회원가입")],-1),G={class:"login-link"};function J(e,n,r,s,i,a){return(0,o.wg)(),(0,o.iD)("div",O,[q,(0,o._)("form",{onSubmit:n[9]||(n[9]=(0,t.iM)(((...e)=>a.signup&&a.signup(...e)),["prevent"]))},[(0,o._)("div",x,[F,(0,o.wy)((0,o._)("input",{type:"text",style:{width:"92%"},id:"userid","onUpdate:modelValue":n[0]||(n[0]=e=>i.userid=e),name:"userid",required:""},null,512),[[t.nr,i.userid]])]),(0,o._)("div",S,[$,(0,o.wy)((0,o._)("input",{type:"password",style:{width:"92%"},id:"password","onUpdate:modelValue":n[1]||(n[1]=e=>i.password=e),onInput:n[2]||(n[2]=e=>i.showAdditionalFields=!0),name:"password",required:""},null,544),[[t.nr,i.password]])]),i.showAdditionalFields?((0,o.wg)(),(0,o.iD)("div",V,[(0,o._)("div",j,[I,(0,o.wy)((0,o._)("input",{type:"text",style:{width:"92%"},id:"name","onUpdate:modelValue":n[3]||(n[3]=e=>i.name=e),name:"name",required:""},null,512),[[t.nr,i.name]])]),(0,o._)("div",R,[A,(0,o.wy)((0,o._)("input",{type:"number",style:{width:"92%"},id:"age","onUpdate:modelValue":n[4]||(n[4]=e=>i.age=e),name:"age",required:""},null,512),[[t.nr,i.age]])]),(0,o._)("div",L,[C,(0,o.wy)((0,o._)("select",{style:{width:"92%"},id:"gender","onUpdate:modelValue":n[5]||(n[5]=e=>i.gender=e),name:"gender",required:""},D,512),[[t.bM,i.gender]])]),(0,o._)("div",E,[M,(0,o.wy)((0,o._)("input",{type:"email",style:{width:"92%"},id:"email","onUpdate:modelValue":n[6]||(n[6]=e=>i.email=e),name:"email",required:""},null,512),[[t.nr,i.email]])]),(0,o._)("div",Z,[B,(0,o.wy)((0,o._)("input",{type:"text",style:{width:"92%"},id:"student-id","onUpdate:modelValue":n[7]||(n[7]=e=>i.studentId=e),name:"studentId",required:""},null,512),[[t.nr,i.studentId]])]),(0,o._)("div",T,[H,(0,o.wy)((0,o._)("input",{type:"date",style:{width:"92%"},id:"dob","onUpdate:modelValue":n[8]||(n[8]=e=>i.dob=e),name:"dob",required:""},null,512),[[t.nr,i.dob]])])])):(0,o.kq)("",!0),z],32),(0,o._)("p",G,[(0,o.Uk)("이미 계정이 있으신가요? "),(0,o._)("a",{style:{"text-decoration":"underline"},onClick:n[10]||(n[10]=n=>{e.$router.push("/Login"),e.$store.commit("UserUnknownF")})},"로그인")])])}var K={data(){return{userid:"",password:"",showAdditionalFields:!1,name:"",age:"",gender:"male",email:"",studentId:"",dob:""}},methods:{signup(){}}};const Q=(0,a.Z)(K,[["render",J]]);var W=Q;const X=[{path:"/Login",component:k},{path:"/Register",component:W}],Y=(0,l.p7)({history:(0,l.PO)(),routes:X});var ee=Y,ne=r(3907);const re=(0,ne.MT)({state(){return{UserStatus:"Unknown"}},mutations:{UserRegisterF(e){e.UserStatus="Register"},UserUnknownF(e){e.UserStatus="Unknown"}}});var te=re,oe=r(5205);(0,oe.z)("/Hansung-UBSP/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),(0,t.ri)(d).use(ee).use(te).mount("#app")}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var s=n[t]={exports:{}};return e[t].call(s.exports,s,s.exports,r),s.exports}r.m=e,function(){var e=[];r.O=function(n,t,o,s){if(!t){var i=1/0;for(l=0;l<e.length;l++){t=e[l][0],o=e[l][1],s=e[l][2];for(var a=!0,u=0;u<t.length;u++)(!1&s||i>=s)&&Object.keys(r.O).every((function(e){return r.O[e](t[u])}))?t.splice(u--,1):(a=!1,s<i&&(i=s));if(a){e.splice(l--,1);var d=o();void 0!==d&&(n=d)}}return n}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[t,o,s]}}(),function(){r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};r.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,s,i=t[0],a=t[1],u=t[2],d=0;if(i.some((function(n){return 0!==e[n]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(u)var l=u(r)}for(n&&n(t);d<i.length;d++)s=i[d],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(l)},t=self["webpackChunkhansungstd"]=self["webpackChunkhansungstd"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=r.O(void 0,[998],(function(){return r(450)}));t=r.O(t)})();
//# sourceMappingURL=app.9660d98a.js.map
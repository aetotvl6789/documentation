(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{O6H6:function(e,n,t){"use strict";var a=t("vOnD"),l=t("u9kb"),i=t("aOgs"),o=t("q1tI"),r=t.n(o),c=t("7ljp"),p=t("pD55"),s=t("8Aig"),m=t("ReZb"),b=t("GCVy"),u=t("+6vE");var d=function(e){var n=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},n))};var O=function(e){var n=e.children;return r.a.createElement("strong",null,n)},h=t("gnlW"),j=t("mwnC"),f=t("/Rw0"),g=t("dVM4"),y=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function N(e){var n=e.items,t=e.depth;return r.a.createElement(y,{key:n,as:"ul",m:0,p:0},n.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:t>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(N,{items:e.items,depth:t+1}):null)})))}N.defaultProps={depth:0};var C=N,k=t("MfeC");function E(e){var n=k.a.getPath(e.location.pathname),t=k.a.getVariantAndPage(e.root,n);if(!t)return null;var a=k.a.getVariantsForPage(e.root,t.page),i=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===n&&(o=e),i.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,o.variant.title),r.a.createElement(E.Menu,{direction:e.direction,width:e.menuWidth},i)))}E.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var w=E,v=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});n.a=function(e){var n=e.children,t=e.pageContext,a=e.location,o=t.frontmatter,y=o.title,N=o.description,E=o.status,D=o.source,z=o.additionalContributors,H=void 0===z?[]:z,M=k.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:m.a,Note:b.a,Prompt:d,PromptReply:O,Screenshot:h.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(p.a,{title:y,description:N}),r.a.createElement(s.b,{location:a,isSearchEnabled:t.isSearchEnabled}),r.a.createElement(v,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(j.a,{editOnGitHub:t.themeOptions.showSidebarEditLink&&t.themeOptions.editOnGitHub,location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},y),N))),null!=M?r.a.createElement(I,null,r.a.createElement(w,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:M,location:a})):null),t.tableOfContents.items?r.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(C,{items:t.tableOfContents.items})):null,r.a.createElement(T,null,E||D?r.a.createElement(l.k,{mb:3,alignItems:"center"},E?r.a.createElement(g.a,{status:E}):null,r.a.createElement(l.e,{mx:"auto"}),D?r.a.createElement(f.a,{href:D}):null):null,t.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var n=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},n?r.a.createElement(l.r,{icon:i.b,mr:2}):r.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(C,{items:t.tableOfContents.items})))}))):null,n,r.a.createElement(u.a,{editOnGitHub:t.themeOptions.editOnGitHub,editUrl:t.editUrl,contributors:t.contributors.concat(H.map((function(e){return{login:e}})))}))))))}},"Ta+b":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return p}));var a=t("zLVn"),l=(t("q1tI"),t("7ljp")),i=t("O6H6"),o={},r={_frontmatter:o},c=i.a;function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm ci\n\naliases: clean-install, ic, install-clean, isntall-clean\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"This command is similar to ",Object(l.b)("a",{parentName:"p",href:"/cli/v8/commands/npm-install"},Object(l.b)("inlineCode",{parentName:"a"},"npm install")),", except\nit's meant to be used in automated environments such as test platforms,\ncontinuous integration, and deployment -- or any situation where you want\nto make sure you're doing a clean install of your dependencies."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"npm ci")," will be significantly faster when:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"There is a ",Object(l.b)("inlineCode",{parentName:"li"},"package-lock.json")," or ",Object(l.b)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")," file."),Object(l.b)("li",{parentName:"ul"},"The ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," folder is missing or empty.")),Object(l.b)("p",null,"In short, the main differences between using ",Object(l.b)("inlineCode",{parentName:"p"},"npm install")," and ",Object(l.b)("inlineCode",{parentName:"p"},"npm ci")," are:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The project ",Object(l.b)("strong",{parentName:"li"},"must")," have an existing ",Object(l.b)("inlineCode",{parentName:"li"},"package-lock.json")," or\n",Object(l.b)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json"),"."),Object(l.b)("li",{parentName:"ul"},"If dependencies in the package lock do not match those in ",Object(l.b)("inlineCode",{parentName:"li"},"package.json"),",\n",Object(l.b)("inlineCode",{parentName:"li"},"npm ci")," will exit with an error, instead of updating the package lock."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"npm ci")," can only install entire projects at a time: individual\ndependencies cannot be added with this command."),Object(l.b)("li",{parentName:"ul"},"If a ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," is already present, it will be automatically removed\nbefore ",Object(l.b)("inlineCode",{parentName:"li"},"npm ci")," begins its install."),Object(l.b)("li",{parentName:"ul"},"It will never write to ",Object(l.b)("inlineCode",{parentName:"li"},"package.json")," or any of the package-locks:\ninstalls are essentially frozen.")),Object(l.b)("p",null,"NOTE: If you create your ",Object(l.b)("inlineCode",{parentName:"p"},"package-lock.json")," file by running ",Object(l.b)("inlineCode",{parentName:"p"},"npm install"),"\nwith flags that can affect the shape of your dependency tree, such as\n",Object(l.b)("inlineCode",{parentName:"p"},"--legacy-peer-deps"),", you ",Object(l.b)("em",{parentName:"p"},"must")," provide the same flags to ",Object(l.b)("inlineCode",{parentName:"p"},"npm ci")," or you\nare likely to encounter errors. An easy way to do this is to run\n",Object(l.b)("inlineCode",{parentName:"p"},"npm config set legacy-peer-deps=true --location=project")," and commit the\n",Object(l.b)("inlineCode",{parentName:"p"},".npmrc")," file to your repo."),Object(l.b)("h3",null,"Example"),Object(l.b)("p",null,"Make sure you have a package-lock and an up-to-date install:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ cd ./my/npm/project\n$ npm install\nadded 154 packages in 10s\n$ ls | grep package-lock\n")),Object(l.b)("p",null,"Run ",Object(l.b)("inlineCode",{parentName:"p"},"npm ci")," in that project"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ npm ci\nadded 154 packages in 5s\n")),Object(l.b)("p",null,"Configure Travis to build using ",Object(l.b)("inlineCode",{parentName:"p"},"npm ci")," instead of ",Object(l.b)("inlineCode",{parentName:"p"},"npm install"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'# .travis.yml\ninstall:\n- npm ci\n# keep the npm cache around to speed up installs\ncache:\n  directories:\n  - "$HOME/.npm"\n')),Object(l.b)("h3",null,"Configuration"),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"audit")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: true"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,'When "true" submit audit reports alongside the current npm command to the\ndefault registry and all registries configured for scopes. See the\ndocumentation for ',Object(l.b)("a",{parentName:"p",href:"/cli/v8/commands/npm-audit"},Object(l.b)("inlineCode",{parentName:"a"},"npm audit"))," for details on what is\nsubmitted."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"foreground-scripts")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Run all build scripts (ie, ",Object(l.b)("inlineCode",{parentName:"p"},"preinstall"),", ",Object(l.b)("inlineCode",{parentName:"p"},"install"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"postinstall"),")\nscripts for installed packages in the foreground process, sharing standard\ninput, output, and error with the main npm process."),Object(l.b)("p",null,"Note that this will generally make installs run slower, and be much noisier,\nbut can be useful for debugging."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"ignore-scripts")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"If true, npm does not run scripts specified in package.json files."),Object(l.b)("p",null,"Note that commands explicitly intended to run a particular script, such as\n",Object(l.b)("inlineCode",{parentName:"p"},"npm start"),", ",Object(l.b)("inlineCode",{parentName:"p"},"npm stop"),", ",Object(l.b)("inlineCode",{parentName:"p"},"npm restart"),", ",Object(l.b)("inlineCode",{parentName:"p"},"npm test"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"npm run-script"),"\nwill still run their intended script if ",Object(l.b)("inlineCode",{parentName:"p"},"ignore-scripts")," is set, but they\nwill ",Object(l.b)("em",{parentName:"p"},"not")," run any pre- or post-scripts."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"script-shell")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: '/bin/sh' on POSIX systems, 'cmd.exe' on Windows"),Object(l.b)("li",{parentName:"ul"},"Type: null or String")),Object(l.b)("p",null,"The shell to use for scripts run with the ",Object(l.b)("inlineCode",{parentName:"p"},"npm exec"),", ",Object(l.b)("inlineCode",{parentName:"p"},"npm run")," and ",Object(l.b)("inlineCode",{parentName:"p"},"npm\ninit <pkg>")," commands."),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-install"},"npm install")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/configuring-npm/package-lock-json"},"package-lock.json"))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-8-commands-npm-ci-md-dbb0d6c187c2cccfba46.js.map
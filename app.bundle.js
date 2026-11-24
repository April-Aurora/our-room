(()=>{var qs=Object.freeze({skinTone:[{id:"fair",label:"\u6D45\u6696",color:"#f2d4b5"},{id:"peach",label:"\u871C\u6843",color:"#e8bd94"},{id:"tan",label:"\u5C0F\u9EA6",color:"#bf8d67"},{id:"deep",label:"\u6DF1\u68D5",color:"#855d46"}],hairStyle:[{id:"short",label:"\u77ED\u53D1"},{id:"bob",label:"\u9F50\u8033\u53D1"},{id:"long",label:"\u957F\u53D1"}],hairColor:[{id:"chestnut",label:"\u6817\u68D5",color:"#775a42"},{id:"black",label:"\u58A8\u9ED1",color:"#383634"},{id:"honey",label:"\u8702\u871C",color:"#b68c50"},{id:"silver",label:"\u94F6\u7070",color:"#a6a49b"}],shirtColor:[{id:"sage",label:"\u9F20\u5C3E\u8349\u7EFF",color:"#9da988"},{id:"rose",label:"\u9676\u571F\u7C89",color:"#c28c7d"},{id:"blue",label:"\u96FE\u84DD",color:"#839da7"},{id:"oat",label:"\u71D5\u9EA6",color:"#d7c5a5"}],faceShape:[{id:"soft",label:"\u67D4\u548C"},{id:"round",label:"\u5706\u8138"},{id:"slim",label:"\u957F\u8138"}],eyeShape:[{id:"round",label:"\u5706\u773C"},{id:"smile",label:"\u5F2F\u5F2F\u773C"},{id:"almond",label:"\u674F\u773C"}],mouthStyle:[{id:"smile",label:"\u5FAE\u7B11"},{id:"neutral",label:"\u5E73\u9759"},{id:"open",label:"\u5F00\u6000"}]});for(let i of Object.values(qs))i.forEach(Object.freeze),Object.freeze(i);var Yr=Object.freeze({name:"\u5C0F\u4F4F\u5BA2",skinTone:"peach",hairStyle:"short",hairColor:"chestnut",shirtColor:"sage",faceShape:"soft",eyeShape:"round",eyeSize:50,eyeSpacing:50,browAngle:50,noseSize:50,mouthStyle:"smile",mouthWidth:50}),Zd=["eyeSize","eyeSpacing","browAngle","noseSize","mouthWidth"];function Qe(i){let t=i&&typeof i=="object"&&!Array.isArray(i)?i:{},e={...Yr};if(typeof t.name=="string"){let n=t.name.replace(/[\u0000-\u001f\u007f]/g,"").trim();e.name=Array.from(n).slice(0,20).join("")||Yr.name}for(let[n,s]of Object.entries(qs))s.some(r=>r.id===t[n])&&(e[n]=t[n]);for(let n of Zd)typeof t[n]=="number"&&Number.isFinite(t[n])&&(e[n]=Math.round(Math.min(100,Math.max(0,t[n]))));return e}function Zr(i){let t=Qe(i);return Object.fromEntries(["skinTone","hairColor","shirtColor"].map(e=>[e,qs[e].find(n=>n.id===t[e]).color]))}function Jr(i){let t=Qe(i);return{faceWidth:{soft:10.8,round:11.9,slim:9.5}[t.faceShape],faceHeight:{soft:11.1,round:10.7,slim:12.1}[t.faceShape],eyeRadius:.65+t.eyeSize*.012,eyeDistance:3.1+t.eyeSpacing*.027,browTilt:(t.browAngle-50)*.009,noseScale:.55+t.noseSize*.012,mouthWidth:2.8+t.mouthWidth*.055}}var Qi=[{id:"tulip",name:"\u871C\u6843\u90C1\u91D1\u9999",description:"\u628A\u6E29\u67D4\u7684\u6625\u5929\uFF0C\u653E\u5728\u684C\u89D2\u3002",price:15,color:"#cc8e79"},{id:"daisy",name:"\u5C0F\u96CF\u83CA",description:"\u4E00\u5C0F\u675F\uFF0C\u5C31\u80FD\u8BA9\u5E73\u51E1\u7684\u4E00\u5929\u4EAE\u8D77\u6765\u3002",price:10,color:"#f3e9cb"},{id:"sunflower",name:"\u5411\u65E5\u8475",description:"\u8BA9\u5BB6\u91CC\u591A\u4E00\u9897\u5C0F\u592A\u9633\u3002",price:18,color:"#c7a150"}],Zs=[{id:"tomato-noodles",name:"\u756A\u8304\u9E21\u86CB\u9762",description:"\u70ED\u6C14\u817E\u817E\u7684\u4E00\u7897\u9762\uFF0C\u662F\u56DE\u5BB6\u7684\u5473\u9053\u3002",ingredients:1,ingredientLabel:"\u756A\u8304\u3001\u9E21\u86CB\u3001\u9762\u6761",color:"#c6785e"},{id:"curry-rice",name:"\u6696\u6696\u5496\u55B1\u996D",description:"\u571F\u8C46\u548C\u80E1\u841D\u535C\u4E00\u8D77\uFF0C\u6162\u6162\u7096\u51FA\u4E00\u4EFD\u671F\u5F85\u3002",ingredients:1,ingredientLabel:"\u571F\u8C46\u3001\u80E1\u841D\u535C\u3001\u5496\u55B1",color:"#b8954f"},{id:"rice-ball",name:"\u6D77\u82D4\u5C0F\u996D\u56E2",description:"\u634F\u6210\u559C\u6B22\u7684\u5F62\u72B6\uFF0C\u7559\u4E00\u70B9\u7ED9\u660E\u5929\u7684\u91CE\u9910\u3002",ingredients:1,ingredientLabel:"\u7C73\u996D\u3001\u6D77\u82D4\u3001\u829D\u9EBB",color:"#71806a"}],Un=[{id:"seaside",kind:"date",name:"\u53BB\u6D77\u8FB9\u6563\u6B65",description:"\u6CBF\u7740\u6D77\u5CB8\u8D70\u4E00\u8D70\uFF0C\u628A\u665A\u971E\u5E26\u56DE\u5BB6\u3002",theme:"sea",photoTheme:"sea",souvenir:"\u6D77\u8FB9\u5408\u7167\u4E0E\u7535\u8F66\u7968",photo:{id:"photo-seaside",name:"\u6D77\u8FB9\u7684\u665A\u971E",description:"\u98CE\u6709\u4E00\u70B9\u5927\uFF0C\u4F46\u8FD9\u5F20\u7167\u7247\u521A\u521A\u597D\u3002"},ticket:{id:"ticket-seaside",name:"\u6D77\u8FB9\u7535\u8F66\u7968",description:"\u7EC8\u70B9\u7AD9\u5230\u4E86\uFF0C\u6211\u4EEC\u8FD8\u60F3\u518D\u8D70\u4E00\u4F1A\u513F\u3002"}},{id:"bookstore",kind:"date",name:"\u901B\u4E00\u95F4\u65E7\u4E66\u5E97",description:"\u5728\u4E66\u67B6\u4E4B\u95F4\uFF0C\u627E\u5230\u540C\u4E00\u672C\u559C\u6B22\u7684\u4E66\u3002",theme:"books",photoTheme:"books",souvenir:"\u4E66\u5E97\u5408\u7167\u4E0E\u7559\u8A00\u4E66\u7B7E",photo:{id:"photo-bookstore",name:"\u4E66\u9875\u4E4B\u95F4",description:"\u5348\u540E\u7684\u5149\uFF0C\u521A\u597D\u843D\u5728\u7FFB\u5F00\u7684\u90A3\u4E00\u9875\u3002"},ticket:{id:"ticket-bookstore",name:"\u65E7\u4E66\u5E97\u7684\u4E66\u7B7E",description:"\u5E97\u4E3B\u5199\u7740\uFF1A\u4E0B\u6B21\u8FD8\u8981\u4E00\u8D77\u518D\u6765\u3002"}},{id:"arcade",kind:"date",name:"\u53BB\u6293\u5A03\u5A03",description:"\u518D\u8BD5\u4E00\u6B21\uFF0C\u8BF4\u4E0D\u5B9A\u8FD9\u6B21\u5C31\u6293\u5230\u4E86\u3002",theme:"arcade",photoTheme:"arcade",souvenir:"\u4E00\u53EA\u8F6F\u8F6F\u7684\u5C0F\u718A",photo:{id:"photo-arcade",name:"\u4ECA\u5929\u7684\u5E78\u8FD0",description:"\u6293\u5230\u5C0F\u718A\u65F6\u7684\u5F00\u5FC3\uFF0C\u90FD\u7559\u5728\u4E86\u8FD9\u91CC\u3002"},plush:{id:"plush-bear",name:"\u5976\u8336\u5C0F\u718A",description:"\u6293\u5A03\u5A03\u5E26\u56DE\u6765\u7684\u65B0\u5BA4\u53CB\uFF0C\u5750\u5728\u6C99\u53D1\u4E0A\u7B49\u4F60\u3002"}},{id:"market",kind:"date",name:"\u901B\u5468\u672B\u96C6\u5E02",description:"\u6311\u4E00\u675F\u82B1\uFF0C\u518D\u4E70\u4E00\u70B9\u4ECA\u665A\u7684\u98DF\u6750\u3002",theme:"market",photoTheme:"market",souvenir:"\u96C6\u5E02\u968F\u62CD",photo:{id:"photo-market",name:"\u96C6\u5E02\u7684\u5348\u540E",description:"\u82B1\u644A\u548C\u852C\u83DC\u644A\u4E4B\u95F4\uFF0C\u4E5F\u85CF\u7740\u503C\u5F97\u8BB0\u4F4F\u7684\u5C0F\u4E8B\u3002"}},{id:"hangzhou",kind:"travel",name:"\u676D\u5DDE",description:"\u5750\u4E00\u73ED\u6162\u8F66\uFF0C\u53BB\u770B\u897F\u6E56\u8FB9\u7684\u6811\u5F71\u3002",theme:"lake",photoTheme:"lake",souvenir:"\u897F\u6E56\u51B0\u7BB1\u8D34\u3001\u8F66\u7968\u4E0E\u65C5\u884C\u7167\u7247",photo:{id:"photo-hangzhou",name:"\u897F\u6E56\u8FB9\u7684\u6211\u4EEC",description:"\u6E56\u6C34\u5F88\u5B89\u9759\uFF0C\u6563\u6B65\u53EF\u4EE5\u8D70\u5F97\u6162\u4E00\u70B9\u3002"},ticket:{id:"ticket-hangzhou",name:"\u53BB\u676D\u5DDE\u7684\u8F66\u7968",description:"\u9760\u7A97\u7684\u4F4D\u7F6E\uFF0C\u7A97\u5916\u662F\u4E00\u8DEF\u5411\u5357\u7684\u98CE\u666F\u3002"},magnet:{id:"magnet-hangzhou",name:"\u897F\u6E56\u51B0\u7BB1\u8D34",description:"\u628A\u4E00\u5C0F\u7247\u6E56\u5149\u5C71\u8272\uFF0C\u8D34\u5728\u6BCF\u5929\u7ECF\u8FC7\u7684\u5730\u65B9\u3002"}},{id:"dali",kind:"travel",name:"\u5927\u7406",description:"\u53BB\u6709\u98CE\u7684\u5730\u65B9\uFF0C\u770B\u770B\u6D31\u6D77\u548C\u8FDC\u5904\u7684\u5C71\u3002",theme:"mountain",photoTheme:"mountain",souvenir:"\u82CD\u5C71\u51B0\u7BB1\u8D34\u3001\u8239\u7968\u4E0E\u65C5\u884C\u7167\u7247",photo:{id:"photo-dali",name:"\u6D31\u6D77\u7684\u98CE",description:"\u84DD\u8272\u7684\u6E56\u6C34\uFF0C\u767D\u8272\u7684\u4E91\uFF0C\u548C\u60F3\u8BB0\u4F4F\u7684\u8FD9\u4E00\u5929\u3002"},ticket:{id:"ticket-dali",name:"\u6D31\u6D77\u7684\u5C0F\u8239\u7968",description:"\u6643\u6643\u60A0\u60A0\u7684\u8239\u4E0A\uFF0C\u628A\u70E6\u607C\u7559\u5728\u5CB8\u8FB9\u3002"},magnet:{id:"magnet-dali",name:"\u82CD\u5C71\u6D31\u6D77\u51B0\u7BB1\u8D34",description:"\u8FDC\u5904\u7684\u5C71\u548C\u6E56\uFF0C\u53D8\u6210\u4E86\u624B\u5FC3\u5927\u5C0F\u7684\u7EAA\u5FF5\u3002"}},{id:"japan",kind:"travel",name:"\u4EAC\u90FD",description:"\u6CBF\u7740\u5C0F\u5DF7\u6162\u6162\u8D70\uFF0C\u542C\u4E00\u542C\u590F\u5929\u7684\u98CE\u94C3\u3002",theme:"japan",photoTheme:"japan",souvenir:"\u98CE\u94C3\u51B0\u7BB1\u8D34\u3001\u7535\u8F66\u7968\u4E0E\u65C5\u884C\u7167\u7247",photo:{id:"photo-japan",name:"\u5C0F\u5DF7\u91CC\u7684\u590F\u5929",description:"\u7ED5\u8FC7\u8857\u89D2\u65F6\uFF0C\u521A\u597D\u542C\u89C1\u4E00\u58F0\u98CE\u94C3\u3002"},ticket:{id:"ticket-japan",name:"\u4EAC\u90FD\u7535\u8F66\u7968",description:"\u90A3\u4E00\u5929\uFF0C\u8FDE\u5750\u9519\u4E00\u7AD9\u90FD\u53D8\u6210\u4E86\u5C0F\u60CA\u559C\u3002"},magnet:{id:"magnet-japan",name:"\u590F\u65E5\u98CE\u94C3\u51B0\u7BB1\u8D34",description:"\u4E00\u53EA\u4E0D\u4F1A\u54CD\u7684\u98CE\u94C3\uFF0C\u4E5F\u80FD\u8BA9\u4EBA\u60F3\u8D77\u590F\u5929\u3002"}}],ph=["plushies","recipes","magnets","photos","tickets"],Jd={plushies:new Set(Un.flatMap(i=>i.plush?[i.plush.id]:[])),recipes:new Set(Zs.map(i=>i.id)),magnets:new Set(Un.flatMap(i=>i.magnet?[i.magnet.id]:[])),photos:new Set(Un.map(i=>i.photo.id)),tickets:new Set(Un.flatMap(i=>i.ticket?[i.ticket.id]:[]))};function yl(){return{version:1,day:1,coins:120,growth:0,wateredDay:0,puzzleSolved:!1,projectorOn:!1,flower:null,character:null,inventory:{ingredients:0,cartridge:!0},memories:[],plushies:[],recipes:[],magnets:[],photos:[],tickets:[]}}function Ki(i,t,e,n){return typeof i=="number"&&Number.isFinite(i)?Math.min(n,Math.max(e,Math.floor(i))):t}function ts(i){let t=yl();if(!i||typeof i!="object"||Array.isArray(i))return t;t.day=Ki(i.day,1,1,1e6),t.coins=Ki(i.coins,120,0,1e6),t.growth=Ki(i.growth,0,0,4),t.wateredDay=Ki(i.wateredDay,0,0,t.day),t.puzzleSolved=i.puzzleSolved===!0,t.projectorOn=i.projectorOn===!0,t.flower=Qi.some(e=>e.id===i.flower)?i.flower:null,i.character&&typeof i.character=="object"&&!Array.isArray(i.character)&&(t.character=Qe(i.character)),t.inventory.ingredients=Ki(i.inventory?.ingredients,0,0,999),t.inventory.cartridge=i.inventory?.cartridge!==!1,t.inventory.cartridge||(t.projectorOn=!1);for(let e of ph)Array.isArray(i[e])&&(t[e]=[...new Set(i[e].filter(n=>typeof n!="string"||!n||n.length>120||/[\u0000-\u001f<>]/.test(n)?!1:["photos","magnets","tickets"].includes(e)||Jd[e].has(n)))]);if(Array.isArray(i.memories)){let e=new Set;t.memories=i.memories.filter(n=>!n||typeof n!="object"||typeof n.id!="string"||e.has(n.id)||typeof n.title!="string"||typeof n.description!="string"?!1:(e.add(n.id),!0)).slice(-1e3).map(n=>({id:n.id.slice(0,120),title:n.title.slice(0,120),description:n.description.slice(0,600),day:Ki(n.day,t.day,1,t.day),kind:["date","travel","home","recipe","plant"].includes(n.kind)?n.kind:"home",theme:typeof n.theme=="string"?n.theme.slice(0,40):"home",...typeof n.date=="string"?{date:n.date.slice(0,40)}:{},...typeof n.image=="string"&&n.image.length<=12e6&&/^data:image\/(?:png|jpeg|webp|gif);base64,[A-Za-z0-9+/=\r\n]+$/.test(n.image)?{image:n.image}:{}}))}return t}function Ys(i,t){t&&!i.includes(t)&&i.push(t)}function ji(i,t){i.memories.some(e=>e.id===t.id)||(i.memories.push({day:i.day,...t}),i.memories.length>1e3&&i.memories.shift())}function Js(i){let t=ts(i);return ph.reduce((e,n)=>e+t[n].length,0)+Number(t.puzzleSolved)+ +!!t.flower+ +(t.growth===4)}function vl(i,t){let e=ts(i),n=r=>({state:e,message:r,success:!1}),s=r=>({state:e,message:r,success:!0});if(!t||typeof t!="object")return n("\u6CA1\u6709\u627E\u5230\u8FD9\u4E2A\u64CD\u4F5C\uFF0C\u8BF7\u518D\u8BD5\u4E00\u6B21\u3002");switch(t.type){case"SAVE_CHARACTER":return!t.character||typeof t.character!="object"||Array.isArray(t.character)?n("\u8BF7\u5148\u9009\u62E9\u5C0F\u4EBA\u7684\u6837\u5B50\u3002"):(e.character=Qe(t.character),s("\u5C0F\u4EBA\u7684\u65B0\u6837\u5B50\u5DF2\u7ECF\u4FDD\u5B58\u3002"));case"WATER":return e.wateredDay===e.day?n("\u4ECA\u5929\u5DF2\u7ECF\u6D47\u8FC7\u6C34\u5566\uFF0C\u660E\u5929\u518D\u6765\u770B\u770B\u5B83\u3002"):e.growth>=4?n("\u82B1\u5DF2\u7ECF\u76DB\u5F00\u4E86\uFF0C\u8C22\u8C22\u4F60\u6BCF\u5929\u7684\u7167\u987E\u3002"):(e.wateredDay=e.day,e.growth+=1,e.growth===4?(ji(e,{id:"first-bloom",title:"\u7B2C\u4E00\u6735\u82B1\u5F00\u4E86",description:"\u56DB\u6B21\u8BA4\u771F\u7167\u987E\uFF0C\u6362\u6765\u4E86\u4E00\u6735\u5C0F\u5C0F\u7684\u82B1\u3002",kind:"plant",theme:"flower"}),s("\u82B1\u5F00\u4E86\uFF01\u4F60\u628A\u4E00\u70B9\u8010\u5FC3\uFF0C\u517B\u6210\u4E86\u4E00\u4EFD\u5C0F\u60CA\u559C\u3002")):s(["","\u6D47\u597D\u6C34\u4E86\uFF0C\u4E00\u9897\u5C0F\u82BD\u63A2\u51FA\u4E86\u5934\u3002","\u65B0\u53F6\u5B50\u957F\u51FA\u6765\u4E86\uFF0C\u5B83\u6B63\u5728\u597D\u597D\u957F\u5927\u3002","\u82B1\u82DE\u51FA\u73B0\u4E86\uFF0C\u660E\u5929\u518D\u6765\u770B\u770B\u5427\u3002"][e.growth]));case"NEXT_DAY":return e.day===1e6?n("\u4ECA\u5929\u8FD8\u6709\u597D\u591A\u503C\u5F97\u6162\u6162\u53D1\u73B0\u7684\u5C0F\u4E8B\u3002"):(e.day+=1,e.coins=Math.min(1e6,e.coins+30),e.projectorOn=!1,s(`\u7B2C ${e.day} \u5929\uFF0C\u65B0\u7684\u65E5\u5B50\u5F00\u59CB\u4E86\u3002\u6536\u5230 30 \u679A\u751F\u6D3B\u5E01\u3002`));case"BUY_FLOWER":{let r=Qi.find(a=>a.id===t.id);return r?e.flower===r.id?n("\u82B1\u74F6\u91CC\u5DF2\u7ECF\u662F\u8FD9\u675F\u82B1\u4E86\u3002"):e.coins<r.price?n("\u751F\u6D3B\u5E01\u4E0D\u591F\u4E86\uFF0C\u7761\u4E00\u89C9\u5230\u660E\u5929\u53EF\u4EE5\u518D\u9886\u53D6 30 \u679A\u3002"):(e.coins-=r.price,e.flower=r.id,ji(e,{id:`flower-${r.id}`,title:`\u5E26\u4E00\u675F${r.name}\u56DE\u5BB6`,description:r.description,kind:"home",theme:"flower"}),s(`\u628A${r.name}\u63D2\u8FDB\u82B1\u74F6\uFF0C\u5BB6\u91CC\u591A\u4E86\u4E00\u70B9\u6625\u5929\u3002`)):n("\u8FD9\u675F\u82B1\u8FD8\u6CA1\u6709\u5230\u8D27\uFF0C\u6362\u4E00\u675F\u8BD5\u8BD5\u5427\u3002")}case"BUY_INGREDIENTS":return e.coins<20?n("\u98DF\u6750\u5305\u9700\u8981 20 \u679A\u751F\u6D3B\u5E01\uFF0C\u660E\u5929\u518D\u6765\u901B\u901B\u5427\u3002"):e.inventory.ingredients>996?n("\u51B0\u7BB1\u5DF2\u7ECF\u88C5\u5F97\u6EE1\u6EE1\u7684\uFF0C\u5148\u505A\u4E00\u987F\u996D\u5427\u3002"):(e.coins-=20,e.inventory.ingredients+=3,s("\u4E70\u597D\u4E86 3 \u4EFD\u65B0\u9C9C\u98DF\u6750\uFF0C\u56DE\u5BB6\u5C31\u53EF\u4EE5\u505A\u996D\u4E86\u3002"));case"COOK":{let r=Zs.find(o=>o.id===t.id);if(!r)return n("\u8FD9\u9053\u83DC\u8FD8\u6CA1\u6709\u5199\u8FDB\u83DC\u5355\uFF0C\u6362\u4E00\u9053\u8BD5\u8BD5\u5427\u3002");if(e.inventory.ingredients<r.ingredients)return n("\u98DF\u6750\u8FD8\u4E0D\u591F\uFF0C\u5148\u53BB\u96C6\u5E02\u4E70\u4E00\u70B9\u5427\u3002");e.inventory.ingredients-=r.ingredients;let a=!e.recipes.includes(r.id);return Ys(e.recipes,r.id),ji(e,{id:`recipe-${r.id}`,title:`\u7B2C\u4E00\u6B21\u505A${r.name}`,description:r.description,kind:"recipe",theme:"food"}),s(a?`${r.name}\u505A\u597D\u4E86\uFF0C\u5DF2\u7ECF\u6536\u8FDB\u83DC\u8C31\u56FE\u9274\u3002`:`${r.name}\u505A\u597D\u4E86\uFF0C\u719F\u6089\u7684\u5473\u9053\u53C8\u56DE\u6765\u4E86\u3002`)}case"OUTING":{let r=Un.find(o=>o.id===t.destinationId);if(!r)return n("\u8FD8\u6CA1\u6709\u627E\u5230\u8FD9\u4E2A\u76EE\u7684\u5730\uFF0C\u6362\u4E00\u4E2A\u5730\u65B9\u8BD5\u8BD5\u5427\u3002");let a=`outing-${r.id}-day-${e.day}`;return e.memories.some(o=>o.id===a)?n("\u4ECA\u5929\u5DF2\u7ECF\u53BB\u8FC7\u8FD9\u91CC\u5566\uFF0C\u6362\u4E2A\u5730\u65B9\uFF0C\u6216\u8005\u660E\u5929\u518D\u6765\u3002"):(Ys(e.photos,r.photo.id),r.ticket&&Ys(e.tickets,r.ticket.id),r.magnet&&Ys(e.magnets,r.magnet.id),r.plush&&Ys(e.plushies,r.plush.id),ji(e,{id:a,title:r.photo.name,description:r.photo.description,kind:r.kind,theme:r.theme}),s(`\u56DE\u5230\u5BB6\u5566\uFF0C\u5E26\u56DE\u4E86${r.souvenir}\u3002`))}case"SOLVE_PUZZLE":return e.puzzleSolved?n("\u62FC\u56FE\u5DF2\u7ECF\u5B8C\u6210\u5566\uFF0C\u968F\u65F6\u53EF\u4EE5\u518D\u770B\u770B\u5B83\u3002"):(e.puzzleSolved=!0,ji(e,{id:"completed-puzzle",title:"\u6700\u540E\u4E00\u5757\u62FC\u56FE",description:"\u4E00\u5757\u63A5\u7740\u4E00\u5757\uFF0C\u7EC8\u4E8E\u628A\u60F3\u770B\u7684\u98CE\u666F\u62FC\u6210\u5B8C\u6574\u7684\u6837\u5B50\u3002",kind:"home",theme:"puzzle"}),s("\u4E16\u754C\u5730\u56FE\u62FC\u597D\u4E86\uFF0C\u5DF2\u7ECF\u6302\u5230\u6C99\u53D1\u80CC\u540E\u7684\u5899\u4E0A\u3002"));case"TOGGLE_PROJECTOR":return e.inventory.cartridge?(e.projectorOn=!e.projectorOn,e.projectorOn&&ji(e,{id:"first-game-night",title:"\u4ECA\u665A\u4E00\u8D77\u73A9\u6E38\u620F",description:"\u63D2\u597D\u5361\u5E26\uFF0C\u5173\u6389\u5927\u706F\uFF0C\u628A\u5FEB\u4E50\u6295\u5728\u5E8A\u5BF9\u9762\u7684\u5899\u4E0A\u3002",kind:"home",theme:"game"}),s(e.projectorOn?"\u5361\u5E26\u63D2\u597D\u4E86\uFF0C\u6295\u5F71\u4EAE\u8D77\u6765\u4E86\u3002\u4ECA\u665A\u4E00\u8D77\u73A9\u5427\u3002":"\u6295\u5F71\u5173\u597D\u4E86\uFF0C\u597D\u597D\u4F11\u606F\u4E00\u4F1A\u513F\u3002")):n("\u8FD8\u6CA1\u6709\u6E38\u620F\u5361\u5E26\uFF0C\u627E\u5230\u5361\u5E26\u4E4B\u540E\u518D\u6765\u5427\u3002");default:return n("\u6CA1\u6709\u627E\u5230\u8FD9\u4E2A\u64CD\u4F5C\uFF0C\u8BF7\u518D\u8BD5\u4E00\u6B21\u3002")}}var mh={home:'<path d="M4 12 16 3l12 9v16H5V12m8 16V17h7v11M9 11h3m9 0h3"/>',book:'<path d="M16 8C10 3 3 6 3 6v21s7-3 13 1c6-4 13-1 13-1V6s-7-3-13 2Zm0 0v20M7 11l5 1m-5 5 5 1m8-6 5-1m-5 7 5-1"/>',collection:'<path d="M5 11h22v17H5zM3 5h26v7H3zm13 7v16M11 5c-7 0-5-7-1-5l6 5c5-9 12-4 6 0"/>',bag:'<path d="M7 10h18l3 18H4L7 10Zm4 0V7c0-7 10-7 10 0v3M10 16v2m12-2v2M12 23c2 2 6 2 8 0"/>',door:'<path d="M7 28V4l18-2v26H7Zm2 0h20M19 15v3M3 28h4"/>',sun:'<circle cx="16" cy="16" r="6"/><path d="M16 2v4m0 20v4M2 16h4m20 0h4M6 6l3 3m14 14 3 3M6 26l3-3M23 9l3-3"/>',moon:'<path d="M25 22A12 12 0 0 1 10 4a12 12 0 1 0 15 18Z"/>',leaf:'<path d="M6 26C3 9 18 5 28 4c1 14-8 23-18 20M5 29 22 10m-9 10-1-6m6 1h6"/>',water:'<path d="m16 3-8 12a10 10 0 1 0 16 0L16 3ZM11 20c0 3 2 5 5 5"/>',puzzle:'<path d="M4 5h9c-2 7 8 7 6 0h9v9c-7-2-7 8 0 6v9h-9c2-7-8-7-6 0H4v-9c7 2 7-8 0-6V5Z"/>',flower:'<path d="M16 18v12m0-4c-7 0-9-6-9-6 6-1 9 2 9 6Zm0-4c7 0 9-5 9-5-6-1-9 2-9 5Z"/><path d="M16 6c-7-9-14 1-7 5-8 5 0 13 6 6 5 8 15 1 8-5 8-5 0-14-7-6Z"/><circle cx="16" cy="11" r="3"/>',pot:'<path d="M6 13h20v9c0 9-20 9-20 0v-9Zm-3 1h3m20 0h3M4 10h24M13 7h6m-6-3c-4-3 2-4 0-6m7 8c-3-3 2-4 0-6"/>',camera:'<path d="M3 10h7l3-5h8l3 5h5v18H3V10Z"/><circle cx="16" cy="18" r="6"/><path d="M25 13h1"/>',ticket:'<path d="m4 8 23-4 4 20-23 5-1-7c6-1 4-7-1-6L4 8Zm17-2 4 19"/>',music:'<path d="M13 24V5l14-3v19M13 10l14-3"/><ellipse cx="8" cy="25" rx="5" ry="4"/><ellipse cx="22" cy="22" rx="5" ry="4"/>',mute:'<path d="M13 24V5l14-3v16M13 10l14-3M3 3l26 26"/><ellipse cx="8" cy="25" rx="5" ry="4"/>',settings:'<path d="m12 3 1 4-4 2-4-1-3 6 4 2v4l-3 3 4 5 4-2 4 2 1 4h7l1-4 4-2 4 1 3-6-4-2v-4l3-3-4-5-4 2-4-2-1-4Z" transform="translate(0 -1) scale(.88)"/><circle cx="16" cy="15" r="5"/>',close:'<path d="m8 8 16 16M24 8 8 24"/>',check:'<path d="m7 16 6 6L26 8"/>',arrow:'<path d="M4 16h24m-8-7 8 7-8 7"/>',plus:'<path d="M16 6v20M6 16h20"/>',heart:'<path d="M16 28 4 16C-5 5 10-3 16 7c7-10 21-2 12 9L16 28Z"/>',coin:'<circle cx="16" cy="16" r="12"/><path d="M16 7v18m5-15c-11-5-13 7-5 6 9-1 7 10-5 5"/>',switch:'<rect x="2" y="6" width="28" height="20" rx="6"/><path d="M9 6v20M23 6v20M14 11h5v10h-5Z"/><circle cx="6" cy="12" r="1"/><circle cx="26" cy="20" r="1"/>',fridge:'<rect x="5" y="2" width="22" height="28" rx="3"/><path d="M5 13h22M9 7v3m0 8v5m6-4 5-1 1 5-5 1Z"/>',bear:'<circle cx="8" cy="7" r="5"/><circle cx="24" cy="7" r="5"/><ellipse cx="16" cy="17" rx="13" ry="12"/><path d="M10 14v1m12-1v1m-8 5h4m-2 0v3m-3 0 3-1 3 1"/>',edit:'<path d="m8 22-3 7 7-3L29 9l-4-5L8 22Zm0 0 4 4M21 8l4 5"/>',download:'<path d="M16 3v19m-7-7 7 7 7-7M4 23v6h24v-6"/>',shelf:'<path d="M5 3v27M27 3v27M5 10h22M5 19h22M5 28h22M9 10V4h5v6m5 9v-6h4v6"/>'};function Ut(i,t=""){return`<svg class="icon ${t}" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${mh[i]||mh.heart}</svg>`}function es(i="seaside",t=""){let e=/kyoto|japan|京都|train/.test(i),n=/hangzhou|lake|杭州|west/.test(i),s=/book|market|arcade|花|书|street/.test(i);return`<svg class="postcard-art ${t}" viewBox="0 0 420 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs><pattern id="hatch-${i.replace(/[^a-z]/g,"")}" patternUnits="userSpaceOnUse" width="7" height="7"><path d="m0 7 7-7" stroke="#776f59" stroke-width=".4" opacity=".15"/></pattern></defs>
    <path fill="#dfebdf" d="M0 0h420v260H0z"/><path fill="#f6e9c4" d="M0 0h420v109L0 137Z"/><circle cx="321" cy="58" r="27" fill="#e8bb80"/>
    <path fill="#b7c4a8" d="m0 140 70-70 80 65 68-93 102 90 100-65v193H0Z"/>
    <path fill="#8eaa9e" d="m0 163 100-43 82 52 91-59 147 43v104H0Z"/>
    ${s?'<path d="M59 103h291v136H59Z" fill="#f1dfbe" stroke="#796b51" stroke-width="2"/><path d="m46 100 22-24h270l27 24Z" fill="#b97765" stroke="#796b51" stroke-width="2"/><path d="M72 114h268v23H72Z" fill="#f5ead6"/><path d="M72 114h27v23H72zm54 0h27v23h-27zm54 0h27v23h-27zm54 0h27v23h-27zm54 0h27v23h-27z" fill="#879376"/><path d="M87 150h72v71H87zm114-8h58v97h-58zm80 8h45v71h-45z" fill="#b7c9c1" stroke="#796b51" stroke-width="2"/><path d="M94 157h56m-56 13h56m-56 13h56m58-27h44m-44 16h44" stroke="#f6ead2" stroke-width="5"/><path d="M31 241h358" stroke="#776f59" stroke-width="2"/>':'<path fill="#b9d0cb" d="M0 172c70-19 125 19 209 0s163 12 211-2v90H0Z"/><path d="M0 205c79-27 138 26 215 4s135 16 205-6M20 229h92m33-44h52m93 42h110" stroke="#f6f1dd" stroke-width="3" stroke-linecap="round"/><path fill="#ede0b7" d="M0 239c103-22 189-3 263 21H0Z"/>'}
    ${e?'<path d="M130 168h150v65H130Z" fill="#e8d6ad" stroke="#74634d" stroke-width="2"/><path d="m110 170 35-31h120l35 31Z" fill="#7d8b71" stroke="#74634d" stroke-width="2"/><path d="M160 139v-36h90v36" fill="#e8d6ad" stroke="#74634d" stroke-width="2"/><path d="m142 107 38-28h49l38 28Z" fill="#7d8b71" stroke="#74634d" stroke-width="2"/><path d="M196 187h22v46" stroke="#74634d" stroke-width="3"/>':""}
    ${n?'<path d="M70 179q150-75 287 0" stroke="#efe5cb" stroke-width="12"/><path d="M74 180q148-73 280-1m-219-25v15m48-26v17m48-18v18m48-7v17" stroke="#796f57" stroke-width="2"/>':""}
    <path d="M25 260c8-34 2-72 16-101m-1 33c-25-18-28-37-19-50 23 10 26 30 19 50m1 22c29-10 37-25 32-40-23 0-34 15-32 40" fill="#839572" stroke="#6a775a" stroke-width="1.5"/>
    <path d="M0 0h420v260H0z" fill="url(#hatch-${i.replace(/[^a-z]/g,"")})"/>
  </svg>`}function bl(i=2){return`<svg class="plant-art" viewBox="0 0 200 210" fill="none" aria-hidden="true"><ellipse cx="100" cy="191" rx="64" ry="7" fill="#b0aa95" opacity=".15"/><path d="m70 143 10 45q20 12 41 0l11-45" fill="#c69579" stroke="#766853" stroke-width="2"/><path d="M66 140q34-10 70 0v10q-35 10-70 0Z" fill="#dfb496" stroke="#766853" stroke-width="2"/><path d="M99 140q-8-31 4-63" stroke="#6c7b58" stroke-width="3"/><path d="M99 127c-30 0-43-23-36-32 23 0 36 14 36 32Zm0-15c27-2 35-22 29-29-24 3-30 16-29 29Z" fill="#899b74" stroke="#6c7b58" stroke-width="1.5"/>${i>1?'<path d="M102 91c-26-5-32-28-25-34 24 5 30 22 25 34Zm2-8c24-9 26-29 19-34-21 10-25 23-19 34Z" fill="#9bad83" stroke="#6c7b58" stroke-width="1.5"/>':""}${i>2?'<path d="M104 77q-5-19 1-31" stroke="#6c7b58" stroke-width="3"/><path d="M105 47c-24-9-11-31 0-19 12-16 29 5 11 15 8 21-18 25-11 4Z" fill="#d2a08d" stroke="#967761" stroke-width="1.5"/><circle cx="109" cy="39" r="5" fill="#e5c77e"/>':""}<path d="m88 160 3 16m22-17-3 22" stroke="#ae7c65" stroke-width="1.5"/></svg>`}function Kr(i=null){let t=["tulip","daisy","sunflower"].includes(i)?i:null,e=(s,r,a=1,o=0)=>{let c=`translate(${s} ${r}) rotate(${o}) scale(${a})`;if(t==="tulip")return`<g transform="${c}"><path d="M-14-16l8 7 6-12 7 12 9-7q2 24-16 29-19-4-14-29Z" fill="#d79d88" stroke="#99765e" stroke-width="1.5"/><path d="M-6-9q-6 17 6 22M7-9q7 16-7 22" stroke="#b7836e" stroke-width="1.2"/><path d="M-10-7q-2 10 4 15M11-7q2 9-3 15" stroke="#e8bca3" stroke-width="1.5"/><path d="m-13-9 2 12m24-14-1 9" stroke="#9c7961" stroke-width=".6" opacity=".4"/></g>`;let l=t==="sunflower",h=l?13:11;return`<g transform="${c}">${Array.from({length:h},(u,d)=>`<ellipse transform="rotate(${d*360/h})" cy="${l?-11:-10}" rx="${l?4.4:3.8}" ry="${l?11:9}" fill="${l?"#d4b05a":"#f9f1dc"}" stroke="${l?"#a88c48":"#bcae91"}" stroke-width="1"/>`).join("")}<circle r="${l?9:6}" fill="${l?"#987951":"#d9b85e"}" stroke="${l?"#7f6547":"#ad904a"}" stroke-width="1.1"/>${l?'<path d="M-5-4h10m-11 4h12m-10 4h8M-3-6v12m5-12v12" stroke="#bb9861" stroke-width=".9" opacity=".75"/>':'<circle cx="-2" cy="-2" r="1" fill="#ebd08b"/><circle cx="2" cy="1" r="1.2" fill="#c6a64f"/>'}</g>`};return`<svg class="plant-art vase-art" viewBox="0 0 200 210" width="200" height="210" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g stroke-linecap="round" stroke-linejoin="round"><ellipse cx="101" cy="193" rx="51" ry="7" fill="#aba48a" opacity=".14"/><path d="M58 195q44-5 88 0" stroke="#cfc3a7" stroke-width="1" opacity=".55"/>${t?`<g stroke-linecap="round" stroke-linejoin="round"><path d="M99 137q-4-41-26-70m28 71q11-41 32-68M100 139q3-46 2-92" stroke="#78865f" stroke-width="2.5"/><path d="M96 120q-25-5-28-29 24 4 28 29ZM106 111q22-1 28-24-23 1-28 24Z" fill="#9daa7f" stroke="#7c8863" stroke-width="1.3"/><path d="M94 118 73 97m35 11 21-16" stroke="#b8c29a" stroke-width="1.1"/>${t==="daisy"?'<path d="M99 138q-14-34-42-39m45 39q25-29 48-23" stroke="#78865f" stroke-width="2"/>':""}${e(72,65,t==="sunflower"?.8:.95,-19)}${e(134,68,t==="sunflower"?.76:.85,21)}${e(102,45,t==="sunflower"?.96:1.05,4)}${t==="daisy"?e(55,97,.65,-20)+e(151,112,.67,15):""}</g>`:""}<path d="M88 122q1 14-8 24-18 21-8 35 9 17 30 16 23 0 31-18 8-15-9-34-10-12-10-24Z" fill="#d8deca" stroke="#8f9981" stroke-width="1.7"/><path d="M93 126q1 14-8 25-13 16-7 29 7 12 20 13" fill="#e8e9d6"/><path d="M118 145q17 16 12 31-4 15-20 18" stroke="#bdc8b0" stroke-width="4"/><ellipse cx="101" cy="122" rx="13" ry="4.2" fill="#e6e7d3" stroke="#8f9981" stroke-width="1.5"/><ellipse cx="101" cy="122" rx="8.5" ry="2" fill="#a1af96"/>${t?'<path d="M99 123v-10m3 10 3-11" stroke="#7f8d68" stroke-width="2"/>':""}<path d="M78 156q23 7 48 0M77 160q24 7 50 0" stroke="#aebba2" stroke-width=".8" opacity=".5"/><path d="M82 173q-2 9 6 13m2 3 5 1M117 137l5 7m5 35-3 7" stroke="#7f8c73" stroke-width=".65" opacity=".45"/><path d="M80 153q-7 15-1 24" stroke="#f3f1dc" stroke-width="2"/></g></svg>`}var tn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},pn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jh=0,ec=1,Kh=2;var zi=1,jh=2,Us=3,wi=0,je=1,Ce=2,Hi=0,Os=1,nc=2,ic=3,sc=4,Qh=5;var Gi=100,tu=101,eu=102,nu=103,iu=104,su=200,ru=201,au=202,ou=203,rc=204,ac=205,lu=206,cu=207,hu=208,uu=209,du=210,fu=211,pu=212,mu=213,gu=214,Ta=0,Aa=1,Ra=2,xs=3,Ca=4,Pa=5,Ia=6,La=7,oc=0,_u=1,xu=2,kn=0,lc=1,cc=2,hc=3,Pr=4,uc=5,dc=6,fc=7;var pc=300,Vi=301,Fs=302,uo=303,fo=304,Da=1e3,Fn=1001,Na=1002,Be=1003,yu=1004;var Ir=1005;var Ke=1006,po=1007;var ii=1008;var en=1009,mc=1010,gc=1011,Bs=1012,mo=1013,An=1014,Rn=1015,Cn=1016,go=1017,_o=1018,Wi=1020,_c=35902,xc=35899,yc=1021,vc=1022,Pn=1023,Qn=1026,si=1027,bc=1028,xo=1029,Ei=1030,yo=1031;var vo=1033,Lr=33776,Dr=33777,Nr=33778,Ur=33779,bo=35840,Mo=35841,So=35842,wo=35843,Eo=36196,To=37492,Ao=37496,Ro=37488,Co=37489,Or=37490,Po=37491,Io=37808,Lo=37809,Do=37810,No=37811,Uo=37812,Oo=37813,Fo=37814,Bo=37815,ko=37816,zo=37817,Ho=37818,Go=37819,Vo=37820,Wo=37821,Xo=36492,$o=36494,qo=36495,Yo=36283,Zo=36284,Fr=36285,Jo=36286;var rr=2300,Ua=2301,Sa=2302,ql=2303,Yl=2400,Zl=2401,Jl=2402;var vu=3200;var Ko=0,bu=1,ri="",Fe="srgb",ar="srgb-linear",or="linear",de="srgb";var wa=7680;var Mu=519,Su=512,wu=513,Eu=514,Mc=515,Tu=516,Au=517,Sc=518,wc=519,Ru=35044;var Ec="300 es",gn=2e3,ys=2001;function Kd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function jd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function vs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cu(){let i=vs("canvas");return i.style.display="block",i}var gh={},bs=null;function Tc(...i){let t="THREE."+i.shift();bs?bs("log",t,...i):console.log(t,...i)}function Pu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Bt(...i){i=Pu(i);let t="THREE."+i.shift();if(bs)bs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Vt(...i){i=Pu(i);let t="THREE."+i.shift();if(bs)bs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Oi(...i){let t=i.join(" ");t in gh||(gh[t]=!0,Bt(...i))}function Iu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Lu={[Ta]:Ta,[Ra]:Ia,[Ca]:Ca,[xs]:Pa,[Aa]:Aa,[Ia]:Ra,[La]:La,[Pa]:xs},En=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_h=1234567,gs=Math.PI/180,Ms=180/Math.PI;function ks(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function Ac(i,t){return(i%t+t)%t}function Qd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function tf(i,t,e){return i!==t?(e-i)/(t-i):0}function nr(i,t,e){return(1-e)*i+e*t}function ef(i,t,e,n){return nr(i,t,1-Math.exp(-e*n))}function nf(i,t=1){return t-Math.abs(Ac(i,t*2)-t)}function sf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function rf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function af(i,t){return i+Math.floor(Math.random()*(t-i+1))}function of(i,t){return i+Math.random()*(t-i)}function lf(i){return i*(.5-Math.random())}function cf(i){i!==void 0&&(_h=i);let t=_h+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function hf(i){return i*gs}function uf(i){return i*Ms}function df(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function ff(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Rc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function pf(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*m,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*m,o*l);break;case"ZYZ":i.set(c*m,c*f,o*h,o*l);break;default:Bt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Du(i,t){if(t.constructor===Float32Array)return i;let e=Cc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Nu(i,t){if(t.constructor===Float32Array)return i;let e=Cc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var jo={DEG2RAD:gs,RAD2DEG:Ms,generateUUID:ks,clamp:Zt,euclideanModulo:Ac,mapLinear:Qd,inverseLerp:tf,lerp:nr,damp:ef,pingpong:nf,smoothstep:sf,smootherstep:rf,randInt:af,randFloat:of,randFloatSpread:lf,seededRandom:cf,degToRad:hf,radToDeg:uf,isPowerOfTwo:df,ceilPowerOfTwo:ff,floorPowerOfTwo:Rc,setQuaternionFromProperEuler:pf,normalize:Nu,denormalize:Du},Et=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},hn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],x=r[a+3];if(u!==x||c!==d||l!==f||h!==m){let g=c*d+l*f+h*m+u*x;g<0&&(d=-d,f=-f,m=-m,x=-x,g=-g);let p=1-o;if(g<.9995){let y=Math.acos(g),T=Math.sin(y);p=Math.sin(p*y)/T,o=Math.sin(o*y)/T,c=c*p+d*o,l=l*p+f*o,h=h*p+m*o,u=u*p+x*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+m*o,u=u*p+x*o;let y=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=y,l*=y,h*=y,u*=y}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-o*f,t[e+2]=l*m+h*f+o*d-c*u,t[e+3]=h*m-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ml.copy(this).projectOnVector(t),this.sub(Ml)}reflect(t){return this.sub(Ml.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ml=new L,xh=new hn,Xt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],y=s[1],T=s[4],S=s[7],R=s[2],E=s[5],_=s[8];return r[0]=a*x+o*y+c*R,r[3]=a*g+o*T+c*E,r[6]=a*p+o*S+c*_,r[1]=l*x+h*y+u*R,r[4]=l*g+h*T+u*E,r[7]=l*p+h*S+u*_,r[2]=d*x+f*y+m*R,r[5]=d*g+f*T+m*E,r[8]=d*p+f*S+m*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Oi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sl.makeScale(t,e)),this}rotate(t){return Oi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sl.makeRotation(-t)),this}translate(t,e){return Oi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Sl=new Xt,yh=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vh=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mf(){let i={enabled:!0,workingColorSpace:ar,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===de&&(s.r=jn(s.r),s.g=jn(s.g),s.b=jn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===de&&(s.r=_s(s.r),s.g=_s(s.g),s.b=_s(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ri?or:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ar]:{primaries:t,whitePoint:n,transfer:or,toXYZ:yh,fromXYZ:vh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:n,transfer:de,toXYZ:yh,fromXYZ:vh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),i}var ee=mf();function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ns,Oa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ns===void 0&&(ns=vs("canvas")),ns.width=t.width,ns.height=t.height;let s=ns.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ns}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=vs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=jn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(jn(e[n]/255)*255):e[n]=jn(e[n]);return{data:e,width:t.width,height:t.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},gf=0,Ss=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=ks(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(wl(s[a].image)):r.push(wl(s[a]))}else r=wl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function wl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Oa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Bt("Texture: Unable to serialize Texture."),{})}var _f=0,El=new L,$e=class i extends En{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Fn,s=Fn,r=Ke,a=ii,o=Pn,c=en,l=i.DEFAULT_ANISOTROPY,h=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=ks(),this.name="",this.source=new Ss(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(El).x}get height(){return this.source.getSize(El).y}get depth(){return this.source.getSize(El).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Bt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Bt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Da:t.x=t.x-Math.floor(t.x);break;case Fn:t.x=t.x<0?0:1;break;case Na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Da:t.y=t.y-Math.floor(t.y);break;case Fn:t.y=t.y<0?0:1;break;case Na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=pc;$e.DEFAULT_ANISOTROPY=1;var Me=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(l+1)/2,S=(f+1)/2,R=(p+1)/2,E=(h+d)/4,_=(u+x)/4,w=(m+g)/4;return T>S&&T>R?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=E/n,r=_/n):S>R?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=E/s,r=w/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=_/r,s=w/r),this.set(n,s,r,e),this}let y=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fa=class extends En{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new $e({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ss(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},un=class extends Fa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},lr=class extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ba=class extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var me=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,c,l,h,u,d,f,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,f,m,x,g)}set(t,e,n,s,r,a,o,c,l,h,u,d,f,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/is.setFromMatrixColumn(t,0).length(),r=1/is.setFromMatrixColumn(t,1).length(),a=1/is.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,m=o*h,x=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-x*l,e[9]=-o*c,e[2]=x-d*l,e[6]=m+f*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,m=l*h,x=l*u;e[0]=d+x*o,e[4]=m*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=x+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,m=l*h,x=l*u;e[0]=d-x*o,e[4]=-a*u,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,f=a*u,m=o*h,x=o*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=f*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,f=a*l,m=o*c,x=o*l;e[0]=c*h,e[4]=x-d*u,e[8]=m*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*c,f=a*l,m=o*c,x=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xf,t,yf)}lookAt(t,e,n){let s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),ui.crossVectors(n,an),ui.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),ui.crossVectors(n,an)),ui.normalize(),jr.crossVectors(an,ui),s[0]=ui.x,s[4]=jr.x,s[8]=an.x,s[1]=ui.y,s[5]=jr.y,s[9]=an.y,s[2]=ui.z,s[6]=jr.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],y=n[3],T=n[7],S=n[11],R=n[15],E=s[0],_=s[4],w=s[8],N=s[12],I=s[1],k=s[5],H=s[9],q=s[13],D=s[2],Z=s[6],J=s[10],z=s[14],Y=s[3],W=s[7],j=s[11],Q=s[15];return r[0]=a*E+o*I+c*D+l*Y,r[4]=a*_+o*k+c*Z+l*W,r[8]=a*w+o*H+c*J+l*j,r[12]=a*N+o*q+c*z+l*Q,r[1]=h*E+u*I+d*D+f*Y,r[5]=h*_+u*k+d*Z+f*W,r[9]=h*w+u*H+d*J+f*j,r[13]=h*N+u*q+d*z+f*Q,r[2]=m*E+x*I+g*D+p*Y,r[6]=m*_+x*k+g*Z+p*W,r[10]=m*w+x*H+g*J+p*j,r[14]=m*N+x*q+g*z+p*Q,r[3]=y*E+T*I+S*D+R*Y,r[7]=y*_+T*k+S*Z+R*W,r[11]=y*w+T*H+S*J+R*j,r[15]=y*N+T*q+S*z+R*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15],y=c*f-l*d,T=o*f-l*u,S=o*d-c*u,R=a*f-l*h,E=a*d-c*h,_=a*u-o*h;return e*(x*y-g*T+p*S)-n*(m*y-g*R+p*E)+s*(m*T-x*R+p*_)-r*(m*S-x*E+g*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],y=e*o-n*a,T=e*c-s*a,S=e*l-r*a,R=n*c-s*o,E=n*l-r*o,_=s*l-r*c,w=h*x-u*m,N=h*g-d*m,I=h*p-f*m,k=u*g-d*x,H=u*p-f*x,q=d*p-f*g,D=y*q-T*H+S*k+R*I-E*N+_*w;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Z=1/D;return t[0]=(o*q-c*H+l*k)*Z,t[1]=(s*H-n*q-r*k)*Z,t[2]=(x*_-g*E+p*R)*Z,t[3]=(d*E-u*_-f*R)*Z,t[4]=(c*I-a*q-l*N)*Z,t[5]=(e*q-s*I+r*N)*Z,t[6]=(g*S-m*_-p*T)*Z,t[7]=(h*_-d*S+f*T)*Z,t[8]=(a*H-o*I+l*w)*Z,t[9]=(n*I-e*H-r*w)*Z,t[10]=(m*E-x*S+p*y)*Z,t[11]=(u*S-h*E-f*y)*Z,t[12]=(o*N-a*k-c*w)*Z,t[13]=(e*k-n*N+s*w)*Z,t[14]=(x*T-m*R-g*y)*Z,t[15]=(h*R-u*T+d*y)*Z,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,m=r*u,x=a*h,g=a*u,p=o*u,y=c*l,T=c*h,S=c*u,R=n.x,E=n.y,_=n.z;return s[0]=(1-(x+p))*R,s[1]=(f+S)*R,s[2]=(m-T)*R,s[3]=0,s[4]=(f-S)*E,s[5]=(1-(d+p))*E,s[6]=(g+y)*E,s[7]=0,s[8]=(m+T)*_,s[9]=(g-y)*_,s[10]=(1-(d+x))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=is.set(s[0],s[1],s[2]).length(),o=is.set(s[4],s[5],s[6]).length(),c=is.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Mn.copy(this);let l=1/a,h=1/o,u=1/c;return Mn.elements[0]*=l,Mn.elements[1]*=l,Mn.elements[2]*=l,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,e.setFromRotationMatrix(Mn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=gn,c=!1){let l=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),m,x;if(c)m=r/(a-r),x=a*r/(a-r);else if(o===gn)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===ys)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=gn,c=!1){let l=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),m,x;if(c)m=1/(a-r),x=a/(a-r);else if(o===gn)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===ys)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},is=new L,Mn=new me,xf=new L(0,0,0),yf=new L(1,1,1),ui=new L,jr=new L,an=new L,bh=new me,Mh=new hn,ti=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Mh.setFromEuler(this),this.setFromQuaternion(Mh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ti.DEFAULT_ORDER="XYZ";var ws=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},vf=0,Sh=new L,ss=new hn,$n=new me,Qr=new L,Ks=new L,bf=new L,Mf=new hn,wh=new L(1,0,0),Eh=new L(0,1,0),Th=new L(0,0,1),Ah={type:"added"},Sf={type:"removed"},rs={type:"childadded",child:null},Tl={type:"childremoved",child:null},ze=class i extends En{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new ti,n=new hn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Xt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis(wh,t)}rotateY(t){return this.rotateOnAxis(Eh,t)}rotateZ(t){return this.rotateOnAxis(Th,t)}translateOnAxis(t,e){return Sh.copy(t).applyQuaternion(this.quaternion),this.position.add(Sh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wh,t)}translateY(t){return this.translateOnAxis(Eh,t)}translateZ(t){return this.translateOnAxis(Th,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qr.copy(t):Qr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Ks,Qr,this.up):$n.lookAt(Qr,Ks,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),ss.setFromRotationMatrix($n),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Vt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ah),rs.child=t,this.dispatchEvent(rs),rs.child=null):Vt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sf),Tl.child=t,this.dispatchEvent(Tl),Tl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ah),rs.child=t,this.dispatchEvent(rs),rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,bf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,Mf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ze.DEFAULT_UP=new L(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gt=class extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},wf={type:"move"},Es=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wf)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Gt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},ta={h:0,s:0,l:0};function Al(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=Ac(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Al(a,r,t+1/3),this.g=Al(a,r,t),this.b=Al(a,r,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&Bt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Bt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){let n=Uu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Bt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return ee.workingToColorSpace(Xe.copy(this),t),Math.round(Zt(Xe.r*255,0,255))*65536+Math.round(Zt(Xe.g*255,0,255))*256+Math.round(Zt(Xe.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(Xe.copy(this),e);let n=Xe.r,s=Xe.g,r=Xe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=Fe){ee.workingToColorSpace(Xe.copy(this),t);let e=Xe.r,n=Xe.g,s=Xe.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(ta);let n=nr(di.h,ta.h,e),s=nr(di.s,ta.s,e),r=nr(di.l,ta.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xe=new Yt;Yt.NAMES=Uu;var cr=class extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Sn=new L,qn=new L,Rl=new L,Yn=new L,as=new L,os=new L,Rh=new L,Cl=new L,Pl=new L,Il=new L,Ll=new Me,Dl=new Me,Nl=new Me,Kn=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Sn.subVectors(t,e),s.cross(Sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Sn.subVectors(s,e),qn.subVectors(n,e),Rl.subVectors(t,e);let a=Sn.dot(Sn),o=Sn.dot(qn),c=Sn.dot(Rl),l=qn.dot(qn),h=qn.dot(Rl),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Yn.x),c.addScaledVector(a,Yn.y),c.addScaledVector(o,Yn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ll.setScalar(0),Dl.setScalar(0),Nl.setScalar(0),Ll.fromBufferAttribute(t,e),Dl.fromBufferAttribute(t,n),Nl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ll,r.x),a.addScaledVector(Dl,r.y),a.addScaledVector(Nl,r.z),a}static isFrontFacing(t,e,n,s){return Sn.subVectors(n,e),qn.subVectors(t,e),Sn.cross(qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Sn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;as.subVectors(s,n),os.subVectors(r,n),Cl.subVectors(t,n);let c=as.dot(Cl),l=os.dot(Cl);if(c<=0&&l<=0)return e.copy(n);Pl.subVectors(t,s);let h=as.dot(Pl),u=os.dot(Pl);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),e.copy(n).addScaledVector(as,a);Il.subVectors(t,r);let f=as.dot(Il),m=os.dot(Il);if(m>=0&&f<=m)return e.copy(r);let x=f*l-c*m;if(x<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(os,o);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Rh.subVectors(r,s),o=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(Rh,o);let p=1/(g+x+d);return a=x*p,o=d*p,e.copy(n).addScaledVector(as,a).addScaledVector(os,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Tn=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,wn):wn.fromBufferAttribute(r,a),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ea.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ea.copy(n.boundingBox)),ea.applyMatrix4(t.matrixWorld),this.union(ea)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),na.subVectors(this.max,js),ls.subVectors(t.a,js),cs.subVectors(t.b,js),hs.subVectors(t.c,js),fi.subVectors(cs,ls),pi.subVectors(hs,cs),Li.subVectors(ls,hs);let e=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Li.z,Li.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Li.z,0,-Li.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Li.y,Li.x,0];return!Ul(e,ls,cs,hs,na)||(e=[1,0,0,0,1,0,0,0,1],!Ul(e,ls,cs,hs,na))?!1:(ia.crossVectors(fi,pi),e=[ia.x,ia.y,ia.z],Ul(e,ls,cs,hs,na))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Zn=[new L,new L,new L,new L,new L,new L,new L,new L],wn=new L,ea=new Tn,ls=new L,cs=new L,hs=new L,fi=new L,pi=new L,Li=new L,js=new L,na=new L,ia=new L,Di=new L;function Ul(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Di.fromArray(i,r);let o=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),c=t.dot(Di),l=e.dot(Di),h=n.dot(Di);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Re=new L,sa=new Et,Ef=0,_n=class extends En{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ef++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ru,this.updateRanges=[],this.gpuType=Rn,this.version=0,this._normalizationScale=t!==void 0?Cc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)sa.fromBufferAttribute(this,e),sa.applyMatrix3(t),this.setXY(e,sa.x,sa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Du(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Nu(t,this.array)}};var hr=class extends _n{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ur=class extends _n{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ne=class extends _n{constructor(t,e,n){super(new Float32Array(t),e,n)}},Tf=new Tn,Qs=new L,Ol=new L,Fi=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Tf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qs.subVectors(t,this.center);let e=Qs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Qs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ol.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qs.copy(t.center).add(Ol)),this.expandByPoint(Qs.copy(t.center).sub(Ol))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Af=0,mn=new me,Fl=new ze,us=new L,on=new Tn,tr=new Tn,Oe=new L,Te=class i extends En{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kd(t)?ur:hr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return Fl.lookAt(t),Fl.updateMatrix(),this.applyMatrix4(Fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ne(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];tr.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(on.min,tr.min),on.expandByPoint(Oe),Oe.addVectors(on.max,tr.max),on.expandByPoint(Oe)):(on.expandByPoint(tr.min),on.expandByPoint(tr.max))}on.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Oe.fromBufferAttribute(o,l),c&&(us.fromBufferAttribute(t,l),Oe.add(us)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new _n(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let N=0;N<n.count;N++)o[N]=new L,c[N]=new L;let h=new L,u=new L,d=new L,f=new Et,m=new Et,x=new Et,g=new L,p=new L;function y(N,I,k){l[N]=l[I]=l[k]=1,h.fromBufferAttribute(n,N),u.fromBufferAttribute(n,I),d.fromBufferAttribute(n,k),f.fromBufferAttribute(r,N),m.fromBufferAttribute(r,I),x.fromBufferAttribute(r,k),u.sub(h),d.sub(h),m.sub(f),x.sub(f);let H=1/(m.x*x.y-x.x*m.y);isFinite(H)&&(g.copy(u).multiplyScalar(x.y).addScaledVector(d,-m.y).multiplyScalar(H),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(H),o[N].add(g),o[I].add(g),o[k].add(g),c[N].add(p),c[I].add(p),c[k].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let N=0,I=T.length;N<I;++N){let k=T[N],H=k.start,q=k.count;for(let D=H,Z=H+q;D<Z;D+=3)y(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let S=new L,R=new L,E=new L,_=new L;function w(N){E.fromBufferAttribute(s,N),_.copy(E);let I=o[N];S.copy(I),S.sub(E.multiplyScalar(E.dot(I))).normalize(),R.crossVectors(_,I);let H=R.dot(c[N])<0?-1:1;a.setXYZW(N,S.x,S.y,S.z,H)}for(let N=0,I=n.count;N<I;++N)l[N]&&w(N);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new _n(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new _n(d,h,u)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Bl=new L,Rf=new L,Cf=new Xt,ln=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Bl.subVectors(n,e).cross(Rf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Bl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Cf.getNormalMatrix(t),s=this.coplanarPoint(Bl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Pf=0,ei=class extends En{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=ks(),this.name="",this.type="Material",this.blending=Os,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rc,this.blendDst=ac,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wa,this.stencilZFail=wa,this.stencilZPass=wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Bt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Bt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Yt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ln().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Et().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Et().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Jn=new L,kl=new L,ra=new L,aa=new L,gi=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){kl.copy(t).add(e).multiplyScalar(.5),ra.copy(e).sub(t).normalize(),aa.copy(this.origin).sub(kl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ra),o=aa.dot(this.direction),c=-aa.dot(ra),l=aa.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(kl).addScaledVector(ra,d),f}intersectSphere(t,e){if(t.radius<0)return null;Jn.subVectors(t.center,this.origin);let n=Jn.dot(this.direction),s=Jn.dot(Jn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=t.x-a.x,d=t.y-a.y,f=t.z-a.z,m=e.x-a.x,x=e.y-a.y,g=e.z-a.z,p=n.x-a.x,y=n.y-a.y,T=n.z-a.z,S=Math.abs(c),R=Math.abs(l),E=Math.abs(h),_,w,N,I,k,H,q,D,Z,J,z,Y;if(S>=R&&S>=E?(N=c,H=u,Z=m,Y=p,c>=0?(_=l,w=h,I=d,k=f,q=x,D=g,J=y,z=T):(_=h,w=l,I=f,k=d,q=g,D=x,J=T,z=y)):R>=E?(N=l,H=d,Z=x,Y=y,l>=0?(_=h,w=c,I=f,k=u,q=g,D=m,J=T,z=p):(_=c,w=h,I=u,k=f,q=m,D=g,J=p,z=T)):(N=h,H=f,Z=g,Y=T,h>=0?(_=c,w=l,I=u,k=d,q=m,D=x,J=p,z=y):(_=l,w=c,I=d,k=u,q=x,D=m,J=y,z=p)),N===0)return null;let W=_/N,j=w/N,Q=1/N,mt=I-W*H,Ot=k-j*H,nt=q-W*Z,ft=D-j*Z,Rt=J-W*Y,Dt=z-j*Y,Mt=Rt*ft-Dt*nt,kt=mt*Dt-Ot*Rt,le=nt*Ot-ft*mt;if(s){if(Mt<0||kt<0||le<0)return null}else if((Mt<0||kt<0||le<0)&&(Mt>0||kt>0||le>0))return null;let Ct=Mt+kt+le;if(Ct===0)return null;let re=Q*(Mt*H+kt*Z+le*Y);return(Ct>0?re<0:re>0)?null:this.at(re/Ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},He=class extends ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ch=new me,Ni=new gi,oa=new Fi,Ph=new L,la=new L,ca=new L,ha=new L,zl=new L,ua=new L,Ih=new L,da=new L,ge=class extends ze{constructor(t=new Te,e=new He){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ua.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(zl.fromBufferAttribute(u,t),a?ua.addScaledVector(zl,h):ua.addScaledVector(zl.sub(e),h))}e.add(ua)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(r),Ni.copy(t.ray).recast(t.near),!(oa.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(oa,Ph)===null||Ni.origin.distanceToSquared(Ph)>(t.far-t.near)**2))&&(Ch.copy(r).invert(),Ni.copy(t.ray).applyMatrix4(Ch),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ni)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=a[g.materialIndex],y=Math.max(g.start,f.start),T=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let S=y,R=T;S<R;S+=3){let E=o.getX(S),_=o.getX(S+1),w=o.getX(S+2);s=fa(this,p,t,n,l,h,u,E,_,w),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let y=o.getX(g),T=o.getX(g+1),S=o.getX(g+2);s=fa(this,a,t,n,l,h,u,y,T,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=a[g.materialIndex],y=Math.max(g.start,f.start),T=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let S=y,R=T;S<R;S+=3){let E=S,_=S+1,w=S+2;s=fa(this,p,t,n,l,h,u,E,_,w),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let y=g,T=g+1,S=g+2;s=fa(this,a,t,n,l,h,u,y,T,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function If(i,t,e,n,s,r,a,o){let c;if(t.side===je?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===wi,o),c===null)return null;da.copy(o),da.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(da);return l<e.near||l>e.far?null:{distance:l,point:da.clone(),object:i}}function fa(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,la),i.getVertexPosition(c,ca),i.getVertexPosition(l,ha);let h=If(i,t,e,n,la,ca,ha,Ih);if(h){let u=new L;Kn.getBarycoord(Ih,la,ca,ha,u),s&&(h.uv=Kn.getInterpolatedAttribute(s,o,c,l,u,new Et)),r&&(h.uv1=Kn.getInterpolatedAttribute(r,o,c,l,u,new Et)),a&&(h.normal=Kn.getInterpolatedAttribute(a,o,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new L,materialIndex:0};Kn.getNormal(la,ca,ha,d.normal),h.face=d,h.barycoord=u}return h}var ka=class extends $e{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Be,h=Be,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ui=new Fi,Lf=new Et(.5,.5),pa=new L,_i=class{constructor(t=new ln,e=new ln,n=new ln,s=new ln,r=new ln,a=new ln){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=gn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],y=r[12],T=r[13],S=r[14],R=r[15];if(s[0].setComponents(l-a,f-h,p-m,R-y).normalize(),s[1].setComponents(l+a,f+h,p+m,R+y).normalize(),s[2].setComponents(l+o,f+u,p+x,R+T).normalize(),s[3].setComponents(l-o,f-u,p-x,R-T).normalize(),n)s[4].setComponents(c,d,g,S).normalize(),s[5].setComponents(l-c,f-d,p-g,R-S).normalize();else if(s[4].setComponents(l-c,f-d,p-g,R-S).normalize(),e===gn)s[5].setComponents(l+c,f+d,p+g,R+S).normalize();else if(e===ys)s[5].setComponents(c,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){Ui.center.set(0,0,0);let e=Lf.distanceTo(t.center);return Ui.radius=.7071067811865476+e,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(pa.x=s.normal.x>0?t.max.x:t.min.x,pa.y=s.normal.y>0?t.max.y:t.min.y,pa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(pa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Lh=new me,za=class i{constructor(){this.coordinateSystem=gn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Lh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new _i),n[s].setFromProjectionMatrix(Lh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new _i),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Bi=class extends ei{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ha=new L,Ga=new L,Dh=new me,er=new gi,ma=new Fi,Hl=new L,Nh=new L,Ts=class extends ze{constructor(t=new Te,e=new Bi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ha.fromBufferAttribute(e,s-1),Ga.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ha.distanceTo(Ga);t.setAttribute("lineDistance",new ne(n,1))}else Bt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(s),ma.radius+=r,t.ray.intersectsSphere(ma)===!1)return;Dh.copy(s).invert(),er.copy(t.ray).applyMatrix4(Dh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let x=f,g=m-1;x<g;x+=l){let p=h.getX(x),y=h.getX(x+1),T=ga(this,t,er,c,p,y,x);T&&e.push(T)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(f),p=ga(this,t,er,c,x,g,m-1);p&&e.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let x=f,g=m-1;x<g;x+=l){let p=ga(this,t,er,c,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=ga(this,t,er,c,m-1,f,m-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ga(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Ha.fromBufferAttribute(o,s),Ga.fromBufferAttribute(o,r),e.distanceSqToSegment(Ha,Ga,Hl,Nh)>n)return;Hl.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Hl);if(!(l<t.near||l>t.far))return{distance:l,point:Nh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Uh=new L,Oh=new L,As=class extends Ts{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Uh.fromBufferAttribute(e,s),Oh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Uh.distanceTo(Oh);t.setAttribute("lineDistance",new ne(n,1))}else Bt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var dr=class extends $e{constructor(t=[],e=Vi,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},fr=class extends $e{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ni=class extends $e{constructor(t,e,n=An,s,r,a,o=Be,c=Be,l,h=Qn,u=1){if(h!==Qn&&h!==si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ss(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},pr=class extends ni{constructor(t,e=An,n=Vi,s,r,a=Be,o=Be,c,l=Qn){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},mr=class extends $e{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},xn=class i extends Te{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function m(x,g,p,y,T,S,R,E,_,w,N){let I=S/_,k=R/w,H=S/2,q=R/2,D=E/2,Z=_+1,J=w+1,z=0,Y=0,W=new L;for(let j=0;j<J;j++){let Q=j*k-q;for(let mt=0;mt<Z;mt++){let Ot=mt*I-H;W[x]=Ot*y,W[g]=Q*T,W[p]=D,l.push(W.x,W.y,W.z),W[x]=0,W[g]=0,W[p]=E>0?1:-1,h.push(W.x,W.y,W.z),u.push(mt/_),u.push(1-j/w),z+=1}}for(let j=0;j<w;j++)for(let Q=0;Q<_;Q++){let mt=d+Q+Z*j,Ot=d+Q+Z*(j+1),nt=d+(Q+1)+Z*(j+1),ft=d+(Q+1)+Z*j;c.push(mt,Ot,ft),c.push(Ot,nt,ft),Y+=6}o.addGroup(f,Y,N),f+=Y,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var gr=class i extends Te{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new L,h=new Et;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(o,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Rs=class i extends Te{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,x=[],g=n/2,p=0;y(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(f,2));function y(){let S=new L,R=new L,E=0,_=(e-t)/n;for(let w=0;w<=r;w++){let N=[],I=w/r,k=I*(e-t)+t;for(let H=0;H<=s;H++){let q=H/s,D=q*c+o,Z=Math.sin(D),J=Math.cos(D);R.x=k*Z,R.y=-I*n+g,R.z=k*J,u.push(R.x,R.y,R.z),S.set(Z,_,J).normalize(),d.push(S.x,S.y,S.z),f.push(q,1-I),N.push(m++)}x.push(N)}for(let w=0;w<s;w++)for(let N=0;N<r;N++){let I=x[N][w],k=x[N+1][w],H=x[N+1][w+1],q=x[N][w+1];(t>0||N!==0)&&(h.push(I,k,q),E+=3),(e>0||N!==r-1)&&(h.push(k,H,q),E+=3)}l.addGroup(p,E,0),p+=E}function T(S){let R=m,E=new Et,_=new L,w=0,N=S===!0?t:e,I=S===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,g*I,0),d.push(0,I,0),f.push(.5,.5),m++;let k=m;for(let H=0;H<=s;H++){let D=H/s*c+o,Z=Math.cos(D),J=Math.sin(D);_.x=N*J,_.y=g*I,_.z=N*Z,u.push(_.x,_.y,_.z),d.push(0,I,0),E.x=Z*.5+.5,E.y=J*.5*I+.5,f.push(E.x,E.y),m++}for(let H=0;H<s;H++){let q=R+H,D=k+H;S===!0?h.push(D,D+1,q):h.push(D+1,D,q),w+=3}l.addGroup(p,w,S===!0?1:2),p+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},_r=class i extends Rs{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var _a=new L,xa=new L,Gl=new L,ya=new Kn,xr=class extends Te{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(gs*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d=new Map,f=[];for(let m=0;m<c;m+=3){a?(l[0]=a.getX(m),l[1]=a.getX(m+1),l[2]=a.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);let{a:x,b:g,c:p}=ya;if(x.fromBufferAttribute(o,l[0]),g.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),ya.getNormal(Gl),u[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,u[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){let T=(y+1)%3,S=u[y],R=u[T],E=ya[h[y]],_=ya[h[T]],w=`${S}_${R}`,N=`${R}_${S}`,I=d.get(N);I?(Gl.dot(I.normal)<=r&&(f.push(E.x,E.y,E.z),f.push(_.x,_.y,_.z)),d.set(N,null)):d.has(w)||d.set(w,{index0:l[y],index1:l[T],normal:Gl.clone()})}}for(let m of d.values())if(m){let{index0:x,index1:g}=m;_a.fromBufferAttribute(o,x),xa.fromBufferAttribute(o,g),f.push(_a.x,_a.y,_a.z),f.push(xa.x,xa.y,xa.z)}this.setAttribute("position",new ne(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Bt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new Et:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new L,s=[],r=[],a=[],o=new L,c=new me;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new L)}r[0]=new L,a[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Zt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Zt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},yr=class extends yn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new Et){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Va=class extends yr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Pc(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Fh=new L,Bh=new L,Vl=new Pc,Wl=new Pc,Xl=new Pc,Cs=class extends yn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Bh.subVectors(s[0],s[1]).add(s[0]),l=Bh);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Fh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Fh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Vl.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,x,g),Wl.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,x,g),Xl.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(Vl.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Wl.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Xl.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Vl.calc(c),Wl.calc(c),Xl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function kh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Df(i,t){let e=1-i;return e*e*t}function Nf(i,t){return 2*(1-i)*i*t}function Uf(i,t){return i*i*t}function ir(i,t,e,n){return Df(i,t)+Nf(i,e)+Uf(i,n)}function Of(i,t){let e=1-i;return e*e*e*t}function Ff(i,t){let e=1-i;return 3*e*e*i*t}function Bf(i,t){return 3*(1-i)*i*i*t}function kf(i,t){return i*i*i*t}function sr(i,t,e,n,s){return Of(i,t)+Ff(i,e)+Bf(i,n)+kf(i,s)}var Wa=class extends yn{constructor(t=new Et,e=new Et,n=new Et,s=new Et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Et){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(sr(t,s.x,r.x,a.x,o.x),sr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Xa=class extends yn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(sr(t,s.x,r.x,a.x,o.x),sr(t,s.y,r.y,a.y,o.y),sr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$a=class extends yn{constructor(t=new Et,e=new Et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Et){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qa=class extends yn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ya=class extends yn{constructor(t=new Et,e=new Et,n=new Et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Et){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ir(t,s.x,r.x,a.x),ir(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vr=class extends yn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ir(t,s.x,r.x,a.x),ir(t,s.y,r.y,a.y),ir(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Za=class extends yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Et){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(kh(o,c.x,l.x,h.x,u.x),kh(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Et().fromArray(s))}return this}},zf=Object.freeze({__proto__:null,ArcCurve:Va,CatmullRomCurve3:Cs,CubicBezierCurve:Wa,CubicBezierCurve3:Xa,EllipseCurve:yr,LineCurve:$a,LineCurve3:qa,QuadraticBezierCurve:Ya,QuadraticBezierCurve3:vr,SplineCurve:Za});var xi=class i extends Te{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let y=p*d-a;for(let T=0;T<l;T++){let S=T*u-r;m.push(S,-y,0),x.push(0,0,1),g.push(T/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){let T=y+l*p,S=y+l*(p+1),R=y+1+l*(p+1),E=y+1+l*p;f.push(T,S,E),f.push(S,R,E)}this.setIndex(f),this.setAttribute("position",new ne(m,3)),this.setAttribute("normal",new ne(x,3)),this.setAttribute("uv",new ne(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ps=class i extends Te{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=t,d=(e-t)/s,f=new L,m=new Et;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let p=r+g/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<s;x++){let g=x*(n+1);for(let p=0;p<n;p++){let y=p+g,T=y,S=y+n+1,R=y+n+2,E=y+1;o.push(T,S,E),o.push(S,R,E)}}this.setIndex(o),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ki=class i extends Te{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new L,d=new L,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let y=[],T=p/n,S=a+T*o,R=t*Math.cos(S),E=Math.sqrt(t*t-R*R),_=0;p===0&&a===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let w=0;w<=e;w++){let N=w/e,I=s+N*r;u.x=-E*Math.cos(I),u.y=R,u.z=E*Math.sin(I),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(N+_,1-T),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let T=h[p][y+1],S=h[p][y],R=h[p+1][y],E=h[p+1][y+1];(p!==0||a>0)&&f.push(T,S,E),(p!==n-1||c<Math.PI)&&f.push(S,R,E)}this.setIndex(f),this.setAttribute("position",new ne(m,3)),this.setAttribute("normal",new ne(x,3)),this.setAttribute("uv",new ne(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var br=class i extends Te{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],u=[],d=new L,f=new L,m=new L;for(let x=0;x<=n;x++){let g=a+x/n*o;for(let p=0;p<=s;p++){let y=p/s*r;f.x=(t+e*Math.cos(g))*Math.cos(y),f.y=(t+e*Math.cos(g))*Math.sin(y),f.z=e*Math.sin(g),l.push(f.x,f.y,f.z),d.x=t*Math.cos(y),d.y=t*Math.sin(y),m.subVectors(f,d).normalize(),h.push(m.x,m.y,m.z),u.push(p/s),u.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=s;g++){let p=(s+1)*x+g-1,y=(s+1)*(x-1)+g-1,T=(s+1)*(x-1)+g,S=(s+1)*x+g;c.push(p,y,S),c.push(y,T,S)}this.setIndex(c),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Mr=class i extends Te{constructor(t=new vr(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new L,c=new L,l=new Et,h=new L,u=[],d=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(f,2));function x(){for(let T=0;T<e;T++)g(T);g(r===!1?e:0),y(),p()}function g(T){h=t.getPointAt(T/e,h);let S=a.normals[T],R=a.binormals[T];for(let E=0;E<=s;E++){let _=E/s*Math.PI*2,w=Math.sin(_),N=-Math.cos(_);c.x=N*S.x+w*R.x,c.y=N*S.y+w*R.y,c.z=N*S.z+w*R.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function p(){for(let T=1;T<=e;T++)for(let S=1;S<=s;S++){let R=(s+1)*(T-1)+(S-1),E=(s+1)*T+(S-1),_=(s+1)*T+S,w=(s+1)*(T-1)+S;m.push(R,E,w),m.push(E,_,w)}}function y(){for(let T=0;T<=e;T++)for(let S=0;S<=s;S++)l.x=T/e,l.y=S/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new zf[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Xi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(zh(s))s.isRenderTargetTexture?(Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(zh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function qe(i){let t={};for(let e=0;e<i.length;e++){let n=Xi(i[e]);for(let s in n)t[s]=n[s]}return t}function zh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Hf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ic(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var Ou={clone:Xi,merge:qe},Gf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bn=class extends ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gf,this.fragmentShader=Vf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xi(t.uniforms),this.uniformsGroups=Hf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Yt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Et().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Me().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Xt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new me().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ja=class extends Bn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},dn=class extends ei{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ko,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},yi=class extends dn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Et(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Oi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Oi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Ka=class extends ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ja=class extends ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ds(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function va(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var vi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Qa=class extends vi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yl,endingEnd:Yl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Zl:r=t,o=2*e-n;break;case Jl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Zl:a=t,c=2*n-e;break;case Jl:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,y=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,T=(-1-f)*g+(1.5+f)*x+.5*m,S=f*g-f*x;for(let R=0;R!==o;++R)r[R]=p*a[h+R]+y*a[l+R]+T*a[c+R]+S*a[u+R];return r}},to=class extends vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},eo=class extends vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},no=class extends vi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-e)/(s-e),x=1-m;for(let g=0;g!==o;++g)r[g]=a[l+g]*x+a[c+g]*m;return r}let d=o*2,f=t-1;for(let m=0;m!==o;++m){let x=a[l+m],g=a[c+m],p=f*d+m*2,y=u[p],T=u[p+1],S=t*d+m*2,R=h[S],E=h[S+1],_=Xf(n,e,y,R,s);r[m]=Fu(_,x,T,E,g)}return r}};function Fu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Wf(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Xf(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Fu(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Wf(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var fn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ds(e,this.TimeBufferType),this.values=ds(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ds(t.times,Array),values:ds(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),va(t.settings)&&(n.settings={inTangents:ds(t.settings.inTangents,Array),outTangents:ds(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new eo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new to(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new no(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case rr:e=this.InterpolantFactoryMethodDiscrete;break;case Ua:e=this.InterpolantFactoryMethodLinear;break;case Sa:e=this.InterpolantFactoryMethodSmooth;break;case ql:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Bt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rr;case this.InterpolantFactoryMethodLinear:return Ua;case this.InterpolantFactoryMethodSmooth:return Sa;case this.InterpolantFactoryMethodBezier:return ql}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;va(this.settings)&&(Hh(this.settings.inTangents,t),Hh(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;va(this.settings)&&(Gh(this.settings.inTangents,t),Gh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Vt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Vt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Vt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Vt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&jd(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Vt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Sa,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=e[u+m];if(x!==e[d+m]||x!==e[f+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,va(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Hh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Gh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=Ua;var bi=class extends fn{constructor(t,e,n){super(t,e,n)}};bi.prototype.ValueTypeName="bool";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=rr;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var io=class extends fn{constructor(t,e,n,s){super(t,e,n,s)}};io.prototype.ValueTypeName="color";var so=class extends fn{constructor(t,e,n,s){super(t,e,n,s)}};so.prototype.ValueTypeName="number";var ro=class extends vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)hn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Sr=class extends fn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ro(this.times,this.values,this.getValueSize(),t)}};Sr.prototype.ValueTypeName="quaternion";Sr.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends fn{constructor(t,e,n){super(t,e,n)}};Mi.prototype.ValueTypeName="string";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=rr;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var ao=class extends fn{constructor(t,e,n,s){super(t,e,n,s)}};ao.prototype.ValueTypeName="vector";var Ea={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Vh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Vh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Vh(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var oo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Bu=new oo,Is=class{constructor(t){this.manager=t!==void 0?t:Bu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Is.DEFAULT_MATERIAL_NAME="__DEFAULT";var fs=new WeakMap,lo=class extends Is{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Ea.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let u=fs.get(a);u===void 0&&(u=[],fs.set(a,u)),u.push({onLoad:e,onError:s})}return a}let o=vs("img");function c(){h(),e&&e(this);let u=fs.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}fs.delete(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),Ea.remove(`image:${t}`);let d=fs.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}fs.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ea.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}};var wr=class extends Is{constructor(t){super(t)}load(t,e,n,s){let r=new $e,a=new lo(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Er=class extends ze{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Tr=class extends Er{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},$l=new me,Wh=new L,Xh=new L,co=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.mapType=en,this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _i,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Wh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wh),Xh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){$l.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix($l,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===ys||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply($l)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ba=new L,Ma=new hn,On=new L,Ar=class extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ba,Ma,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,Ma,On.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ba,Ma,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,Ma,On.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},mi=new L,$h=new Et,qh=new Et,cn=class extends Ar{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mi.x,mi.y).multiplyScalar(-t/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-t/mi.z)}getViewSize(t,e){return this.getViewBounds(t,$h,qh),e.subVectors(qh,$h)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(gs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Si=class extends Ar{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Kl=class extends co{constructor(){super(new Si(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ls=class extends Er{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new Kl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ps=-90,ms=1,Ds=class extends ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new cn(ps,ms,t,e);s.layers=this.layers,this.add(s);let r=new cn(ps,ms,t,e);r.layers=this.layers,this.add(r);let a=new cn(ps,ms,t,e);a.layers=this.layers,this.add(a);let o=new cn(ps,ms,t,e);o.layers=this.layers,this.add(o);let c=new cn(ps,ms,t,e);c.layers=this.layers,this.add(c);let l=new cn(ps,ms,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ho=class extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Lc="\\[\\]\\.:\\/",$f=new RegExp("["+Lc+"]","g"),Dc="[^"+Lc+"]",qf="[^"+Lc.replace("\\.","")+"]",Yf=/((?:WC+[\/:])*)/.source.replace("WC",Dc),Zf=/(WCOD+)?/.source.replace("WCOD",qf),Jf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dc),Kf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dc),jf=new RegExp("^"+Yf+Zf+Jf+Kf+"$"),Qf=["material","materials","bones","map"],jl=class{constructor(t,e,n){let s=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace($f,"")}static parseTrackName(t){let e=jf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Qf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Bt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Vt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Vt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Vt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Vt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Vt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Vt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=jl;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Cx=new Float32Array(1);var Yh=new me,Rr=class{constructor(t,e,n=0,s=1/0){this.ray=new gi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ws,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Vt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Yh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yh),this}intersectObject(t,e=!0,n=[]){return Ql(t,this,n,e),n.sort(Zh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ql(t[s],this,n,e);return n.sort(Zh),n}};function Zh(i,t){return i.distance-t.distance}function Ql(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Ql(r[a],t,e,!0)}}var Ns=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Zt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Zt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var tc=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Cr=class extends En{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Nc(i,t,e,n){let s=tp(n);switch(e){case yc:return i*t;case bc:return i*t/s.components*s.byteLength;case xo:return i*t/s.components*s.byteLength;case Ei:return i*t*2/s.components*s.byteLength;case yo:return i*t*2/s.components*s.byteLength;case vc:return i*t*3/s.components*s.byteLength;case Pn:return i*t*4/s.components*s.byteLength;case vo:return i*t*4/s.components*s.byteLength;case Lr:case Dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Nr:case Ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mo:case wo:return Math.max(i,16)*Math.max(t,8)/4;case bo:case So:return Math.max(i,8)*Math.max(t,8)/2;case Eo:case To:case Ro:case Co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ao:case Or:case Po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Do:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case No:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Oo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Bo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ko:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case zo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Go:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Vo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Wo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Xo:case $o:case qo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Yo:case Zo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Fr:case Jo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function tp(i){switch(i){case en:case mc:return{byteLength:1,components:1};case Bs:case gc:case Cn:return{byteLength:2,components:1};case go:case _o:return{byteLength:2,components:4};case An:case mo:case Rn:return{byteLength:4,components:1};case _c:case xc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function ad(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function lp(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_p=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,xp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Pp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ip=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Lp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Dp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bp="gl_FragColor = linearToOutputTexel( gl_FragColor );",kp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$p=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,tm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,em=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,im=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,am=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,om=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hm=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,um=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ym=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mm=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Am=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Im=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Om=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,km=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Xm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ym=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Km=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ng=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ig=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,og=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ug=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_g=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Sg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ag=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ig=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Dg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ug=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Og=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jt={alphahash_fragment:cp,alphahash_pars_fragment:hp,alphamap_fragment:up,alphamap_pars_fragment:dp,alphatest_fragment:fp,alphatest_pars_fragment:pp,aomap_fragment:mp,aomap_pars_fragment:gp,batching_pars_vertex:_p,batching_vertex:xp,begin_vertex:yp,beginnormal_vertex:vp,bsdfs:bp,iridescence_fragment:Mp,bumpmap_pars_fragment:Sp,clipping_planes_fragment:wp,clipping_planes_pars_fragment:Ep,clipping_planes_pars_vertex:Tp,clipping_planes_vertex:Ap,color_fragment:Rp,color_pars_fragment:Cp,color_pars_vertex:Pp,color_vertex:Ip,common:Lp,defaultnormal_vertex:Dp,displacementmap_pars_vertex:Np,displacementmap_vertex:Up,emissivemap_fragment:Op,emissivemap_pars_fragment:Fp,colorspace_fragment:Bp,colorspace_pars_fragment:kp,envmap_fragment:zp,envmap_common_pars_fragment:Hp,envmap_pars_fragment:Gp,envmap_pars_vertex:Vp,envmap_physical_pars_fragment:tm,envmap_vertex:Wp,fog_vertex:Xp,fog_pars_vertex:$p,fog_fragment:qp,fog_pars_fragment:Yp,gradientmap_pars_fragment:Zp,lightmap_pars_fragment:Jp,lights_lambert_fragment:Kp,lights_lambert_pars_fragment:jp,lights_pars_begin:Qp,lights_toon_fragment:em,lights_toon_pars_fragment:nm,lights_phong_fragment:im,lights_phong_pars_fragment:sm,lights_physical_fragment:rm,lights_physical_pars_fragment:am,lights_fragment_begin:om,lights_fragment_maps:lm,lights_fragment_end:cm,lightprobes_pars_fragment:hm,logdepthbuf_fragment:um,logdepthbuf_pars_fragment:dm,logdepthbuf_pars_vertex:fm,logdepthbuf_vertex:pm,map_fragment:mm,map_pars_fragment:gm,map_particle_fragment:_m,map_particle_pars_fragment:xm,metalnessmap_fragment:ym,metalnessmap_pars_fragment:vm,morphinstance_vertex:bm,morphcolor_vertex:Mm,morphnormal_vertex:Sm,morphtarget_pars_vertex:wm,morphtarget_vertex:Em,normal_fragment_begin:Tm,normal_fragment_maps:Am,normal_pars_fragment:Rm,normal_pars_vertex:Cm,normal_vertex:Pm,normalmap_pars_fragment:Im,clearcoat_normal_fragment_begin:Lm,clearcoat_normal_fragment_maps:Dm,clearcoat_pars_fragment:Nm,iridescence_pars_fragment:Um,opaque_fragment:Om,packing:Fm,premultiplied_alpha_fragment:Bm,project_vertex:km,dithering_fragment:zm,dithering_pars_fragment:Hm,roughnessmap_fragment:Gm,roughnessmap_pars_fragment:Vm,shadowmap_pars_fragment:Wm,shadowmap_pars_vertex:Xm,shadowmap_vertex:$m,shadowmask_pars_fragment:qm,skinbase_vertex:Ym,skinning_pars_vertex:Zm,skinning_vertex:Jm,skinnormal_vertex:Km,specularmap_fragment:jm,specularmap_pars_fragment:Qm,tonemapping_fragment:tg,tonemapping_pars_fragment:eg,transmission_fragment:ng,transmission_pars_fragment:ig,uv_pars_fragment:sg,uv_pars_vertex:rg,uv_vertex:ag,worldpos_vertex:og,background_vert:lg,background_frag:cg,backgroundCube_vert:hg,backgroundCube_frag:ug,cube_vert:dg,cube_frag:fg,depth_vert:pg,depth_frag:mg,distance_vert:gg,distance_frag:_g,equirect_vert:xg,equirect_frag:yg,linedashed_vert:vg,linedashed_frag:bg,meshbasic_vert:Mg,meshbasic_frag:Sg,meshlambert_vert:wg,meshlambert_frag:Eg,meshmatcap_vert:Tg,meshmatcap_frag:Ag,meshnormal_vert:Rg,meshnormal_frag:Cg,meshphong_vert:Pg,meshphong_frag:Ig,meshphysical_vert:Lg,meshphysical_frag:Dg,meshtoon_vert:Ng,meshtoon_frag:Ug,points_vert:Og,points_frag:Fg,shadow_vert:Bg,shadow_frag:kg,sprite_vert:zg,sprite_frag:Hg},St={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Hn={basic:{uniforms:qe([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:qe([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Yt(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:qe([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:qe([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:qe([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:qe([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:qe([St.points,St.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:qe([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:qe([St.common,St.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:qe([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:qe([St.sprite,St.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:qe([St.common,St.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:qe([St.lights,St.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Hn.physical={uniforms:qe([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var Qo={r:0,b:0,g:0},Gg=new me,od=new Xt;od.set(-1,0,0,0,1,0,0,0,1);function Vg(i,t,e,n,s,r){let a=new Yt(0),o=s===!0?0:1,c,l,h=null,u=0,d=null;function f(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){let S=y.backgroundBlurriness>0;T=t.get(T,S)}return T}function m(y){let T=!1,S=f(y);S===null?g(a,o):S&&S.isColor&&(g(S,1),T=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,T){let S=f(T);S&&S.isCubeTexture?(l===void 0&&(l=new ge(new xn(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Xi(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Gg.makeRotationFromEuler(T.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(od),l.material.toneMapped=ee.getTransfer(S.colorSpace)!==de,(h!==S||u!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,u=S.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ge(new xi(2,2),new Bn({name:"BackgroundMaterial",uniforms:Xi(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=ee.getTransfer(S.colorSpace)!==de,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||u!==S.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,u=S.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function g(y,T){y.getRGB(Qo,Ic(i)),e.buffers.color.setClear(Qo.r,Qo.g,Qo.b,T,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,T=1){a.set(y),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:m,addToRenderList:x,dispose:p}}function Wg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(k,H,q,D,Z){let J=!1,z=u(k,D,q,H);r!==z&&(r=z,l(r.object)),J=f(k,D,q,Z),J&&m(k,D,q,Z),Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,S(k,H,q,D),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function c(){return i.createVertexArray()}function l(k){return i.bindVertexArray(k)}function h(k){return i.deleteVertexArray(k)}function u(k,H,q,D){let Z=D.wireframe===!0,J=n[H.id];J===void 0&&(J={},n[H.id]=J);let z=k.isInstancedMesh===!0?k.id:0,Y=J[z];Y===void 0&&(Y={},J[z]=Y);let W=Y[q.id];W===void 0&&(W={},Y[q.id]=W);let j=W[Z];return j===void 0&&(j=d(c()),W[Z]=j),j}function d(k){let H=[],q=[],D=[];for(let Z=0;Z<e;Z++)H[Z]=0,q[Z]=0,D[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:q,attributeDivisors:D,object:k,attributes:{},index:null}}function f(k,H,q,D){let Z=r.attributes,J=H.attributes,z=0,Y=q.getAttributes();for(let W in Y)if(Y[W].location>=0){let Q=Z[W],mt=J[W];if(mt===void 0&&(W==="instanceMatrix"&&k.instanceMatrix&&(mt=k.instanceMatrix),W==="instanceColor"&&k.instanceColor&&(mt=k.instanceColor)),Q===void 0||Q.attribute!==mt||mt&&Q.data!==mt.data)return!0;z++}return r.attributesNum!==z||r.index!==D}function m(k,H,q,D){let Z={},J=H.attributes,z=0,Y=q.getAttributes();for(let W in Y)if(Y[W].location>=0){let Q=J[W];Q===void 0&&(W==="instanceMatrix"&&k.instanceMatrix&&(Q=k.instanceMatrix),W==="instanceColor"&&k.instanceColor&&(Q=k.instanceColor));let mt={};mt.attribute=Q,Q&&Q.data&&(mt.data=Q.data),Z[W]=mt,z++}r.attributes=Z,r.attributesNum=z,r.index=D}function x(){let k=r.newAttributes;for(let H=0,q=k.length;H<q;H++)k[H]=0}function g(k){p(k,0)}function p(k,H){let q=r.newAttributes,D=r.enabledAttributes,Z=r.attributeDivisors;q[k]=1,D[k]===0&&(i.enableVertexAttribArray(k),D[k]=1),Z[k]!==H&&(i.vertexAttribDivisor(k,H),Z[k]=H)}function y(){let k=r.newAttributes,H=r.enabledAttributes;for(let q=0,D=H.length;q<D;q++)H[q]!==k[q]&&(i.disableVertexAttribArray(q),H[q]=0)}function T(k,H,q,D,Z,J,z){z===!0?i.vertexAttribIPointer(k,H,q,Z,J):i.vertexAttribPointer(k,H,q,D,Z,J)}function S(k,H,q,D){x();let Z=D.attributes,J=q.getAttributes(),z=H.defaultAttributeValues;for(let Y in J){let W=J[Y];if(W.location>=0){let j=Z[Y];if(j===void 0&&(Y==="instanceMatrix"&&k.instanceMatrix&&(j=k.instanceMatrix),Y==="instanceColor"&&k.instanceColor&&(j=k.instanceColor)),j!==void 0){let Q=j.normalized,mt=j.itemSize,Ot=t.get(j);if(Ot===void 0)continue;let nt=Ot.buffer,ft=Ot.type,Rt=Ot.bytesPerElement,Dt=ft===i.INT||ft===i.UNSIGNED_INT||j.gpuType===mo;if(j.isInterleavedBufferAttribute){let Mt=j.data,kt=Mt.isInterleavedBuffer===!0?Mt.stride:Mt.itemSize,le=j.offset;if(Mt.isInstancedInterleavedBuffer||Mt.isInstancedBufferAttribute){for(let Ct=0;Ct<W.locationSize;Ct++)p(W.location+Ct,Mt.meshPerAttribute);k.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Ct=0;Ct<W.locationSize;Ct++)g(W.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let Ct=0;Ct<W.locationSize;Ct++)T(W.location+Ct,mt/W.locationSize,ft,Q,kt*Rt,(le+mt/W.locationSize*Ct)*Rt,Dt)}else{if(j.isInstancedBufferAttribute){for(let Mt=0;Mt<W.locationSize;Mt++)p(W.location+Mt,j.meshPerAttribute);k.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Mt=0;Mt<W.locationSize;Mt++)g(W.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let Mt=0;Mt<W.locationSize;Mt++)T(W.location+Mt,mt/W.locationSize,ft,Q,mt*Rt,mt/W.locationSize*Mt*Rt,Dt)}}else if(z!==void 0){let Q=z[Y];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(W.location,Q);break;case 3:i.vertexAttrib3fv(W.location,Q);break;case 4:i.vertexAttrib4fv(W.location,Q);break;default:i.vertexAttrib1fv(W.location,Q)}}}}y()}function R(){N();for(let k in n){let H=n[k];for(let q in H){let D=H[q];for(let Z in D){let J=D[Z];for(let z in J)h(J[z].object),delete J[z];delete D[Z]}}delete n[k]}}function E(k){if(n[k.id]===void 0)return;let H=n[k.id];for(let q in H){let D=H[q];for(let Z in D){let J=D[Z];for(let z in J)h(J[z].object),delete J[z];delete D[Z]}}delete n[k.id]}function _(k){for(let H in n){let q=n[H];for(let D in q){let Z=q[D];if(Z[k.id]===void 0)continue;let J=Z[k.id];for(let z in J)h(J[z].object),delete J[z];delete Z[k.id]}}}function w(k){for(let H in n){let q=n[H],D=k.isInstancedMesh===!0?k.id:0,Z=q[D];if(Z!==void 0){for(let J in Z){let z=Z[J];for(let Y in z)h(z[Y].object),delete z[Y];delete Z[J]}delete q[D],Object.keys(q).length===0&&delete n[H]}}}function N(){I(),a=!0,r!==s&&(r=s,l(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:I,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfObject:w,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function Xg(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function $g(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Pn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let w=_===Cn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==en&&_!==Rn&&!w&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Bt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Bt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:S,maxSamples:R,samples:E}}function qg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new ln,o=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let y=r?0:n,T=y*4,S=p.clippingState||null;c.value=S,S=h(m,d,T,f);for(let R=0;R!==T;++R)S[R]=e[R];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let p=f+x*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,S=f;T!==x;++T,S+=4)a.copy(u[T]).applyMatrix4(y,o),a.normal.toArray(g,S),g[S+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var zr=class extends un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new dr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new xn(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:Hi});r.uniforms.tEquirect.value=e;let a=new ge(s,r),o=e.minFilter;return e.minFilter===ii&&(e.minFilter=Ke),new Ds(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},ku=256,Yg=3,Zg=20,ld=256,cd=16,Jg=3,Kg=new L,jg=new Yt,el=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ds(1,10,null),this._boxMesh=new ge(new xn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Kg}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,d=c.autoClearColor,f=c.autoClearDepth,m=c.autoClearStencil,x=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,x===null&&(t.background=c.getClearColor(jg));let g=new Ds(n,s,h);return g.position.copy(o),g.update(c,t),c.autoClear=u,c.autoClearColor=d,c.autoClearDepth=f,c.autoClearStencil=m,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(ku,Rc(t))}_fromTexture(t,e){t.mapping===Vi||t.mapping===Fs?this._setSize(t.image.length===0?ku:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=zu(t,!1,!1),n=Math.log2(t)-Yg;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=zu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Vi||t.mapping===Fs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Hu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Qg(),this._integrationMaterial=t0());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/cd);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Jg)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let c=o>0?Math.log2(e)+.5*Math.log2(6/(ld*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=e0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function zu(i,t,e){return new zr(i,{minFilter:ii,generateMipmaps:t,type:Cn,colorSpace:ar,depthBuffer:e})}function Hr(i,t,e){return new Bn({name:i,uniforms:t,vertexShader:Jt.cube_vert,fragmentShader:e,side:je,blending:Hi,depthTest:!1,depthWrite:!1})}function Qg(){return Hr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ld}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function t0(){return Hr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:cd}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function e0(){return Hr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Zg}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Hu(){return Hr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Gu(){return Hr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function n0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===uo||f===fo)if(t.has(d)){let m=t.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let x=new zr(m.height);return x.fromEquirectangularTexture(i,d),t.set(d,x),d.addEventListener("dispose",l),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,m=f===uo||f===fo,x=f===Vi||f===Fs;if(m||x){let g=e.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new el(i)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{let y=d.image;return m&&y&&y.height>0||x&&y&&c(y)?(n===null&&(n=new el(i)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,f){return f===uo?d.mapping=Vi:f===fo&&(d.mapping=Fs),d}function c(d){let f=0,m=6;for(let x=0;x<m;x++)d[x]!==void 0&&f++;return f===m}function l(d){let f=d.target;f.removeEventListener("dispose",l);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function i0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Oi("WebGLRenderer: "+n+" extension not supported."),s}}}function s0(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){c(m.target)}function c(m){m.index!==null&&t.remove(m.index);for(let g in m.attributes)t.remove(m.attributes[g]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);let x=r.get(m);x&&(t.remove(x),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function l(m,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function h(m){let x=m.attributes;for(let g in x)t.update(x[g],i.ARRAY_BUFFER)}function u(m){let x=m.index,g=m.attributes.position,p=0;if(g===void 0)return;let y=x!==null?x.array.length:g.array.length/3-1,T=g.count>=65535?ur:hr,S=new T(Math.ceil(y/3)*6,1),R=S.array;if(x!==null){let _=x.array;p=x.version;for(let w=0,N=0;w<y;w+=3){let I=_[w+0],k=_[w+1],H=_[w+2];R[N++]=I,R[N++]=k,R[N++]=k,R[N++]=H,R[N++]=H,R[N++]=I}}else{p=g.version;for(let _=0,w=0;_<y;_+=3){let N=_+0,I=_+1,k=_+2;R[w++]=N,R[w++]=I,R[w++]=I,R[w++]=k,R[w++]=k,R[w++]=N}}S.version=p;let E=r.get(m);E&&t.remove(E),r.set(m,S)}function d(m){let x=r.get(m);if(x){let g=m.index;g!==null&&x.version<g.version&&u(m)}else u(m);return r.get(m)}function f(){for(let m in s){let x=s[m].deref();x!==void 0&&c(x)}}return{get:l,update:h,getWireframeAttribute:d,dispose:f}}function r0(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*a),e.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let g=0;g<f;g++)x+=d[g];e.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function a0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Vt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function o0(i,t,e){let n=new WeakMap,s=new Me;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let N=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",N)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],T=0;f===!0&&(T=1),m===!0&&(T=2),x===!0&&(T=3);let S=o.attributes.position.count*T,R=1;S>t.maxTextureSize&&(R=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let E=new Float32Array(S*R*4*u),_=new lr(E,S,R,u);_.type=Rn,_.needsUpdate=!0;let w=T*4;for(let I=0;I<u;I++){let k=g[I],H=p[I],q=y[I],D=S*R*4*I;for(let Z=0;Z<k.count;Z++){let J=Z*w;f===!0&&(s.fromBufferAttribute(k,Z),E[D+J+0]=s.x,E[D+J+1]=s.y,E[D+J+2]=s.z,E[D+J+3]=0),m===!0&&(s.fromBufferAttribute(H,Z),E[D+J+4]=s.x,E[D+J+5]=s.y,E[D+J+6]=s.z,E[D+J+7]=0),x===!0&&(s.fromBufferAttribute(q,Z),E[D+J+8]=s.x,E[D+J+9]=s.y,E[D+J+10]=s.z,E[D+J+11]=q.itemSize===4?s.w:1)}}d={count:u,texture:_,size:new Et(S,R)},n.set(o,d),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function l0(i,t,e,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,u=l.geometry,d=t.get(l,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var c0={[lc]:"LINEAR_TONE_MAPPING",[cc]:"REINHARD_TONE_MAPPING",[hc]:"CINEON_TONE_MAPPING",[Pr]:"ACES_FILMIC_TONE_MAPPING",[dc]:"AGX_TONE_MAPPING",[fc]:"NEUTRAL_TONE_MAPPING",[uc]:"CUSTOM_TONE_MAPPING"};function h0(i,t,e,n,s,r){let a=new un(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new Te;h.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ne([0,2,0,0,2,0],2));let u=new Ja({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ge(h,u),f=new Si(-1,1,1,-1,0,1),m=null,x=null,g=!1,p,y=null,T=[],S=!1;this.setSize=function(R,E){a.setSize(R,E),o!==null&&o.setSize(R,E),c!==null&&c.setSize(R,E);for(let _=0;_<T.length;_++){let w=T[_];w.setSize&&w.setSize(R,E)}},this.setEffects=function(R){T=R,S=T.length>0&&T[0].isRenderPass===!0;let E=a.width,_=a.height;T.length>0&&o===null&&(o=new un(E,_,{type:Cn,depthBuffer:!1,stencilBuffer:!1}),c=new un(E,_,{type:Cn,depthBuffer:!1,stencilBuffer:!1}));let w=s===!0&&T.some(N=>N.needsDepthTexture===!0);w!==(a.depthTexture!==null)&&(w===!0&&l===null&&(l=new ni(E,_),r===!0&&(l.format=si,l.type=Wi)),a.dispose(),a.depthTexture=w?l:null,a.resolveDepthBuffer=w,a.storeMultisampledDepthBuffer=w);for(let N=0;N<T.length;N++){let I=T[N];I.setSize&&I.setSize(E,_),w&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(l)}},this.begin=function(R,E){if(g||R.toneMapping===kn&&T.length===0)return!1;if(y=E,E!==null){let _=E.width,w=E.height;(a.width!==_||a.height!==w)&&this.setSize(_,w)}return S===!1&&R.setRenderTarget(a),p=R.toneMapping,R.toneMapping=kn,!0},this.hasRenderPass=function(){return S},this.end=function(R,E){R.toneMapping=p,g=!0;let _=a,w=o;for(let N=0;N<T.length;N++){let I=T[N];I.enabled!==!1&&(I.render(R,w,_,E),I.needsSwap!==!1&&(_=w,w=w===o?c:o))}if(m!==R.outputColorSpace||x!==R.toneMapping){m=R.outputColorSpace,x=R.toneMapping,u.defines={},ee.getTransfer(m)===de&&(u.defines.SRGB_TRANSFER="");let N=c0[x];N&&(u.defines[N]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,R.setRenderTarget(y),R.render(d,f),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var hd=new $e,ud=new ni(1,1),dd=new pr(1),fd=new lr,pd=new Ba,md=new dr,Vu=[],Wu=[],Xu=new Float32Array(16),$u=new Float32Array(9),qu=new Float32Array(4);function Hs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Vu[s];if(r===void 0&&(r=new Float32Array(s),Vu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function il(i,t){let e=Wu[t];e===void 0&&(e=new Int32Array(t),Wu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function u0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function d0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function f0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function p0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function m0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;qu.set(n),i.uniformMatrix2fv(this.addr,!1,qu),Ie(e,n)}}function g0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;$u.set(n),i.uniformMatrix3fv(this.addr,!1,$u),Ie(e,n)}}function _0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;Xu.set(n),i.uniformMatrix4fv(this.addr,!1,Xu),Ie(e,n)}}function x0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function y0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function v0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function b0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function M0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function S0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function w0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function E0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function sl(i){return i.version===0&&(i.compareFunction=wc,i.needsUpdate=!0),i}function T0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=sl(ud):r=hd,e.setTexture2D(t||r,s)}function A0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||pd,s)}function R0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=sl(dd):r=md,e.setTextureCube(t||r,s)}function C0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||fd,s)}function P0(i){switch(i){case 5126:return u0;case 35664:return d0;case 35665:return f0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return _0;case 5124:case 35670:return x0;case 35667:case 35671:return y0;case 35668:case 35672:return v0;case 35669:case 35673:return b0;case 5125:return M0;case 36294:return S0;case 36295:return w0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return C0}}function I0(i,t){i.uniform1fv(this.addr,t)}function L0(i,t){let e=Hs(t,this.size,2);i.uniform2fv(this.addr,e)}function D0(i,t){let e=Hs(t,this.size,3);i.uniform3fv(this.addr,e)}function N0(i,t){let e=Hs(t,this.size,4);i.uniform4fv(this.addr,e)}function U0(i,t){let e=Hs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function O0(i,t){let e=Hs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function F0(i,t){let e=Hs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function B0(i,t){i.uniform1iv(this.addr,t)}function k0(i,t){i.uniform2iv(this.addr,t)}function z0(i,t){i.uniform3iv(this.addr,t)}function H0(i,t){i.uniform4iv(this.addr,t)}function G0(i,t){i.uniform1uiv(this.addr,t)}function V0(i,t){i.uniform2uiv(this.addr,t)}function W0(i,t){i.uniform3uiv(this.addr,t)}function X0(i,t){i.uniform4uiv(this.addr,t)}function $0(i,t,e){let n=this.cache,s=t.length,r=il(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=sl(ud):a=hd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function q0(i,t,e){let n=this.cache,s=t.length,r=il(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||pd,r[a])}function Y0(i,t,e){let n=this.cache,s=t.length,r=il(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=sl(dd):a=md;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Z0(i,t,e){let n=this.cache,s=t.length,r=il(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||fd,r[a])}function J0(i){switch(i){case 5126:return I0;case 35664:return L0;case 35665:return D0;case 35666:return N0;case 35674:return U0;case 35675:return O0;case 35676:return F0;case 5124:case 35670:return B0;case 35667:case 35671:return k0;case 35668:case 35672:return z0;case 35669:case 35673:return H0;case 5125:return G0;case 36294:return V0;case 36295:return W0;case 36296:return X0;case 35678:case 36198:case 36298:case 36306:case 35682:return $0;case 35679:case 36299:case 36307:return q0;case 35680:case 36300:case 36308:case 36293:return Y0;case 36289:case 36303:case 36311:case 36292:return Z0}}var Fc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=P0(e.type)}},Bc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=J0(e.type)}},kc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Uc=/(\w+)(\])?(\[|\.)?/g;function Yu(i,t){i.seq.push(t),i.map[t.id]=t}function K0(i,t,e){let n=i.name,s=n.length;for(Uc.lastIndex=0;;){let r=Uc.exec(n),a=Uc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Yu(e,l===void 0?new Fc(o,i,t):new Bc(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new kc(o),Yu(e,u)),e=u}}}var zs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);K0(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Zu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var j0=37297,Q0=0;function t_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Ju=new Xt;function e_(i){ee._getMatrix(Ju,ee.workingColorSpace,i);let t=`mat3( ${Ju.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case or:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ku(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+t_(i.getShaderSource(t),o)}else return r}function n_(i,t){let e=e_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var i_={[lc]:"Linear",[cc]:"Reinhard",[hc]:"Cineon",[Pr]:"ACESFilmic",[dc]:"AgX",[fc]:"Neutral",[uc]:"Custom"};function s_(i,t){let e=i_[t];return e===void 0?(Bt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var tl=new L;function r_(){ee.getLuminanceCoefficients(tl);let i=tl.x.toFixed(4),t=tl.y.toFixed(4),e=tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kr).join(`
`)}function o_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function l_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function kr(i){return i!==""}function ju(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Qu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var c_=/^[ \t]*#include +<([\w\d./]+)>/gm;function zc(i){return i.replace(c_,h_)}function h_(i,t){let e=Jt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return zc(e)}var u_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function td(i){return i.replace(u_,d_)}function d_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ed(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var f_={[zi]:"SHADOWMAP_TYPE_PCF",[Us]:"SHADOWMAP_TYPE_VSM"};function p_(i){return f_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var m_={[Fs]:"ENVMAP_MODE_REFRACTION"};function g_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":m_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var __={[oc]:"ENVMAP_BLENDING_MULTIPLY",[_u]:"ENVMAP_BLENDING_MIX",[xu]:"ENVMAP_BLENDING_ADD"};function x_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":__[i.combine]||"ENVMAP_BLENDING_NONE"}function y_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=p_(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=g_(e),u=x_(e),d=a_(e),f=o_(r),m=s.createProgram(),x,g,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(kr).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(kr).join(`
`),g.length>0&&(g+=`
`)):(x=[ed(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),g=[ed(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==kn?s_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,n_("linearToOutputTexel",e.outputColorSpace),r_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(kr).join(`
`)),a=zc(a),a=ju(a,e),a=Qu(a,e),o=zc(o),o=ju(o,e),o=Qu(o,e),a=td(a),o=td(o),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",e.glslVersion===Ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=p+x+a,T=p+g+o,S=Zu(s,s.VERTEX_SHADER,y),R=Zu(s,s.FRAGMENT_SHADER,T);s.attachShader(m,S),s.attachShader(m,R),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function E(I){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(m)||"",H=s.getShaderInfoLog(S)||"",q=s.getShaderInfoLog(R)||"",D=k.trim(),Z=H.trim(),J=q.trim(),z=!0,Y=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,S,R);else{let W=Ku(s,S,"vertex"),j=Ku(s,R,"fragment");Vt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+D+`
`+W+`
`+j)}else D!==""?Bt("WebGLProgram: Program Info Log:",D):(Z===""||J==="")&&(Y=!1);Y&&(I.diagnostics={runnable:z,programLog:D,vertexShader:{log:Z,prefix:x},fragmentShader:{log:J,prefix:g}})}s.deleteShader(S),s.deleteShader(R),_=new zs(s,m),w=l_(s,m)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(m,j0)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Q0++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=R,this}var v_=0,Hc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Gc(t),e.set(t,n)),n}},Gc=class{constructor(t){this.id=v_++,this.code=t,this.usedTimes=0}};function b_(i){return i===Ei||i===Or||i===Fr}function M_(i,t,e,n,s,r){let a=new ws,o=new Hc,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,w,N,I,k,H){let q=I.fog,D=k.geometry,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,z=t.get(_.envMap||Z,J),Y=d[_.type],W=n.precision;_.precision!==null&&(W=n.getMaxPrecision(_.precision),W!==_.precision&&Bt("WebGLProgram.getParameters:",_.precision,"not supported, using",W,"instead."));let j=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Q=j!==void 0?j.length:0,mt=0;D.morphAttributes.position!==void 0&&(mt=1),D.morphAttributes.normal!==void 0&&(mt=2),D.morphAttributes.color!==void 0&&(mt=3);let Ot,nt,ft,Rt;if(Y){let lt=Hn[Y];Ot=lt.vertexShader,nt=lt.fragmentShader}else{Ot=_.vertexShader,nt=_.fragmentShader;let lt=o.getVertexShaderStage(_),Ht=o.getFragmentShaderStage(_);o.update(_,lt,Ht),ft=lt.id,Rt=Ht.id}let Dt=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),kt=k.isInstancedMesh===!0,le=k.isBatchedMesh===!0,Ct=!!_.map,re=!!_.matcap,jt=!!z,$t=jt&&z.isPMREMTexture===!0,fe=!!_.aoMap,Se=!!_.lightMap,at=!!_.bumpMap&&_.wireframe===!1,ut=!!_.normalMap,pt=!!_.displacementMap,Tt=!!_.emissiveMap,Kt=!!_.metalnessMap,Wt=!!_.roughnessMap,ce=_.anisotropy>0,O=_.clearcoat>0,_e=_.diffuseRoughness>0,ie=_.dispersion>0,ae=_.retroreflectivity>0,dt=_.iridescence>0,ve=_.sheen>0,Ft=_.transmission>0,zt=ce&&!!_.anisotropyMap,A=O&&!!_.clearcoatMap,v=O&&!!_.clearcoatNormalMap,G=O&&!!_.clearcoatRoughnessMap,ct=_e&&!!_.diffuseRoughnessMap,rt=dt&&!!_.iridescenceMap,xt=dt&&!!_.iridescenceThicknessMap,gt=ve&&!!_.sheenColorMap,tt=ve&&!!_.sheenRoughnessMap,it=!!_.specularMap,yt=!!_.specularColorMap,P=!!_.specularIntensityMap,st=Ft&&!!_.transmissionMap,M=Ft&&!!_.thicknessMap,C=!!_.gradientMap,F=!!_.alphaMap,B=_.alphaTest>0,V=!!_.alphaHash,ht=!!_.extensions,et=kn;_.toneMapped&&(Dt===null||Dt.isXRRenderTarget===!0)&&(et=i.toneMapping);let ot=$t?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,At={shaderID:Y,shaderType:_.type,shaderName:_.name,vertexShader:Ot,fragmentShader:nt,defines:_.defines,customVertexShaderID:ft,customFragmentShaderID:Rt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:W,batching:le,batchingColor:le&&k._colorsTexture!==null,instancing:kt,instancingColor:kt&&k.instanceColor!==null,instancingMorph:kt&&k.morphTexture!==null,outputColorSpace:Dt===null?i.outputColorSpace:Dt.isXRRenderTarget===!0?Dt.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ct,matcap:re,envMap:jt,envMapMode:jt&&z.mapping,envMapPMREM:$t,envMapMaxLod:$t?ot.length-1:null,envMapSize:$t?ot[0].width:null,aoMap:fe,lightMap:Se,bumpMap:at,normalMap:ut,displacementMap:pt,emissiveMap:Tt,normalMapObjectSpace:ut&&_.normalMapType===bu,normalMapTangentSpace:ut&&_.normalMapType===Ko,packedNormalMap:ut&&_.normalMapType===Ko&&b_(_.normalMap.format),metalnessMap:Kt,roughnessMap:Wt,anisotropy:ce,anisotropyMap:zt,clearcoat:O,clearcoatMap:A,clearcoatNormalMap:v,clearcoatRoughnessMap:G,diffuseRoughness:_e,diffuseRoughnessMap:ct,dispersion:ie,retroreflection:ae,iridescence:dt,iridescenceMap:rt,iridescenceThicknessMap:xt,sheen:ve,sheenColorMap:gt,sheenRoughnessMap:tt,specularMap:it,specularColorMap:yt,specularIntensityMap:P,transmission:Ft,transmissionMap:st,thicknessMap:M,gradientMap:C,opaque:_.transparent===!1&&_.blending===Os&&_.alphaToCoverage===!1,alphaMap:F,alphaTest:B,alphaHash:V,combine:_.combine,mapUv:Ct&&f(_.map.channel),aoMapUv:fe&&f(_.aoMap.channel),lightMapUv:Se&&f(_.lightMap.channel),bumpMapUv:at&&f(_.bumpMap.channel),normalMapUv:ut&&f(_.normalMap.channel),displacementMapUv:pt&&f(_.displacementMap.channel),emissiveMapUv:Tt&&f(_.emissiveMap.channel),metalnessMapUv:Kt&&f(_.metalnessMap.channel),roughnessMapUv:Wt&&f(_.roughnessMap.channel),anisotropyMapUv:zt&&f(_.anisotropyMap.channel),clearcoatMapUv:A&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:v&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ct&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:rt&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:tt&&f(_.sheenRoughnessMap.channel),specularMapUv:it&&f(_.specularMap.channel),specularColorMapUv:yt&&f(_.specularColorMap.channel),specularIntensityMapUv:P&&f(_.specularIntensityMap.channel),transmissionMapUv:st&&f(_.transmissionMap.channel),thicknessMapUv:M&&f(_.thicknessMap.channel),alphaMapUv:F&&f(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(ut||ce),vertexNormals:!!D.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!D.attributes.uv&&(Ct||F),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||D.attributes.normal===void 0&&ut===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Mt,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:mt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:H.filter(lt=>lt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:et,decodeVideoTexture:Ct&&_.map.isVideoTexture===!0&&ee.getTransfer(_.map.colorSpace)===de,decodeVideoTextureEmissive:Tt&&_.emissiveMap.isVideoTexture===!0&&ee.getTransfer(_.emissiveMap.colorSpace)===de,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ce,flipSided:_.side===je,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ht&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&_.extensions.multiDraw===!0||le)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function x(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let N in _.defines)w.push(N),w.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(g(w,_),p(w,_),w.push(i.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function g(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapPMREM),_.push(w.envMapMaxLod),_.push(w.envMapSize),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.diffuseRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.numLightProbeGrids),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function p(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.diffuseRoughness&&a.enable(25),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function y(_){let w=d[_.type],N;if(w){let I=Hn[w];N=Ou.clone(I.uniforms)}else N=_.uniforms;return N}function T(_,w){let N=h.get(w);return N!==void 0?++N.usedTimes:(N=new y_(i,w,_,s),l.push(N),h.set(w,N)),N}function S(_){if(--_.usedTimes===0){let w=l.indexOf(_);l[w]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function R(_){o.remove(_)}function E(){o.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:y,acquireProgram:T,releaseProgram:S,releaseShaderCache:R,programs:l,dispose:E}}function S_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function w_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function nd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function id(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,x,g,p){let y=i[t];return y===void 0?(y={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:p},i[t]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=m,y.materialVariant=a(d),y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=g,y.group=p),t++,y}function c(d,f,m,x,g,p,y){y.reversedDepth===!0&&(g=-g);let T=o(d,f,m,x,g,p);m.transmission>0?n.push(T):m.transparent===!0?s.push(T):e.push(T)}function l(d,f,m,x,g,p){let y=o(d,f,m,x,g,p);m.transmission>0?n.unshift(y):m.transparent===!0?s.unshift(y):e.unshift(y)}function h(d,f){e.length>1&&e.sort(d||w_),n.length>1&&n.sort(f||nd),s.length>1&&s.sort(f||nd)}function u(){for(let d=t,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function E_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new id,i.set(n,[a])):s>=r.length?(a=new id,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function T_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new Yt};break;case"SpotLight":e={position:new L,direction:new L,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function A_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var R_=0;function C_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function P_(i){let t=new T_,e=A_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new me,a=new me;function o(l){let h=0,u=0,d=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,y=0,T=0,S=0,R=0,E=0,_=0,w=0,N=0,I=0;l.sort(C_);for(let H=0,q=l.length;H<q;H++){let D=l[H],Z=D.color,J=D.intensity,z=D.distance,Y=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ei?Y=D.shadow.map.texture:Y=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=Z.r*J,u+=Z.g*J,d+=Z.b*J;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],J);I++}else if(D.isSunLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let j=D.shadow,Q=e.get(D);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[m]=Q,n.sunShadowMap[m]=Y;let mt=j.getViewportCount();for(let Ot=0;Ot<mt;Ot++)n.sunShadowMatrix[x+Ot]=j.getMatrix(Ot),n.sunShadowCascade[x+Ot]=j._cascadeData[Ot];x+=mt,m++}n.sun[f]=W,f++}else if(D.isDirectionalLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let j=D.shadow,Q=e.get(D);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,n.directionalShadow[g]=Q,n.directionalShadowMap[g]=Y,n.directionalShadowMatrix[g]=D.shadow.matrix,R++}n.directional[g]=W,g++}else if(D.isSpotLight){let W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(Z).multiplyScalar(J),W.distance=z,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[y]=W;let j=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,j.updateMatrices(D),D.castShadow&&N++),n.spotLightMatrix[y]=j.matrix,D.castShadow){let Q=e.get(D);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,n.spotShadow[y]=Q,n.spotShadowMap[y]=Y,_++}y++}else if(D.isRectAreaLight){let W=t.get(D);W.color.copy(Z).multiplyScalar(J),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[T]=W,T++}else if(D.isPointLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){let j=D.shadow,Q=e.get(D);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,Q.shadowCameraNear=j.camera.near,Q.shadowCameraFar=j.camera.far,n.pointShadow[p]=Q,n.pointShadowMap[p]=Y,n.pointShadowMatrix[p]=D.shadow.matrix,E++}n.point[p]=W,p++}else if(D.isHemisphereLight){let W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(J),W.groundColor.copy(D.groundColor).multiplyScalar(J),n.hemi[S]=W,S++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let k=n.hash;(k.sunLength!==f||k.directionalLength!==g||k.pointLength!==p||k.spotLength!==y||k.rectAreaLength!==T||k.hemiLength!==S||k.numSunShadows!==m||k.numDirectionalShadows!==R||k.numPointShadows!==E||k.numSpotShadows!==_||k.numSpotMaps!==w||k.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=g,n.spot.length=y,n.rectArea.length=T,n.point.length=p,n.hemi.length=S,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+w-N,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=I,k.sunLength=f,k.directionalLength=g,k.pointLength=p,k.spotLength=y,k.rectAreaLength=T,k.hemiLength=S,k.numSunShadows=m,k.numDirectionalShadows=R,k.numPointShadows=E,k.numSpotShadows=_,k.numSpotMaps=w,k.numLightProbes=I,n.version=R_++)}function c(l,h){let u=0,d=0,f=0,m=0,x=0,g=0,p=h.matrixWorldInverse;for(let y=0,T=l.length;y<T;y++){let S=l[y];if(S.isSunLight){let R=n.sun[u];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(p),u++}else if(S.isDirectionalLight){let R=n.directional[d];R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),d++}else if(S.isSpotLight){let R=n.spot[m];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),m++}else if(S.isRectAreaLight){let R=n.rectArea[x];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){let R=n.point[f];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){let R=n.hemi[g];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:n}}function sd(i){let t=new P_(i),e=[],n=[],s=[];function r(u){h.camera=u,e.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):e.push(u)}function o(u){n.push(u)}function c(){t.setup(e),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function l(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function I_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new sd(i),t.set(s,[o])):r>=a.length?(o=new sd(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var L_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,N_=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],U_=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],rd=new me,Br=new L,Oc=new L;function O_(i,t,e){let n=new _i,s=new Et,r=new Et,a=new Me,o=new Ka,c=new ja,l={},h=e.maxTextureSize,u={[wi]:je,[je]:wi,[Ce]:Ce},d=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:L_,fragmentShader:D_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Te;m.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ge(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zi;let p=this.type;this.render=function(E,_,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===jh&&(Bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zi);let N=i.getRenderTarget(),I=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Hi),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let q=p!==this.type;q&&_.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(Z=>Z.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,Z=E.length;D<Z;D++){let J=E[D],z=J.shadow;if(z===void 0){Bt("WebGLShadowMap:",J,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let Y=z.getFrameExtents();s.multiply(Y),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,z.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=W,z.map===null||q===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Us){if(J.isPointLight){Bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new un(s.x,s.y,{format:Ei,type:Cn,minFilter:Ke,magFilter:Ke,generateMipmaps:!1}),z.map.texture.name=J.name+".shadowMap",z.map.depthTexture=new ni(s.x,s.y,Rn),z.map.depthTexture.name=J.name+".shadowMapDepth",z.map.depthTexture.format=Qn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Be,z.map.depthTexture.magFilter=Be}else J.isPointLight?(z.map=new zr(s.x),z.map.depthTexture=new pr(s.x,An)):(z.map=new un(s.x,s.y),z.map.depthTexture=new ni(s.x,s.y,An)),z.map.depthTexture.name=J.name+".shadowMap",z.map.depthTexture.format=Qn,this.type===zi?(z.map.depthTexture.compareFunction=W?Sc:Mc,z.map.depthTexture.minFilter=Ke,z.map.depthTexture.magFilter=Ke):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Be,z.map.depthTexture.magFilter=Be);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let j=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();J.isPointLight!==!0&&z.updateMatrices(J,w);let Q=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:w.layers;for(let mt=0;mt<j;mt++){let Ot=z.getCamera(mt);if(J.isPointLight){let nt=z.camera,ft=z.matrix,Rt=J.distance||nt.far;Rt!==nt.far&&(nt.far=Rt,nt.updateProjectionMatrix()),Br.setFromMatrixPosition(J.matrixWorld),nt.position.copy(Br),Oc.copy(nt.position),Oc.add(N_[mt]),nt.up.copy(U_[mt]),nt.lookAt(Oc),nt.updateMatrixWorld(),ft.makeTranslation(-Br.x,-Br.y,-Br.z),rd.multiplyMatrices(nt.projectionMatrix,nt.matrixWorldInverse),z._frustum.setFromProjectionMatrix(rd,nt.coordinateSystem,nt.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,mt),i.clear();else{mt===0&&(i.setRenderTarget(z.map),i.clear());let nt=z.getViewport(mt);a.set(r.x*nt.x,r.y*nt.y,r.x*nt.z,r.y*nt.w),H.viewport(a)}n=z.getFrustum(mt),S(_,w,Ot,J,Q,this.type)}z.isPointLightShadow!==!0&&this.type===Us&&y(z,w),z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(N,I,k)};function y(E,_){let w=t.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new un(s.x,s.y,{format:Ei,type:Cn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(_,null,w,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(_,null,w,f,x,null)}function T(E,_,w,N){let I=null,k=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(k!==void 0)I=k;else if(I=w.isPointLight===!0?c:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let H=I.uuid,q=_.uuid,D=l[H];D===void 0&&(D={},l[H]=D);let Z=D[q];Z===void 0&&(Z=I.clone(),D[q]=Z,_.addEventListener("dispose",R)),I=Z}if(I.visible=_.visible,I.wireframe=_.wireframe,N===Us?I.side=_.shadowSide!==null?_.shadowSide:_.side:I.side=_.shadowSide!==null?_.shadowSide:u[_.side],I.alphaMap=_.alphaMap,I.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,I.map=_.map,I.clipShadows=_.clipShadows,I.clippingPlanes=_.clippingPlanes,I.clipIntersection=_.clipIntersection,I.displacementMap=_.displacementMap,I.displacementScale=_.displacementScale,I.displacementBias=_.displacementBias,I.wireframeLinewidth=_.wireframeLinewidth,I.linewidth=_.linewidth,w.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let H=i.properties.get(I);H.light=w}return I}function S(E,_,w,N,I,k){if(E.visible===!1)return;if(E.layers.test(I)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&k===Us)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);let D=t.update(E),Z=E.material;if(Array.isArray(Z)){let J=D.groups;for(let z=0,Y=J.length;z<Y;z++){let W=J[z],j=Z[W.materialIndex];if(j&&j.visible){let Q=T(E,j,N,k);E.onBeforeShadow(i,E,_,w,D,Q,W),i.renderBufferDirect(w,null,D,Q,E,W),E.onAfterShadow(i,E,_,w,D,Q,W)}}}else if(Z.visible){let J=T(E,Z,N,k);E.onBeforeShadow(i,E,_,w,D,J,null),i.renderBufferDirect(w,null,D,J,E,null),E.onAfterShadow(i,E,_,w,D,J,null)}}let q=E.children;for(let D=0,Z=q.length;D<Z;D++)S(q[D],_,w,N,I,k)}function R(E){E.target.removeEventListener("dispose",R);for(let w in l){let N=l[w],I=E.target.uuid;I in N&&(N[I].dispose(),delete N[I])}}}function F_(i,t){function e(){let P=!1,st=new Me,M=null,C=new Me(0,0,0,0);return{setMask:function(F){M!==F&&!P&&(i.colorMask(F,F,F,F),M=F)},setLocked:function(F){P=F},setClear:function(F,B,V,ht,et){et===!0&&(F*=ht,B*=ht,V*=ht),st.set(F,B,V,ht),C.equals(st)===!1&&(i.clearColor(F,B,V,ht),C.copy(st))},reset:function(){P=!1,M=null,C.set(-1,0,0,0)}}}function n(){let P=!1,st=!1,M=null,C=null,F=null;return{setReversed:function(B){if(st!==B){let V=t.get("EXT_clip_control");B?V.clipControlEXT(V.LOWER_LEFT_EXT,V.ZERO_TO_ONE_EXT):V.clipControlEXT(V.LOWER_LEFT_EXT,V.NEGATIVE_ONE_TO_ONE_EXT),st=B;let ht=F;F=null,this.setClear(ht)}},getReversed:function(){return st},setTest:function(B){B?Mt(i.DEPTH_TEST):kt(i.DEPTH_TEST)},setMask:function(B){M!==B&&!P&&(i.depthMask(B),M=B)},setFunc:function(B){if(st&&(B=Lu[B]),C!==B){switch(B){case Ta:i.depthFunc(i.NEVER);break;case Aa:i.depthFunc(i.ALWAYS);break;case Ra:i.depthFunc(i.LESS);break;case xs:i.depthFunc(i.LEQUAL);break;case Ca:i.depthFunc(i.EQUAL);break;case Pa:i.depthFunc(i.GEQUAL);break;case Ia:i.depthFunc(i.GREATER);break;case La:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}C=B}},setLocked:function(B){P=B},setClear:function(B){F!==B&&(F=B,st&&(B=1-B),i.clearDepth(B))},reset:function(){P=!1,M=null,C=null,F=null,st=!1}}}function s(){let P=!1,st=null,M=null,C=null,F=null,B=null,V=null,ht=null,et=null;return{setTest:function(ot){P||(ot?Mt(i.STENCIL_TEST):kt(i.STENCIL_TEST))},setMask:function(ot){st!==ot&&!P&&(i.stencilMask(ot),st=ot)},setFunc:function(ot,At,lt){(M!==ot||C!==At||F!==lt)&&(i.stencilFunc(ot,At,lt),M=ot,C=At,F=lt)},setOp:function(ot,At,lt){(B!==ot||V!==At||ht!==lt)&&(i.stencilOp(ot,At,lt),B=ot,V=At,ht=lt)},setLocked:function(ot){P=ot},setClear:function(ot){et!==ot&&(i.clearStencil(ot),et=ot)},reset:function(){P=!1,st=null,M=null,C=null,F=null,B=null,V=null,ht=null,et=null}}}let r=new e,a=new n,o=new s,c={},l=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],x=null,g=!1,p=null,y=null,T=null,S=null,R=null,E=null,_=null,w=new Yt(0,0,0),N=0,I=!1,k=null,H=null,q=null,D=null,Z=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,Y=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=Y>=2);let j=null,Q={},mt=i.getParameter(i.SCISSOR_BOX),Ot=i.getParameter(i.VIEWPORT),nt=new Me().fromArray(mt),ft=new Me().fromArray(Ot);function Rt(P,st,M,C){let F=new Uint8Array(4),B=i.createTexture();i.bindTexture(P,B),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let V=0;V<M;V++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,C,0,i.RGBA,i.UNSIGNED_BYTE,F):i.texImage2D(st+V,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,F);return B}let Dt={};Dt[i.TEXTURE_2D]=Rt(i.TEXTURE_2D,i.TEXTURE_2D,1),Dt[i.TEXTURE_CUBE_MAP]=Rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Dt[i.TEXTURE_2D_ARRAY]=Rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Dt[i.TEXTURE_3D]=Rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Mt(i.DEPTH_TEST),a.setFunc(xs),at(!1),ut(ec),Mt(i.CULL_FACE),fe(Hi);function Mt(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function kt(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function le(P,st){return d[P]!==st?(i.bindFramebuffer(P,st),d[P]=st,P===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=st),P===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=st),!0):!1}function Ct(P,st){let M=m,C=!1;if(P){M=f.get(st),M===void 0&&(M=[],f.set(st,M));let F=P.textures;if(M.length!==F.length||M[0]!==i.COLOR_ATTACHMENT0){for(let B=0,V=F.length;B<V;B++)M[B]=i.COLOR_ATTACHMENT0+B;M.length=F.length,C=!0}}else M[0]!==i.BACK&&(M[0]=i.BACK,C=!0);C&&i.drawBuffers(M)}function re(P){return x!==P?(i.useProgram(P),x=P,!0):!1}let jt={[Gi]:i.FUNC_ADD,[tu]:i.FUNC_SUBTRACT,[eu]:i.FUNC_REVERSE_SUBTRACT};jt[nu]=i.MIN,jt[iu]=i.MAX;let $t={[su]:i.ZERO,[ru]:i.ONE,[au]:i.SRC_COLOR,[rc]:i.SRC_ALPHA,[du]:i.SRC_ALPHA_SATURATE,[hu]:i.DST_COLOR,[lu]:i.DST_ALPHA,[ou]:i.ONE_MINUS_SRC_COLOR,[ac]:i.ONE_MINUS_SRC_ALPHA,[uu]:i.ONE_MINUS_DST_COLOR,[cu]:i.ONE_MINUS_DST_ALPHA,[fu]:i.CONSTANT_COLOR,[pu]:i.ONE_MINUS_CONSTANT_COLOR,[mu]:i.CONSTANT_ALPHA,[gu]:i.ONE_MINUS_CONSTANT_ALPHA};function fe(P,st,M,C,F,B,V,ht,et,ot){if(P===Hi){g===!0&&(kt(i.BLEND),g=!1);return}if(g===!1&&(Mt(i.BLEND),g=!0),P!==Qh){if(P!==p||ot!==I){if((y!==Gi||R!==Gi)&&(i.blendEquation(i.FUNC_ADD),y=Gi,R=Gi),ot)switch(P){case Os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nc:i.blendFunc(i.ONE,i.ONE);break;case ic:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Vt("WebGLState: Invalid blending: ",P);break}else switch(P){case Os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ic:Vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sc:Vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Vt("WebGLState: Invalid blending: ",P);break}T=null,S=null,E=null,_=null,w.set(0,0,0),N=0,p=P,I=ot}return}F=F||st,B=B||M,V=V||C,(st!==y||F!==R)&&(i.blendEquationSeparate(jt[st],jt[F]),y=st,R=F),(M!==T||C!==S||B!==E||V!==_)&&(i.blendFuncSeparate($t[M],$t[C],$t[B],$t[V]),T=M,S=C,E=B,_=V),(ht.equals(w)===!1||et!==N)&&(i.blendColor(ht.r,ht.g,ht.b,et),w.copy(ht),N=et),p=P,I=!1}function Se(P,st){P.side===Ce?kt(i.CULL_FACE):Mt(i.CULL_FACE);let M=P.side===je;st&&(M=!M),at(M),P.blending===Os&&P.transparent===!1?fe(Hi):fe(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let C=P.stencilWrite;o.setTest(C),C&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Tt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Mt(i.SAMPLE_ALPHA_TO_COVERAGE):kt(i.SAMPLE_ALPHA_TO_COVERAGE)}function at(P){k!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),k=P)}function ut(P){P!==Jh?(Mt(i.CULL_FACE),P!==H&&(P===ec?i.cullFace(i.BACK):P===Kh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):kt(i.CULL_FACE),H=P}function pt(P){P!==q&&(z&&i.lineWidth(P),q=P)}function Tt(P,st,M){P?(Mt(i.POLYGON_OFFSET_FILL),(D!==st||Z!==M)&&(D=st,Z=M,a.getReversed()&&(st=-st,M=-M),i.polygonOffset(st,M))):kt(i.POLYGON_OFFSET_FILL)}function Kt(P){P?Mt(i.SCISSOR_TEST):kt(i.SCISSOR_TEST)}function Wt(P){P===void 0&&(P=i.TEXTURE0+J-1),j!==P&&(i.activeTexture(P),j=P)}function ce(P,st,M){M===void 0&&(j===null?M=i.TEXTURE0+J-1:M=j);let C=Q[M];C===void 0&&(C={type:void 0,texture:void 0},Q[M]=C),(C.type!==P||C.texture!==st)&&(j!==M&&(i.activeTexture(M),j=M),i.bindTexture(P,st||Dt[P]),C.type=P,C.texture=st)}function O(){let P=Q[j];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function _e(){try{i.compressedTexImage2D(...arguments)}catch(P){Vt("WebGLState:",P)}}function ie(){try{i.compressedTexImage3D(...arguments)}catch(P){Vt("WebGLState:",P)}}function ae(){try{i.texSubImage2D(...arguments)}catch(P){Vt("WebGLState:",P)}}function dt(){try{i.texSubImage3D(...arguments)}catch(P){Vt("WebGLState:",P)}}function ve(){try{i.compressedTexSubImage2D(...arguments)}catch(P){Vt("WebGLState:",P)}}function Ft(){try{i.compressedTexSubImage3D(...arguments)}catch(P){Vt("WebGLState:",P)}}function zt(){try{i.texStorage2D(...arguments)}catch(P){Vt("WebGLState:",P)}}function A(){try{i.texStorage3D(...arguments)}catch(P){Vt("WebGLState:",P)}}function v(){try{i.texImage2D(...arguments)}catch(P){Vt("WebGLState:",P)}}function G(){try{i.texImage3D(...arguments)}catch(P){Vt("WebGLState:",P)}}function ct(P){return u[P]!==void 0?u[P]:i.getParameter(P)}function rt(P,st){u[P]!==st&&(i.pixelStorei(P,st),u[P]=st)}function xt(P){nt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),nt.copy(P))}function gt(P){ft.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),ft.copy(P))}function tt(P,st){let M=l.get(st);M===void 0&&(M=new WeakMap,l.set(st,M));let C=M.get(P);C===void 0&&(C=i.getUniformBlockIndex(st,P.name),i.uniformBlockBinding(st,C,C),M.set(P,C))}function it(P,st,M){let F=l.get(st).get(P);c[F]!==M&&(i.bindBufferBase(i.UNIFORM_BUFFER,F,M),c[F]=M)}function yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},j=null,Q={},d={},c={},f=new WeakMap,m=[],x=null,g=!1,p=null,y=null,T=null,S=null,R=null,E=null,_=null,w=new Yt(0,0,0),N=0,I=!1,k=null,H=null,q=null,D=null,Z=null,nt.set(0,0,i.canvas.width,i.canvas.height),ft.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Mt,disable:kt,bindFramebuffer:le,drawBuffers:Ct,useProgram:re,setBlending:fe,setMaterial:Se,setFlipSided:at,setCullFace:ut,setLineWidth:pt,setPolygonOffset:Tt,setScissorTest:Kt,activeTexture:Wt,bindTexture:ce,unbindTexture:O,compressedTexImage2D:_e,compressedTexImage3D:ie,texImage2D:v,texImage3D:G,pixelStorei:rt,getParameter:ct,updateUBOMapping:tt,uniformBlockBinding:it,texStorage2D:zt,texStorage3D:A,texSubImage2D:ae,texSubImage3D:dt,compressedTexSubImage2D:ve,compressedTexSubImage3D:Ft,scissor:xt,viewport:gt,reset:yt}}function B_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Et,h=new WeakMap,u=new Set,d,f=new WeakMap,m=new Set,x=new FinalizationRegistry(A=>m.delete(A)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,v){return g?new OffscreenCanvas(A,v):vs("canvas")}function y(A,v,G){let ct=1,rt=zt(A);if((rt.width>G||rt.height>G)&&(ct=G/Math.max(rt.width,rt.height)),ct<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let xt=Math.floor(ct*rt.width),gt=Math.floor(ct*rt.height);d===void 0&&(d=p(xt,gt));let tt=v?p(xt,gt):d;return tt.width=xt,tt.height=gt,tt.getContext("2d").drawImage(A,0,0,xt,gt),Bt("WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+xt+"x"+gt+")."),tt}else return"data"in A&&Bt("WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),A;return A}function T(A){return A.generateMipmaps}function S(A){i.generateMipmap(A)}function R(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(A,v,G,ct,rt,xt=!1){if(A!==null){if(i[A]!==void 0)return i[A];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let gt;ct&&(gt=t.get("EXT_texture_norm16"),gt||Bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=v;if(v===i.RED&&(G===i.FLOAT&&(tt=i.R32F),G===i.HALF_FLOAT&&(tt=i.R16F),G===i.UNSIGNED_BYTE&&(tt=i.R8),G===i.UNSIGNED_SHORT&&gt&&(tt=gt.R16_EXT),G===i.SHORT&&gt&&(tt=gt.R16_SNORM_EXT)),v===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(tt=i.R8UI),G===i.UNSIGNED_SHORT&&(tt=i.R16UI),G===i.UNSIGNED_INT&&(tt=i.R32UI),G===i.BYTE&&(tt=i.R8I),G===i.SHORT&&(tt=i.R16I),G===i.INT&&(tt=i.R32I)),v===i.RG&&(G===i.FLOAT&&(tt=i.RG32F),G===i.HALF_FLOAT&&(tt=i.RG16F),G===i.UNSIGNED_BYTE&&(tt=i.RG8),G===i.UNSIGNED_SHORT&&gt&&(tt=gt.RG16_EXT),G===i.SHORT&&gt&&(tt=gt.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(tt=i.RG8UI),G===i.UNSIGNED_SHORT&&(tt=i.RG16UI),G===i.UNSIGNED_INT&&(tt=i.RG32UI),G===i.BYTE&&(tt=i.RG8I),G===i.SHORT&&(tt=i.RG16I),G===i.INT&&(tt=i.RG32I)),v===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),G===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),G===i.UNSIGNED_INT&&(tt=i.RGB32UI),G===i.BYTE&&(tt=i.RGB8I),G===i.SHORT&&(tt=i.RGB16I),G===i.INT&&(tt=i.RGB32I)),v===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),G===i.UNSIGNED_INT&&(tt=i.RGBA32UI),G===i.BYTE&&(tt=i.RGBA8I),G===i.SHORT&&(tt=i.RGBA16I),G===i.INT&&(tt=i.RGBA32I)),v===i.RGB&&(G===i.UNSIGNED_SHORT&&gt&&(tt=gt.RGB16_EXT),G===i.SHORT&&gt&&(tt=gt.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(tt=i.R11F_G11F_B10F)),v===i.RGBA){let it=xt?or:ee.getTransfer(rt);G===i.FLOAT&&(tt=i.RGBA32F),G===i.HALF_FLOAT&&(tt=i.RGBA16F),G===i.UNSIGNED_BYTE&&(tt=it===de?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&gt&&(tt=gt.RGBA16_EXT),G===i.SHORT&&gt&&(tt=gt.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function _(A,v){let G;return A?v===null||v===An||v===Wi?G=i.DEPTH24_STENCIL8:v===Rn?G=i.DEPTH32F_STENCIL8:v===Bs&&(G=i.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===An||v===Wi?G=i.DEPTH_COMPONENT24:v===Rn?G=i.DEPTH_COMPONENT32F:v===Bs&&(G=i.DEPTH_COMPONENT16),G}function w(A,v){return T(A)===!0||A.isFramebufferTexture&&A.minFilter!==Be&&A.minFilter!==Ke?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function N(A){let v=new WeakRef(A);n.get(A).__ref=v,m.add(v),x.register(A,v,v)}function I(A){let v=n.get(A).__ref;v!==void 0&&(m.delete(v),x.unregister(v))}function k(A){q(A.target)}function H(A){D(A.target)}function q(A){A.removeEventListener("dispose",k),I(A),J(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function D(A){A.removeEventListener("dispose",H),I(A),Y(A)}function Z(){for(let A of m){let v=A.deref();v!==void 0&&(v.isRenderTarget===!0?D(v):q(v))}m.clear(),u.clear()}function J(A){let v=n.get(A);if(v.__webglInit===void 0)return;let G=A.source,ct=f.get(G);if(ct){let rt=ct[v.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&z(A),Object.keys(ct).length===0&&f.delete(G)}n.remove(A)}function z(A){let v=n.get(A);i.deleteTexture(v.__webglTexture);let G=A.source,ct=f.get(G);delete ct[v.__cacheKey],a.memory.textures--}function Y(A){let v=n.get(A);v.__depthDisposeCallback&&v.__depthDisposeCallback();let G=A.depthTexture;if(G&&G.renderTarget===A&&q(G),A.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(v.__webglFramebuffer[rt]))for(let xt=0;xt<v.__webglFramebuffer[rt].length;xt++)i.deleteFramebuffer(v.__webglFramebuffer[rt][xt]);else i.deleteFramebuffer(v.__webglFramebuffer[rt]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[rt])}else{if(Array.isArray(v.__webglFramebuffer))for(let rt=0;rt<v.__webglFramebuffer.length;rt++)i.deleteFramebuffer(v.__webglFramebuffer[rt]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let rt=0;rt<v.__webglColorRenderbuffer.length;rt++)v.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[rt]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let ct=A.textures;for(let rt=0,xt=ct.length;rt<xt;rt++){let gt=n.get(ct[rt]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),a.memory.textures--),n.remove(ct[rt])}n.remove(A)}let W=0;function j(){W=0}function Q(){return W}function mt(A){W=A}function Ot(){let A=W;return A>=s.maxTextures&&Bt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,A}function nt(A){let v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.mipmapsAutoUpdate),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function ft(A,v){let G=n.get(A);if(A.isVideoTexture&&ve(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&G.__version!==A.version){let ct=A.image;if(ct===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(G,A,v);return}}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+v)}function Rt(A,v){let G=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){Se(G,A,v);return}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+v)}function Dt(A,v){let G=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){Se(G,A,v);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+v)}function Mt(A,v){let G=n.get(A);if(A.version>0&&G.__version!==A.version){at(G,A,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+v)}let kt={[Da]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[Na]:i.MIRRORED_REPEAT},le={[Be]:i.NEAREST,[yu]:i.NEAREST_MIPMAP_NEAREST,[Ir]:i.NEAREST_MIPMAP_LINEAR,[Ke]:i.LINEAR,[po]:i.LINEAR_MIPMAP_NEAREST,[ii]:i.LINEAR_MIPMAP_LINEAR},Ct={[Su]:i.NEVER,[wc]:i.ALWAYS,[wu]:i.LESS,[Mc]:i.LEQUAL,[Eu]:i.EQUAL,[Sc]:i.GEQUAL,[Tu]:i.GREATER,[Au]:i.NOTEQUAL};function re(A,v){if(v.type===Rn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ke||v.magFilter===po||v.magFilter===Ir||v.magFilter===ii||v.minFilter===Ke||v.minFilter===po||v.minFilter===Ir||v.minFilter===ii)&&Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,kt[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,kt[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,kt[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,le[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,le[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Ct[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Be||v.minFilter!==Ir&&v.minFilter!==ii||v.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function jt(A,v){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",k),N(v));let ct=v.source,rt=f.get(ct);rt===void 0&&(rt={},f.set(ct,rt));let xt=nt(v);if(xt!==A.__cacheKey){rt[xt]===void 0&&(rt[xt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),rt[xt].usedTimes++;let gt=rt[A.__cacheKey];gt!==void 0&&(rt[A.__cacheKey].usedTimes--,gt.usedTimes===0&&z(v)),A.__cacheKey=xt,A.__webglTexture=rt[xt].texture}return G}function $t(A,v,G){return Math.floor(Math.floor(A/G)/v)}function fe(A,v,G,ct){let xt=A.updateRanges;if(xt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,G,ct,v.data);else{xt.sort((P,st)=>P.start-st.start);let gt=0;for(let P=1;P<xt.length;P++){let st=xt[gt],M=xt[P],C=st.start+st.count,F=$t(M.start,v.width,4),B=$t(st.start,v.width,4);M.start<=C+1&&F===B&&$t(M.start+M.count-1,v.width,4)===F?st.count=Math.max(st.count,M.start+M.count-st.start):(++gt,xt[gt]=M)}xt.length=gt+1;let tt=e.getParameter(i.UNPACK_ROW_LENGTH),it=e.getParameter(i.UNPACK_SKIP_PIXELS),yt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let P=0,st=xt.length;P<st;P++){let M=xt[P],C=Math.floor(M.start/4),F=Math.ceil(M.count/4),B=C%v.width,V=Math.floor(C/v.width),ht=F,et=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,B),e.pixelStorei(i.UNPACK_SKIP_ROWS,V),e.texSubImage2D(i.TEXTURE_2D,0,B,V,ht,et,G,ct,v.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,tt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,it),e.pixelStorei(i.UNPACK_SKIP_ROWS,yt)}}function Se(A,v,G){let ct=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ct=i.TEXTURE_3D);let rt=jt(A,v),xt=v.source;e.bindTexture(ct,A.__webglTexture,i.TEXTURE0+G);let gt=n.get(xt);if(xt.version!==gt.__version||rt===!0){if(e.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let et=ee.getPrimaries(ee.workingColorSpace),ot=v.colorSpace===ri?null:ee.getPrimaries(v.colorSpace),At=v.colorSpace===ri||et===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let it=y(v.image,!1,s.maxTextureSize);it=Ft(v,it);let yt=r.convert(v.format,v.colorSpace),P=r.convert(v.type),st=E(v.internalFormat,yt,P,v.normalized,v.colorSpace,v.isVideoTexture);re(ct,v);let M,C=v.mipmaps,F=v.isVideoTexture!==!0,B=gt.__version===void 0||rt===!0,V=xt.dataReady,ht=w(v,it);if(v.isDepthTexture)st=_(v.format===si,v.type),B&&(F?e.texStorage2D(i.TEXTURE_2D,1,st,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,st,it.width,it.height,0,yt,P,null));else if(v.isDataTexture)if(C.length>0){F&&B&&e.texStorage2D(i.TEXTURE_2D,ht,st,C[0].width,C[0].height);for(let et=0,ot=C.length;et<ot;et++)M=C[et],F?V&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,M.width,M.height,yt,P,M.data):e.texImage2D(i.TEXTURE_2D,et,st,M.width,M.height,0,yt,P,M.data);v.generateMipmaps=!1}else F?(B&&e.texStorage2D(i.TEXTURE_2D,ht,st,it.width,it.height),V&&fe(v,it,yt,P)):e.texImage2D(i.TEXTURE_2D,0,st,it.width,it.height,0,yt,P,it.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){F&&B&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,st,C[0].width,C[0].height,it.depth);for(let et=0,ot=C.length;et<ot;et++)if(M=C[et],v.format!==Pn)if(yt!==null)if(F){if(V)if(v.layerUpdates.size>0){let At=Nc(M.width,M.height,v.format,v.type);for(let lt of v.layerUpdates){let Ht=M.data.subarray(lt*At/M.data.BYTES_PER_ELEMENT,(lt+1)*At/M.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,lt,M.width,M.height,1,yt,Ht)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,M.width,M.height,it.depth,yt,M.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,st,M.width,M.height,it.depth,0,M.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,M.width,M.height,it.depth,yt,P,M.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,st,M.width,M.height,it.depth,0,yt,P,M.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{F&&B&&e.texStorage2D(i.TEXTURE_2D,ht,st,C[0].width,C[0].height);for(let et=0,ot=C.length;et<ot;et++)M=C[et],v.format!==Pn?yt!==null?F?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,M.width,M.height,yt,M.data):e.compressedTexImage2D(i.TEXTURE_2D,et,st,M.width,M.height,0,M.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?V&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,M.width,M.height,yt,P,M.data):e.texImage2D(i.TEXTURE_2D,et,st,M.width,M.height,0,yt,P,M.data)}else if(v.isDataArrayTexture)if(F){if(B&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,st,it.width,it.height,it.depth),V)if(v.layerUpdates.size>0){let et=Nc(it.width,it.height,v.format,v.type);for(let ot of v.layerUpdates){let At=it.data.subarray(ot*et/it.data.BYTES_PER_ELEMENT,(ot+1)*et/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ot,it.width,it.height,1,yt,P,At)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,yt,P,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,st,it.width,it.height,it.depth,0,yt,P,it.data);else if(v.isData3DTexture)F?(B&&e.texStorage3D(i.TEXTURE_3D,ht,st,it.width,it.height,it.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,yt,P,it.data)):e.texImage3D(i.TEXTURE_3D,0,st,it.width,it.height,it.depth,0,yt,P,it.data);else if(v.isFramebufferTexture){if(B)if(F)e.texStorage2D(i.TEXTURE_2D,ht,st,it.width,it.height);else{let et=it.width,ot=it.height;for(let At=0;At<ht;At++)e.texImage2D(i.TEXTURE_2D,At,st,et,ot,0,yt,P,null),et>>=1,ot>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let et=i.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),it.parentNode!==et){et.appendChild(it),u.add(v),et.onpaint=ot=>{let At=ot.changedElements;for(let lt of u)At.includes(lt.image)&&(lt.needsUpdate=!0)},et.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,it);else{let At=i.RGBA,lt=i.RGBA,Ht=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,At,lt,Ht,it)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(C.length>0){if(F&&B){let et=zt(C[0]);e.texStorage2D(i.TEXTURE_2D,ht,st,et.width,et.height)}for(let et=0,ot=C.length;et<ot;et++)M=C[et],F?V&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,yt,P,M):e.texImage2D(i.TEXTURE_2D,et,st,yt,P,M);v.generateMipmaps=!1}else if(F){if(B){let et=zt(it);e.texStorage2D(i.TEXTURE_2D,ht,st,et.width,et.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,P,it)}else e.texImage2D(i.TEXTURE_2D,0,st,yt,P,it);T(v)&&v.mipmapsAutoUpdate===!0&&S(ct),gt.__version=xt.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function at(A,v,G){if(v.image.length!==6)return;let ct=jt(A,v),rt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+G);let xt=n.get(rt);if(rt.version!==xt.__version||ct===!0){e.activeTexture(i.TEXTURE0+G);let gt=ee.getPrimaries(ee.workingColorSpace),tt=v.colorSpace===ri?null:ee.getPrimaries(v.colorSpace),it=v.colorSpace===ri||gt===tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let yt=v.isCompressedTexture||v.image[0].isCompressedTexture,P=v.image[0]&&v.image[0].isDataTexture,st=[];for(let lt=0;lt<6;lt++)!yt&&!P?st[lt]=y(v.image[lt],!0,s.maxCubemapSize):st[lt]=P?v.image[lt].image:v.image[lt],st[lt]=Ft(v,st[lt]);let M=st[0],C=r.convert(v.format,v.colorSpace),F=r.convert(v.type),B=E(v.internalFormat,C,F,v.normalized,v.colorSpace),V=v.isVideoTexture!==!0,ht=xt.__version===void 0||ct===!0,et=rt.dataReady,ot=w(v,M);re(i.TEXTURE_CUBE_MAP,v);let At;if(v.isDepthTexture){if(B=_(v.format===si,v.type),ht)if(V)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,B,M.width,M.height);else for(let lt=0;lt<6;lt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,B,M.width,M.height,0,C,F,null)}else if(yt){V&&ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,B,M.width,M.height);for(let lt=0;lt<6;lt++){At=st[lt].mipmaps;for(let Ht=0;Ht<At.length;Ht++){let se=At[Ht];v.format!==Pn?C!==null?V?et&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ht,0,0,se.width,se.height,C,se.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ht,B,se.width,se.height,0,se.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ht,0,0,se.width,se.height,C,F,se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ht,B,se.width,se.height,0,C,F,se.data)}}}else{if(At=v.mipmaps,V&&ht){At.length>0&&ot++;let lt=zt(st[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,B,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(P){V?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,st[lt].width,st[lt].height,C,F,st[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,B,st[lt].width,st[lt].height,0,C,F,st[lt].data);for(let Ht=0;Ht<At.length;Ht++){let Ne=At[Ht].image[lt].image;V?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ht+1,0,0,Ne.width,Ne.height,C,F,Ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ht+1,B,Ne.width,Ne.height,0,C,F,Ne.data)}}else{V?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,C,F,st[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,B,C,F,st[lt]);for(let Ht=0;Ht<At.length;Ht++){let se=At[Ht];V?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ht+1,0,0,C,F,se.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ht+1,B,C,F,se.image[lt])}}}T(v)&&v.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),xt.__version=rt.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function ut(A,v,G,ct,rt,xt){let gt=r.convert(G.format,G.colorSpace),tt=r.convert(G.type),it=E(G.internalFormat,gt,tt,G.normalized,G.colorSpace),yt=n.get(v),P=n.get(G);if(P.__renderTarget=v,!yt.__hasExternalTextures){let st=Math.max(1,v.width>>xt),M=Math.max(1,v.height>>xt);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,xt,it,st,M,v.depth,0,gt,tt,null):e.texImage2D(rt,xt,it,st,M,0,gt,tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),dt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,rt,P.__webglTexture,0,ae(v)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,rt,P.__webglTexture,xt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(A,v,G){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){let ct=v.depthTexture,rt=ct&&ct.isDepthTexture?ct.type:null,xt=_(v.stencilBuffer,rt),gt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;dt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae(v),xt,v.width,v.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae(v),xt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,xt,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,A)}else{let ct=v.textures;for(let rt=0;rt<ct.length;rt++){let xt=ct[rt],gt=r.convert(xt.format,xt.colorSpace),tt=r.convert(xt.type),it=E(xt.internalFormat,gt,tt,xt.normalized,xt.colorSpace);dt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae(v),it,v.width,v.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae(v),it,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,it,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(A,v,G){let ct=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let rt=n.get(v.depthTexture);rt.__renderTarget=v;let xt=ct?v.depthTexture.image[0]:v.depthTexture.image;(!rt.__webglTexture||xt.width!==v.width||xt.height!==v.height)&&(xt.width=v.width,xt.height=v.height,v.depthTexture.needsUpdate=!0),ct?Mt(v.depthTexture,0):ft(v.depthTexture,0);let gt=rt.__webglTexture,tt=ae(v),it=ct?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,yt=v.depthTexture.format===si?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Qn)dt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,yt,it,gt,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,yt,it,gt,0);else if(v.depthTexture.format===si)dt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,yt,it,gt,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,yt,it,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Kt(A){let v=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){let ct=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ct){let rt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ct.removeEventListener("dispose",rt)};ct.addEventListener("dispose",rt),v.__depthDisposeCallback=rt}v.__boundDepthTexture=ct}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(G)for(let ct=0;ct<6;ct++)Tt(v.__webglFramebuffer[ct],A,ct);else A.texture.mipmaps.length>0?Tt(v.__webglFramebuffer[0],A,0):Tt(v.__webglFramebuffer,A,0);else if(G){v.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ct]),v.__webglDepthbuffer[ct]===void 0)v.__webglDepthbuffer[ct]=i.createRenderbuffer(),pt(v.__webglDepthbuffer[ct],A,!1);else{let rt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=v.__webglDepthbuffer[ct];i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,xt)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),pt(v.__webglDepthbuffer,A,!1);else{let rt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,xt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(A,v,G){let ct=n.get(A);v!==void 0&&ut(ct.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Kt(A)}function ce(A){let v=A.texture,G=n.get(A),ct=n.get(v);A.addEventListener("dispose",H),N(A);let rt=A.textures,xt=A.isWebGLCubeRenderTarget===!0,gt=rt.length>1;if(gt||(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=v.version,a.memory.textures++),xt){G.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(v.mipmaps.length>0){G.__webglFramebuffer[tt]=[];for(let it=0;it<v.mipmaps.length;it++)G.__webglFramebuffer[tt][it]=i.createFramebuffer()}else G.__webglFramebuffer[tt]=i.createFramebuffer()}else{if(v.mipmaps.length>0){G.__webglFramebuffer=[];for(let tt=0;tt<v.mipmaps.length;tt++)G.__webglFramebuffer[tt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(gt)for(let tt=0,it=rt.length;tt<it;tt++){let yt=n.get(rt[tt]);yt.__webglTexture===void 0&&(yt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&dt(A)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let tt=0;tt<rt.length;tt++){let it=rt[tt];G.__webglColorRenderbuffer[tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[tt]);let yt=r.convert(it.format,it.colorSpace),P=r.convert(it.type),st=E(it.internalFormat,yt,P,it.normalized,it.colorSpace,A.isXRRenderTarget===!0),M=ae(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,M,st,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.RENDERBUFFER,G.__webglColorRenderbuffer[tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xt){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),re(i.TEXTURE_CUBE_MAP,v);for(let tt=0;tt<6;tt++)if(v.mipmaps.length>0)for(let it=0;it<v.mipmaps.length;it++)ut(G.__webglFramebuffer[tt][it],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,it);else ut(G.__webglFramebuffer[tt],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);T(v)?S(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let tt=0,it=rt.length;tt<it;tt++){let yt=rt[tt],P=n.get(yt),st=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(st=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,P.__webglTexture),re(st,yt),ut(G.__webglFramebuffer,A,yt,i.COLOR_ATTACHMENT0+tt,st,0),T(yt)&&S(st)}e.unbindTexture()}else{let tt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(tt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,ct.__webglTexture),re(tt,v),v.mipmaps.length>0)for(let it=0;it<v.mipmaps.length;it++)ut(G.__webglFramebuffer[it],A,v,i.COLOR_ATTACHMENT0,tt,it);else ut(G.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,tt,0);T(v)?S(tt):v.mipmaps.length>0&&i.texParameteri(tt,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&Kt(A)}function O(A){let v=A.textures;for(let G=0,ct=v.length;G<ct;G++){let rt=v[G];if(T(rt)&&rt.mipmapsAutoUpdate===!0){let xt=R(A),gt=n.get(rt).__webglTexture;e.bindTexture(xt,gt),S(xt),e.unbindTexture()}}}let _e=[];function ie(A){if(A.samples>0){if(dt(A)===!1){let v=A.textures,G=A.width,ct=A.height,rt=i.COLOR_BUFFER_BIT,xt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(A),tt=v.length>1;if(tt)for(let yt=0;yt<v.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let yt=0;yt<v.length;yt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[yt]);let P=n.get(v[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,P,0)}i.blitFramebuffer(0,0,G,ct,0,0,G,ct,rt,i.NEAREST),c===!0&&(_e.length=0,_e.push(i.COLOR_ATTACHMENT0+yt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&_e.push(xt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_e))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),tt)for(let yt=0;yt<v.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,gt.__webglColorRenderbuffer[yt]);let P=n.get(v[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,P,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ae(A){return Math.min(s.maxSamples,A.samples)}function dt(A){let v=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ve(A){let v=a.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function Ft(A,v){let G=A.colorSpace,ct=A.format,rt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==ar&&G!==ri&&(ee.getTransfer(G)===de?(ct!==Pn||rt!==en)&&Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Vt("WebGLTextures: Unsupported texture color space:",G)),v}function zt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=Ot,this.resetTextureUnits=j,this.getTextureUnits=Q,this.setTextureUnits=mt,this.setTexture2D=ft,this.setTexture2DArray=Rt,this.setTexture3D=Dt,this.setTextureCube=Mt,this.rebindTextures=Wt,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=dt,this.dispose=Z}function k_(i,t){function e(n,s=ri){let r,a=ee.getTransfer(s);if(n===en)return i.UNSIGNED_BYTE;if(n===go)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_o)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_c)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===mc)return i.BYTE;if(n===gc)return i.SHORT;if(n===Bs)return i.UNSIGNED_SHORT;if(n===mo)return i.INT;if(n===An)return i.UNSIGNED_INT;if(n===Rn)return i.FLOAT;if(n===Cn)return i.HALF_FLOAT;if(n===yc)return i.ALPHA;if(n===vc)return i.RGB;if(n===Pn)return i.RGBA;if(n===Qn)return i.DEPTH_COMPONENT;if(n===si)return i.DEPTH_STENCIL;if(n===bc)return i.RED;if(n===xo)return i.RED_INTEGER;if(n===Ei)return i.RG;if(n===yo)return i.RG_INTEGER;if(n===vo)return i.RGBA_INTEGER;if(n===Lr||n===Dr||n===Nr||n===Ur)if(a===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bo||n===Mo||n===So||n===wo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===So)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Eo||n===To||n===Ao||n===Ro||n===Co||n===Or||n===Po)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Eo||n===To)return a===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ao)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ro)return r.COMPRESSED_R11_EAC;if(n===Co)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Or)return r.COMPRESSED_RG11_EAC;if(n===Po)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Io||n===Lo||n===Do||n===No||n===Uo||n===Oo||n===Fo||n===Bo||n===ko||n===zo||n===Ho||n===Go||n===Vo||n===Wo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Io)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Do)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===No)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Uo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ko)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ho)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Go)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xo||n===$o||n===qo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Xo)return a===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$o)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yo||n===Zo||n===Fr||n===Jo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var z_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Vc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new mr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Bn({vertexShader:z_,fragmentShader:H_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ge(new xi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wc=class extends En{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,x=typeof XRWebGLBinding<"u",g=new Vc,p={},y=e.getContextAttributes(),T=null,S=null,R=[],E=[],_=new Et,w=null,N=null,I=new cn;I.viewport=new Me;let k=new cn;k.viewport=new Me;let H=[I,k],q=new ho,D=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ft=R[nt];return ft===void 0&&(ft=new Es,R[nt]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(nt){let ft=R[nt];return ft===void 0&&(ft=new Es,R[nt]=ft),ft.getGripSpace()},this.getHand=function(nt){let ft=R[nt];return ft===void 0&&(ft=new Es,R[nt]=ft),ft.getHandSpace()};function J(nt){let ft=E.indexOf(nt.inputSource);if(ft===-1)return;let Rt=R[ft];Rt!==void 0&&(Rt.update(nt.inputSource,nt.frame,l||a),Rt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function z(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",Y);for(let nt=0;nt<R.length;nt++){let ft=E[nt];ft!==null&&(E[nt]=null,R[nt].disconnect(ft))}D=null,Z=null,g.reset();for(let nt in p)delete p[nt];if(t.setRenderTarget(T),f=null,d=null,u=null,s=null,S=null,Ot.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(_.width,_.height,!1),N!==null){let nt=N.camera;nt.fov=N.fov,nt.zoom=N.zoom,nt.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,n.isPresenting===!0&&Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){o=nt,n.isPresenting===!0&&Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(nt){l=nt},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",z),s.addEventListener("inputsourceschange",Y),y.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,Dt=null,Mt=null;y.depth&&(Mt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Rt=y.stencil?si:Qn,Dt=y.stencil?Wi:An);let kt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(kt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new un(d.textureWidth,d.textureHeight,{format:Pn,type:en,depthTexture:new ni(d.textureWidth,d.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Rt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Rt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new un(f.framebufferWidth,f.framebufferHeight,{format:Pn,type:en,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ot.setContext(s),Ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(nt){for(let ft=0;ft<nt.removed.length;ft++){let Rt=nt.removed[ft],Dt=E.indexOf(Rt);Dt>=0&&(E[Dt]=null,R[Dt].disconnect(Rt))}for(let ft=0;ft<nt.added.length;ft++){let Rt=nt.added[ft],Dt=E.indexOf(Rt);if(Dt===-1){for(let kt=0;kt<R.length;kt++)if(kt>=E.length){E.push(Rt),Dt=kt;break}else if(E[kt]===null){E[kt]=Rt,Dt=kt;break}if(Dt===-1)break}let Mt=R[Dt];Mt&&Mt.connect(Rt)}}function W(nt,ft){ft===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ft.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let ft=nt.near,Rt=nt.far;g.texture!==null&&(g.depthNear>0&&(ft=g.depthNear),g.depthFar>0&&(Rt=g.depthFar)),q.near=k.near=I.near=ft,q.far=k.far=I.far=Rt,(D!==q.near||Z!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),D=q.near,Z=q.far),q.layers.mask=nt.layers.mask|6,I.layers.mask=q.layers.mask&-5,k.layers.mask=q.layers.mask&-3;let Dt=nt.parent,Mt=q.cameras;W(q,Dt);for(let kt=0;kt<Mt.length;kt++)W(Mt[kt],Dt);q.projectionMatrix.copy(I.projectionMatrix),q.projectionMatrixInverse.copy(I.projectionMatrixInverse),N===null&&nt.isPerspectiveCamera&&(N={camera:nt,fov:nt.fov,zoom:nt.zoom}),j(nt,q,Dt)};function j(nt,ft,Rt){Rt===null?nt.matrix.copy(ft.matrixWorld):(nt.matrix.copy(Rt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ft.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ft.projectionMatrix),nt.projectionMatrixInverse.copy(ft.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Ms*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(nt){c=nt,d!==null&&(d.fixedFoveation=nt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=nt)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(q)},this.getCameraTexture=function(nt){return p[nt]};let Q=null;function mt(nt,ft){if(h=ft.getViewerPose(l||a),m=ft,h!==null){let Rt=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let Dt=!1;Rt.length!==q.cameras.length&&(q.cameras.length=0,Dt=!0);for(let Ct=0;Ct<Rt.length;Ct++){let re=Rt[Ct],jt=null;if(f!==null)jt=f.getViewport(re);else{let fe=u.getViewSubImage(d,re);jt=fe.viewport,Ct===0&&(t.setRenderTargetTextures(S,fe.colorTexture,fe.depthStencilTexture),t.setRenderTarget(S))}let $t=H[Ct];$t===void 0&&($t=new cn,$t.layers.enable(Ct),$t.viewport=new Me,H[Ct]=$t),$t.matrix.fromArray(re.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(re.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(jt.x,jt.y,jt.width,jt.height),Ct===0&&(q.matrix.copy($t.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Dt===!0&&q.cameras.push($t)}let Mt=s.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let Ct=u.getDepthInformation(Rt[0]);Ct&&Ct.isValid&&Ct.texture&&g.init(Ct,s.renderState)}if(Mt&&Mt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let Ct=0;Ct<Rt.length;Ct++){let re=Rt[Ct].camera;if(re){let jt=p[re];jt||(jt=new mr,p[re]=jt);let $t=u.getCameraImage(re);jt.sourceTexture=$t}}}}for(let Rt=0;Rt<R.length;Rt++){let Dt=E[Rt],Mt=R[Rt];Dt!==null&&Mt!==void 0&&Mt.update(Dt,ft,l||a)}Q&&Q(nt,ft),ft.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ft}),m=null}let Ot=new ad;Ot.setAnimationLoop(mt),this.setAnimationLoop=function(nt){Q=nt},this.dispose=function(){}}},G_=new me,gd=new Xt;gd.set(-1,0,0,0,1,0,0,0,1);function V_(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Ic(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,T,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,S)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,y,T):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===je&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===je&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=t.get(p),T=y.envMap,S=y.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(G_.makeRotationFromEuler(S)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(gd),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,y,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=T*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.diffuseRoughness>0&&(g.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===je&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function W_(i,t,e,n){let s={},r={};function a(y,T){let S=T.program;n.uniformBlockBinding(y,S,s[y.id])}function o(y,T){let S=s[y.id];S===void 0&&(m(y),S=c(y),s[y.id]=S,y.addEventListener("dispose",g));let R=T.program;n.updateUBOMapping(y,R);let E=t.render.frame;r[y.id]!==E&&(l(y),r[y.id]=E)}function c(y){let T=i.createBuffer(),S=y.__size,R=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,S,R),i.bindBuffer(i.UNIFORM_BUFFER,null),T}function l(y){let T=s[y.id],S=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let E=0,_=S.length;E<_;E++){let w=S[E];if(Array.isArray(w))for(let N=0,I=w.length;N<I;N++)h(w[N],E,N,R);else h(w,E,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,T,S,R){if(d(y,T,S,R)===!0){let E=y.__offset,_=y.value;if(Array.isArray(_)){let w=0;for(let N=0;N<_.length;N++){let I=_[N],k=x(I,!0);u(I,y.__data,w),w+=k.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,y.__data)}}function u(y,T,S){typeof y=="number"||typeof y=="boolean"?T[S]=y:y.isMatrix3?(T[S]=y.elements[0],T[S+1]=y.elements[1],T[S+2]=y.elements[2],T[S+3]=0,T[S+4]=y.elements[3],T[S+5]=y.elements[4],T[S+6]=y.elements[5],T[S+7]=0,T[S+8]=y.elements[6],T[S+9]=y.elements[7],T[S+10]=y.elements[8],T[S+11]=0):ArrayBuffer.isView(y)?T.set(y.subarray(0,T.length-S),S):y.toArray(T,S)}function d(y,T,S,R){let E=y.value,_=T+"_"+S;if(Array.isArray(E)){R[_]===void 0&&(R[_]=[]);let w=R[_],N=!1;for(let I=0;I<E.length;I++)f(E[I],w,I)===!0&&(N=!0);return N}return f(E,R,_)}function f(y,T,S){if(T[S]===void 0)return typeof y=="number"||typeof y=="boolean"?T[S]=y:ArrayBuffer.isView(y)?T[S]=y.slice():T[S]=y.clone(),!0;{let R=T[S];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return T[S]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function m(y){let T=y.uniforms,S=0,R=16;for(let _=0,w=T.length;_<w;_++){let N=Array.isArray(T[_])?T[_]:[T[_]];for(let I=0,k=N.length;I<k;I++){let H=N[I],q=Array.isArray(H.value)?H.value:[H.value],D=Array.isArray(T[_])||Array.isArray(H.value),Z=S;for(let z=0,Y=q.length;z<Y;z++){let W=q[z],j=x(W,D),Q=S%R,mt=Q%j.boundary,Ot=Q+mt;S+=mt,Ot!==0&&R-Ot<j.storage&&(S+=R-Ot),z===0&&(Z=S),S+=j.storage}let J=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new J((S-Z)/Float32Array.BYTES_PER_ELEMENT),H.__offset=Z}}let E=S%R;return E>0&&(S+=R-E),y.__size=S,y.__cache={},this}function x(y,T){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=16,S.storage=48):y.isMatrix4?(S.boundary=16,S.storage=64):y.isTexture?Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):Bt("WebGLRenderer: Unsupported uniform value type.",y),T===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function g(y){let T=y.target;T.removeEventListener("dispose",g),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:o,dispose:p}}var X_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),zn=null;function $_(){return zn===null&&(zn=new ka(X_,16,16,Ei,Cn),zn.name="DFG_LUT",zn.minFilter=Ke,zn.magFilter=Ke,zn.wrapS=Fn,zn.wrapT=Fn,zn.generateMipmaps=!1,zn.needsUpdate=!0),zn}var nl=class{constructor(t={}){let{canvas:e=Cu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=en}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let x=f,g=new Set([vo,yo,xo]),p=new Set([en,An,Bs,Wi,go,_o]),y=new Uint32Array(4),T=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},R=null,E=null,_=[],w=[],N=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,k=!1,H=null,q=null,D=null,Z=null;this._outputColorSpace=Fe;let J=0,z=0,Y=null,W=-1,j=null,Q=new Me,mt=new Me,Ot=null,nt=new Yt(0),ft=0,Rt=e.width,Dt=e.height,Mt=1,kt=null,le=null,Ct=new Me(0,0,Rt,Dt),re=new Me(0,0,Rt,Dt),jt=!1,$t=new _i,fe=new za,Se=!1,at=!1,ut=new me,pt=new L,Tt=new Me,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function ce(){return Y===null?Mt:1}let O=n;function _e(b,U){return e.getContext(b,U)}let ie,ae,dt,ve,Ft,zt,A,v,G,ct,rt,xt,gt,tt,it,yt,P,st,M,C,F,B,V;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",lt,!1),O===null){let U="webgl2";if(O=_e(U,b),O===null)throw _e(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ht()}catch(b){throw e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),Vt("WebGLRenderer: "+b.message),b}function ht(){ie=new i0(O),ie.init(),F=new k_(O,ie),ae=new $g(O,ie,t,F),dt=new F_(O,ie),ae.reversedDepthBuffer&&d&&dt.buffers.depth.setReversed(!0),q=O.createFramebuffer(),D=O.createFramebuffer(),Z=O.createFramebuffer(),ve=new a0(O),Ft=new S_,zt=new B_(O,ie,dt,Ft,ae,F,ve),A=new n0(I),v=new lp(O),B=new Wg(O,v),G=new s0(O,v,ve,B),ct=new l0(O,G,v,B,ve),st=new o0(O,ae,zt),it=new qg(Ft),rt=new M_(I,A,ie,ae,B,it),xt=new V_(I,Ft),gt=new E_,tt=new I_(ie),P=new Vg(I,A,dt,ct,m,c),yt=new O_(I,ct,ae),V=new W_(O,ve,ae,dt),M=new Xg(O,ie,ve),C=new r0(O,ie,ve),ve.programs=rt.programs,I.capabilities=ae,I.extensions=ie,I.properties=Ft,I.renderLists=gt,I.shadowMap=yt,I.state=dt,I.info=ve}x!==en&&(N=new h0(x,e.width,e.height,o,s,r));let et=new Wc(I,O);this.xr=et,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let b=ie.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=ie.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Mt},this.setPixelRatio=function(b){b!==void 0&&(Mt=b,this.setSize(Rt,Dt,!1))},this.getSize=function(b){return b.set(Rt,Dt)},this.setSize=function(b,U,K=!0){if(et.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}Rt=b,Dt=U,e.width=Math.floor(b*Mt),e.height=Math.floor(U*Mt),K===!0&&(e.style.width=b+"px",e.style.height=U+"px"),N!==null&&N.setSize(e.width,e.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(Rt*Mt,Dt*Mt).floor()},this.setDrawingBufferSize=function(b,U,K){Rt=b,Dt=U,Mt=K,e.width=Math.floor(b*K),e.height=Math.floor(U*K),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(x===en){Vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){Bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(Q)},this.getViewport=function(b){return b.copy(Ct)},this.setViewport=function(b,U,K,X){b.isVector4?Ct.set(b.x,b.y,b.z,b.w):Ct.set(b,U,K,X),dt.viewport(Q.copy(Ct).multiplyScalar(ce()).round())},this.getScissor=function(b){return b.copy(re)},this.setScissor=function(b,U,K,X){b.isVector4?re.set(b.x,b.y,b.z,b.w):re.set(b,U,K,X),dt.scissor(mt.copy(re).multiplyScalar(ce()).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(b){dt.setScissorTest(jt=b)},this.setOpaqueSort=function(b){kt=b},this.setTransparentSort=function(b){le=b},this.getClearColor=function(b){return b.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,K=!0){let X=0;if(b){let $=!1;if(Y!==null){let bt=Y.texture.format;$=g.has(bt)}if($){let bt=Y.texture.type,Pt=p.has(bt),vt=P.getClearColor(),wt=P.getClearAlpha(),Nt=vt.r,qt=vt.g,Qt=vt.b;Pt?(y[0]=Nt,y[1]=qt,y[2]=Qt,y[3]=wt,O.clearBufferuiv(O.COLOR,0,y)):(T[0]=Nt,T[1]=qt,T[2]=Qt,T[3]=wt,O.clearBufferiv(O.COLOR,0,T))}else X|=O.COLOR_BUFFER_BIT}U&&(X|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(X|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&O.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),H=b},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),P.dispose(),gt.dispose(),tt.dispose(),zt.dispose(),Ft.dispose(),A.dispose(),ct.dispose(),G.dispose(),B.dispose(),V.dispose(),rt.dispose(),et.dispose(),et.removeEventListener("sessionstart",sh),et.removeEventListener("sessionend",rh),Ci.stop()};function ot(b){b.preventDefault(),Tc("WebGLRenderer: Context Lost."),k=!0}function At(){Tc("WebGLRenderer: Context Restored."),k=!1;let b=ve.autoReset,U=yt.enabled,K=yt.autoUpdate,X=yt.needsUpdate,$=yt.type;ht(),ve.autoReset=b,yt.enabled=U,yt.autoUpdate=K,yt.needsUpdate=X,yt.type=$}function lt(b){Vt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ht(b){let U=b.target;U.removeEventListener("dispose",Ht),se(U)}function se(b){Ne(b),Ft.remove(b)}function Ne(b){let U=Ft.get(b).programs;U!==void 0&&(U.forEach(function(K){rt.releaseProgram(K)}),b.isShaderMaterial&&rt.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,K,X,$,bt){U===null&&(U=Kt);let Pt=$.isMesh&&$.matrixWorld.determinantAffine()<0,vt=$d(b,U,K,X,$);dt.setMaterial(X,Pt);let wt=K.index,Nt=1;if(X.wireframe===!0){if(wt=G.getWireframeAttribute(K),wt===void 0)return;Nt=2}let qt=K.drawRange,Qt=K.attributes.position,It=qt.start*Nt,te=(qt.start+qt.count)*Nt;bt!==null&&(It=Math.max(It,bt.start*Nt),te=Math.min(te,(bt.start+bt.count)*Nt)),wt!==null?(It=Math.max(It,0),te=Math.min(te,wt.count)):Qt!=null&&(It=Math.max(It,0),te=Math.min(te,Qt.count));let Ae=te-It;if(Ae<0||Ae===1/0)return;B.setup($,X,vt,K,wt);let xe,pe=M;if(wt!==null&&(xe=v.get(wt),pe=C,pe.setIndex(xe)),$.isMesh)X.wireframe===!0?(dt.setLineWidth(X.wireframeLinewidth*ce()),pe.setMode(O.LINES)):pe.setMode(O.TRIANGLES);else if($.isLine){let Ge=X.linewidth;Ge===void 0&&(Ge=1),dt.setLineWidth(Ge*ce()),$.isLineSegments?pe.setMode(O.LINES):$.isLineLoop?pe.setMode(O.LINE_LOOP):pe.setMode(O.LINE_STRIP)}else $.isPoints?pe.setMode(O.POINTS):$.isSprite&&pe.setMode(O.TRIANGLES);if($.isBatchedMesh)if(ie.get("WEBGL_multi_draw"))pe.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Ge=$._multiDrawStarts,Lt=$._multiDrawCounts,Je=$._multiDrawCount,he=wt?v.get(wt).bytesPerElement:1,Pi=Ft.get(X).currentProgram.getUniforms();for(let Ve=0;Ve<Je;Ve++)Pi.setValue(O,"_gl_DrawID",Ve),pe.render(Ge[Ve]/he,Lt[Ve])}else if($.isInstancedMesh)pe.renderInstances(It,Ae,$.count);else if(K.isInstancedBufferGeometry){let Ge=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Lt=Math.min(K.instanceCount,Ge);pe.renderInstances(It,Ae,Lt)}else pe.render(It,Ae)};function Ji(b,U,K,X){H!==null&&b.isNodeMaterial&&H.setObject(X,b),Se===!0&&it.setState(b,K,!1),b.transparent===!0&&b.side===Ce&&b.forceSinglePass===!1?(b.side=je,b.needsUpdate=!0,$s(b,U,X),b.side=wi,b.needsUpdate=!0,$s(b,U,X),b.side=Ce):$s(b,U,X)}this.compile=function(b,U,K=null){K===null&&(K=b),H!==null&&H.renderStart(b,U,K),E=tt.get(K),E.init(U),w.push(E),K.traverseVisible(function($){$.isLight&&$.layers.test(U.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),b!==K&&b.traverseVisible(function($){$.isLight&&$.layers.test(U.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),E.setupLights(),H!==null&&H.updateLights(E.state.lightsArray),at=this.localClippingEnabled,Se=it.init(this.clippingPlanes,at),Se===!0&&it.setGlobalState(this.clippingPlanes,U),H!==null&&yt.render(E.state.shadowsArray,K,U);let X=new Set;return b.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let bt=$.material;if(bt)if(Array.isArray(bt))for(let Pt=0;Pt<bt.length;Pt++){let vt=bt[Pt];Ji(vt,K,U,$),X.add(vt)}else Ji(bt,K,U,$),X.add(bt)}),E=w.pop(),H!==null&&H.renderEnd(),X},this.compileAsync=function(b,U,K=null){let X=this.compile(b,U,K);return new Promise($=>{function bt(){if(X.forEach(function(Pt){let wt=Ft.get(Pt).currentProgram;(wt===void 0||wt.isReady())&&X.delete(Pt)}),X.size===0){$(b);return}setTimeout(bt,10)}ie.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Ri=null;function Wd(b){Ri&&Ri(b)}function sh(){Ci.stop()}function rh(){Ci.start()}let Ci=new ad;Ci.setAnimationLoop(Wd),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(b){Ri=b,et.setAnimationLoop(b),b===null?Ci.stop():Ci.start()},et.addEventListener("sessionstart",sh),et.addEventListener("sessionend",rh),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){Vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;H!==null&&H.renderStart(b,U);let K=et.enabled===!0&&et.isPresenting===!0,X=N!==null&&(Y===null||K)&&N.begin(I,Y);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(et.cameraAutoUpdate===!0&&et.updateCamera(U),U=et.getCamera()),b.isScene===!0&&b.onBeforeRender(I,b,U,Y),E=tt.get(b,w.length),E.init(U),E.state.textureUnits=zt.getTextureUnits(),w.push(E),ut.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?fe.setFromArrayCamera(U):$t.setFromProjectionMatrix(ut,gn,U.reversedDepth),at=this.localClippingEnabled,Se=it.init(this.clippingPlanes,at),R=gt.get(b,_.length),R.init(),_.push(R),this.info.render.frame++,et.enabled===!0&&et.isPresenting===!0){let Pt=I.xr.getDepthSensingMesh();Pt!==null&&xl(Pt,U,-1/0,I.sortObjects)}xl(b,U,0,I.sortObjects),R.finish(),H!==null&&H.updateLights(E.state.lightsArray),I.sortObjects===!0&&R.sort(kt,le),Wt=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Wt&&P.addToRenderList(R,b),this.info.autoReset===!0&&this.info.reset(),Se===!0&&it.beginShadows();let $=E.state.shadowsArray;if(yt.render($,b,U),Se===!0&&it.endShadows(),(X&&N.hasRenderPass())===!1){let Pt=R.opaque,vt=R.transmissive;if(E.setupLights(),U.isArrayCamera){let wt=U.cameras;if(vt.length>0)for(let Nt=0,qt=wt.length;Nt<qt;Nt++){let Qt=wt[Nt];oh(Pt,vt,b,Qt)}Wt&&P.render(b);for(let Nt=0,qt=wt.length;Nt<qt;Nt++){let Qt=wt[Nt];ah(R,b,Qt,Qt.viewport)}}else vt.length>0&&oh(Pt,vt,b,U),Wt&&P.render(b),ah(R,b,U)}Y!==null&&z===0&&(zt.updateMultisampleRenderTarget(Y),zt.updateRenderTargetMipmap(Y)),X&&N.end(I),b.isScene===!0&&b.onAfterRender(I,b,U),B.resetDefaultState(),W=-1,j=null,w.pop(),w.length>0?(E=w[w.length-1],zt.setTextureUnits(E.state.textureUnits),Se===!0&&it.setGlobalState(I.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?R=_[_.length-1]:R=null,H!==null&&H.renderEnd()};function xl(b,U,K,X){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)K=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){let Pt=U.isArrayCamera?fe:$t;if(!b.frustumCulled||b.intersectsFrustum(Pt)){X&&Tt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ut);let vt=ct.update(b),wt=b.material;wt.visible&&R.push(b,vt,wt,K,Tt.z,null,U)}}else if(b.isMesh||b.isLine||b.isPoints){let Pt=U.isArrayCamera?fe:$t;if(!b.frustumCulled||b.intersectsFrustum(Pt)){let vt=ct.update(b),wt=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Tt.copy(b.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Tt.copy(vt.boundingSphere.center)),Tt.applyMatrix4(b.matrixWorld).applyMatrix4(ut)),Array.isArray(wt)){let Nt=vt.groups;for(let qt=0,Qt=Nt.length;qt<Qt;qt++){let It=Nt[qt],te=wt[It.materialIndex];te&&te.visible&&R.push(b,vt,te,K,Tt.z,It,U)}}else wt.visible&&R.push(b,vt,wt,K,Tt.z,null,U)}}}let bt=b.children;for(let Pt=0,vt=bt.length;Pt<vt;Pt++)xl(bt[Pt],U,K,X)}function ah(b,U,K,X){let{opaque:$,transmissive:bt,transparent:Pt}=b;E.setupLightsView(K),Se===!0&&it.setGlobalState(I.clippingPlanes,K),X&&dt.viewport(Q.copy(X)),$.length>0&&$r($,U,K),bt.length>0&&$r(bt,U,K),Pt.length>0&&$r(Pt,U,K),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function oh(b,U,K,X){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[X.id]===void 0){let It=ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[X.id]=new un(1,1,{generateMipmaps:!0,type:It?Cn:en,minFilter:ii,samples:Math.max(4,ae.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ee.workingColorSpace})}let bt=E.state.transmissionRenderTarget[X.id],Pt=X.viewport||Q;bt.setSize(Pt.z*I.transmissionResolutionScale,Pt.w*I.transmissionResolutionScale);let vt=I.getRenderTarget(),wt=I.getActiveCubeFace(),Nt=I.getActiveMipmapLevel();I.setRenderTarget(bt),I.getClearColor(nt),ft=I.getClearAlpha(),ft<1&&I.setClearColor(16777215,.5),I.clear(),Wt&&P.render(K);let qt=I.toneMapping;I.toneMapping=kn;let Qt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),E.setupLightsView(X),Se===!0&&it.setGlobalState(I.clippingPlanes,X),$r(b,K,X),zt.updateMultisampleRenderTarget(bt),zt.updateRenderTargetMipmap(bt),ie.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let te=0,Ae=U.length;te<Ae;te++){let xe=U[te],{object:pe,geometry:Ge,material:Lt,group:Je}=xe;if(Lt.side===Ce&&pe.layers.test(X.layers)){let he=Lt.side;Lt.side=je,Lt.needsUpdate=!0,lh(pe,K,X,Ge,Lt,Je),Lt.side=he,Lt.needsUpdate=!0,It=!0}}It===!0&&(zt.updateMultisampleRenderTarget(bt),zt.updateRenderTargetMipmap(bt))}I.setRenderTarget(vt,wt,Nt),I.setClearColor(nt,ft),Qt!==void 0&&(X.viewport=Qt),I.toneMapping=qt}function $r(b,U,K){let X=U.isScene===!0?U.overrideMaterial:null;for(let $=0,bt=b.length;$<bt;$++){let Pt=b[$],{object:vt,geometry:wt,group:Nt}=Pt,qt=Pt.material;qt.allowOverride===!0&&X!==null&&(qt=X),vt.layers.test(K.layers)&&lh(vt,U,K,wt,qt,Nt)}}function lh(b,U,K,X,$,bt){H!==null&&$.isNodeMaterial&&H.setObject(b,$),b.onBeforeRender(I,U,K,X,$,bt),b.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),$.onBeforeRender(I,U,K,X,b,bt),$.transparent===!0&&$.side===Ce&&$.forceSinglePass===!1?($.side=je,$.needsUpdate=!0,I.renderBufferDirect(K,U,X,$,b,bt),$.side=wi,$.needsUpdate=!0,I.renderBufferDirect(K,U,X,$,b,bt),$.side=Ce):I.renderBufferDirect(K,U,X,$,b,bt),b.onAfterRender(I,U,K,X,$,bt)}function ch(b){let U=0;for(let K of b)K.texture!==null&&U++;return U}function $s(b,U,K){U.isScene!==!0&&(U=Kt);let X=Ft.get(b),$=E.state.lights,bt=E.state.shadowsArray,Pt=$.state.version,vt=rt.getParameters(b,$.state,bt,U,K,E.state.lightProbeGridArray),wt=rt.getProgramCacheKey(vt),Nt=X.programs;X.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,X.fog=U.fog;let qt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;X.envMap=A.get(b.envMap||X.environment,qt),X.envMapRotation=X.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Nt===void 0&&(b.addEventListener("dispose",Ht),Nt=new Map,X.programs=Nt,X.programVariants=new Map);let Qt=Nt.get(wt);if(Qt!==void 0){if(X.currentProgram===Qt&&X.lightsStateVersion===Pt)return uh(b,vt),Qt}else vt.uniforms=rt.getUniforms(b),H!==null&&b.isNodeMaterial&&H.build(b,K,vt),b.onBeforeCompile(vt,I),Qt=rt.acquireProgram(vt,wt),Nt.set(wt,Qt),X.uniforms=vt.uniforms;let It=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(It.clippingPlanes=it.uniform),uh(b,vt),X.needsLights=Yd(b),X.lightsStateVersion=Pt,X.needsLights&&(It.ambientLightColor.value=$.state.ambient,It.lightProbe.value=$.state.probe,It.sunLights.value=$.state.sun,It.sunLightShadows.value=$.state.sunShadow,It.directionalLights.value=$.state.directional,It.directionalLightShadows.value=$.state.directionalShadow,It.spotLights.value=$.state.spot,It.spotLightShadows.value=$.state.spotShadow,It.rectAreaLights.value=$.state.rectArea,It.ltc_1.value=$.state.rectAreaLTC1,It.ltc_2.value=$.state.rectAreaLTC2,It.pointLights.value=$.state.point,It.pointLightShadows.value=$.state.pointShadow,It.hemisphereLights.value=$.state.hemi,It.sunShadowMatrix.value=$.state.sunShadowMatrix,It.sunShadowCascade.value=$.state.sunShadowCascade,It.directionalShadowMatrix.value=$.state.directionalShadowMatrix,It.spotLightMatrix.value=$.state.spotLightMatrix,It.spotLightMap.value=$.state.spotLightMap,It.pointShadowMatrix.value=$.state.pointShadowMatrix),X.numLightProbeGrids=ch(E.state.lightProbeGridArray),X.currentProgram=Qt,X.uniformsList=null,Qt}function Xd(b,U,K,X,$){let bt=Ft.get(b),Pt=bt.currentProgram.id+","+X+","+$,vt=bt.programVariants.get(Pt);return vt===void 0?(vt=$s(b,U,K),bt.programVariants.set(Pt,vt)):(bt.currentProgram=vt,bt.uniformsList=null,bt.outputColorSpace=X,bt.toneMapping=$),vt}function hh(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=zs.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function uh(b,U){let K=Ft.get(b);K.outputColorSpace=U.outputColorSpace,K.batching=U.batching,K.batchingColor=U.batchingColor,K.instancing=U.instancing,K.instancingColor=U.instancingColor,K.instancingMorph=U.instancingMorph,K.skinning=U.skinning,K.morphTargets=U.morphTargets,K.morphNormals=U.morphNormals,K.morphColors=U.morphColors,K.morphTargetsCount=U.morphTargetsCount,K.numClippingPlanes=U.numClippingPlanes,K.numIntersection=U.numClipIntersection,K.vertexAlphas=U.vertexAlphas,K.vertexTangents=U.vertexTangents,K.toneMapping=U.toneMapping}function $d(b,U,K,X,$){U.isScene!==!0&&(U=Kt),zt.resetTextureUnits();let bt=U.fog,Pt=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?U.environment:null,vt=Y===null?I.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:ee.workingColorSpace,wt=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Nt=A.get(X.envMap||Pt,wt),qt=X.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Qt=!!K.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),It=!!K.morphAttributes.position,te=!!K.morphAttributes.normal,Ae=!!K.morphAttributes.color,xe=kn;X.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(xe=I.toneMapping);let pe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ge=pe!==void 0?pe.length:0,Lt=Ft.get(X),Je=E.state.lights;if(Se===!0&&(at===!0||b!==j)){let we=b===j&&X.id===W;it.setState(X,b,we)}let he=!1,Pi=!1;X.version===Lt.__version?Lt.needsLights&&Lt.lightsStateVersion!==Je.state.version||$.isBatchedMesh&&Lt.batching===!1||!$.isBatchedMesh&&Lt.batching===!0||$.isBatchedMesh&&Lt.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Lt.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Lt.instancing===!1||!$.isInstancedMesh&&Lt.instancing===!0||$.isSkinnedMesh&&Lt.skinning===!1||!$.isSkinnedMesh&&Lt.skinning===!0||$.isInstancedMesh&&Lt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Lt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Lt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Lt.instancingMorph===!1&&$.morphTexture!==null||Lt.envMap!==Nt||X.fog===!0&&Lt.fog!==bt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==it.numPlanes||Lt.numIntersection!==it.numIntersection)||Lt.vertexAlphas!==qt||Lt.vertexTangents!==Qt||Lt.morphTargets!==It||Lt.morphNormals!==te||Lt.morphColors!==Ae||Lt.morphTargetsCount!==Ge||Lt.numLightProbeGrids!==ch(E.state.lightProbeGridArray)?he=!0:(Lt.outputColorSpace!==vt||Lt.toneMapping!==xe)&&(Pi=!0):(he=!0,Lt.__version=X.version);let Ve=Lt.currentProgram;(he===!0||Pi===!0)&&(Ve=Pi===!0?Xd(X,U,$,vt,xe):$s(X,U,$),H&&X.isNodeMaterial&&H.onUpdateProgram(X,Ve,Lt));let qr=!1,hi=!1,Ii=!1,oe=Ve.getUniforms(),ke=Lt.uniforms;if(dt.useProgram(Ve.program)&&(qr=!0,hi=!0,Ii=!0),X.id!==W&&(W=X.id,hi=!0),qr||j!==b){dt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),oe.setValue(O,"projectionMatrix",b.projectionMatrix),oe.setValue(O,"viewMatrix",b.matrixWorldInverse);let Ue=oe.map.cameraPosition;Ue!==void 0&&Ue.setValue(O,pt.setFromMatrixPosition(b.matrixWorld)),ae.logarithmicDepthBuffer&&oe.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&oe.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),j!==b&&(j=b,hi=!0,Ii=!0)}if(Lt.needsLights&&(Je.state.sunShadowMap.length>0&&oe.setValue(O,"sunShadowMap",Je.state.sunShadowMap,zt),Je.state.directionalShadowMap.length>0&&oe.setValue(O,"directionalShadowMap",Je.state.directionalShadowMap,zt),Je.state.spotShadowMap.length>0&&oe.setValue(O,"spotShadowMap",Je.state.spotShadowMap,zt),Je.state.pointShadowMap.length>0&&oe.setValue(O,"pointShadowMap",Je.state.pointShadowMap,zt)),$.isSkinnedMesh){oe.setOptional(O,$,"bindMatrix"),oe.setOptional(O,$,"bindMatrixInverse");let we=$.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),oe.setValue(O,"boneTexture",we.boneTexture,zt))}$.isBatchedMesh&&(oe.setOptional(O,$,"batchingTexture"),oe.setValue(O,"batchingTexture",$._matricesTexture,zt),oe.setOptional(O,$,"batchingIdTexture"),oe.setValue(O,"batchingIdTexture",$._indirectTexture,zt),oe.setOptional(O,$,"batchingColorTexture"),$._colorsTexture!==null&&oe.setValue(O,"batchingColorTexture",$._colorsTexture,zt));let bn=K.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&st.update($,K,Ve),(hi||Lt.receiveShadow!==$.receiveShadow)&&(Lt.receiveShadow=$.receiveShadow,oe.setValue(O,"receiveShadow",$.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&U.environment!==null&&(ke.envMapIntensity.value=U.environmentIntensity),ke.dfgLUT!==void 0&&(ke.dfgLUT.value=$_()),hi){if(oe.setValue(O,"toneMappingExposure",I.toneMappingExposure),Lt.needsLights&&qd(ke,Ii),bt&&X.fog===!0&&xt.refreshFogUniforms(ke,bt),xt.refreshMaterialUniforms(ke,X,Mt,Dt,E.state.transmissionRenderTarget[b.id]),Lt.needsLights&&Lt.numLightProbeGrids>0){let we=S,Ue=0;for(let Xn of E.state.lightProbeGridArray)Xn.texture!==null&&(we.textures[Ue]=Xn.texture,we.min[Ue]=Xn.boundingBox.min,we.max[Ue]=Xn.boundingBox.max,we.resolution[Ue]=Xn.resolution,Ue++);for(let Xn in we)we[Xn].length=Ue;ke.probesSH.value=we.textures,ke.probesMin.value=we.min,ke.probesMax.value=we.max,ke.probesResolution.value=we.resolution}zs.upload(O,hh(Lt),ke,zt)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(zs.upload(O,hh(Lt),ke,zt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&oe.setValue(O,"center",$.center),oe.setValue(O,"modelViewMatrix",$.modelViewMatrix),oe.setValue(O,"normalMatrix",$.normalMatrix),oe.setValue(O,"modelMatrix",$.matrixWorld),X.uniformsGroups!==void 0){let we=X.uniformsGroups;for(let Ue=0,Xn=we.length;Ue<Xn;Ue++){let fh=we[Ue];V.update(fh,Ve),V.bind(fh,Ve)}}return Ve}function qd(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.sunLights.needsUpdate=U,b.sunLightShadows.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Yd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(b,U,K){let X=Ft.get(b);X.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Ft.get(b.texture).__webglTexture=U,Ft.get(b.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:K,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){let K=Ft.get(b);K.__webglFramebuffer=U,K.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,K=0){Y=b,J=U,z=K;let X=null,$=!1,bt=!1;if(b){let vt=Ft.get(b);if(vt.__useDefaultFramebuffer!==void 0){dt.bindFramebuffer(O.FRAMEBUFFER,vt.__webglFramebuffer),Q.copy(b.viewport),mt.copy(b.scissor),Ot=b.scissorTest,dt.viewport(Q),dt.scissor(mt),dt.setScissorTest(Ot),W=-1;return}else if(vt.__webglFramebuffer===void 0)zt.setupRenderTarget(b);else if(vt.__hasExternalTextures)zt.rebindTextures(b,Ft.get(b.texture).__webglTexture,Ft.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let qt=b.depthTexture;if(vt.__boundDepthTexture!==qt){if(qt!==null&&Ft.has(qt)&&(b.width!==qt.image.width||b.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(b)}}let wt=b.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(bt=!0);let Nt=Ft.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Nt[U])?X=Nt[U][K]:X=Nt[U],$=!0):b.samples>0&&zt.useMultisampledRTT(b)===!1?X=Ft.get(b).__webglMultisampledFramebuffer:Array.isArray(Nt)?X=Nt[K]:X=Nt,Q.copy(b.viewport),mt.copy(b.scissor),Ot=b.scissorTest}else Q.copy(Ct).multiplyScalar(Mt).floor(),mt.copy(re).multiplyScalar(Mt).floor(),Ot=jt;if(K!==0&&(X=q),dt.bindFramebuffer(O.FRAMEBUFFER,X)&&dt.drawBuffers(b,X),dt.viewport(Q),dt.scissor(mt),dt.setScissorTest(Ot),$){let vt=Ft.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,vt.__webglTexture,K)}else if(bt){let vt=U;for(let wt=0;wt<b.textures.length;wt++){let Nt=Ft.get(b.textures[wt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+wt,Nt.__webglTexture,K,vt)}}else if(b!==null&&K!==0){let vt=Ft.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,vt.__webglTexture,K)}W=-1};function dh(b){let U=Ft.get(b);return(U.__readFormat!==b.format||U.__readType!==b.type)&&(U.__readFormat=b.format,U.__readType=b.type,U.__formatReadable=ae.textureFormatReadable(b.format),U.__typeReadable=ae.textureTypeReadable(b.type)),U}this.readRenderTargetPixels=function(b,U,K,X,$,bt,Pt,vt=0){if(!(b&&b.isWebGLRenderTarget)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Ft.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(wt=wt[Pt],Array.isArray(wt)&&(wt=wt[0])),wt){dt.bindFramebuffer(O.FRAMEBUFFER,wt);try{let Nt=b.textures[vt],qt=Nt.format,Qt=Nt.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+vt);let It=dh(Nt);if(It.__formatReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-X&&K>=0&&K<=b.height-$&&O.readPixels(U,K,X,$,F.convert(qt),F.convert(Qt),bt)}finally{let Nt=Y!==null?Ft.get(Y).__webglFramebuffer:null;dt.bindFramebuffer(O.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(b,U,K,X,$,bt,Pt,vt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Ft.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(wt=wt[Pt],Array.isArray(wt)&&(wt=wt[0])),wt)if(U>=0&&U<=b.width-X&&K>=0&&K<=b.height-$){dt.bindFramebuffer(O.FRAMEBUFFER,wt);let Nt=b.textures[vt],qt=Nt.format,Qt=Nt.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+vt);let It=dh(Nt);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let te=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,te),O.bufferData(O.PIXEL_PACK_BUFFER,bt.byteLength,O.STREAM_READ),O.readPixels(U,K,X,$,F.convert(qt),F.convert(Qt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Ae=Y!==null?Ft.get(Y).__webglFramebuffer:null;dt.bindFramebuffer(O.FRAMEBUFFER,Ae);let xe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Iu(O,xe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,te),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,bt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(te),O.deleteSync(xe),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,K=0){let X=Math.pow(2,-K),$=Math.floor(b.image.width*X),bt=Math.floor(b.image.height*X),Pt=U!==null?U.x:0,vt=U!==null?U.y:0;zt.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,K,0,0,Pt,vt,$,bt),dt.unbindTexture()},this.copyTextureToTexture=function(b,U,K=null,X=null,$=0,bt=0){let Pt,vt,wt,Nt,qt,Qt,It,te,Ae,xe=b.isCompressedTexture?b.mipmaps[bt]:b.image;if(K!==null)Pt=K.max.x-K.min.x,vt=K.max.y-K.min.y,wt=K.isBox3?K.max.z-K.min.z:1,Nt=K.min.x,qt=K.min.y,Qt=K.isBox3?K.min.z:0;else{let oe=Math.pow(2,-$);Pt=Math.floor(xe.width*oe),vt=Math.floor(xe.height*oe),b.isDataArrayTexture?wt=xe.depth:b.isData3DTexture?wt=Math.floor(xe.depth*oe):wt=1,Nt=0,qt=0,Qt=0}X!==null?(It=X.x,te=X.y,Ae=X.z):(It=0,te=0,Ae=0);let pe=F.convert(U.format),Ge=F.convert(U.type),Lt;U.isData3DTexture?(zt.setTexture3D(U,0),Lt=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(zt.setTexture2DArray(U,0),Lt=O.TEXTURE_2D_ARRAY):(zt.setTexture2D(U,0),Lt=O.TEXTURE_2D),dt.activeTexture(O.TEXTURE0),dt.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),dt.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),dt.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);let Je=dt.getParameter(O.UNPACK_ROW_LENGTH),he=dt.getParameter(O.UNPACK_IMAGE_HEIGHT),Pi=dt.getParameter(O.UNPACK_SKIP_PIXELS),Ve=dt.getParameter(O.UNPACK_SKIP_ROWS),qr=dt.getParameter(O.UNPACK_SKIP_IMAGES);dt.pixelStorei(O.UNPACK_ROW_LENGTH,xe.width),dt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,xe.height),dt.pixelStorei(O.UNPACK_SKIP_PIXELS,Nt),dt.pixelStorei(O.UNPACK_SKIP_ROWS,qt),dt.pixelStorei(O.UNPACK_SKIP_IMAGES,Qt);let hi=b.isDataArrayTexture||b.isData3DTexture,Ii=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){let oe=Ft.get(b),ke=Ft.get(U),bn=Ft.get(oe.__renderTarget),we=Ft.get(ke.__renderTarget);dt.bindFramebuffer(O.READ_FRAMEBUFFER,bn.__webglFramebuffer),dt.bindFramebuffer(O.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ue=0;Ue<wt;Ue++)hi&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ft.get(b).__webglTexture,$,Qt+Ue),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ft.get(U).__webglTexture,bt,Ae+Ue)),O.blitFramebuffer(Nt,qt,Nt+Pt,qt+vt,It,te,It+Pt,te+vt,O.DEPTH_BUFFER_BIT,O.NEAREST);dt.bindFramebuffer(O.READ_FRAMEBUFFER,null),dt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if($!==0||b.isRenderTargetTexture||Ft.has(b)){let oe=Ft.get(b),ke=Ft.get(U);dt.bindFramebuffer(O.READ_FRAMEBUFFER,D),dt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Z);for(let bn=0;bn<wt;bn++)hi?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,oe.__webglTexture,$,Qt+bn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,oe.__webglTexture,$),Ii?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ke.__webglTexture,bt,Ae+bn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ke.__webglTexture,bt),$!==0?O.blitFramebuffer(Nt,qt,Nt+Pt,qt+vt,It,te,It+Pt,te+vt,O.COLOR_BUFFER_BIT,O.NEAREST):Ii?O.copyTexSubImage3D(Lt,bt,It,te,Ae+bn,Nt,qt,Pt,vt):O.copyTexSubImage2D(Lt,bt,It,te,Nt,qt,Pt,vt);dt.bindFramebuffer(O.READ_FRAMEBUFFER,null),dt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Ii?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(Lt,bt,It,te,Ae,Pt,vt,wt,pe,Ge,xe.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(Lt,bt,It,te,Ae,Pt,vt,wt,pe,xe.data):O.texSubImage3D(Lt,bt,It,te,Ae,Pt,vt,wt,pe,Ge,xe):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,bt,It,te,Pt,vt,pe,Ge,xe.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,bt,It,te,xe.width,xe.height,pe,xe.data):O.texSubImage2D(O.TEXTURE_2D,bt,It,te,Pt,vt,pe,Ge,xe);dt.pixelStorei(O.UNPACK_ROW_LENGTH,Je),dt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,he),dt.pixelStorei(O.UNPACK_SKIP_PIXELS,Pi),dt.pixelStorei(O.UNPACK_SKIP_ROWS,Ve),dt.pixelStorei(O.UNPACK_SKIP_IMAGES,qr),bt===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&O.generateMipmap(Lt),dt.unbindTexture()},this.initRenderTarget=function(b){Ft.get(b).__webglFramebuffer===void 0&&zt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?zt.setTextureCube(b,0):b.isData3DTexture?zt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?zt.setTexture2DArray(b,0):zt.setTexture2D(b,0),dt.unbindTexture()},this.resetState=function(){J=0,z=0,Y=null,dt.reset(),B.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}};var _d={type:"change"},qc={type:"start"},yd={type:"end"},rl=new gi,xd=new ln,q_=Math.cos(70*jo.DEG2RAD),Le=new L,nn=2*Math.PI,ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$c=1e-6,al=class extends Cr{constructor(t,e=null){super(t,e),this.state=ue.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:tn.ROTATE,MIDDLE:tn.DOLLY,RIGHT:tn.PAN},this.touches={ONE:pn.ROTATE,TWO:pn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new hn,this._lastTargetPosition=new L,this._quat=new hn().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ns,this._sphericalDelta=new Ns,this._scale=1,this._panOffset=new L,this._rotateStart=new Et,this._rotateEnd=new Et,this._rotateDelta=new Et,this._panStart=new Et,this._panEnd=new Et,this._panDelta=new Et,this._dollyStart=new Et,this._dollyEnd=new Et,this._dollyDelta=new Et,this._dollyDirection=new L,this._mouse=new Et,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Z_.bind(this),this._onPointerDown=Y_.bind(this),this._onPointerUp=J_.bind(this),this._onContextMenu=ix.bind(this),this._onMouseWheel=Q_.bind(this),this._onKeyDown=tx.bind(this),this._onTouchStart=ex.bind(this),this._onTouchMove=nx.bind(this),this._onMouseDown=K_.bind(this),this._onMouseMove=j_.bind(this),this._interceptControlDown=sx.bind(this),this._interceptControlUp=rx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ue.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(_d),this.update(),this.state=ue.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Le.copy(e).sub(this.target),Le.applyQuaternion(this._quat),this._spherical.setFromVector3(Le),this.autoRotate&&this.state===ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=nn:n>Math.PI&&(n-=nn),s<-Math.PI?s+=nn:s>Math.PI&&(s-=nn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Le.setFromSpherical(this._spherical),Le.applyQuaternion(this._quatInverse),e.copy(this.target).add(Le),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Le.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new L(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Le.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(rl.origin.copy(this.object.position),rl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(rl.direction))<q_?this.object.lookAt(this.target):(xd.setFromNormalAndCoplanarPoint(this.object.up,this.target),rl.intersectPlane(xd,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>$c||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$c||this._lastTargetPosition.distanceToSquared(this.target)>$c?(this.dispatchEvent(_d),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?nn/60*this.autoRotateSpeed*t:nn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Le.setFromMatrixColumn(e,0),Le.multiplyScalar(-t),this._panOffset.add(Le)}_panUp(t,e){this.screenSpacePanning===!0?Le.setFromMatrixColumn(e,1):(Le.setFromMatrixColumn(e,0),Le.crossVectors(this.object.up,Le)),Le.multiplyScalar(t),this._panOffset.add(Le)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Le.copy(s).sub(this.target);let r=Le.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Et,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Y_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Z_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function J_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(yd),this.state=ue.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function K_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case tn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ue.DOLLY;break;case tn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ue.ROTATE}break;case tn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ue.PAN}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(qc)}function j_(i){switch(this.state){case ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Q_(i){this.enabled===!1||this.enableZoom===!1||this.state!==ue.NONE||(i.preventDefault(),this.dispatchEvent(qc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(yd))}function tx(i){this.enabled!==!1&&this._handleKeyDown(i)}function ex(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case pn.ROTATE:if(this.enableRotate===!1){this.state=ue.NONE;break}this._handleTouchStartRotate(i),this.state=ue.TOUCH_ROTATE;break;case pn.PAN:if(this.enablePan===!1){this.state=ue.NONE;break}this._handleTouchStartPan(i),this.state=ue.TOUCH_PAN;break;default:this.state=ue.NONE}break;case 2:switch(this.touches.TWO){case pn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ue.TOUCH_DOLLY_PAN;break;case pn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ue.TOUCH_DOLLY_ROTATE;break;default:this.state=ue.NONE}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(qc)}function nx(i){switch(this._trackPointer(i),this.state){case ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ue.NONE}}function ix(i){this.enabled!==!1&&i.preventDefault()}function sx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function rx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Gr=new L;function vn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Gr.copy(t),Gr[n]=0,Gr.normalize();let l=.5*a/(a+o),h=1-Gr.angleTo(i)/c;return Math.sign(Gr[e])===1?h*l:o/(a+o)+l+l*(1-h)}var ol=class i extends xn{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new L,l=new L,h=new L(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,m=u.length/6,x=new L,g=.5/a;for(let p=0,y=0;p<u.length;p+=3,y+=2)switch(c.fromArray(u,p),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),u[p+0]=h.x*Math.sign(c.x)+l.x*r,u[p+1]=h.y*Math.sign(c.y)+l.y*r,u[p+2]=h.z*Math.sign(c.z)+l.z*r,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/m)){case 0:x.set(1,0,0),f[y+0]=vn(x,l,"z","y",r,n),f[y+1]=1-vn(x,l,"y","z",r,e);break;case 1:x.set(-1,0,0),f[y+0]=1-vn(x,l,"z","y",r,n),f[y+1]=1-vn(x,l,"y","z",r,e);break;case 2:x.set(0,1,0),f[y+0]=1-vn(x,l,"x","z",r,t),f[y+1]=vn(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),f[y+0]=1-vn(x,l,"x","z",r,t),f[y+1]=1-vn(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),f[y+0]=1-vn(x,l,"x","y",r,t),f[y+1]=1-vn(x,l,"y","x",r,e);break;case 5:x.set(0,0,-1),f[y+0]=vn(x,l,"x","y",r,t),f[y+1]=1-vn(x,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};function bd(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Te;c.morphTargetsRelative=o;let l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0,f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in u.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(u.attributes[m]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in u.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[m].length!==i[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;a[m]===void 0&&(a[m]=[]),a[m].push(u.morphAttributes[m]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let m;if(e)m=u.index.count;else if(u.attributes.position!==void 0)m=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,m,h),l+=m}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=vd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);let m=vd(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}}return c}function vd(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new _n(a,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){let x=h.getComponent(d,m);o.setComponent(d+u,m,x)}}else a.set(h.array,c);c+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var ye=Object.freeze({paper:"#eadbbc",edge:"#d7c29c",ocean:"#e7d6b2",land:"#b78e61",landLight:"#c19c73",ink:"#735338",pencil:"#896847",grid:"#aa8b62"}),Yc=[{id:"north-america",points:[[-168,71],[-159,70],[-151,72],[-143,69],[-135,69],[-129,71],[-121,73],[-115,72],[-107,73],[-100,76],[-91,76],[-84,73],[-79,69],[-70,65],[-61,61],[-56,53],[-62,48],[-68,46],[-67,43],[-72,41],[-76,35],[-81,25],[-84,26],[-82,30],[-87,30],[-91,29],[-97,26],[-97,22],[-90,20],[-86,21],[-88,18],[-86,16],[-83,15],[-80,9],[-77,8],[-80,7],[-84,11],[-88,13],[-94,16],[-99,17],[-105,20],[-109,24],[-112,29],[-115,30],[-117,33],[-120,37],[-124,42],[-125,49],[-130,54],[-136,58],[-139,60],[-145,60],[-151,58],[-155,56],[-162,55],[-166,58],[-161,61],[-164,64],[-168,66]]},{id:"south-america",points:[[-81,10],[-76,11],[-72,12],[-67,10],[-63,10],[-59,8],[-53,5],[-50,1],[-48,-2],[-42,-3],[-36,-6],[-35,-10],[-38,-15],[-39,-19],[-42,-23],[-48,-28],[-50,-31],[-53,-34],[-57,-38],[-61,-40],[-64,-45],[-67,-50],[-69,-55],[-74,-54],[-75,-49],[-74,-43],[-74,-38],[-72,-33],[-72,-29],[-71,-24],[-70,-19],[-74,-15],[-77,-11],[-79,-6],[-81,-3],[-80,2],[-78,5]]},{id:"eurasia",points:[[-10,36],[-9,43],[-4,44],[-1,47],[-5,49],[0,51],[4,52],[8,55],[9,58],[7,59],[5,62],[8,65],[14,68],[20,71],[27,71],[31,69],[30,66],[36,67],[42,66],[43,69],[50,69],[56,68],[61,70],[69,72],[78,72],[85,75],[94,76],[104,77],[111,74],[121,73],[130,71],[140,72],[147,70],[155,71],[166,68],[175,67],[179,64],[174,62],[168,64],[164,60],[161,57],[158,52],[156,50],[155,56],[150,60],[143,59],[141,54],[139,49],[135,45],[131,43],[129,39],[126,40],[124,39],[121,36],[119,31],[122,30],[121,24],[117,23],[112,21],[109,20],[108,16],[109,12],[107,10],[104,10],[103,5],[104,1],[101,2],[99,7],[99,13],[95,16],[93,20],[90,22],[87,21],[85,18],[82,16],[80,10],[77,7],[74,12],[72,20],[69,23],[66,25],[61,25],[58,23],[54,25],[51,24],[49,28],[46,30],[43,29],[43,25],[40,19],[39,17],[35,28],[33,30],[33,34],[36,36],[32,36],[28,40],[26,40],[24,37],[21,37],[20,40],[17,41],[15,39],[16,38],[15,37],[13,38],[12,42],[8,44],[6,43],[3,41],[0,40],[-1,37],[-5,36]]},{id:"africa",points:[[-17,21],[-16,26],[-13,28],[-10,30],[-9,32],[-5,36],[1,36],[7,37],[11,36],[15,32],[20,32],[25,31],[31,31],[33,28],[35,23],[39,18],[43,12],[51,12],[48,6],[44,1],[42,-4],[40,-11],[37,-17],[35,-20],[35,-24],[32,-28],[28,-33],[23,-35],[18,-34],[16,-29],[14,-24],[12,-17],[13,-11],[11,-5],[9,1],[7,4],[2,5],[-3,5],[-7,5],[-11,7],[-15,11],[-17,15]]},{id:"australia",points:[[113,-22],[114,-26],[114,-31],[118,-34],[123,-35],[130,-32],[135,-35],[139,-37],[145,-39],[150,-37],[153,-29],[151,-24],[149,-20],[146,-17],[144,-11],[141,-12],[139,-17],[136,-15],[132,-12],[128,-14],[124,-16],[120,-18],[116,-20]]},{id:"greenland",points:[[-52,60],[-45,61],[-39,66],[-31,69],[-24,75],[-21,80],[-31,83],[-43,83],[-54,81],[-61,76],[-59,70],[-53,66]]},{id:"antarctica",points:[[-179,-73],[-162,-75],[-143,-73],[-124,-73],[-110,-75],[-95,-73],[-77,-70],[-65,-65],[-60,-64],[-58,-67],[-67,-73],[-49,-76],[-30,-78],[-11,-75],[10,-71],[29,-69],[50,-67],[70,-69],[92,-67],[113,-66],[135,-68],[153,-68],[174,-71],[180,-74],[180,-79],[-180,-79]]},{id:"great-britain",points:[[-6,58],[-3,59],[-1,56],[-2,54],[1,52],[0,50],[-5,50],[-5,53],[-3,55]]},{id:"ireland",points:[[-10,55],[-7,55],[-6,52],[-9,51],[-10,53]]},{id:"iceland",points:[[-24,65],[-21,67],[-15,66],[-13,64],[-20,63]]},{id:"madagascar",points:[[49,-12],[50,-16],[48,-21],[46,-25],[44,-24],[44,-20],[46,-16]]},{id:"japan",points:[[142,45],[145,44],[143,42],[141,41],[140,37],[136,34],[132,33],[130,31],[129,33],[133,35],[137,37],[139,40]]},{id:"taiwan",points:[[122,25],[122,23],[120,21],[120,24]]},{id:"sri-lanka",points:[[80,10],[82,8],[81,6],[80,7]]},{id:"cuba",points:[[-85,22],[-81,23],[-77,21],[-74,20],[-78,20],[-82,22]]},{id:"hispaniola",points:[[-74,19],[-70,20],[-68,18],[-72,18]]},{id:"sumatra",points:[[95,6],[99,2],[103,-5],[105,-6],[101,-5],[98,-1]]},{id:"java",points:[[105,-6],[111,-7],[115,-8],[113,-9],[107,-8]]},{id:"borneo",points:[[110,7],[116,7],[119,3],[117,-3],[112,-4],[109,0]]},{id:"sulawesi",points:[[120,2],[124,2],[125,1],[122,0],[124,-4],[122,-5],[120,-2],[119,-3],[119,0]]},{id:"new-guinea",points:[[131,-1],[137,-3],[143,-3],[148,-6],[150,-10],[146,-9],[141,-8],[136,-5],[132,-4]]},{id:"philippines",points:[[120,19],[122,17],[121,14],[125,12],[126,7],[124,6],[122,10],[119,10],[120,13]]},{id:"new-zealand-north",points:[[173,-35],[176,-38],[178,-39],[176,-41],[174,-40],[172,-37]]},{id:"new-zealand-south",points:[[173,-41],[171,-44],[168,-47],[166,-46],[168,-43],[171,-41]]},{id:"tasmania",points:[[145,-41],[148,-41],[148,-43],[146,-44],[144,-43]]}],$i=([i,t])=>[50+(i+180)*2.5,98+(85-t)*2.46],ax=Yc.map(({id:i,points:t})=>({id:i,d:t.map((e,n)=>`${n?"L":"M"}${$i(e).map(s=>s.toFixed(2)).join(" ")}`).join(" ")+" Z"})),Md=["M 169 158 l 5 -8 6 10 6 -7 6 11 6 -6 7 10","M 283 299 l 4 -7 5 12 3 -5 5 13 3 -5 6 13","M 594 236 l 5 -8 6 9 5 -7 6 8 5 -9 6 9 6 -7 6 9","M 577 179 l 4 -6 5 7 5 -5 6 7"];function Sd(){return Array.from({length:170},(i,t)=>({x:22+t*137%955,y:20+t*83%559,length:1+t%4,opacity:.08+t%3*.015}))}function Gs({solved:i=!0}={}){let t=[60,30,0,-30,-60].map(r=>`<path d="M50 ${$i([0,r])[1]} H950"${r===0?' stroke-dasharray="4 6"':""}/>`).join(""),e=[-120,-60,0,60,120].map(r=>`<path d="M${$i([r,0])[0]} 98 V501"/>`).join(""),n=ax.map(({id:r,d:a},o)=>`<path data-land="${r}" d="${a}" fill="${o%3===0?ye.landLight:ye.land}"/><path d="${a}" fill="none" transform="translate(.7 -.45)" stroke="${ye.pencil}" stroke-width=".65" opacity=".5"/>`).join(""),s=Sd().map(({x:r,y:a,length:o,opacity:c})=>`<path d="M${r} ${a} h${o}" opacity="${c}"/>`).join("");return`<svg class="world-map-art" xmlns="http://www.w3.org/2000/svg" width="1000" height="600" viewBox="0 0 1000 600" role="img" aria-label="\u68D5\u8272\u624B\u7ED8\u4E16\u754C\u5730\u56FE"><rect width="1000" height="600" fill="${ye.paper}"/><path d="M18 17 L980 21 L984 581 L20 578 Z" fill="none" stroke="${ye.edge}" stroke-width="2"/><path d="M26 25 L973 27 L974 572 L28 570 Z" fill="none" stroke="${ye.pencil}" stroke-width=".6" opacity=".4"/><g stroke="${ye.grid}" stroke-width=".65" opacity=".24">${t}${e}</g><g stroke="${ye.ink}" stroke-width="1.4" stroke-linejoin="round">${n}</g><g fill="none" stroke="${ye.pencil}" stroke-width="1" opacity=".65">${Md.map(r=>`<path d="${r}"/>`).join("")}</g><g fill="none" stroke="${ye.ink}" stroke-width="1">${s}</g><g transform="translate(901 74)" stroke="${ye.ink}" stroke-width="1.2"><path d="M0 -24 L6 -4 L0 0 L-6 -4 Z" fill="${ye.ink}"/><path d="M0 24 L6 4 L0 0 L-6 4 Z" fill="none"/><path d="M-20 0 H20 M0 -24 V24"/><circle r="11" fill="none" opacity=".45"/></g><g fill="${ye.ink}" font-family="KaiTi,STKaiti,serif" text-anchor="middle"><text x="500" y="65" font-size="30" letter-spacing="12">\u4E16\u754C\u5730\u56FE</text><text x="903" y="40" font-family="Georgia,serif" font-size="11">N</text><text x="500" y="554" font-size="15" letter-spacing="5">${i?"\u628A\u8D70\u8FC7\u7684\u5730\u65B9\uFF0C\u6162\u6162\u62FC\u5728\u4E00\u8D77":"\u4E00\u5757\u4E00\u5757\uFF0C\u62FC\u51FA\u6574\u4E2A\u4E16\u754C"}</text></g></svg>`}function wd(i,t,e,{solved:n=!0}={}){if(i){i.save(),i.scale(t/1e3,e/600),i.fillStyle=ye.paper,i.fillRect(0,0,1e3,600),i.strokeStyle=ye.edge,i.lineWidth=2,i.strokeRect(19,19,963,561),i.strokeStyle=ye.pencil,i.globalAlpha=.4,i.lineWidth=.6,i.strokeRect(27,27,947,544),i.globalAlpha=1,i.save(),i.strokeStyle=ye.grid,i.lineWidth=.65,i.globalAlpha=.24;for(let s of[60,30,0,-30,-60]){let r=$i([0,s])[1];i.beginPath(),i.setLineDash(s===0?[4,6]:[]),i.moveTo(50,r),i.lineTo(950,r),i.stroke()}i.setLineDash([]);for(let s of[-120,-60,0,60,120]){let r=$i([s,0])[0];i.beginPath(),i.moveTo(r,98),i.lineTo(r,501),i.stroke()}i.restore(),i.lineJoin="round",i.lineWidth=1.4;for(let s=0;s<Yc.length;s++){let{points:r}=Yc[s];i.beginPath(),r.forEach((a,o)=>{let[c,l]=$i(a);o?i.lineTo(c,l):i.moveTo(c,l)}),i.closePath(),i.fillStyle=s%3===0?ye.landLight:ye.land,i.fill(),i.strokeStyle=ye.ink,i.stroke(),i.save(),i.translate(.7,-.45),i.strokeStyle=ye.pencil,i.globalAlpha=.5,i.lineWidth=.65,i.beginPath(),r.forEach((a,o)=>{let[c,l]=$i(a);o?i.lineTo(c,l):i.moveTo(c,l)}),i.closePath(),i.stroke(),i.restore()}typeof Path2D<"u"&&(i.save(),i.strokeStyle=ye.pencil,i.lineWidth=1,i.globalAlpha=.65,Md.forEach(s=>i.stroke(new Path2D(s))),i.restore()),i.save(),i.strokeStyle=ye.ink,i.lineWidth=1,Sd().forEach(({x:s,y:r,length:a,opacity:o})=>{i.globalAlpha=o,i.beginPath(),i.moveTo(s,r),i.lineTo(s+a,r),i.stroke()}),i.restore(),i.save(),i.translate(901,74),i.strokeStyle=ye.ink,i.fillStyle=ye.ink,i.lineWidth=1.2,i.beginPath(),i.moveTo(0,-24),i.lineTo(6,-4),i.lineTo(0,0),i.lineTo(-6,-4),i.closePath(),i.fill(),i.stroke(),i.beginPath(),i.moveTo(0,24),i.lineTo(6,4),i.lineTo(0,0),i.lineTo(-6,4),i.closePath(),i.stroke(),i.beginPath(),i.moveTo(-20,0),i.lineTo(20,0),i.moveTo(0,-24),i.lineTo(0,24),i.stroke(),i.globalAlpha=.45,i.beginPath(),i.arc(0,0,11,0,Math.PI*2),i.stroke(),i.restore(),i.fillStyle=ye.ink,i.textAlign="center",i.font="30px KaiTi, STKaiti, serif",i.fillText("\u4E16\u754C\u5730\u56FE",500,65),i.font="11px Georgia, serif",i.fillText("N",903,40),i.font="15px KaiTi, STKaiti, serif",i.fillText(n?"\u628A\u8D70\u8FC7\u7684\u5730\u65B9\uFF0C\u6162\u6162\u62FC\u5728\u4E00\u8D77":"\u4E00\u5757\u4E00\u5757\uFF0C\u62FC\u51FA\u6574\u4E2A\u4E16\u754C",500,554),i.restore()}}function ox(i){let t=new Set,e=new Set,n=()=>{let c=0;return i.traverse(l=>{(l.isMesh||l.isLine)&&c++}),c},s=n();function r(c){for(let u of[...c.children])r(u);let l=new Map,h=new Map;for(let u of c.children)if(!(u.name||u.children.length||Object.keys(u.userData).length||!u.visible||Array.isArray(u.material))){if(u.isMesh){let d=[u.material.uuid,u.castShadow,u.receiveShadow,u.renderOrder].join(":");l.has(d)||l.set(d,[]),l.get(d).push(u)}else if(u.isLine&&!u.material.vertexColors){let d=u.material,f=[d.type,d.color?.getHex(),d.opacity,d.transparent,d.depthTest,d.depthWrite,d.blending,d.linewidth,d.toneMapped,u.renderOrder].join(":");h.has(f)||h.set(f,[]),h.get(f).push(u)}}for(let u of l.values()){if(u.length<2)continue;let d=u.map(g=>{g.updateMatrix();let p=g.geometry.index?g.geometry.toNonIndexed():g.geometry.clone();return p.applyMatrix4(g.matrix),p}),f=bd(d,!1);if(d.forEach(g=>g.dispose()),!f)continue;f.computeBoundingBox(),f.computeBoundingSphere();let m=u[0],x=new ge(f,m.material);x.castShadow=m.castShadow,x.receiveShadow=m.receiveShadow,x.renderOrder=m.renderOrder;for(let g of u)t.add(g.geometry),e.add(g.material),c.remove(g);c.add(x)}for(let u of h.values()){let m=function(p,y){f.fromBufferAttribute(p.geometry.attributes.position,y).applyMatrix4(p.matrix),d.push(f.x,f.y,f.z)};if(u.length<2)continue;let d=[],f=new L;for(let p of u){p.updateMatrix();let y=p.geometry,T=y.index,S=T?T.count:y.attributes.position.count,R=E=>T?T.getX(E):E;if(p.isLineSegments)for(let E=0;E+1<S;E+=2)m(p,R(E)),m(p,R(E+1));else{for(let E=0;E+1<S;E++)m(p,R(E)),m(p,R(E+1));p.isLineLoop&&S>2&&(m(p,R(S-1)),m(p,R(0)))}}if(!d.length)continue;let x=new Te().setAttribute("position",new ne(d,3));x.computeBoundingBox(),x.computeBoundingSphere();let g=new As(x,u[0].material);g.renderOrder=u[0].renderOrder;for(let p of u)t.add(p.geometry),e.add(p.material),c.remove(p);c.add(g)}}r(i);let a=new Set,o=new Set;i.traverse(c=>{if(c.geometry&&a.add(c.geometry),c.material)for(let l of Array.isArray(c.material)?c.material:[c.material])o.add(l)});for(let c of t)a.has(c)||c.dispose();for(let c of e)o.has(c)||c.dispose();i.userData.staticBatching={before:s,after:n()}}function Ed(i={}){let t=new Gt;t.name="our-paper-home";let e=[],n=[],s={north:new Gt,south:new Gt,west:new Gt,east:new Gt};for(let[M,C]of Object.entries(s))C.name=`wall-${M}`,t.add(C);let r=new Map,a=new Map,o={paper:"#f1e6ce",trim:"#bbaa89",wood:"#c8ad87",woodLight:"#ddc9a8",sage:"#9eaf8b",green:"#7e9572",peach:"#d2a18d",fabric:"#e4b9a3",cream:"#f2ead6",ink:"#7e725c",tile:"#d7dfd1",blue:"#a9c3b9"};function c(M,C={}){let F=M+JSON.stringify(C);return r.has(F)||r.set(F,new dn({color:M,roughness:1,metalness:0,flatShading:!0,...C})),r.get(F)}function l(M,C,F,B,V,ht,et,ot,At=0,lt=""){let Ht=[V,ht,et,At].join(",");a.has(Ht)||a.set(Ht,At?new ol(V,ht,et,2,Math.min(At,V/3,ht/3,et/3)):new xn(V,ht,et));let se=new ge(a.get(Ht),typeof ot=="string"?c(ot):ot);return se.position.set(C,F,B),se.castShadow=!0,se.receiveShadow=!0,lt&&(se.name=lt),M.add(se),se}function h(M,C,F,B,V,ht,et,ot,At=14,lt=""){let Ht=new ge(new Rs(V,ht,et,At),c(ot));return Ht.position.set(C,F,B),Ht.castShadow=!0,Ht.receiveShadow=!0,lt&&(Ht.name=lt),M.add(Ht),Ht}function u(M,C,F,B,V,ht,et,ot,At=""){let lt=new ge(new ki(1,12,8),c(ot));return lt.position.set(C,F,B),lt.scale.set(V,ht,et),lt.castShadow=!0,At&&(lt.name=At),M.add(lt),lt}function d(M,C,F=o.ink,B=.4){let V=new Te().setFromPoints(C.map(et=>new L(...et))),ht=new Ts(V,new Bi({color:F,transparent:!0,opacity:B}));return M.add(ht),ht}function f(M,C=.18){let F=new As(new xr(M.geometry,35),new Bi({color:o.ink,transparent:!0,opacity:C}));return M.add(F),M}function m(M,C=t){let F=new Gt;return F.name=`object-${M}`,F.userData.hotspot=M,C.add(F),e.push(F),F}function x(M,C,F,B,V,ht=!1){let et=l(t,M,-4,C,F,8,B,V,2);if(et.userData.floor=!0,et.name=ht?"wood-floor":"tile-floor",n.push(et),ht)for(let ot=C-B/2+29;ot<C+B/2;ot+=29){d(t,[[M-F/2,.4,ot],[M+F/2,.4,ot]],"#aa9473",.22);let At=Math.round(ot/29);for(let lt=M-F/2+(At%2?75:0);lt<M+F/2;lt+=150)d(t,[[lt,.5,ot-29],[lt,.5,ot]],"#aa9473",.19)}else{for(let ot=M-F/2;ot<M+F/2;ot+=30)d(t,[[ot,.3,C-B/2],[ot,.3,C+B/2]],"#a6b6a1",.24);for(let ot=C-B/2;ot<C+B/2;ot+=30)d(t,[[M-F/2,.3,ot],[M+F/2,.3,ot]],"#a6b6a1",.24)}return et}function g(M,C=512,F=320){if(typeof document>"u")return null;let B=document.createElement("canvas");B.width=C,B.height=F;let V=B.getContext("2d");M(V,C,F);let ht=new fr(B);return ht.colorSpace=Fe,ht}function p(M=!1){return g((C,F,B)=>{C.fillStyle=M?"#f3dbb1":"#eee2bd",C.fillRect(0,0,F,B),C.fillStyle="#dfb983",C.beginPath(),C.arc(F*.78,B*.22,B*.11,0,Math.PI*2),C.fill(),C.fillStyle="#adbc9f",C.beginPath(),C.moveTo(0,B*.62),C.lineTo(F*.18,B*.25),C.lineTo(F*.36,B*.55),C.lineTo(F*.55,B*.12),C.lineTo(F*.8,B*.58),C.lineTo(F,B*.3),C.lineTo(F,B),C.lineTo(0,B),C.fill(),C.fillStyle="#8fa99a",C.beginPath(),C.moveTo(0,B*.65),C.lineTo(F*.28,B*.46),C.lineTo(F*.52,B*.7),C.lineTo(F*.75,B*.47),C.lineTo(F,B*.66),C.lineTo(F,B),C.lineTo(0,B),C.fill(),C.fillStyle="#b4cec5",C.fillRect(0,B*.73,F,B*.27),C.strokeStyle="#f4eedb",C.lineWidth=3;for(let V=0;V<5;V++){let ht=B*(.77+V*.045);C.beginPath(),C.moveTo(F*(.04+V%2*.13),ht),C.bezierCurveTo(F*.3,ht-8,F*.6,ht+8,F*.95,ht),C.stroke()}C.fillStyle="#decfa5",C.beginPath(),C.moveTo(0,B*.93),C.quadraticCurveTo(F*.28,B*.84,F*.62,B),C.lineTo(0,B),C.fill(),!i.puzzleSolved&&!M&&(C.fillStyle="#e8ddc0",C.fillRect(F*.54,B*.47,F*.13,B*.22),C.fillRect(F*.13,B*.72,F*.13,B*.21)),C.fillStyle="#665e45",C.globalAlpha=.06;for(let V=0;V<1e3;V++){let ht=V*67%F,et=V*173%B;C.fillRect(ht,et,1,1)}},512,320)}function y(M,C,F,B,V,ht,et,ot=0,At="#666651",lt="#f4ecd8"){let Ht=g((Ne,Ji,Ri)=>{Ne.fillStyle=lt,Ne.fillRect(0,0,Ji,Ri),Ne.fillStyle=At,Ne.font=`${Math.round(Ri*.39)}px KaiTi, STKaiti, serif`,Ne.textAlign="center",Ne.textBaseline="middle",Ne.fillText(C,Ji/2,Ri/2,Ji*.92)},512,128);if(!Ht)return null;let se=new ge(new xi(ht,et),new He({map:Ht,side:Ce}));return se.position.set(F,B,V),se.rotation.y=ot,M.add(se),se}function T(M,C,F,B,V,ht,et,ot=0){let At=new ge(new xi(ht,et),C?new He({map:C,side:Ce}):c(o.sage));return At.position.set(F,B,V),At.rotation.y=ot,M.add(At),At}function S(){if(typeof document>"u")return null;let M=i.photos||[],C=(i.memories||[]).slice().reverse().find(B=>typeof B.image=="string"&&/^data:image\/(?:png|jpeg|webp|gif);base64,[A-Za-z0-9+/=\r\n]+$/.test(B.image)&&(M.includes(B.id)||M.some(V=>V.startsWith("photo-")&&B.id.startsWith(`outing-${V.slice(6)}-day-`))));if(!C)return null;let F=new wr().load(C.image);return F.colorSpace=Fe,F}function R(M,C,F,B,V=1,ht=2,et=!1,ot=o.peach){h(M,C,F+8*V,B,10*V,7*V,16*V,"#be9275"),h(M,C,F+16*V,B,11*V,11*V,3*V,"#d5ac8b"),h(M,C,F+18*V,B,8*V,8*V,1*V,"#8d7658");let At=(19+ht*9)*V;h(M,C,F+18*V+At/2,B,1.1*V,1.3*V,At,o.green,6);for(let lt=0;lt<Math.min(5,ht+2);lt++){let Ht=lt%2?1:-1,se=F+(25+lt*7)*V,Ne=u(M,C+Ht*7*V,se,B+(lt%3-1)*2*V,10*V,2.4*V,4*V,lt%2?"#9cad83":"#82996f");Ne.rotation.z=Ht*.42}if(et){let lt=F+18*V+At;for(let Ht=0;Ht<6;Ht++){let se=Ht*Math.PI/3;u(M,C+Math.cos(se)*5*V,lt+Math.sin(se)*5*V,B,4*V,5*V,2.5*V,ot)}u(M,C,lt,B+2*V,3*V,3*V,2*V,"#d7b66a")}}function E(M,C,F,B,V=5,ht="x"){let et=["#a5b89b","#d7b395","#c7bc9e","#8ea698","#c3a590"];for(let ot=0;ot<V;ot++){let At=20+ot*7%13;l(M,C+(ht==="x"?ot*9:0),F+At/2,B+(ht==="z"?ot*9:0),ht==="x"?7:18,At,ht==="x"?17:7,et[ot%et.length],.7)}}function _(M,C,F,B,V,ht,et,ot=0,At=""){let lt=new Gt;return lt.position.set(C,F,B),lt.rotation.y=ot,At&&(lt.name=At),M.add(lt),f(l(lt,0,0,0,V+10,ht+10,6,o.wood,1.5)),l(lt,0,0,3.3,V+2,ht+2,1,o.cream),T(lt,et,0,0,4.1,V-5,ht-5),lt}f(l(t,582,-13,389,1056,20,522,"#c3b18e",2,"base-apartment"),.25),x(701,387,798,506,"#e3cfaa",!0),x(171,263,214,258,"#dce0ce"),x(171,520,214,228,"#d3ddcf"),x(171,399,214,14,"#d8ddcb"),x(290,387,24,506,"#e4dac0"),x(171,637,214,6,"#d3ddcf"),f(l(s.north,583,105,133,1044,210,9,o.paper,0,"north-outer-wall"),.21),l(s.north,583,5,139,1044,10,4,o.trim),f(l(s.south,583,105,646,1044,210,9,o.paper,0,"south-outer-wall"),.21),l(s.south,583,5,640,1044,10,4,o.trim),f(l(s.west,61,105,469,9,210,354,o.paper,0,"west-outer-wall"),.22);let w=new Gt;w.name="balcony-railing",t.add(w),l(w,61,3,213,9,6,158,o.trim,.5);for(let M of[137,174,211,248,289])l(w,61,53,M,5,106,5,o.trim,.6);for(let M of[20,62,105])l(w,61,M,213,7,4,158,o.woodLight,.6);f(l(s.east,1105,105,242,9,210,217,o.paper,0,"east-outer-wall-north"),.22),f(l(s.east,1105,105,555,9,210,178,o.paper),.22),l(s.east,1105,195,411,9,20,120,o.paper),l(s.east,1101,6,555,6,12,178,o.trim);let N=new Gt;N.name="interior-walls",t.add(N);let I=new Gt;I.name="computer-window-wall",N.add(I),f(l(N,291,105,498.25,11,210,286.5,o.paper,0,"bookshelf-balcony-wall"),.2),l(N,297,5,498.25,2,10,286.5,o.trim),f(l(N,166,105,523.75,10,210,235.5,"#e5e4d1",0,"toilet-divider"),.25);for(let[M,C]of[[65,90],[145,208],[264,296.5]])l(N,(M+C)/2,105,400,C-M,210,8,"#e5e4d1");for(let[M,C]of[[90,145],[208,264]])l(N,(M+C)/2,204,400,C-M,12,8,"#e5e4d1");l(N,261,98,428,4,196,52,"#d8c5a2",1,"bathroom-door");for(let M of[209.5,262.5])l(N,M,99,400,3,198,12,o.woodLight,.5);l(N,236,197,400,56,4,12,o.woodLight,.5),u(N,258,94,448,2,2,2,"#8b9878");let k=l(N,87,98,428,4,196,52,"#ddd0b3",1);k.rotation.y=-.08;for(let M of[91.5,143.5])l(N,M,99,400,3,198,12,o.woodLight,.5);l(N,117.5,197,400,55,4,12,o.woodLight,.5);let H=new Gt;H.name="balcony-door",N.add(H);for(let[M,C]of[["north",257],["south",353]])l(H,291,99,C,13,198,4,o.woodLight,.5,`balcony-door-${M}-jamb`);f(l(H,291,204,305,11,12,100,o.paper,0,"balcony-door-lintel"),.18),l(H,291,198,305,13,4,100,o.woodLight,.5),l(H,291,1,305,14,2,92,"#c9c5ae",.4,"balcony-door-threshold");let q=new Gt;q.name="balcony-door-leaf",q.position.set(285.5,0,259),q.rotation.y=Math.PI/2,H.add(q);for(let M of[-1.5,-90.5])l(q,0,98,M,4,196,3,o.woodLight,.5);for(let M of[2,84,194])l(q,0,M,-46,4,4,92,o.woodLight,.5);l(q,0,43,-46,3,78,86,"#d6c8a8",.6),l(q,0,139,-46,1,106,86,c("#c8d9cb",{transparent:!0,opacity:.3,depthWrite:!1}),0,"balcony-door-glass"),l(q,1.5,93,-86,1.5,12,2,"#809084",.5);function D(M,C,F,B,V,ht,et=0){let ot=new Gt;return ot.position.set(C,F,B),ot.rotation.y=et,M.add(ot),l(ot,0,0,0,V+12,ht+12,5,o.woodLight,1),l(ot,0,0,3,V,ht,2,"#c5d8c2"),l(ot,0,0,5,4,ht,2,"#f4ecd9"),l(ot,0,0,5,V,4,2,"#f4ecd9"),l(ot,0,-ht/2-6,8,V+21,5,19,o.woodLight,1),d(ot,[[-V*.4,-ht*.28,5.5],[-V*.1,ht*.3,5.5]],"#eef3e1",.8),ot}let Z=D(s.west,67,136,332,85,90,Math.PI/2);Z.name="plant-window";let J=m("balcony"),z=new Gt;z.name="washer-unit",z.position.set(-3,0,-81),J.add(z);let Y=f(l(z,111,35,260,67,70,74,"#ecebdd",3,"washing-machine"),.22);l(z,111,72,260,69,5,76,"#f5f0df",1),l(z,111,62,299,58,10,2,"#dcdcc9",1);let W=h(z,111,32,299.5,23,23,3,"#bbc9b7",24);W.rotation.x=Math.PI/2;let j=h(z,111,32,302,17,17,2,"#96afa3",24);j.rotation.x=Math.PI/2,l(z,134,62,301,4,4,2,o.green,1);let Q=new Gt;Q.name="laundry-rack",J.add(Q),Q.position.set(-3,0,-81);for(let M of[85,137])h(Q,M,149,260,1.2,1.2,100,o.trim,6);for(let M of[236,260,283])d(Q,[[82,194,M],[140,194,M]],"#a2957b",.8);for(let[M,C,F]of[[101,239,"#ede0cb"],[125,260,"#bacab7"],[101,281,"#dab49c"]]){d(Q,[[M-8,179,C],[M,188,C],[M+8,179,C],[M-8,179,C]],"#a19174",.8);let B=l(Q,M,159,C,17,31,2,F,1);l(Q,M-11,168,C,9,10,2,F,1),l(Q,M+11,168,C,9,10,2,F,1);for(let V=150;V<171;V+=6)d(Q,[[M-7,V,C+1.3],[M+7,V,C+1.3]],"#9ca08a",.28)}let mt=new Gt;mt.name="sink",t.add(mt),mt.position.z=-16.5,f(l(mt,225,33,181,70,66,50,"#ccbea0",2),.2),l(mt,225,68,181,75,7,54,"#e9e6d7",2);let Ot=h(mt,225,73,182,23,19,4,"#aebfb2",24);Ot.scale.z=.7,h(mt,246,82,165,1.8,1.8,24,"#9cab9c",8),l(mt,239,94,165,15,3,3,"#9cab9c",1),l(mt,225,30,208,60,48,2,"#d7ccae",1),h(mt,225,33,210,2,2,3,"#8c977a",8).rotation.x=Math.PI/2;let nt=new Gt;nt.name="basin-mirror",s.north.add(nt),f(l(nt,225,145,139,67,87,3,"#b9af94",1.5,"basin-mirror-frame"),.18),l(nt,225,145,141,59,79,1,new yi({color:"#c0d4cd",metalness:.65,roughness:.16,envMapIntensity:.5}),.8,"basin-mirror-surface"),d(nt,[[203,115,142],[242,166,142]],"#f0f4e9",.75),d(nt,[[205,131,142],[238,174,142]],"#f0f4e9",.35),f(l(I,291,51,195,11,102,120,o.paper,0,"computer-wall-lower"),.2);let ft=new Gt;ft.name="desk-window",I.add(ft),ft.position.set(291,156,195),ft.rotation.y=Math.PI/2;for(let M of[-57,57])l(ft,M,0,0,6,108,11,"#d8d8ca",.5);for(let M of[-51,51])l(ft,0,M,0,120,6,11,"#d8d8ca",.5);let Rt=new yi({color:"#d6e6dc",roughness:.24,metalness:0,transparent:!0,opacity:.33,side:Ce,depthWrite:!1});l(ft,0,0,0,108,96,1.1,Rt,0,"desk-window-glass"),l(ft,0,0,2,3,102,3,"#f1eee1",.4),l(ft,0,0,2,108,3,3,"#f1eee1",.3),d(ft,[[-44,-36,3],[-22,37,3]],"#f8faf0",.9),d(ft,[[20,-32,3],[43,40,3]],"#f8faf0",.8),l(ft,0,-51,0,124,5,15,o.woodLight,.7,"desk-window-sill"),l(ft,8,-7,5,2,10,2,"#8d9e92",.5);let Dt=m("plants");Dt.name="plant-stand";for(let M of[78,111])for(let C of[318,380])l(Dt,M,32,C,3,64,3,"#93a17b",.5);for(let[M,C]of[5,23,41,59].entries())f(l(Dt,94.5,C,349,39,3,70,"#c2ad88",1,`plant-tier-${M+1}`),.13),R(Dt,93,C+2,333,.19,Math.max(0,Number(i.growth||0)),Number(i.growth)>=4&&M===2),R(Dt,96,C+2,365,.17,Math.max(0,Number(i.growth||0)-1),Number(i.growth)>=4&&M===0);let Mt=h(Dt,132,8,367,8,7,16,"#afc5b5",10);d(Dt,[[136,10,366],[148,19,362],[151,18,361]],"#7e9883",.9);let kt=new Gt;kt.name="toilet",t.add(kt),l(kt,112,35,460,33,43,20,"#e9eddf",3),u(kt,112,18,483,22,13,29,"#edf0e3"),u(kt,112,29,486,15,2,20,"#bbcaba"),l(kt,112,58,460,34,5,22,"#f0f0e3",1);let le=new Gt;le.name="bathroom",t.add(le),l(le,228,2,484,67,4,111,"#b9cec0",2),l(le,197,60,483,3,120,110,c("#d0ddce",{transparent:!0,opacity:.36}),0),l(le,228,60,539,63,120,3,c("#d0ddce",{transparent:!0,opacity:.26}),0),h(le,252,117,447,1.5,1.5,115,"#8eab99",8),l(le,243,174,447,20,3,3,"#8eab99",1),u(le,232,173,447,10,2,8,"#afc6b6"),l(le,228,2,594,75,3,31,"#9db89f",1);let Ct=m("desk");Ct.position.z=-96,f(l(Ct,519,77,274,391,8,57,o.woodLight,2),.22);for(let M of[338,696])for(let C of[253,293])l(Ct,M,37,C,7,74,7,o.wood,1);l(Ct,412,107,265,77,44,5,"#a1b4a6",2),T(Ct,p(!0),412,107,268,69,36),l(Ct,412,85,267,4,12,5,"#a0aa95"),l(Ct,412,81,275,31,3,17,"#b6bda8",1),f(l(Ct,414,83,288,65,3,17,"#ece7d6",1),.12);for(let M=0;M<3;M++)d(Ct,[[386,85,283+M*4],[442,85,283+M*4]],"#bfb39b",.55);u(Ct,465,84,283,4,2,6,"#e6ddc7"),l(Ct,570,83,279,32,1.5,24,"#f7f0df"),d(Ct,[[559,84.1,274],[582,84.1,274]],"#a29d83",.5),h(Ct,615,89,278,6,6,14,"#d5c09c",12);function re(M,C){for(let F of[-15,15])for(let B of[-14,14])l(Ct,M+F,21,C+B,3,42,3,o.wood);l(Ct,M,43,C,42,7,36,"#a8b89a",3),l(Ct,M,64,C+17,42,40,5,"#a8b89a",3)}re(414,347),re(629,347);let jt=m("cooking");l(jt,351,84,276,41,4,31,"#dadac8",1),h(jt,351,95,276,15,14,20,"#b6c4a4",14),h(jt,351,106,276,16,16,3,"#d3ddbd",14),l(jt,351,109,276,10,3,4,o.green,1);for(let M of[331,371])l(jt,M,100,276,8,4,5,o.green,1);let $t=m("vase");if(u($t,520,94,275,11,14,11,"#e4dfc4"),h($t,520,107,275,5,6,11,"#e4dfc4",12),i.flower){let M=i.flower==="sunflower"?"#d4b45c":i.flower==="daisy"?"#f6eed2":"#d9a08a";for(let[C,F]of[512,520,531].entries()){let B=135+C%2*10;d($t,[[520,110,275],[F,B,274]],"#7c956d",1);for(let V=0;V<7;V++){let ht=V*Math.PI*2/7;u($t,F+Math.cos(ht)*5,B+Math.sin(ht)*5,274,3,4,2,M)}u($t,F,B,277,3,3,1.5,i.flower==="sunflower"?"#8e7049":"#d5b66c")}}jt.position.z=-96,$t.position.z=-96;let fe=m("projection",s.north);fe.userData.hotspot="switch",fe.position.z=-96;let Se=f(l(fe,600,166,236,212,89,3,new He({color:"#f2edd9"}),1,"projection-cloth"),.14);Se.castShadow=!1,l(fe,600,214,238,222,5,7,"#b3a48a",1),l(fe,600,119,239,216,4,5,"#bdaf91",1),i.projectorOn?(T(fe,p(!0),600,166,238,202,80),y(fe,"\u4E00\u8D77\u73A9\u5427",600,163,240,77,20,0,"#57684c","#e2d9b8")):y(fe,"\u4ECA\u665A\u770B\u70B9\u4EC0\u4E48\uFF1F",600,164,238,141,28,0,"#9a927b","#f2edd9");let at=m("fridge");f(l(at,780,78,269,81,156,67,"#dbe1c9",4),.2),l(at,780,112,304,75,2,2,"#9eac8e"),l(at,811,130,306,3,20,3,"#8b9d80",1),l(at,811,71,306,3,31,3,"#8b9d80",1),(i.photos||[]).length&&(l(at,761,129,305,28,33,1,"#faf5e6",1),T(at,S()||p(),761,131,306,23,23),u(at,762,145,307,3,3,2,"#b4836d"));for(let M=0;M<Math.min(6,(i.magnets||[]).length);M++){let C=755+M%3*21,F=81-Math.floor(M/3)*25;l(at,C,F,307,14,18,2,M%2?"#cbaa84":"#90a889",1)}for(let M of[749,810])l(at,M,3,269,5,6,32,"#8d987b");at.position.z=-96;let ut=new Gt;ut.name="four-tier-room-shelf",t.add(ut),ut.position.z=-96;for(let M of[850,928])for(let C of[241,298])l(ut,M,80,C,4,160,4,o.wood);for(let M of[15,57,99,141])l(ut,889,M,270,90,5,65,o.woodLight,1);E(ut,858,101,268,5),R(ut,866,145,265,.7,2),R(ut,905,61,267,.64,2),l(ut,886,31,274,69,27,47,"#d6c6a4",2),l(ut,904,76,274,29,27,37,"#b4b99c",2);let pt=m("tickets",s.east);pt.position.x=60;let Tt=new Gt;Tt.name="ticket-box",Tt.position.set(1038,144,311),Tt.rotation.y=-Math.PI/2,pt.add(Tt),l(Tt,0,0,-2.5,63,67,1.5,"#d8cfb9",.4,"ticket-box-back");for(let M of[-32,32])f(l(Tt,M,0,1.5,3,71,9,"#30332f",.35,M<0?"ticket-black-frame-left":"ticket-black-frame-right"),.22);for(let M of[-34,34])l(Tt,0,M,1.5,67,3,9,"#30332f",.35);let Kt=l(Tt,0,0,6.2,61,65,.6,new yi({color:"#e9eee7",roughness:.12,metalness:0,transparent:!0,opacity:.12,side:Ce,depthWrite:!1}),0,"ticket-box-glass");Kt.castShadow=!1,d(Tt,[[-27,-27,6.8],[-7,27,6.8]],"#f5f6e9",.4);let Wt=new Gt;Wt.name="world-map-lines",Tt.add(Wt);let ce=[[[-27,12],[-23,19],[-17,21],[-13,17],[-9,17],[-7,12],[-13,7],[-15,2],[-19,3],[-22,9],[-27,12]],[[-14,1],[-9,-2],[-6,-7],[-7,-12],[-11,-20],[-13,-17],[-15,-8],[-14,1]],[[-5,12],[-1,17],[4,17],[6,21],[13,21],[18,17],[25,18],[29,12],[26,7],[20,7],[18,2],[14,4],[12,-1],[8,2],[6,8],[2,10],[-1,8],[-5,12]],[[-1,8],[5,7],[9,2],[8,-4],[3,-14],[-1,-11],[-4,-2],[-1,8]],[[17,-12],[21,-9],[27,-11],[28,-16],[21,-18],[17,-15],[17,-12]],[[-18,24],[-14,25],[-12,22],[-16,21],[-18,24]]];for(let M of ce)d(Wt,M.map(([C,F])=>[C,F,7]),"#393e37",.9);for(let M=-22;M<=22;M+=11)d(Wt,[[-28,M,6.9],[28,M,6.9]],"#929985",.12);if((i.tickets||[]).length){let M=["#c1cbb1","#ddb89a"];for(let C=0;C<Math.min(3,i.tickets.length);C++){let F=l(Tt,-8+C*8,-21+C*7,2,24,9,.6,M[C%2],.2);F.rotation.z=.12*(C-1)}}let O=new Gt;O.name="shoe-cabinet",t.add(O),O.position.set(1082,0,311);for(let[M,C]of[6,30,54].entries())f(l(O,0,C,0,36,4,82,"#c9b18e",.8,`shoe-shelf-${M+1}`),.2),d(O,[[-14,C+4,-34],[14,C+4,-34]],"#dac39c",.55);l(O,0,40,-39.5,36,80,3,"#b79d78",.8,"shoe-side-left"),l(O,0,40,39.5,36,80,3,"#b79d78",.8,"shoe-side-right"),l(O,17,40,0,2,80,82,"#b79d78",.8,"shoe-cabinet-back"),l(O,0,79,0,36,4,82,"#c9b18e",.8,"shoe-cabinet-top");for(let[M,C]of[11,35,59].entries())for(let[F,B]of[-24,0,24].entries()){let V=["#8f9e85","#c1a38d","#aaa99d"][M],ht=new Gt;ht.name=`shoe-pair-${M+1}-${F+1}`,O.add(ht);for(let et of[-5,5]){l(ht,-1,C,B+et,28,5,8,"#e5dfcb",2),l(ht,-2,C+3,B+et,22,6,7.5,V,2),l(ht,-10,C+5,B+et,7,5,7.2,V,1);for(let ot=0;ot<3;ot++)d(ht,[[-5+ot*2,C+6.3,B+et-2.6],[-5+ot*2,C+6.3,B+et+2.6]],"#efead8",.9)}}let _e=new Gt;_e.name="wall-mirror",s.north.add(_e),_e.position.z=-96,l(_e,1008,98,235,56,180,4,"#9b8b72",1.5,"mirror-frame"),l(_e,1008,98,238,48,172,1.5,new yi({color:"#bed3ce",metalness:.65,roughness:.13,envMapIntensity:.5}),.8,"mirror-surface"),d(_e,[[990,33,239],[1023,142,239]],"#edf3e6",.72),d(_e,[[992,70,239],[1020,160,239]],"#edf3e6",.36);let ie=m("door");ie.position.x=60;let ae=l(ie,1021,83,413,5,166,83,"#d4bd98",2);ae.rotation.y=-.56,u(ie,1e3,78,432,3,3,3,"#8b9878"),l(ie,956,1.3,434,39,2.5,67,"#adb99a",2),y(ie,"WELCOME",956,3,434,55,11,0,"#708160","#adb99a")?.rotateX(-Math.PI/2);let dt=m("plush");dt.position.set(-61,0,25);for(let M of[368,531])for(let C of[501,604])l(dt,M,11,C,7,22,7,"#987e62",1);f(l(dt,451,25,554,184,24,115,"#bd8f7d",7),.16),l(dt,451,64,609,187,79,15,"#cfa18c",6,"sofa-back"),l(dt,367,47,553,19,54,115,"#d5aa94",6),l(dt,535,47,553,19,54,115,"#d5aa94",6),l(dt,410,43,548,73,17,87,"#e0b6a1",7,"sofa-seat-left"),l(dt,491,43,548,73,17,87,"#e0b6a1",7,"sofa-seat-right");let ve=l(dt,399,69,586,34,34,12,"#a7b59b",4);ve.rotation.x=-.15,ve.rotation.z=.12,d(dt,[[386,59,593],[412,81,593]],"#dce1c8",.8),d(dt,[[387,81,593],[411,59,593]],"#dce1c8",.8);let Ft=l(dt,505,55,552,31,3,84,"#e8d9b6",2);for(let M=0;M<8;M++)d(dt,[[492,57,518+M*9],[518,57,518+M*9]],"#b6b48d",.65);if((i.plushies||[]).length){let M=new Gt;M.name="collected-bear",dt.add(M),u(M,454,67,552,15,19,12,"#b99b70"),u(M,454,88,551,14,13,12,"#c7ad7d");for(let C of[443,465])u(M,C,99,552,6,6,4,"#b3946b");for(let C of[449,459])u(M,C,90,540,1.3,1.5,1,"#685d48");u(M,454,84,539,3,2,1.5,"#927b56");for(let C of[444,465])u(M,C,53,542,6,5,8,"#b99b70")}let zt=m("puzzle",s.south);_(zt,390,156,639,145,91,g((M,C,F)=>wd(M,C,F,{solved:i.puzzleSolved}),1e3,600),Math.PI,"puzzle-frame");let A=new Gt;A.name="coffee-table",t.add(A),A.position.set(-61,0,-15),l(A,451,.8,443,178,1.5,150,"#d7d3b3",8);for(let M=0;M<7;M++)d(A,[[372,1.8,380+M*19],[530,1.8,380+M*19]],"#ece6cb",.75);for(let M of[406,500])for(let C of[433,473])l(A,M,17,C,5,34,5,o.wood);let v=h(A,454,36,453,66,66,7,o.woodLight,32);v.scale.z=.58,l(A,437,41,447,27,1,31,"#f3ead4"),d(A,[[428,42,440],[445,42,440]],"#a7a08b",.5),h(A,480,47,460,6,6,12,"#d2b48c",12);let G=m("bed");f(l(G,752,19,500,205,30,267,"#b9a582",4),.18),l(G,752,39,500,197,21,258,"#f1e7ce",6),l(G,752,61,628,210,82,10,o.wood,3,"bed-headboard"),l(G,752,53,462,195,10,174,"#a9bc92",5,"bed-quilt"),l(G,752,60,544,195,5,17,"#c8d6b4",2);for(let M of[704,800]){let C=l(G,M,57,593,80,15,49,"#f6efdb",6,M<750?"bed-pillow-left":"bed-pillow-right");C.rotation.y=M<750?-.025:.025,d(G,[[M-32,65,576],[M+31,65,576]],"#dcd2b9",.6)}for(let M of[663,841])l(G,M,7,500,7,14,223,"#a18a69");for(let M=0;M<5;M++)d(G,[[669+M*39,59,382],[669+M*39,59,530]],"#d2ddbe",.35);let ct=m("switch");f(l(ct,597,27,548,65,54,85,"#cbb58e",2),.22),l(ct,597,56,548,71,5,90,o.woodLight,2),l(ct,597,33,592,55,29,2,"#d9c39d",1),l(ct,597,37,595,11,2,2,o.ink,1),l(ct,596,64,545,52,6,26,"#535d50",3,"switch-console"),l(ct,575,65,545,10,7,27,"#a7c0ac",3),l(ct,617,65,545,10,7,27,"#c49a85",3),l(ct,596,68,545,29,1,20,"#9db7a4",1);for(let M of[575,617])u(ct,M,70,543,2.5,1,2.5,"#4f5d4c");let rt=new Gt;rt.name="floor-projector",t.add(rt),h(rt,595,18,469,20,22,6,"#c4c6ac",20),h(rt,595,33,469,3,3,30,"#8f9e80",8),f(l(rt,595,54,469,44,24,34,"#dddcc4",3),.2);let xt=h(rt,595,54,450,7,7,4,i.projectorOn?"#f4e7b9":"#88a49b",16);if(xt.rotation.x=Math.PI/2,i.projectorOn){let C=new ge(new _r(56,321,24,1,!0),new He({color:"#f3e7b7",transparent:!0,opacity:.055,side:Ce,depthWrite:!1}));C.rotation.x=Math.PI/2,C.position.set(595,99,295.5),rt.add(C)}let gt=new Gt;gt.name="floor-lamp",t.add(gt),h(gt,590,3,616,17,17,6,"#b9b89a",24),h(gt,590,71,616,2,2,140,"#a9997b",8),h(gt,590,148,616,18,25,25,"#e8dfbf",18);let tt=m("bookshelf");tt.name="object-bookshelf",tt.position.set(-7,0,56.5);for(let M of[426,462])l(tt,321,80,M,34,164,2.8,"#b8a587",.5);l(tt,305,80,444,2.5,164,39,"#c4b393",.5);let it=["#9bad94","#c7a28b","#d7c79f","#7f9e91","#bca9a0"];for(let[M,C]of[8,32,56,80,104,128,152].entries())if(f(l(tt,321,C,444,35,3,40,o.woodLight,.6,`bookshelf-tier-${M+1}`),.22),M<6){let F=M%2?5:4;for(let B=0;B<F;B++){let V=new Gt;V.name=`flat-book-${M+1}-${B+1}`,tt.add(V);let ht=321+(B%3-1)*.8,et=444+(B%2?.7:-.6),ot=C+3+B*3.8;l(V,ht,ot,et,29,3.2,31,it[(M+B)%it.length],.4),l(V,ht+.4,ot+.12,et,27.4,2.15,28.9,"#ece3c9",.15),l(V,ht+14.2,ot,et,1.3,3.4,31,it[(M+B)%it.length],.15),d(V,[[ht+14.95,ot-.4,et-11],[ht+14.95,ot-.4,et+11]],"#e7dfc8",.75)}}function yt(M,C,F,B=!1){let V=new Gt;V.name=M,tt.add(V),l(V,323,160,C,B?10:12,B?8:10,B?13:17,F,1.1),l(V,323,166,C,7,2.5,B?8:10,F,.7);let ht=h(V,331,160,C,B?3:4.1,B?3:4.1,B?3:6,"#393c37",18);ht.rotation.z=Math.PI/2;let et=h(V,B?333:335,160,C,B?2:2.8,B?2:2.8,1,"#6c9596",18);et.rotation.z=Math.PI/2,l(V,329.5,163,C+4,1,2,3,"#e6e8dc",.3),u(V,324,B?164.5:165.5,C-4,1.4,.7,1.4,"#343b36"),d(V,[[318,159,C-6],[314,156,C-8],[315,151,C-5]],"#655f4f",.85)}yt("personal-camera",434,"#454d43"),yt("personal-ccd",453,"#c7cbc2",!0);let P=new Gt;P.name="wardrobe",t.add(P),f(l(P,1008,91,584,178,182,108,"#cbb28e",2,"wardrobe-body"),.26),l(P,1008,184,584,180,5,112,o.woodLight,1,"wardrobe-cornice");for(let[M,C]of[964,1052].entries()){f(l(P,C,92,528.8,85,174,3,"#d5bd98",1.1,`wardrobe-door-${M+1}`),.21),l(P,C+(M?-33:33),96,525.7,2.3,27,3,"#817760",.5);for(let F of[-30,26])d(P,[[C+F,14,526.8],[C+F+.5,168,526.8]],"#b99c73",.16)}let st=new Gt;st.name="five-level-cupboard",t.add(st),l(st,887,67,571,64,134,76,"#c6b18c",.7,"bed-side-cupboard-body"),l(st,887,136,571,64,4,78,o.woodLight,.5);for(let M=0;M<5;M++)f(l(st,887,13+M*25,532,58,21,2,"#dbc69e",.3,`bed-side-cupboard-front-${M+1}`),.18),l(st,887,16+M*25,530,12,2,2,o.ink,.3);for(let M of[900,930]){let C=l(t,M,3,624,17,6,28,"#c0a487",4);C.rotation.y=-.12}return y(s.south,"\u4E00\u70B9\u4E00\u70B9\uFF0C\u628A\u65E5\u5B50\u586B\u6EE1\u3002",893,174,639,164,24,Math.PI,"#8c9278",o.paper),t.userData.layoutVersion="plan-corrected-3d",ox(t),{group:t,interactables:e,floors:n,walls:s}}function Td(i){let t=Qe(i),e=Zr(t),n=Jr(t),s=new Gt;s.name="player",s.userData.player=!0,s.userData.avatar=t;let r={skin:new dn({color:e.skinTone,roughness:1}),hair:new dn({color:e.hairColor,roughness:1}),sweater:new dn({color:e.shirtColor,roughness:1}),stripe:new dn({color:"#eae6c9",roughness:1}),pants:new dn({color:"#7c897d",roughness:1}),shoes:new dn({color:"#655b4b",roughness:1}),face:new He({color:"#493d35"}),mouth:new He({color:"#8f594b"}),cheeks:new He({color:"#d48f79",transparent:!0,opacity:.48})},a=(y,T,S,R,E,_,w=s)=>{let N=new ge(new ki(1,16,12),T);return N.name=y,N.position.set(S,R,E),N.scale.set(..._),N.castShadow=!0,w.add(N),N},o=(y,T,S,R,E,_,w,N=s)=>{let I=new ge(new xn(y,T,S),R);return I.position.set(E,_,w),I.castShadow=!0,N.add(I),I},c=(y,T,S,R,E)=>{let _=new Cs(T.map(N=>new L(...N))),w=new ge(new Mr(_,12,S,5,!1),R);return w.name=y,E.add(w),w},l=new Gt,h=new Gt;l.name="player-left-leg",h.name="player-right-leg",l.position.set(-4.6,13,0),h.position.set(4.6,13,0),s.add(l,h),o(6.7,10,7,r.pants,0,-4.5,0,l),o(6.7,10,7,r.pants,0,-4.5,0,h),a("left-shoe",r.shoes,0,-10.5,2.5,[4.5,2.34,6.75],l),a("right-shoe",r.shoes,0,-10.5,2.5,[4.5,2.34,6.75],h);let u=new Gt;u.name="player-body",s.add(u),a("player-shirt",r.sweater,0,22,0,[10.45,11.88,7.26],u);for(let y of[17,22,27]){let T=new ge(new br(8.7,.9,4,22),r.stripe);T.rotation.x=Math.PI/2,T.scale.set(1,.72,1),T.position.set(0,y,.15),u.add(T)}let d=a("player-left-arm",r.sweater,-11.1,22,0,[3.4,7,3.8],u),f=a("player-right-arm",r.sweater,11.1,22,0,[3.4,7,3.8],u);a("left-hand",r.skin,-11.3,15,0,[2.55,2.76,2.7],u),a("right-hand",r.skin,11.3,15,0,[2.55,2.76,2.7],u),a("neck",r.skin,0,33,0,[3.4,4.42,3.4],u);let m=new Gt;if(m.name=`hair-${t.hairStyle}`,u.add(m),a("hair-crown",r.hair,0,45,-1.4,[n.faceWidth+2.3,13.35,11.1],m),t.hairStyle!=="short"){let y=t.hairStyle==="long";a("hair-back",r.hair,0,y?35:40,-3.6,[n.faceWidth+2,y?20:13.5,8.3],m);for(let T of[-1,1])a(`hair-side-${T}`,r.hair,T*(n.faceWidth+.7),y?35:39.8,2.5,[2.65,y?16.7:9.8,4.3],m)}a("player-face",r.skin,0,42,4.5,[n.faceWidth,n.faceHeight,7.3],u);for(let y of[-1,1])a(`ear-${y}`,r.skin,y*n.faceWidth,42,2,[1.45,2.4,1.95],u);[-8,-4,.5,5.5,9].forEach((y,T)=>a(`hair-fringe-${T}`,r.hair,y*n.faceWidth/10.8,51-T%2*1.4,9,[4.05,t.hairStyle==="short"?4.9:4.2,3.2],m));for(let[y,T]of[["left",-1],["right",1]]){let S=new Gt;if(S.name=`eye-${y}`,S.position.set(T*n.eyeDistance,43,11.65),u.add(S),t.eyeShape==="smile"){let E=n.eyeRadius;c("eye-smile",[[-E,0,0],[0,E*.55,.07],[E,0,0]],.25,r.face,S)}else{let E=t.eyeShape==="almond";a(`eye-${t.eyeShape}`,r.face,0,0,0,[n.eyeRadius*(E?1.3:.8),n.eyeRadius*(E?.65:1.15),.36],S),a("eye-light",r.stripe,-.2,.35,.32,[.18,.21,.08],S)}let R=c(`brow-${y}`,[[-1.7,0,0],[0,.3,.05],[1.7,0,0]],.24,r.hair,u);R.position.set(T*n.eyeDistance,46.2,11.15),R.rotation.z=T*n.browTilt}a("player-nose",r.skin,0,40.6,11.8,[.85*n.noseScale,1.1*n.noseScale,1.25*n.noseScale],u);for(let y of[-1,1])a(`cheek-${y}`,r.cheeks,y*6.2,39.6,11.1,[2.05,.9,.15],u);let x=new Gt;x.name=`mouth-${t.mouthStyle}`,x.position.set(0,37.7,11.25),u.add(x);let g=n.mouthWidth/2;t.mouthStyle==="open"?(a("mouth-opening",r.mouth,0,0,0,[g,1.55,.26],x),a("mouth-teeth",r.stripe,0,.72,.22,[g*.7,.35,.12],x)):c("mouth-line",[[-g,0,0],[0,t.mouthStyle==="smile"?-1:-.05,.1],[g,0,0]],.23,r.mouth,x);let p=new ge(new gr(16,28),new He({color:"#625c43",transparent:!0,opacity:.13,depthWrite:!1}));return p.rotation.x=-Math.PI/2,p.scale.y=.65,p.position.y=.7,s.add(p),s.userData.parts={leftLeg:l,rightLeg:h,body:u,leftArm:d,rightArm:f},s}var Zc={home:{name:"\u5C0F\u5C4B\u5168\u666F",target:[580,45,389],offset:[0,2200,1e3],extent:750},top:{name:"\u4FEF\u89C6\u5E03\u5C40",target:[580,0,389],offset:[0,1800,.1],extent:660},projection:{name:"\u6295\u5F71\u8FD9\u9762\u5899",target:[665,86,219],offset:[40,500,1e3],extent:690},memories:{name:"\u6C99\u53D1\u80CC\u540E\u7684\u56DE\u5FC6",target:[625,76,505],offset:[-30,570,-1050],extent:690},entrance:{name:"\u95E8\u65C1\u7684\u7EAA\u5FF5",target:[905,92,355],offset:[-950,535,250],extent:650},bookshelf:{name:"\u4E66\u67B6\u4E0E\u76F8\u673A",target:[338,95,516],offset:[450,260,120],extent:310},window:{name:"\u7535\u8111\u65C1\u7684\u7A97\u6237\u4E0E\u95E8",target:[291,105,257],offset:[650,260,380],extent:430}},ai=null;function Ad({container:i,state:t={},onFloorClick:e=()=>{},onHotspotClick:n=()=>{},onViewChange:s=()=>{},onReady:r=()=>{},onError:a=()=>{}}){let o,c,l,h,u,d,f,m,x=!1,g=!1,p=ai?.view||"home",y=1,T=null,S=0,R=null,E=null,_=!!ai?.userOrbit,w=!1,N=ai?.navigationMode||"pan",I=new Set,k=null,H={x:905,y:430},q="down",D=!1,Z=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,J=new AbortController,z=new Rr,Y=new Et,W=at=>new L(...at);function j(){if(k!==null)return k;let at=Zc[p];return p==="top"?Math.max(at.extent,1120/y):y<1.1?{home:820,projection:530,memories:480,entrance:430,bookshelf:365,window:430}[p]||800:["bookshelf","window"].includes(p)?Math.max(at.extent,350/y):Math.max(at.extent,1210/y)}function Q(at,ut){let pt=i.getBoundingClientRect();if(!u||!pt.width||!pt.height)return{position:at,target:ut,extent:j()};u.group.updateMatrixWorld(!0);let Tt=new Tn().setFromObject(u.group),Kt=new Si(-1,1,1,-1,.5,8e3);Kt.position.copy(at),Kt.lookAt(ut),Kt.updateMatrixWorld(!0);let Wt=new Et(1/0,1/0),ce=new Et(-1/0,-1/0);for(let C of[Tt.min.x,Tt.max.x])for(let F of[Tt.min.y,Tt.max.y])for(let B of[Tt.min.z,Tt.max.z]){let V=new L(C,F,B).applyMatrix4(Kt.matrixWorldInverse);Wt.x=Math.min(Wt.x,V.x),Wt.y=Math.min(Wt.y,V.y),ce.x=Math.max(ce.x,V.x),ce.y=Math.max(ce.y,V.y)}let O=y<1.1,_e=O?18:35,ie=_e,ae=document.querySelector(".room-view-controls")?.getBoundingClientRect(),dt=document.querySelector(".scene-bottom")?.getBoundingClientRect(),ve=document.querySelector(".scene-top")?.getBoundingClientRect(),Ft=ae&&(ae.top+ae.bottom)/2<pt.top+pt.height/2,zt=Math.max(O?100:70,ve?ve.bottom-pt.top+12:0,Ft?ae.bottom-pt.top+12:0),A=Math.max(O?180:60,dt?pt.bottom-dt.top+12:0),v=Math.max(pt.width*.4,pt.width-_e-ie),G=Math.max(pt.height*.35,pt.height-zt-A),ct=Math.max((ce.y-Wt.y)*pt.height/G,(ce.x-Wt.x)*pt.height/v)*1.025,rt=(_e+pt.width-ie)/2,xt=(zt+pt.height-A)/2,gt=(rt/pt.width*2-1)*ct*y/2,tt=(1-xt/pt.height*2)*ct/2,it=(Wt.x+ce.x)/2-gt,yt=(Wt.y+ce.y)/2-tt,P=new L().setFromMatrixColumn(Kt.matrixWorld,0),st=new L().setFromMatrixColumn(Kt.matrixWorld,1),M=P.multiplyScalar(it).add(st.multiplyScalar(yt));return{position:at.clone().add(M),target:ut.clone().add(M),extent:ct}}function mt(){if(!o||g)return;let at=i.getBoundingClientRect();if(!at.width||!at.height)return;let ut=T;y=at.width/at.height,T=y,o.setSize(at.width,at.height,!1),_||(k=null);let pt=j();l.left=-pt*y/2,l.right=pt*y/2,l.top=pt/2,l.bottom=-pt/2,l.updateProjectionMatrix(),ut!==null&&!_&&nt(p,!0),ft(S)}function Ot(){if(!u?.walls)return;let at=l.position.clone().sub(h.target),ut=!_&&p==="top"||Math.abs(at.y)/Math.max(1,Math.hypot(at.x,at.z))>4;u.walls.north&&(u.walls.north.visible=!ut&&at.z>-50),u.walls.south&&(u.walls.south.visible=!ut&&at.z<50),u.walls.west&&(u.walls.west.visible=!ut&&at.x>-50),u.walls.east&&(u.walls.east.visible=!ut&&at.x<50)}function nt(at,ut=!1){if(!Zc[at]||!l)return!1;let pt=Zc[at];p=at,_=!1;let Tt=W(pt.target);y<1.1&&p==="projection"&&Tt.set(600,118,153),y<1.1&&p==="memories"&&Tt.set(390,117,621),y<1.1&&p==="entrance"&&Tt.set(1095,125,310);let Kt=Tt.clone().add(W(pt.offset));if(k=null,p==="top"||p==="home"){let ce=Q(Kt,Tt);Kt=ce.position,Tt=ce.target,k=ce.extent}l.zoom=1,ut||Z?(h.target.copy(Tt),l.position.copy(Kt),R=null):R={start:performance.now(),fromPosition:l.position.clone(),fromTarget:h.target.clone(),toPosition:Kt,toTarget:Tt};let Wt=j();return l.left=-Wt*y/2,l.right=Wt*y/2,l.top=Wt/2,l.bottom=-Wt/2,l.updateProjectionMatrix(),i.dataset.view=at,o.domElement.dataset.view=at,s(at),ft(performance.now()),!0}function ft(at=performance.now()){if(!(!x||g||w)){if(S=at,R){let ut=Math.max(0,Math.min(1,(at-R.start)/760)),pt=ut*ut*(3-2*ut);l.position.lerpVectors(R.fromPosition,R.toPosition,pt),l.position.y+=Math.sin(ut*Math.PI)*100,h.target.lerpVectors(R.fromTarget,R.toTarget,pt),ut===1&&(R=null)}h.update(),Ot(),o.render(c,l),o.domElement.dataset.playerX=H.x.toFixed(2),o.domElement.dataset.playerY=H.y.toFixed(2),o.domElement.dataset.facing=q,o.domElement.dataset.walking=String(D),o.domElement.dataset.calls=String(o.info.render.calls),o.domElement.dataset.triangles=String(o.info.render.triangles),o.domElement.dataset.visibleWalls=Object.entries(u?.walls||{}).filter(([,ut])=>ut.visible).map(([ut])=>ut).join(","),o.domElement.dataset.cameraZoom=l.zoom.toFixed(3),o.domElement.dataset.targetX=h.target.x.toFixed(2),o.domElement.dataset.targetY=h.target.y.toFixed(2),o.domElement.dataset.targetZ=h.target.z.toFixed(2),o.domElement.dataset.cameraX=l.position.x.toFixed(2),o.domElement.dataset.cameraY=l.position.y.toFixed(2),o.domElement.dataset.cameraZ=l.position.z.toFixed(2),o.domElement.dataset.navigationMode=N,o.domElement.dataset.manualCamera=String(_)}}function Rt(at){if(!h||!["pan","rotate"].includes(at))return!1;N=at,h.mouseButtons={LEFT:at==="pan"?tn.PAN:tn.ROTATE,MIDDLE:tn.DOLLY,RIGHT:at==="pan"?tn.ROTATE:tn.PAN},h.touches={ONE:at==="pan"?pn.PAN:pn.ROTATE,TWO:at==="pan"?pn.DOLLY_PAN:pn.DOLLY_ROTATE},document.querySelectorAll("[data-camera-mode]").forEach(pt=>pt.setAttribute("aria-pressed",String(pt.dataset.cameraMode===at)));let ut=document.getElementById("camera-help");return ut&&(ut.textContent=at==="pan"?"\u62D6\u52A8\u5E73\u79FB \xB7 \u6EDA\u8F6E / \u53CC\u6307\u7F29\u653E":"\u62D6\u52A8\u65CB\u8F6C \xB7 \u6EDA\u8F6E / \u53CC\u6307\u7F29\u653E"),o.domElement.dataset.navigationMode=at,!0}function Dt(at){let ut={ArrowLeft:[-40,0],ArrowRight:[40,0],ArrowUp:[0,-40],ArrowDown:[0,40]};if(at.key==="Home"){at.preventDefault(),at.stopImmediatePropagation(),nt("home");return}if(!at.shiftKey||!ut[at.key])return;at.preventDefault(),at.stopImmediatePropagation();let[pt,Tt]=ut[at.key],Kt=(l.top-l.bottom)/l.zoom/Math.max(1,o.domElement.clientHeight);l.updateMatrixWorld();let Wt=new L().setFromMatrixColumn(l.matrixWorld,0).multiplyScalar(-pt*Kt).addScaledVector(new L().setFromMatrixColumn(l.matrixWorld,1),Tt*Kt);R=null,_=!0,l.position.add(Wt),h.target.add(Wt),ft(performance.now())}function Mt(at,ut="down",pt=!1,Tt=performance.now()){if(H={x:at.x,y:at.y},q=ut,D=pt,!d)return;d.position.set(at.x,0,at.y);let Kt={down:0,up:Math.PI,left:-Math.PI/2,right:Math.PI/2};d.rotation.y=Kt[ut]??0;let Wt=pt&&!Z?Math.sin(Tt/90):0,{leftLeg:ce,rightLeg:O,body:_e,leftArm:ie,rightArm:ae}=d.userData.parts;ce.rotation.x=Wt*.42,O.rotation.x=-Wt*.42,ie.rotation.x=-Wt*.12,ae.rotation.x=Wt*.12,_e.position.y=Math.abs(Wt)*1.4}function kt(at){if(!m||(m.visible=!!at,!at))return;let ut=u.interactables.find(pt=>pt.userData.hotspot===at);if(ut){let pt=new Tn().setFromObject(ut),Tt=pt.getCenter(new L);m.position.set(Tt.x,1.2,Tt.z),m.scale.set(Math.min(1.7,Math.max(.65,(pt.max.x-pt.min.x)/70)),Math.min(1.7,Math.max(.65,(pt.max.z-pt.min.z)/70)),1)}else m.visible=!1}function le(at){f&&(f.visible=!!at,at&&f.position.set(at.x,1.3,at.y))}function Ct(at){for(let ut=at;ut&&ut!==c;ut=ut.parent)if(ut.userData.hotspot)return ut.userData.hotspot;return null}function re(at){for(let ut=at;ut;ut=ut.parent)if(!ut.visible)return!1;return!0}function jt(at){if(I.delete(at.pointerId),I.size)return;if(!E||E.id!==at.pointerId||E.dragged||Math.hypot(at.clientX-E.x,at.clientY-E.y)>6){E=null;return}if(E=null,at.button>0||document.querySelector("dialog[open]"))return;let ut=o.domElement.getBoundingClientRect();Y.set((at.clientX-ut.left)/ut.width*2-1,-(at.clientY-ut.top)/ut.height*2+1),z.setFromCamera(Y,l);let pt=z.intersectObjects([u.group],!0).filter(Wt=>Wt.object.isMesh&&re(Wt.object));if(!pt.length)return;let Tt=pt[0],Kt=Ct(Tt.object);Kt?n(Kt):Tt.object.userData.floor&&e({x:Tt.point.x,y:Tt.point.z})}function $t(){if(x||g)return!1;try{o=new nl({antialias:!0,alpha:!1,powerPreference:"high-performance"}),o.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6)),o.outputColorSpace=Fe,o.toneMapping=Pr,o.toneMappingExposure=.92,o.shadowMap.enabled=!0,o.shadowMap.type=zi,o.domElement.className="room3d-canvas",o.domElement.setAttribute("role","img"),o.domElement.setAttribute("aria-label","\u53EF\u63A2\u7D22\u7684\u7ACB\u4F53\u5C0F\u5C4B\u3002\u62D6\u52A8\u5E73\u79FB\uFF0C\u5207\u6362\u65CB\u8F6C\u53EF\u8C03\u6574\u89D2\u5EA6\uFF1B\u6EDA\u8F6E\u6216\u53CC\u6307\u7F29\u653E\u3002\u65B9\u5411\u952E\u79FB\u52A8\u5C0F\u4EBA\uFF0CShift \u52A0\u65B9\u5411\u952E\u5E73\u79FB\uFF0CHome \u770B\u5168\u5C4B\uFF0C\u9760\u8FD1\u6309 E \u4E92\u52A8\u3002"),o.domElement.tabIndex=0,c=new cr,c.background=new Yt("#eeeadd"),c.add(new Tr("#fff8e8","#a3a891",1.6));let at=new Ls("#fff1d2",2.5);at.position.set(160,1100,140),at.target.position.set(550,0,420),at.castShadow=!0,at.shadow.mapSize.set(2048,2048),Object.assign(at.shadow.camera,{left:-800,right:800,top:800,bottom:-800,near:1,far:2200}),at.shadow.bias=-2e-4,at.shadow.normalBias=1.1,at.shadow.radius=3,c.add(at,at.target);let ut=new Ls("#e3e9df",.65);if(ut.position.set(1100,600,1100),c.add(ut),u=Ed(t),c.add(u.group),d=Td(t.character),c.add(d),Mt(H),f=new ge(new Ps(7.5,9,32),new He({color:"#738668",transparent:!0,opacity:.8,side:Ce,depthWrite:!1})),f.rotation.x=-Math.PI/2,f.visible=!1,f.name="walk-destination",c.add(f),m=new ge(new Ps(24,25,44),new He({color:"#7f926b",transparent:!0,opacity:.5,side:Ce,depthWrite:!1})),m.rotation.x=-Math.PI/2,m.visible=!1,c.add(m),l=new Si(-650,650,450,-450,.5,8e3),l.position.set(1400,1250,1500),h=new al(l,o.domElement),h.target.set(550,45,392),h.enableDamping=!0,h.dampingFactor=.09,h.minPolarAngle=1e-5,h.maxPolarAngle=Math.PI/2-.13,h.minZoom=.25,h.maxZoom=5,h.enablePan=!0,h.screenSpacePanning=!0,Rt(N),h.addEventListener("start",()=>{R=null}),i.replaceChildren(o.domElement),x=!0,mt(),ai?.userOrbit){l.position.copy(W(ai.position)),h.target.copy(W(ai.target)),l.zoom=ai.zoom,k=ai.extent;let pt=j();l.left=-pt*y/2,l.right=pt*y/2,l.top=pt/2,l.bottom=-pt/2,l.updateProjectionMatrix(),i.dataset.view=p,o.domElement.dataset.view=p,s(p)}else nt(p,!0);return o.domElement.addEventListener("pointerdown",pt=>{I.add(pt.pointerId),I.size===1?E={x:pt.clientX,y:pt.clientY,id:pt.pointerId,dragged:!1}:E&&(E.dragged=!0)},{signal:J.signal}),o.domElement.addEventListener("pointermove",pt=>{E&&I.has(pt.pointerId)&&(I.size>1||Math.hypot(pt.clientX-E.x,pt.clientY-E.y)>6)&&(E.dragged=!0,_=!0)},{signal:J.signal}),o.domElement.addEventListener("wheel",()=>{_=!0},{signal:J.signal}),o.domElement.addEventListener("pointerup",jt,{signal:J.signal}),o.domElement.addEventListener("pointercancel",pt=>{I.delete(pt.pointerId),E=null},{signal:J.signal}),o.domElement.addEventListener("keydown",Dt,{capture:!0,signal:J.signal}),document.querySelectorAll("[data-camera-mode]").forEach(pt=>pt.addEventListener("click",()=>Rt(pt.dataset.cameraMode),{signal:J.signal})),document.querySelector('[data-camera-action="reset"]')?.addEventListener("click",()=>nt("home"),{signal:J.signal}),o.domElement.addEventListener("webglcontextlost",pt=>{pt.preventDefault(),w=!0,a("\u753B\u9762\u6682\u65F6\u4F11\u606F\u4E86\uFF0C\u5237\u65B0\u4E00\u4E0B\u5C31\u80FD\u56DE\u5230\u5C0F\u5C4B\u3002")},{signal:J.signal}),o.domElement.addEventListener("webglcontextrestored",()=>{w=!1,i.querySelector(".scene-render-error")?.remove(),ft(performance.now()),r()},{signal:J.signal}),window.addEventListener("resize",mt,{signal:J.signal}),ft(performance.now()),r(),!0}catch{return o?.dispose(),a("\u8FD9\u4E2A\u6D4F\u89C8\u5668\u6682\u65F6\u65E0\u6CD5\u6253\u5F00\u7ACB\u4F53\u5C0F\u5C4B\uFF0C\u8BF7\u4F7F\u7528\u652F\u6301 WebGL \u7684\u6D4F\u89C8\u5668\u3002"),!1}}function fe(){if(g)return;l&&h&&(ai={view:p,position:l.position.toArray(),target:h.target.toArray(),extent:l.top-l.bottom,zoom:l.zoom,userOrbit:_,navigationMode:N,aspect:y}),g=!0,x=!1,J.abort(),h?.dispose();let at=new Set,ut=new Set,pt=new Set;c?.traverse(Tt=>{Tt.geometry&&at.add(Tt.geometry),(Array.isArray(Tt.material)?Tt.material:Tt.material?[Tt.material]:[]).forEach(Wt=>{ut.add(Wt),Object.values(Wt).forEach(ce=>{ce?.isTexture&&pt.add(ce)})})}),pt.forEach(Tt=>Tt.dispose()),at.forEach(Tt=>Tt.dispose()),ut.forEach(Tt=>Tt.dispose()),o?.dispose(),o?.forceContextLoss(),o?.domElement.remove()}function Se(at,ut){if(!l||!h)return{x:at,y:ut};let pt=h.target.clone().sub(l.position);pt.y=0,pt.lengthSq()<1e-4?pt.set(0,0,-1):pt.normalize();let Kt=new L().crossVectors(pt,new L(0,1,0)).normalize().multiplyScalar(at).addScaledVector(pt,-ut);return{x:Kt.x,y:Kt.z}}return{mount:$t,destroy:fe,resize:mt,render:ft,setPlayer:Mt,setNearby:kt,setDestination:le,setView:nt,screenDirection:Se,getView:()=>p,getDiagnostics:()=>({view:p,mounted:x,contextLost:w,camera:l?.position.toArray(),target:h?.target.toArray(),calls:o?.info.render.calls,triangles:o?.info.render.triangles,visibleWalls:u?.walls?Object.fromEntries(Object.entries(u.walls).map(([at,ut])=>[at,ut.visible])):{}})}}var Kc=6,cl=6,q1=Object.freeze({x:25,y:75,width:1115,height:610}),lx=[{x:304,y:145,width:793,height:493},{x:65,y:145,width:212,height:243},{x:268,y:255,width:46,height:100},{x:65,y:406,width:212,height:228},{x:208,y:378,width:56,height:40},{x:90,y:378,width:55,height:40}],Dd=[{id:"bookshelf-balcony-wall",x:285.5,y:355,width:11,height:286.5},{id:"computer-window",x:285.5,y:135,width:11,height:120},{id:"balcony-door-open",x:193.5,y:257,width:92,height:4},{id:"balcony-door-north-jamb",x:284.5,y:255,width:13,height:4},{id:"balcony-door-south-jamb",x:284.5,y:351,width:13,height:4},{id:"bathroom-door-open",x:259,y:402,width:4,height:52},{id:"toilet-door-open",x:83,y:402,width:8,height:52},{id:"toilet-door-jamb-left",x:90,y:394,width:3,height:12},{id:"toilet-door-jamb-right",x:142,y:394,width:3,height:12},{id:"bathroom-door-jamb-left",x:208,y:394,width:3,height:12},{id:"bathroom-door-jamb-right",x:261,y:394,width:3,height:12},{id:"desk",x:323.5,y:149.5,width:391,height:57},{id:"desk-left-chair",x:393,y:233,width:42,height:37.5},{id:"desk-right-chair",x:608,y:233,width:42,height:37.5},{id:"fridge",x:739.5,y:139.5,width:81,height:72},{id:"shelf",x:844,y:141.5,width:90,height:65},{id:"shoe-cabinet",x:1064,y:270,width:36,height:82},{id:"bed",x:650,y:366,width:205,height:267},{id:"sofa",x:296.5,y:520.5,width:187,height:121},{id:"coffee-table",x:327,y:399.5,width:132,height:77},{id:"bookshelf",x:296.5,y:480.5,width:35,height:40},{id:"nightstand",x:565,y:506,width:65,height:86},{id:"projector",x:574,y:448,width:42,height:43},{id:"lamp",x:573,y:599,width:34,height:34},{id:"wardrobe",x:919,y:529,width:178,height:109},{id:"storage",x:855,y:533,width:64,height:76},{id:"balcony-stand",x:78,y:320,width:37,height:65},{id:"washer",x:73.5,y:141,width:69,height:81},{id:"sink",x:187.5,y:137.5,width:75,height:55},{id:"toilet-divider",x:161,y:406,width:10,height:235.5},{id:"shower",x:196,y:432,width:65,height:111},{id:"toilet",x:92,y:447,width:41,height:70}],ll={plants:{id:"plants",name:"\u7ED9\u5C0F\u82B1\u6D47\u6D47\u6C34",x:135,y:350,radius:40},balcony:{id:"balcony",name:"\u5728\u9633\u53F0\u5439\u5439\u98CE",x:176,y:270,radius:35},desk:{id:"desk",name:"\u5750\u4E0B\u6765\u5199\u4E00\u70B9\u4ECA\u5929",x:536,y:232,radius:44},cooking:{id:"cooking",name:"\u4ECA\u5929\u505A\u70B9\u597D\u5403\u7684",x:358,y:232,radius:36},vase:{id:"vase",name:"\u770B\u770B\u684C\u89D2\u7684\u82B1",x:501,y:232,radius:34},fridge:{id:"fridge",name:"\u770B\u770B\u51B0\u7BB1\u4E0A\u7684\u56DE\u5FC6",x:780,y:240,radius:34},tickets:{id:"tickets",name:"\u6253\u5F00\u65C5\u884C\u7EAA\u5FF5\u7968\u76D2",x:1044,y:359,radius:37},bookshelf:{id:"bookshelf",name:"\u7FFB\u7FFB\u4E66\u67B6\u91CC\u7684\u6545\u4E8B",x:355,y:502,radius:31},puzzle:{id:"puzzle",name:"\u770B\u770B\u6C99\u53D1\u5899\u4E0A\u7684\u62FC\u56FE",x:500,y:624,radius:34},plush:{id:"plush",name:"\u770B\u770B\u6C99\u53D1\u4E0A\u7684\u5C0F\u5BB6\u4F19",x:500,y:570,radius:32},bed:{id:"bed",name:"\u6536\u597D\u4ECA\u5929\uFF0C\u7761\u4E2A\u597D\u89C9",x:877,y:470,radius:38},switch:{id:"switch",name:"\u63D2\u4E0A\u5361\u5E26\uFF0C\u4E00\u8D77\u73A9\u5427",x:640,y:520,radius:31},door:{id:"door",name:"\u51FA\u95E8\u8D70\u8D70",x:1034,y:415,radius:43}},cx=(i,t,e)=>i>=e.x&&t>=e.y&&i<=e.x+e.width&&t<=e.y+e.height;function Vs(i,t,e=Kc){return!Number.isFinite(i)||!Number.isFinite(t)||[[i,t],[i-e,t],[i+e,t],[i,t-e],[i,t+e]].some(([s,r])=>!lx.some(a=>cx(s,r,a)))?!1:!Dd.some(s=>i+e>s.x&&i-e<s.x+s.width&&t+e>s.y&&t-e<s.y+s.height)}function Rd(i,t,e){let n={x:i.x,y:i.y},s=Math.max(1,Math.ceil(Math.hypot(t,e)/3));for(let r=0;r<s;r++)Vs(n.x+t/s,n.y)&&(n.x+=t/s),Vs(n.x,n.y+e/s)&&(n.y+=e/s);return n}var hl={x:64,y:142},In=173,jc=84,Vr;function Nd(){if(Vr)return Vr;Vr=new Uint8Array(In*jc);for(let i=0;i<jc;i++)for(let t=0;t<In;t++)Vr[i*In+t]=Number(Vs(hl.x+t*cl,hl.y+i*cl));return Vr}function Qc(i){return{x:hl.x+i%In*cl,y:hl.y+Math.floor(i/In)*cl}}function Cd(i){let t=Nd(),e=-1,n=1/0;for(let s=0;s<t.length;s++)if(t[s]){let r=Qc(s),a=(r.x-i.x)**2+(r.y-i.y)**2;a<n&&(n=a,e=s)}return e}function Pd(i,t){for(let n of Dd){let s=0,r=1;for(let[a,o,c]of[["x",n.x,n.width],["y",n.y,n.height]]){let l=o-Kc+1e-7,h=o+c+Kc-1e-7,u=t[a]-i[a];if(Math.abs(u)<1e-9){if(i[a]<l||i[a]>h){s=1/0;break}}else{let d=(l-i[a])/u,f=(h-i[a])/u;s=Math.max(s,Math.min(d,f)),r=Math.min(r,Math.max(d,f))}}if(s<=r)return!1}let e=Math.max(1,Math.ceil(Math.hypot(t.x-i.x,t.y-i.y)));for(let n=1;n<=e;n++)if(!Vs(i.x+(t.x-i.x)*n/e,i.y+(t.y-i.y)*n/e))return!1;return!0}function hx(i,t){if(!i||!t||![i.x,i.y,t.x,t.y].every(Number.isFinite))return[];let e=Nd(),n=Cd(i),s=Cd(t);if(n<0||s<0)return[];let r=new Int32Array(e.length).fill(-1),a=new Int32Array(e.length),o=0,c=1;for(a[0]=n,r[n]=n;o<c&&r[s]===-1;){let m=a[o++],x=m%In,g=Math.floor(m/In);for(let[p,y]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let T=x+p,S=g+y;if(T<0||S<0||T>=In||S>=jc)continue;let R=S*In+T;!e[R]||r[R]!==-1||p&&y&&(!e[g*In+T]||!e[S*In+x])||(r[R]=m,a[c++]=R)}}if(r[s]===-1)return[];let l=[];for(let m=s;m!==n;m=r[m])l.push(Qc(m));l.push(Qc(n));let h=l.reverse(),u=[],d=i,f=0;for(;f<h.length;){let m=f;for(;m+1<h.length&&Pd(d,h[m+1]);)m++;u.push(h[m]),d=h[m],f=m+1}return Vs(t.x,t.y)&&Pd(d,t)&&u.push({x:t.x,y:t.y}),u.filter((m,x)=>x||Math.hypot(m.x-i.x,m.y-i.y)>1)}function ux(i){let t=null,e=1/0;for(let n of Object.values(ll)){let s=Math.hypot(i.x-n.x,i.y-n.y);s<=n.radius&&s<e&&(e=s,t=n)}return t}var Jc={x:905,y:430},Id={ArrowUp:[0,-1],w:[0,-1],W:[0,-1],ArrowDown:[0,1],s:[0,1],S:[0,1],ArrowLeft:[-1,0],a:[-1,0],A:[-1,0],ArrowRight:[1,0],d:[1,0],D:[1,0]},Ld={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]};function Ud({container:i,state:t={},onInteract:e=()=>{},onNearby:n=()=>{},onMove:s=()=>{},onViewChange:r=()=>{},onError:a=()=>{}}){let o=null,c=0,l=0,h={...Jc},u=[],d=null,f="",m=new Set,x=null,g=null,p=!1,y=!1,T=!1,S="down",R=new AbortController,E={signal:R.signal},_=()=>y||!p||!!document.querySelector("dialog[open]");function w(){let z=ux(h),Y=z?.id||"";return Y!==f&&(f=Y,i.dataset.nearby=Y,o?.setNearby(Y||null),n(z)),z}function N(){m.clear(),x=null,g=null,u=[],d=null,T=!1,document.querySelectorAll("[data-move][data-pressed]").forEach(z=>z.removeAttribute("data-pressed")),o?.setDestination(null)}function I(){if(_())return!1;let z=w();return z?(N(),e(z.id),!0):!1}function k(z){if(_())return!1;let Y=hx(h,z);return Y.length?(u=Y,d=null,m.clear(),o?.setDestination(Y.at(-1)),!0):!1}function H(z){let Y=ll[z];return!Y||_()?!1:Math.hypot(h.x-Y.x,h.y-Y.y)<12?(N(),e(z),!0):k(Y)?(d=z,!0):!1}function q(z,Y){return o?.screenDirection?.(z,Y)||{x:z,y:Y}}function D(z=0){i.dataset.playerX=h.x.toFixed(2),i.dataset.playerY=h.y.toFixed(2),i.dataset.playerFacing=S,i.dataset.playerMoving=String(T),o?.setPlayer(h,S,T,z),w(),o?.render(z)}function Z(z){if(!p)return;let Y=l?Math.min(.04,(z-l)/1e3):0;if(l=z,T=!1,_())m.clear(),x=null;else{let W=0,j=0;for(let Q of m){let mt=Id[Q];mt&&(W+=mt[0],j+=mt[1])}if(x&&(W+=x[0],j+=x[1]),W||j){u=[],d=null,o?.setDestination(null);let Q=q(W,j);W=Q.x,j=Q.y;let mt=Math.hypot(W,j)||1;W=W/mt*126*Y,j=j/mt*126*Y}else if(u.length){let Q=u[0],mt=Math.hypot(Q.x-h.x,Q.y-h.y),Ot=126*Y;mt<=Ot+1?(W=Q.x-h.x,j=Q.y-h.y,u.shift()):(W=(Q.x-h.x)/mt*Ot,j=(Q.y-h.y)/mt*Ot)}if(W||j){let Q=Rd(h,W,j);T=Math.hypot(Q.x-h.x,Q.y-h.y)>.05,T?(S=Math.abs(W)>Math.abs(j)?W>0?"right":"left":j>0?"down":"up",h=Q,Jc={...h},s({...h})):u.length&&(u=[],d=null)}if(!u.length&&(o?.setDestination(null),d)){let Q=d;d=null,Math.hypot(h.x-ll[Q].x,h.y-ll[Q].y)<14&&(D(z),e(Q))}}D(z),c=requestAnimationFrame(Z)}function J(){if(p)return;p=!0,Vs(h.x,h.y)||(h={x:905,y:430});try{if(o=Ad({container:i,state:t,onFloorClick:k,onHotspotClick:H,onViewChange:r,onError:a}),o.mount()===!1){p=!1,o.destroy?.(),o=null;return}}catch(Y){p=!1,o?.destroy?.(),o=null,i.dataset.renderError="true",a(Y);return}document.addEventListener("keydown",Y=>{if(!(Y.target.closest("input,textarea,select,[contenteditable=true]")||_()||Y.ctrlKey||Y.metaKey||Y.altKey)){if(Id[Y.key])Y.preventDefault(),m.add(Y.key);else if((Y.key==="e"||Y.key==="E"||Y.key===" ")&&!Y.repeat){if(Y.key===" "&&Y.target.closest("button,[data-hotspot],a[href]"))return;Y.preventDefault(),I()}}},E),document.addEventListener("keyup",Y=>{m.delete(Y.key)},E),window.addEventListener("blur",N,E),window.addEventListener("resize",()=>o?.resize(),E),document.addEventListener("visibilitychange",()=>{document.hidden&&N()},E),document.addEventListener("pointerdown",Y=>{let W=Y.target.closest("[data-move]");if(!W||_())return;let j=Ld[W.dataset.move];j&&(Y.preventDefault(),u=[],d=null,x=j,g=Y.pointerId,W.setAttribute("data-pressed","true"),W.setPointerCapture?.(Y.pointerId))},E),document.addEventListener("click",Y=>{let W=Y.target.closest("[data-move]");if(!W||Y.detail!==0||_())return;let j=Ld[W.dataset.move];if(!j)return;let Q=q(j[0],j[1]),mt=Math.hypot(Q.x,Q.y)||1,Ot=Rd(h,Q.x/mt*22,Q.y/mt*22);Math.hypot(Ot.x-h.x,Ot.y-h.y)>1&&k(Ot)},E);let z=Y=>{g===Y.pointerId&&(x=null,g=null,document.querySelectorAll("[data-move][data-pressed]").forEach(W=>W.removeAttribute("data-pressed")))};document.addEventListener("pointerup",z,E),document.addEventListener("pointercancel",z,E),f="__initial__",D(),c=requestAnimationFrame(Z)}return{mount:J,destroy(){p=!1,cancelAnimationFrame(c),R.abort(),Jc={...h},o?.destroy(),o=null,n(null)},getPosition:()=>({...h}),walkTo:k,walkToHotspot:H,interact:I,pause(){y=!0,N()},resume(){y=!1,l=0},resize(){o?.resize()},setView(z){return o?.setView(z)},getView:()=>o?.getView()||"home",getDiagnostics:()=>({...o?.getDiagnostics?.(),player:{...h,facing:S,moving:T},nearby:f,pathLength:u.length})}}var Od=i=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function Fd(i,t=!1){let e=Qe(i),n=Zr(e),s=Jr(e),r=s.faceWidth,a=s.faceHeight,o=e.hairStyle==="long"?-11:e.hairStyle==="bob"?-26:-32,c=`<path d="M${-r-2}-40 Q${-r-3}-56 0-56 Q${r+4}-56 ${r+2}-40 L${r+2} ${o} Q0 ${o+6} ${-r-2} ${o}Z" fill="${n.hairColor}" stroke="#625342" stroke-width=".8"/>`,l=`<path d="M-4-29v9h8v-9" fill="${n.skinTone}" stroke="#8b715a" stroke-width=".6"/>
    <path d="M-9-22q-7 3-9 20l5 1 5-14m17-7q7 3 9 20l-5 1-5-14" fill="${n.shirtColor}" stroke="#756d59" stroke-width=".8"/>
    <path d="M-18-2q-1 6 2 6 4-1 3-5m31-1q1 6-2 6-4-1-3-5" fill="${n.skinTone}" stroke="#8b715a" stroke-width=".6"/>
    <path d="M-10-23q10-4 20 0l3 27q-13 4-26 0Z" fill="${n.shirtColor}" stroke="#756d59" stroke-width=".9"/>
    <path d="M-10-15h20m-21 6h22m-22 6h22" stroke="#eee6cc" stroke-width="2"/>
    <path d="m-5-24 5 4 5-4" fill="none" stroke="#746f57" stroke-width=".8"/>`,h=t?`<path d="M-10 5h9l-1 15h-7Zm11 0h9l-1 15H2Z" fill="#7c897d" stroke="#657565" stroke-width=".7"/>
    <path d="M-9 18h7l2 5q-7 3-13 0Zm11 0h7l4 5q-7 3-13 0Z" fill="#655b4b" stroke="#534c40" stroke-width=".7"/>`:"",u=[-1,1].map(S=>`<ellipse cx="${S*r}" cy="-40" rx="1.9" ry="2.8" fill="${n.skinTone}" stroke="#8b715a" stroke-width=".6"/>`).join(""),d=`<ellipse data-part="face" cx="0" cy="-40" rx="${r}" ry="${a}" fill="${n.skinTone}" stroke="#8b715a" stroke-width=".8"/>`,f=`<path d="M${-r-1}-42 Q${-r-3}-56 0-56 Q${r+3}-56 ${r+1}-42 L${r-3}-43l-2-5-3 5-4-3-4 4-3-4-2 5Z" fill="${n.hairColor}" stroke="#625342" stroke-width=".8"/>
    <path d="M-7-51q6-4 12-1" fill="none" stroke="#d7bc94" stroke-width=".65" opacity=".5"/>`,m=e.hairStyle==="short"?"":[-1,1].map(S=>`<path d="M${S*(r-1)}-44 Q${S*(r+3)}-36 ${S*(r+1)} ${o} L${S*(r-3)} ${o-2} Q${S*r}-35 ${S*(r-1)}-44Z" fill="${n.hairColor}" stroke="#625342" stroke-width=".65"/>`).join(""),x=[-1,1].map(S=>{let R=S*s.eyeDistance,E=s.eyeRadius,_=e.eyeShape==="smile"?`<path d="M${R-E}-40q${E} ${-E*.9} ${E*2} 0" fill="none" stroke="#493d35" stroke-width=".65"/>`:`<ellipse cx="${R}" cy="-40" rx="${E*(e.eyeShape==="almond"?1.3:.8)}" ry="${E*(e.eyeShape==="almond"?.65:1.15)}" fill="#493d35"/><circle cx="${R-.25}" cy="-40.35" r=".18" fill="#fff8e9"/>`,w=`<path d="M-1.7 0q1.7-.65 3.4 0" transform="translate(${R} -44) rotate(${S*s.browTilt*180/Math.PI})" fill="none" stroke="${n.hairColor}" stroke-width=".75"/>`;return _+w}).join(""),g=`<path data-part="nose" d="M${-.45*s.noseScale} -38.5l${-.2*s.noseScale} ${1.9*s.noseScale}q${.7*s.noseScale} ${.7*s.noseScale} ${1.3*s.noseScale} 0" fill="none" stroke="#a17257" stroke-width=".65"/>`,p=s.mouthWidth/2,y=e.mouthStyle==="open"?`<ellipse cx="0" cy="-33.5" rx="${p}" ry="1.7" fill="#8f594b"/><path d="M${-p*.65} -34h${p*1.3}" stroke="#fff2d9" stroke-width=".7"/>`:`<path d="M${-p} -34q${p} ${e.mouthStyle==="smile"?2:0} ${p*2} 0" fill="none" stroke="#8f594b" stroke-width=".75"/>`;return`<g data-hair="${e.hairStyle}" data-face="${e.faceShape}" stroke-linejoin="round" stroke-linecap="round">${c}${h}${l}${u}${d}${f}${m}${x}${g}<ellipse cx="-6.6" cy="-36.5" rx="1.9" ry=".85" fill="#d48f79" opacity=".5"/><ellipse cx="6.6" cy="-36.5" rx="1.9" ry=".85" fill="#d48f79" opacity=".5"/>${y}</g>`}function Bd(i){let t=Qe(i),e=Od(t.name);return`<svg class="player-portrait" viewBox="-24 -59 48 48" width="46" height="46" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${e}\u7684\u5C0F\u4EBA\u5934\u50CF"><title>${e}\u7684\u5C0F\u4EBA\u5934\u50CF</title>${Fd(t)}</svg>`}function th(i){let t=Qe(i),e=Od(t.name);return`<svg class="character-preview-art" viewBox="-32 -64 64 94" width="256" height="376" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${e}\u7684\u89D2\u8272\u9884\u89C8"><title>${e}\u7684\u89D2\u8272\u9884\u89C8</title><ellipse cx="0" cy="24" rx="19" ry="3.5" fill="#796b52" opacity=".12"/>${Fd(t,!0)}</svg>`}var Vd="little-days-save-v1",dx=document.getElementById("app"),Ye=document.getElementById("game-dialog"),gl=document.getElementById("dialog-content"),_t=yl(),Ai="";try{let i=localStorage.getItem(Vd);i&&(_t=ts(JSON.parse(i)))}catch{Ai="\u4E0A\u6B21\u7684\u5B58\u6863\u6682\u65F6\u6CA1\u6709\u6253\u5F00\u3002\u53EF\u4EE5\u5728\u8BBE\u7F6E\u4E2D\u5BFC\u5165\u5907\u4EFD\uFF0C\u6216\u5148\u901B\u901B\u623F\u95F4\u3002"}var Ln="home",Xs="all",Ze=null,Dn="shape",ci="",dl="date",Xr="flowers",Yi=[3,1,6,0,7,5,2,4,8],Zi=-1,pl=!1,fl="island",kd,_l,Vn=!1,Gn,zd,fx=0,Nn=null,oi=null,rn=null,px="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(Gs()),Ee=(i="")=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function ml(){try{return localStorage.setItem(Vd,JSON.stringify(_t)),Ai="",!0}catch{return Ai="\u6D4F\u89C8\u5668\u6682\u65F6\u65E0\u6CD5\u4FDD\u5B58\u3002\u8BF7\u5728\u8BBE\u7F6E\u91CC\u5BFC\u51FA\u5B58\u6863\uFF0C\u7559\u4E0B\u4ECA\u5929\u7684\u56DE\u5FC6\u3002",!1}}function li(i){let t=document.getElementById("toast");clearTimeout(kd),t.textContent=i,t.classList.add("visible"),kd=setTimeout(()=>t.classList.remove("visible"),4500)}function Ws(i,t){let e=vl(_t,i);return e.success&&(_t=e.state,ml(),Wn()),li(Ai||e.message),t&&e.success&&sn(t),e.success}function mx(){return`<header class="site-header">
    <button class="wordmark" data-page="home" aria-label="\u56DE\u5230\u623F\u95F4">${Ut("home")}<span>\u6211\u4EEC\u7684\u623F\u95F4</span></button>
    <nav class="main-nav" aria-label="\u4E3B\u8981\u5BFC\u822A">${[["home","\u56DE\u5230\u623F\u95F4","home"],["collection","\u6536\u85CF\u56FE\u9274","collection"]].map(([i,t,e])=>`<button class="nav-link ${Ln===i?"active":""}" data-page="${i}" ${Ln===i?'aria-current="page"':""}>${Ut(e)}<span>${t}</span></button>`).join("")}</nav>
    <div class="header-tools"><span class="coin-count" aria-label="${_t.coins} \u679A\u751F\u6D3B\u5E01">${Ut("coin")}<span>${_t.coins}</span></span><button class="icon-button music-button ${Vn?"on":""}" data-action="music" aria-label="${Vn?"\u6682\u505C\u80CC\u666F\u97F3\u4E50":"\u64AD\u653E\u80CC\u666F\u97F3\u4E50"}" title="${Vn?"\u6682\u505C\u97F3\u4E50":"\u64AD\u653E\u8F7B\u67D4\u7684\u80CC\u666F\u97F3\u4E50"}">${Ut(Vn?"music":"mute")}</button><button class="icon-button" data-modal="settings" aria-label="\u8BBE\u7F6E\u4E0E\u5B58\u6863">${Ut("settings")}</button></div>
  </header>`}function gx(){return`<main class="exploration-scene" aria-label="\u5168\u5C4F\u63A2\u7D22\u6211\u4EEC\u7684\u5C0F\u5C4B">
    <h1 class="sr-only">\u6211\u4EEC\u7684\u623F\u95F4</h1>
    <div class="exploration-map ${_t.projectorOn?"projecting":""}" id="room-canvas" aria-label="\u7ACB\u4F53\u623F\u95F4\u5730\u56FE\uFF0C\u62D6\u52A8\u5E73\u79FB\uFF0C\u70B9\u51FB\u5730\u9762\u884C\u8D70\uFF1B\u65B9\u5411\u952E\u6216 WASD \u79FB\u52A8\u5C0F\u4EBA"><p class="scene-loading" role="status">\u6B63\u5728\u6253\u5F00\u7ACB\u4F53\u5C0F\u5C4B\u2026</p></div>
    <header class="scene-hud scene-top"><div class="room-presence"><button class="resident-profile" data-modal="avatar" aria-label="${_t.character?"\u7F16\u8F91\u4EBA\u7269":"\u521B\u5EFA\u4EBA\u7269"}">${Bd(_t.character)}<span><strong>${Ee(_t.character?.name||"\u521B\u5EFA\u4EBA\u7269")}</strong><small id="scene-location">\u6211\u4EEC\u7684\u623F\u95F4</small></span><span class="profile-edit" aria-hidden="true">${Ut("edit")}</span></button><span class="room-day">${Ut("sun")}<span>\u7B2C ${_t.day} \u5929<small>\u521D\u590F \xB7 \u6674</small></span></span></div>
      <nav class="scene-tools" aria-label="\u623F\u95F4\u83DC\u5355"><button class="hud-button" data-modal="today" aria-label="\u4ECA\u65E5\u7684\u5C0F\u4E8B">${Ut("edit")}<span>\u4ECA\u65E5</span></button><button class="hud-button" data-page="collection" aria-label="\u6536\u85CF\u56FE\u9274">${Ut("collection")}<span>\u6536\u85CF</span></button><button class="hud-button" data-modal="settings" aria-label="\u8BBE\u7F6E\u4E0E\u5B58\u6863">${Ut("settings")}<span>\u8BBE\u7F6E</span></button></nav>
    </header>
    <footer class="scene-hud scene-bottom"><div class="walk-help"><small class="desktop-movement-hint"><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd><span>\u79FB\u52A8 \xB7 \u70B9\u51FB\u7269\u4EF6\u4E92\u52A8</span></small><small class="touch-movement-hint">\u70B9\u51FB\u5730\u9762\u8D70\u8D70</small></div>
      <nav class="room-view-controls" aria-label="\u623F\u95F4\u89C6\u89D2"><div class="room-camera-controls" role="group" aria-label="\u79FB\u52A8\u623F\u95F4\u89C6\u89D2"><button data-camera-mode="pan" aria-pressed="true" title="\u62D6\u52A8\u5E73\u79FB\u623F\u95F4"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3"/></svg><span>\u5E73\u79FB</span></button><button data-camera-mode="rotate" aria-pressed="false" title="\u62D6\u52A8\u65CB\u8F6C\u623F\u95F4"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.5 8a8 8 0 1 0 .2 7M19.5 3.5V8H15M8 12l4-3 4 3-4 3Z"/></svg><span>\u65CB\u8F6C</span></button><button data-camera-action="reset" title="\u5B8C\u6574\u67E5\u770B\u623F\u95F4"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5M8 13l4-4 4 4v5H8Z"/></svg><span>\u770B\u5168\u5C4B</span></button><span class="sr-only" id="camera-help">\u62D6\u52A8\u5E73\u79FB \xB7 \u6EDA\u8F6E\u6216\u53CC\u6307\u7F29\u653E</span></div></nav>
      <div class="nearby-interaction" id="nearby-interaction"><span class="exploration-hint" id="exploration-hint">\u70B9\u51FB\u5730\u9762\u8D70\u8D70\uFF0C\u70B9\u51FB\u7269\u4EF6\u9760\u8FD1</span><button class="nearby-button" id="nearby-button" data-action="interact" disabled><kbd>E</kbd><span id="nearby-name">\u8D70\u8FD1\u770B\u770B</span>${Ut("arrow")}</button></div>
      <nav class="scene-pocket" aria-label="\u968F\u8EAB\u7269\u54C1"><button class="hud-button" data-modal="guide">${Ut("puzzle")}<span>\u7269\u4EF6</span></button><button class="hud-button" data-modal="bag">${Ut("bag")}<span>\u80CC\u5305</span></button><button class="hud-button leave-home" data-explore="door">${Ut("door")}<span>\u51FA\u95E8</span></button></nav>
    </footer>
    <div class="touch-directions" role="group" aria-label="\u63A7\u5236\u5C0F\u4EBA\u79FB\u52A8"><button data-move="up" aria-label="\u5411\u4E0A\u8D70"><span class="direction-chevron up" aria-hidden="true"></span></button><button data-move="left" aria-label="\u5411\u5DE6\u8D70"><span class="direction-chevron left" aria-hidden="true"></span></button><span class="direction-center" aria-hidden="true"></span><button data-move="right" aria-label="\u5411\u53F3\u8D70"><span class="direction-chevron right" aria-hidden="true"></span></button><button data-move="down" aria-label="\u5411\u4E0B\u8D70"><span class="direction-chevron down" aria-hidden="true"></span></button></div>
    <div class="sr-only" id="explorer-announcement" role="status" aria-live="polite"></div>
  </main>`}function nh(){let i=[];for(let t of Un){let e=_t.memories.findLast(n=>n.id.startsWith(`outing-${t.id}-day-`));for(let[n,s,r]of[["photos","photo","\u7167\u7247"],["tickets","ticket","\u7968\u5238"],["magnets","magnet","\u51B0\u7BB1\u8D34"],["plushies","plush","\u73A9\u5076"]]){let a=t[s];a&&_t[n].includes(a.id)&&i.push({...a,category:n,type:r,theme:t.theme,place:t.name,...e?{memoryId:e.id,description:e.description}:{},...n==="photos"&&e?.image?{image:e.image,name:e.title}:{}})}}for(let t of Zs)_t.recipes.includes(t.id)&&i.push({...t,category:"recipes",type:"\u83DC\u8C31",theme:"food"});if(_t.puzzleSolved&&i.push({id:"completed-puzzle",name:"\u624B\u7ED8\u4E16\u754C\u5730\u56FE",description:"\u628A\u60F3\u53BB\u7684\u5730\u65B9\uFF0C\u4E00\u5757\u4E00\u5757\u62FC\u5B8C\u6574\u3002",category:"other",type:"\u62FC\u56FE",theme:"world-map"}),_t.flower){let t=Qi.find(e=>e.id===_t.flower);i.push({...t,category:"other",type:"\u82B1\u675F",theme:"flower"})}_t.growth===4&&i.push({id:"first-bloom",name:"\u4EB2\u624B\u517B\u5F00\u7684\u7B2C\u4E00\u6735\u82B1",description:"\u8010\u5FC3\u4E5F\u4F1A\u5F00\u82B1\u3002",category:"other",type:"\u690D\u7269",theme:"flower"});for(let t of _t.memories)t.image&&_t.photos.includes(t.id)&&i.push({...t,name:t.title,category:"photos",type:"\u771F\u5B9E\u7167\u7247"});return i}function _x(){let i=nh().filter(t=>Xs==="all"||t.category===Xs);return`<main class="album-main"><div class="album-heading"><div><span class="pencil-label">\u628A\u559C\u6B22\u7684\uFF0C\u7559\u5728\u8EAB\u8FB9</span><h1>\u5BB6\u7684\u6536\u85CF\u56FE\u9274</h1><p>\u6BCF\u4E00\u4EF6\u5E26\u56DE\u5BB6\u7684\u5C0F\u4E1C\u897F\uFF0C\u90FD\u85CF\u7740\u4E00\u6BB5\u6545\u4E8B\u3002</p></div><div class="collected-counter">${Js(_t)}<span>\u4EF6\u5C0F\u7F8E\u597D</span></div></div><div class="filter-row" role="group" aria-label="\u6536\u85CF\u5206\u7C7B">${[["all","\u5168\u90E8\u6536\u85CF"],["photos","\u7167\u7247"],["magnets","\u51B0\u7BB1\u8D34"],["tickets","\u7EAA\u5FF5\u7968"],["plushies","\u73A9\u5076"],["recipes","\u83DC\u8C31"]].map(([t,e])=>`<button class="filter-button ${Xs===t?"selected":""}" data-collection-filter="${t}" aria-pressed="${Xs===t}">${e}</button>`).join("")}</div>${i.length?`<div class="collection-grid">${i.map(t=>`<button class="collectible" data-item="${Ee(t.id)}"><div class="collectible-art ${t.category}">${t.category==="tickets"?`<div class="paper-ticket"><small>\u65C5\u884C\u7EAA\u5FF5</small><strong>${Ee(t.place)}</strong><span>\u4E00\u5F20\u7968\uFF0C\u4E00\u6BB5\u597D\u65F6\u5149</span><i></i></div>`:t.category==="plushies"?Ut("bear"):t.theme==="flower"?bl(4):t.theme==="world-map"?Gs():t.category==="recipes"?ih(t.id):t.image?`<img src="${Ee(t.image)}" width="420" height="260" alt="${Ee(t.name)}">`:es(t.theme)}</div><span class="collectible-type">${t.type}</span><h2>${Ee(t.name)}</h2><p>${Ee(t.description)}</p></button>`).join("")}</div>`:`<div class="empty-album">${Ut("collection")}<h2>\u7ED9\u56DE\u5FC6\uFF0C\u7559\u4E00\u70B9\u4F4D\u7F6E\u3002</h2><p>\u65C5\u884C\u7684\u7968\u6839\u3001\u51B0\u7BB1\u4E0A\u7684\u7167\u7247\u3001\u6C99\u53D1\u4E0A\u7684\u5C0F\u718A\uFF0C\u90FD\u4F1A\u5728\u8FD9\u91CC\u76F8\u9047\u3002</p><button class="secondary-button" data-modal="outing">\u53BB\u6536\u96C6\u7B2C\u4E00\u4EFD\u5C0F\u7F8E\u597D</button></div>`}<div class="album-bottom">${Ut("heart")} \u623F\u95F4\u4F1A\u4E00\u70B9\u4E00\u70B9\uFF0C\u88AB\u751F\u6D3B\u586B\u6EE1\u3002</div></main>`}function Wn(){rn?.destroy(),rn=null,document.body.classList.toggle("is-exploring",Ln==="home");let i=Ai?`<div class="storage-warning" role="alert">${Ee(Ai)}<button data-modal="settings">\u6253\u5F00\u5B58\u6863\u8BBE\u7F6E</button></div>`:"";dx.innerHTML=Ln==="home"?gx()+i:mx()+i+_x(),document.title=Ln==="home"?"\u6211\u4EEC\u7684\u623F\u95F4":"\u6211\u4EEC\u7684\u623F\u95F4 \xB7 \u6536\u85CF\u56FE\u9274",Ln==="home"&&(rn=Ud({container:document.getElementById("room-canvas"),state:_t,onInteract:xx,onNearby:vx,onMove:Gd,onViewChange:Hd,onError:yx}),rn.mount(),Gd(rn.getPosition()),Hd(rn.getView?.()||"home"))}function xx(i){sn(i==="door"?"outing":i==="bed"?"rest":i)}function Hd(i){document.querySelectorAll("[data-room-view]").forEach(t=>t.setAttribute("aria-pressed",String(t.dataset.roomView===i)))}function yx(i){let t=document.getElementById("room-canvas");if(!t)return;let e=document.createElement("div");e.className="scene-render-error",e.setAttribute("role","alert"),e.innerHTML=`${Ut("home")}<h2>\u7ACB\u4F53\u5C0F\u5C4B\u6682\u65F6\u6CA1\u6709\u6253\u5F00</h2><p>${Ee(i||"\u8BF7\u4F7F\u7528\u652F\u6301 WebGL \u7684\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF0C\u6216\u5F00\u542F\u6D4F\u89C8\u5668\u786C\u4EF6\u52A0\u901F\u540E\u518D\u8BD5\u4E00\u6B21\u3002")}</p><button class="secondary-button" data-action="retry-scene">\u91CD\u65B0\u6253\u5F00\u5C0F\u5C4B</button>`,t.querySelector(".scene-loading")?.remove(),t.append(e)}function Gd(i){let t=document.getElementById("scene-location");if(!t)return;let e=i.x<294?i.y<400?"\u6709\u98CE\u7684\u9633\u53F0":i.x<166?"\u5C0F\u5C0F\u6D17\u624B\u95F4":"\u9633\u5149\u91CC\u7684\u6D74\u5BA4":"\u6211\u4EEC\u7684\u623F\u95F4";t.textContent!==e&&(t.textContent=e)}function vx(i){let t=document.getElementById("nearby-button");if(!t)return;t.disabled=!i,document.getElementById("nearby-name").textContent=i?i.name:"\u8D70\u8FD1\u770B\u770B",document.getElementById("nearby-interaction").classList.toggle("has-target",!!i),document.getElementById("exploration-hint").textContent=i?"\u505C\u4E0B\u6765\uFF0C\u770B\u770B\u8EAB\u8FB9\u7684\u5C0F\u7F8E\u597D":"\u70B9\u51FB\u5730\u9762\u8D70\u8D70\uFF0C\u70B9\u51FB\u7269\u4EF6\u9760\u8FD1",document.getElementById("explorer-announcement").textContent=i?`\u9760\u8FD1${i.name}\uFF0C\u6309 E \u6216\u70B9\u51FB\u4E92\u52A8\u6309\u94AE\u3002`:""}function ih(i){return`<svg class="food-art" viewBox="0 0 200 140" fill="none" aria-hidden="true"><ellipse cx="100" cy="117" rx="72" ry="10" fill="#b5a38a" opacity=".15"/><path d="M32 70c0 70 136 70 136 0" fill="#ece6d3" stroke="#85775f" stroke-width="2"/><ellipse cx="100" cy="70" rx="68" ry="30" fill="#fcf7e7" stroke="#85775f" stroke-width="2"/><ellipse cx="100" cy="69" rx="57" ry="23" fill="${i==="curry-rice"?"#c3a064":i==="rice-ball"?"#e9e0c5":"#dbb278"}"/>${i==="rice-ball"?'<path d="m67 80 28-39q7-6 13 1l27 40q0 9-12 10H78q-14-1-11-12" fill="#f8f1da" stroke="#8b816a" stroke-width="2"/><path d="M88 69h24v23H88Z" fill="#78826a"/>':'<path d="M57 71c18-18 29 12 47-3s31 4 37-5M62 79c17-14 25 9 39-1s26 1 30-5" stroke="#f8e7b6" stroke-width="5"/><path d="m70 58 12-4 7 12-12 5Zm39 16 12-4 9 12-12 4Z" fill="#c47e60"/><path d="m108 51 8 6-3 11-12-5Z" fill="#80906b"/>'}<path d="M78 28c-9-9 8-12 0-21m29 21c-9-9 8-12 0-21m24 24c-9-9 8-12 0-21" stroke="#aba18c" stroke-width="2" stroke-linecap="round"/></svg>`}function De(i,t,e,n=""){return`<div class="modal-paper ${n}"><button class="icon-button modal-close" data-action="close" aria-label="\u5173\u95ED\u5F39\u7A97">${Ut("close")}</button><div class="modal-heading"><h2 id="dialog-title">${i}</h2>${t?`<p>${t}</p>`:""}</div>${e}</div>`}function qi(i,t){let e=qs[i];return`<fieldset class="avatar-field"><legend>${t}</legend><div class="avatar-options ${e[0].color?"color-options":""}">${e.map(n=>`<button type="button" data-avatar-key="${i}" data-avatar-value="${n.id}" aria-pressed="${Ze[i]===n.id}" ${n.color?`style="--swatch:${n.color}"`:""}>${n.color?'<i aria-hidden="true"></i>':""}<span>${n.label}</span></button>`).join("")}</div></fieldset>`}function Wr(i,t,e,n){return`<label class="avatar-slider" for="avatar-${i}"><span>${t}<output id="value-${i}">${Ze[i]}</output></span><input id="avatar-${i}" data-avatar-slider="${i}" type="range" min="0" max="100" value="${Ze[i]}"><small><span>${e}</span><span>${n}</span></small></label>`}function bx(){let i=qi("hairStyle","\u53D1\u578B")+qi("skinTone","\u80A4\u8272")+qi("hairColor","\u53D1\u8272")+qi("shirtColor","\u8863\u670D\u989C\u8272"),t=qi("faceShape","\u8138\u578B")+qi("eyeShape","\u773C\u775B")+Wr("eyeSize","\u773C\u775B\u5927\u5C0F","\u5C0F","\u5927")+Wr("eyeSpacing","\u773C\u8DDD","\u8FD1","\u8FDC")+Wr("browAngle","\u7709\u6BDB\u89D2\u5EA6","\u6E29\u548C","\u4E0A\u626C")+Wr("noseSize","\u9F3B\u5B50\u5927\u5C0F","\u5C0F","\u5927")+qi("mouthStyle","\u5634\u578B")+Wr("mouthWidth","\u5634\u5DF4\u5BBD\u5EA6","\u7A84","\u5BBD");return De(_t.character?"\u8C03\u6574\u4EBA\u7269":"\u521B\u5EFA\u4F60\u7684\u4EBA\u7269","",`<form id="avatar-form" novalidate><div class="avatar-editor-layout"><aside class="avatar-preview-panel"><div id="avatar-preview">${th(Ze)}</div><strong id="avatar-preview-name">${Ee(Ze.name||"\u4F60\u7684\u65B0\u5BA4\u53CB")}</strong><span>\u4EBA\u7269\u9884\u89C8</span></aside><section class="avatar-fields"><label class="avatar-name-field" for="avatar-name">\u600E\u4E48\u79F0\u547C\u4F60\uFF1F<input id="avatar-name" name="name" maxlength="20" autocomplete="off" placeholder="\u7ED9\u4EBA\u7269\u8D77\u4E2A\u540D\u5B57" value="${Ee(Ze.name)}" required></label><div class="avatar-tabs" role="tablist" aria-label="\u4EBA\u7269\u8BBE\u7F6E"><button type="button" role="tab" id="avatar-tab-shape" aria-controls="avatar-panel" aria-selected="${Dn==="shape"}" data-avatar-tab="shape">\u5916\u89C2</button><button type="button" role="tab" id="avatar-tab-face" aria-controls="avatar-panel" aria-selected="${Dn==="face"}" data-avatar-tab="face">\u4E94\u5B98</button></div><div class="avatar-fields-scroll" id="avatar-panel" role="tabpanel" aria-labelledby="avatar-tab-${Dn}">${Dn==="shape"?i:t}</div></section></div><div class="avatar-form-footer"><button type="button" class="text-button" data-action="new-character">\u65B0\u5EFA\u4EBA\u7269</button><p id="avatar-error" class="form-error" role="alert"></p><button class="primary-button" type="submit">${_t.character?"\u4FDD\u5B58\u4EBA\u7269":"\u4F4F\u8FDB\u623F\u95F4"}</button></div></form>`,"avatar-modal")}function eh(){let i=document.getElementById("avatar-preview");i&&(i.innerHTML=th(Ze));let t=document.getElementById("avatar-preview-name");t&&(t.textContent=Ze.name||"\u4F60\u7684\u65B0\u5BA4\u53CB")}function sn(i,t={}){ci=i,rn?.pause();let e="";if(i==="avatar")t.keepDraft||(Ze={...Qe(_t.character),name:_t.character?.name||""},Dn="shape"),e=bx();else if(i==="today"){let n=[[_t.wateredDay===_t.day||_t.growth===4,"\u7ED9\u9633\u53F0\u7684\u82B1\u6D47\u6D47\u6C34","plants","\u7B49\u4E00\u9897\u5C0F\u82BD\uFF0C\u6162\u6162\u957F\u5927"],[_t.puzzleSolved,"\u62FC\u4E00\u5E45\u4E16\u754C\u5730\u56FE","puzzle","\u628A\u60F3\u53BB\u7684\u5730\u65B9\u62FC\u5B8C\u6574"],[!!_t.flower,"\u5E26\u4E00\u675F\u82B1\u56DE\u5BB6","vase","\u7ED9\u4ECA\u5929\u6DFB\u4E00\u70B9\u989C\u8272"]];e=De("\u4ECA\u65E5\u7684\u5C0F\u4E8B","\u4E0D\u7528\u7740\u6025\uFF0C\u5728\u5C0F\u5C4B\u91CC\u6162\u6162\u53D1\u73B0\u3002",`<div class="exploration-daily-tasks">${n.map(([s,r,a,o])=>`<button class="task ${s?"complete":""}" data-explore="${a}"><span class="task-check">${s?Ut("check"):""}</span><span>${r}<small>${o}</small></span>${Ut("arrow")}</button>`).join("")}</div><div class="daily-scene-count">${Ut("collection")} \u5DF2\u7ECF\u6536\u85CF ${Js(_t)} \u4EF6\u5C0F\u7F8E\u597D<span>${Ut("coin")} ${_t.coins} \u679A\u751F\u6D3B\u5E01</span></div><button class="secondary-button full-button" data-explore="bed">${Ut("moon")}\u6536\u597D\u4ECA\u5929\uFF0C\u7761\u4E2A\u597D\u89C9</button>`)}else if(i==="plants"){let n=_t.wateredDay===_t.day||_t.growth===4;e=De("\u9633\u53F0\u4E0A\u7684\u5C0F\u5C0F\u671F\u5F85","\u6BCF\u5929\u4E00\u70B9\u7167\u987E\uFF0C\u7B49\u4E00\u6735\u82B1\u6162\u6162\u5F00\u3002",`<div class="plant-preview">${bl(Math.max(1,_t.growth))}<div><span class="pencil-label">${["\u8FD8\u5728\u571F\u91CC\u505A\u68A6","\u5192\u51FA\u4E86\u4E00\u9897\u5C0F\u82BD","\u957F\u51FA\u65B0\u7684\u53F6\u5B50","\u6084\u6084\u6709\u4E86\u82B1\u82DE","\u7B2C\u4E00\u6735\u82B1\u5F00\u4E86"][_t.growth]}</span><p>\u6210\u957F\u7684\u7B2C ${_t.growth} / 4 \u6B65</p><div class="growth-dots">${[1,2,3,4].map(s=>`<span class="${s<=_t.growth?"grown":""}">${s<=_t.growth?Ut("leaf"):s}</span>`).join("")}</div><p class="muted">${_t.growth===4?"\u628A\u8FD9\u6735\u5C0F\u82B1\uFF0C\u6536\u8FDB\u56DE\u5FC6\u91CC\u3002":n?"\u4ECA\u5929\u559D\u9971\u6C34\u5566\uFF0C\u660E\u5929\u518D\u6765\u770B\u770B\u3002":"\u4ECA\u5929\u7684\u9633\u5149\u5F88\u597D\uFF0C\u5B83\u5728\u7B49\u4F60\u6D47\u6C34\u3002"}</p></div></div><button class="primary-button full-button" data-game="WATER" data-refresh="plants" ${n?"disabled":""}>${Ut("water")}${n?_t.growth===4?"\u82B1\u5DF2\u7ECF\u76DB\u5F00\u5566":"\u4ECA\u5929\u5DF2\u7ECF\u6D47\u8FC7\u6C34":"\u7ED9\u5C0F\u82B1\u6D47\u6D47\u6C34"}</button><button class="text-button centered" data-modal="rest">${Ut("moon")} \u4F11\u606F\u4E00\u4E0B\uFF0C\u7B49\u660E\u5929</button>`)}else if(i==="puzzle")e=De(_t.puzzleSolved?"\u62FC\u597D\u7684\u4E16\u754C\u5730\u56FE":"\u624B\u7ED8\u4E16\u754C\u5730\u56FE",_t.puzzleSolved?"\u628A\u60F3\u53BB\u7684\u5730\u65B9\uFF0C\u6302\u5728\u6BCF\u5929\u770B\u5F97\u5230\u7684\u5899\u4E0A\u3002":"\u70B9\u9009\u4E24\u5757\u5730\u56FE\uFF0C\u4EA4\u6362\u5B83\u4EEC\u7684\u4F4D\u7F6E\u3002",_t.puzzleSolved?`<div class="finished-puzzle">${Gs()}</div><p class="centered muted">\u5DF2\u7ECF\u6302\u5728\u6C99\u53D1\u80CC\u540E\u7684\u5899\u4E0A\u3002</p><button class="primary-button full-button" data-action="close">\u56DE\u623F\u95F4\u770B\u770B</button>`:`<div class="puzzle-board" aria-label="\u4E5D\u5757\u4E16\u754C\u5730\u56FE\u62FC\u56FE">${Yi.map((n,s)=>`<button class="puzzle-tile ${Zi===s?"selected":""} ${n===s?"correct":""}" data-piece="${s}" aria-label="\u7B2C ${s+1} \u683C\uFF0C\u753B\u9762\u7684\u7B2C ${n+1} \u5757" aria-pressed="${Zi===s}" style="background-image:url('${px}');background-size:300% 300%;background-position:${n%3*50}% ${Math.floor(n/3)*50}%"><span>${n+1}</span></button>`).join("")}</div><div class="puzzle-actions"><span>${Yi.filter((n,s)=>n===s).length} / 9 \u5757\u5F52\u4F4D</span><button class="text-button" data-action="puzzle-reference">${pl?"\u6536\u8D77\u539F\u56FE":"\u67E5\u770B\u5B8C\u6574\u5730\u56FE"}</button></div>${pl?`<div class="puzzle-reference">${Gs()}</div>`:""}`,"puzzle-modal");else if(i==="switch")e=De("\u4ECA\u665A\uFF0C\u4E00\u8D77\u73A9\u4F1A\u513F\u5427","\u63D2\u4E0A\u5361\u5E26\uFF0C\u6295\u5F71\u5C31\u5728\u5E8A\u5BF9\u9762\u7684\u5899\u4E0A\u4EAE\u8D77\u6765\u3002",`<div class="console-art"><span class="joycon left"></span><div class="console-screen">${es(fl==="island"?"sea":"mountain")}</div><span class="joycon right"></span></div><div class="cartridge-options" role="group" aria-label="\u9009\u62E9\u6E38\u620F\u5361\u5E26">${[["island","\u4E00\u8D77\u9020\u4E2A\u5C0F\u5C9B","leaf"],["pixel","\u50CF\u7D20\u5927\u5192\u9669","puzzle"]].map(([n,s,r])=>`<button class="cartridge ${fl===n?"selected":""}" data-cartridge="${n}" aria-pressed="${fl===n}">${Ut(r)}${s}</button>`).join("")}</div><button class="primary-button full-button" data-game="TOGGLE_PROJECTOR" data-refresh="switch">${Ut("switch")}${_t.projectorOn?"\u5173\u95ED\u6295\u5F71\uFF0C\u4F11\u606F\u4E00\u4F1A\u513F":"\u63D2\u4E0A\u5361\u5E26\uFF0C\u6253\u5F00\u6295\u5F71"}</button><p class="muted centered">${_t.projectorOn?"\u6295\u5F71\u5DF2\u7ECF\u4EAE\u8D77\uFF0C\u56DE\u623F\u95F4\u5C31\u80FD\u770B\u89C1\u3002":"\u5361\u5E26\u5DF2\u7ECF\u653E\u5728\u5C0F\u80CC\u5305\u91CC\u3002"}</p>`);else if(i==="vase"){let n=Qi.find(s=>s.id===_t.flower);e=De("\u7ED9\u684C\u89D2\uFF0C\u7559\u4E00\u70B9\u6625\u5929",n?`\u82B1\u74F6\u91CC\u662F\u4ECA\u5929\u7684${n.name}\u3002`:"\u82B1\u74F6\u8FD8\u7A7A\u7740\u3002\u4E0B\u6B21\u8DEF\u8FC7\u96C6\u5E02\uFF0C\u5E26\u4E00\u675F\u82B1\u56DE\u6765\u5427\u3002",`<div class="vase-preview">${Kr(n?.id)}</div><button class="primary-button full-button" data-modal="market">${Ut("flower")}${n?"\u53BB\u96C6\u5E02\u6311\u4E00\u675F\u65B0\u7684":"\u53BB\u96C6\u5E02\u4E70\u675F\u82B1"}</button>`)}else if(i==="outing")e=De("\u4ECA\u5929\uFF0C\u60F3\u4E00\u8D77\u53BB\u54EA\u91CC\uFF1F","\u628A\u4E00\u70B9\u65B0\u9C9C\u7684\u5FEB\u4E50\uFF0C\u5E26\u56DE\u6211\u4EEC\u7684\u5C0F\u5C4B\u3002",`<div class="outing-tabs" role="group" aria-label="\u51FA\u95E8\u65B9\u5F0F"><button class="${dl==="date"?"selected":""}" data-outing-kind="date">${Ut("heart")}\u53BB\u7EA6\u4F1A</button><button class="${dl==="travel"?"selected":""}" data-outing-kind="travel">${Ut("ticket")}\u53BB\u65C5\u884C</button><button data-modal="market">${Ut("flower")}\u901B\u96C6\u5E02</button></div><div class="destination-grid">${Un.filter(n=>n.kind===dl&&n.id!=="market").map(n=>`<button class="destination" data-destination="${n.id}">${es(n.theme)}<span><strong>${n.name}</strong><small>${n.description}</small></span>${Ut("arrow")}</button>`).join("")}</div><p class="muted centered small-text">\u8FD9\u4E9B\u662F\u793A\u4F8B\u65C5\u7A0B\u3002\u5E26\u56DE\u7684\u7167\u7247\u548C\u7EAA\u5FF5\u7968\uFF0C\u53EF\u4EE5\u6362\u6210\u4F60\u4EEC\u81EA\u5DF1\u7684\u6545\u4E8B\u3002</p>`,"outing-modal");else if(i==="market")e=De("\u8DEF\u8FC7\u5468\u672B\u7684\u5C0F\u96C6\u5E02",`\u53E3\u888B\u91CC\u6709 ${_t.coins} \u679A\u751F\u6D3B\u5E01\uFF0C\u6311\u4E00\u70B9\u559C\u6B22\u7684\u5E26\u56DE\u5BB6\u3002`,`<div class="outing-tabs market-tabs" role="group" aria-label="\u96C6\u5E02\u644A\u4F4D"><button class="${Xr==="flowers"?"selected":""}" data-market-tab="flowers">${Ut("flower")}\u8857\u89D2\u82B1\u644A</button><button class="${Xr==="food"?"selected":""}" data-market-tab="food">${Ut("bag")}\u65B0\u9C9C\u98DF\u6750</button></div>${Xr==="flowers"?`<div class="flower-shop">${Qi.map(n=>`<button class="flower-choice" data-buy-flower="${n.id}" ${_t.flower===n.id||_t.coins<n.price?"disabled":""}><div class="flower-sketch">${Kr(n.id)}</div><strong>${n.name}</strong><span>${n.description}</span><small>${_t.flower===n.id?"\u5DF2\u7ECF\u653E\u8FDB\u82B1\u74F6":`${n.price} \u679A\u751F\u6D3B\u5E01 \xB7 \u5E26\u56DE\u5BB6`}</small></button>`).join("")}</div>`:`<div class="ingredient-shop">${Ut("bag")}<h3>\u4ECA\u665A\u7684\u98DF\u6750\u5305</h3><p>\u756A\u8304\u3001\u9E21\u86CB\u3001\u7C73\u996D\uFF0C\u8FD8\u6709\u4E00\u70B9\u65B0\u9C9C\u852C\u83DC\u3002<br>\u4E00\u5305\u53EF\u4EE5\u505A 3 \u987F\u559C\u6B22\u7684\u996D\u3002</p><button class="primary-button" data-game="BUY_INGREDIENTS" data-refresh="market" ${_t.coins<20?"disabled":""}>20 \u679A\u751F\u6D3B\u5E01 \xB7 \u4E70\u4E00\u5305</button><p class="muted">\u80CC\u5305\u91CC\u8FD8\u6709 ${_t.inventory.ingredients} \u4EFD\u98DF\u6750</p></div>`}<div class="modal-bottom-actions"><button class="text-button" data-modal="outing">\u518D\u53BB\u522B\u5904\u901B\u901B</button><button class="secondary-button" data-action="close">\u56DE\u5BB6\u770B\u770B</button></div>`,"market-modal");else if(i==="cooking")e=De("\u4ECA\u5929\uFF0C\u505A\u70B9\u597D\u5403\u7684","\u6709\u70DF\u706B\u6C14\u7684\u5C0F\u5C4B\uFF0C\u4E5F\u662F\u88AB\u597D\u597D\u7167\u987E\u7684\u65E5\u5E38\u3002",`<div class="ingredient-balance">${Ut("bag")} \u65B0\u9C9C\u98DF\u6750 ${_t.inventory.ingredients} \u4EFD<button class="text-button" data-action="food-market">\u53BB\u4E70\u98DF\u6750</button></div><div class="recipe-list">${Zs.map(n=>`<div class="recipe-row">${ih(n.id)}<div><h3>${n.name}${_t.recipes.includes(n.id)?`<span class="recipe-collected">${Ut("check")}\u5DF2\u6536\u5F55</span>`:""}</h3><p>${n.ingredientLabel}</p><span>\u9700\u8981 ${n.ingredients} \u4EFD\u98DF\u6750</span></div><button class="secondary-button" data-cook="${n.id}" ${_t.inventory.ingredients<n.ingredients?"disabled":""}>\u505A\u8FD9\u9053\u83DC</button></div>`).join("")}</div><p class="muted centered small-text">\u6BCF\u4E00\u9053\u7B2C\u4E00\u6B21\u505A\u7684\u83DC\uFF0C\u90FD\u4F1A\u81EA\u52A8\u6536\u8FDB\u83DC\u8C31\u56FE\u9274\u3002</p>`,"cooking-modal");else if(i==="fridge"||i==="tickets"||i==="plush"){let n=i==="fridge"?"photos":i==="tickets"?"tickets":"plushies",s=nh().filter(a=>i==="fridge"?["photos","magnets"].includes(a.category):a.category===n);e=De(...{fridge:["\u51B0\u7BB1\u4E0A\u7684\u5C0F\u5C0F\u4E16\u754C","\u7167\u7247\u548C\u51B0\u7BB1\u8D34\uFF0C\u628A\u53BB\u8FC7\u7684\u8FDC\u65B9\u5E26\u5230\u6BCF\u5929\u3002"],tickets:["\u4E00\u5F20\u7968\uFF0C\u4E00\u6BB5\u597D\u65F6\u5149","\u6BCF\u6B21\u51FA\u53D1\uFF0C\u90FD\u503C\u5F97\u7559\u4E00\u5F20\u7EAA\u5FF5\u3002"],plush:["\u6C99\u53D1\u4E0A\u7684\u65B0\u5BA4\u53CB","\u4E00\u8D77\u6293\u5230\u7684\u90A3\u53EA\u5C0F\u718A\uFF0C\u4F1A\u4E00\u76F4\u7B49\u6211\u4EEC\u56DE\u5BB6\u3002"]}[i],s.length?`<div class="souvenir-list">${s.map(a=>`<button data-item="${Ee(a.id)}">${Ut(a.category==="photos"?"camera":a.category==="tickets"?"ticket":a.category==="plushies"?"bear":"fridge")}<span><strong>${Ee(a.name)}</strong><small>${Ee(a.description)}</small></span>${Ut("arrow")}</button>`).join("")}</div>${i==="fridge"?'<button class="secondary-button full-button" data-action="new-memory">\u8D34\u4E00\u5F20\u771F\u5B9E\u7684\u7167\u7247</button>':""}<button class="text-button centered" data-modal="outing">\u518D\u5E26\u4E00\u4E9B\u56DE\u5FC6\u56DE\u5BB6</button>`:`<div class="empty-modal">${Ut(i==="fridge"?"fridge":i==="tickets"?"ticket":"bear")}<p>${i==="fridge"?"\u8FD9\u91CC\u8FD8\u7A7A\u7740\uFF0C\u7B49\u4E00\u6B21\u51FA\u53D1\uFF0C\u6216\u8D34\u4E0A\u4F60\u4EEC\u7684\u771F\u5B9E\u7167\u7247\u3002":i==="tickets"?"\u7968\u76D2\u8FD8\u7A7A\u7740\u3002\u4E0B\u6B21\u65C5\u884C\uFF0C\u8BB0\u5F97\u5E26\u4E00\u5F20\u7968\u56DE\u6765\u3002":"\u6C99\u53D1\u4E0A\u8FD8\u6CA1\u6709\u73A9\u5076\u3002\u4E00\u8D77\u53BB\u6293\u5A03\u5A03\u5427\u3002"}</p><button class="primary-button" data-modal="outing">\u4E00\u8D77\u51FA\u95E8\u8D70\u8D70</button>${i==="fridge"?'<button class="text-button centered" data-action="new-memory">\u8D34\u4E00\u5F20\u771F\u5B9E\u7684\u7167\u7247</button>':""}</div>`)}else if(i==="bag")e=De("\u51FA\u95E8\u65F6\u7684\u5C0F\u80CC\u5305","\u4E0D\u5FC5\u88C5\u5F88\u591A\uFF0C\u5E26\u4E0A\u597D\u5FC3\u60C5\u5C31\u591F\u4E86\u3002",`<div class="bag-items"><button data-modal="switch">${Ut("switch")}<span><strong>\u6E38\u620F\u5361\u5E26 \xD7 2</strong><small>\u4ECA\u665A\u4E00\u8D77\u9020\u4E2A\u5C0F\u5C9B\u5427</small></span>${Ut("arrow")}</button><button data-modal="cooking">${Ut("bag")}<span><strong>\u65B0\u9C9C\u98DF\u6750 \xD7 ${_t.inventory.ingredients}</strong><small>\u7ED9\u81EA\u5DF1\u505A\u4E00\u987F\u70ED\u4E4E\u7684\u996D</small></span>${Ut("arrow")}</button><button data-modal="plants">${Ut("water")}<span><strong>\u4E00\u53EA\u5C0F\u6C34\u58F6</strong><small>\u7167\u987E\u6BCF\u5929\u7684\u4E00\u70B9\u5C0F\u671F\u5F85</small></span>${Ut("arrow")}</button></div>`);else if(i==="rest")e=De("\u628A\u4ECA\u5929\uFF0C\u597D\u597D\u6536\u8D77\u6765","\u5C0F\u5C4B\u4F1A\u5728\u8FD9\u91CC\uFF0C\u7B49\u660E\u5929\u7684\u4F60\u3002",`<div class="rest-illustration">${Ut("moon")}<span>\u665A\u5B89\uFF0C\u4ECA\u5929\u4E5F\u8F9B\u82E6\u5566\u3002</span></div><div class="rest-summary"><span>${_t.wateredDay===_t.day?"\u5C0F\u82B1\u5DF2\u7ECF\u559D\u8FC7\u6C34\u4E86":"\u5C0F\u82B1\u4ECA\u5929\u8FD8\u6CA1\u6709\u559D\u6C34"}</span><span>\u623F\u95F4\u91CC\u5DF2\u7ECF\u6536\u85CF ${Js(_t)} \u4EF6\u5C0F\u7F8E\u597D</span></div><button class="primary-button full-button" data-action="next-day">\u7761\u4E2A\u597D\u89C9\uFF0C\u8FCE\u63A5\u7B2C ${_t.day+1} \u5929</button><p class="muted centered small-text">\u6BCF\u4E2A\u65B0\u65E5\u5B50\uFF0C\u4F1A\u6536\u5230 30 \u679A\u751F\u6D3B\u5E01\u3002\u8FD9\u662F\u6E38\u620F\u5185\u7684\u4E00\u5929\u3002</p>`);else if(i==="desk"||i==="bookshelf"||i==="balcony"){let n={desk:["\u5E76\u80A9\u5750\u7740\u7684\u957F\u684C","\u4E00\u4EBA\u4E00\u4E2A\u4F4D\u7F6E\uFF0C\u5076\u5C14\u62AC\u5934\u8BF4\u4E00\u53E5\uFF1A\u4F60\u770B\u3002","book"],bookshelf:["\u4E66\u67B6\u91CC\u85CF\u7740\u6162\u6162\u7684\u65E5\u5B50","\u559C\u6B22\u7684\u4E66\u548C\u6CA1\u770B\u5B8C\u7684\u6545\u4E8B\uFF0C\u90FD\u653E\u5728\u4F38\u624B\u5C31\u80FD\u78B0\u5230\u7684\u5730\u65B9\u3002","book"],balcony:["\u9633\u5149\u6652\u8FDB\u6765\u7684\u5730\u65B9","\u8863\u670D\u5728\u6162\u6162\u667E\u5E72\uFF0C\u82B1\u5728\u6162\u6162\u957F\u5927\u3002\u4ECA\u5929\u4E5F\u53EF\u4EE5\u6162\u4E00\u70B9\u3002","sun"]}[i];e=De(n[0],"",`<div class="quiet-moment">${Ut(n[2])}<p>${n[1]}</p></div>${i==="balcony"?'<button class="secondary-button full-button" data-modal="plants">\u770B\u770B\u5C0F\u82B1</button>':'<button class="secondary-button full-button" data-action="close">\u56DE\u5230\u623F\u95F4</button>'}`)}else if(i==="guide")e=De("\u6BCF\u4E00\u4EF6\u5C0F\u4E1C\u897F\uFF0C\u90FD\u6709\u6545\u4E8B","\u9009\u4E00\u4EF6\u5C0F\u7269\uFF0C\u5C0F\u4EBA\u4F1A\u8D70\u8FC7\u53BB\u3002\u4E5F\u53EF\u4EE5\u7528 WASD \u6216\u65B9\u5411\u952E\u81EA\u7531\u63A2\u7D22\u3002",`<div class="room-guide">${[["plants","water","\u9633\u53F0\u82B1\u67B6","\u6BCF\u5929\u6D47\u6C34\uFF0C\u7B49\u82B1\u5F00"],["puzzle","puzzle","\u6C99\u53D1\u80CC\u5899\u7684\u62FC\u56FE","\u62FC\u597D\u540E\uFF0C\u6302\u8D77\u98CE\u666F"],["switch","switch","\u5E8A\u5934\u7684 Switch","\u63D2\u4E0A\u5361\u5E26\uFF0C\u4EAE\u8D77\u6295\u5F71"],["vase","flower","\u684C\u89D2\u7684\u82B1\u74F6","\u4ECE\u96C6\u5E02\u5E26\u4E00\u675F\u82B1\u56DE\u6765"],["fridge","fridge","\u51B0\u7BB1\u4E0A\u7684\u56DE\u5FC6","\u7167\u7247\u4E0E\u65C5\u884C\u51B0\u7BB1\u8D34"],["plush","bear","\u6C99\u53D1\u4E0A\u7684\u73A9\u5076","\u4E00\u8D77\u53BB\u6293\u5A03\u5A03"],["tickets","ticket","\u95E8\u65C1\u7684\u7EAA\u5FF5\u7968\u76D2","\u628A\u6BCF\u6B21\u51FA\u53D1\u6536\u8D77\u6765"],["cooking","pot","\u957F\u684C\u65C1\u7684\u5C0F\u9505","\u505A\u4E00\u987F\u996D\uFF0C\u7559\u4E00\u9875\u83DC\u8C31"]].map(([n,s,r,a])=>`<button data-explore="${n}">${Ut(s)}<span><strong>${r}</strong><small>${a}</small></span></button>`).join("")}</div>`);else if(i==="settings")e=De("\u623F\u95F4\u8BBE\u7F6E","\u4EBA\u7269\u3001\u58F0\u97F3\u548C\u5B58\u6863\u90FD\u5728\u8FD9\u91CC\u3002",`<div class="settings-row"><span><strong>\u6211\u7684\u4EBA\u7269</strong><small>${_t.character?Ee(_t.character.name):"\u521B\u5EFA\u4E00\u4E2A\u81EA\u5DF1\u7684\u89D2\u8272\uFF0C\u8C03\u6574\u5916\u89C2\u548C\u4E94\u5B98"}</small></span><button class="secondary-button" data-modal="avatar">${_t.character?"\u8C03\u6574\u4EBA\u7269":"\u521B\u5EFA\u4EBA\u7269"}</button></div><div class="settings-row"><span><strong>\u80CC\u666F\u97F3\u4E50</strong><small>\u4E00\u5C0F\u6BB5\u8F7B\u67D4\u7684\u7434\u58F0\uFF0C\u7531\u6D4F\u89C8\u5668\u6F14\u594F</small></span><button class="secondary-button" data-action="music">${Ut(Vn?"music":"mute")}${Vn?"\u6682\u505C":"\u64AD\u653E"}</button></div><div class="settings-row"><span><strong>\u5BFC\u51FA\u5B58\u6863</strong><small>\u4E0B\u8F7D\u5907\u4EFD\uFF0C\u5305\u542B\u4EBA\u7269\u3001\u6536\u85CF\u548C\u7167\u7247\u6545\u4E8B</small></span><button class="secondary-button" data-action="export">${Ut("download")}\u5BFC\u51FA\u5907\u4EFD</button></div><div class="settings-row"><span><strong>\u5BFC\u5165\u5B58\u6863</strong><small>\u6062\u590D\u5907\u4EFD\u4F1A\u66FF\u6362\u8FD9\u4E2A\u6D4F\u89C8\u5668\u7684\u623F\u95F4\u8FDB\u5EA6</small></span><label class="secondary-button file-control" for="import-save">\u9009\u62E9\u5907\u4EFD<input class="file-input" type="file" id="import-save" accept="application/json,.json"></label></div><div class="settings-info"><p>\u51FA\u6E38\u5730\u70B9\u3001\u6545\u4E8B\u548C\u98CE\u666F\u4E3A\u793A\u4F8B\u3002\u70B9\u51FB\u51B0\u7BB1\u53EF\u4EE5\u8D34\u4E0A\u81EA\u5DF1\u7684\u7167\u7247\uFF0C\u4E5F\u53EF\u4EE5\u4FEE\u6539\u7167\u7247\u548C\u7EAA\u5FF5\u7968\u80CC\u540E\u7684\u6545\u4E8B\u3002</p><p>\u8FDB\u5EA6\u4FDD\u5B58\u5728\u5F53\u524D\u6D4F\u89C8\u5668\u3002\u7167\u7247\u4E0D\u4F1A\u4E0A\u4F20\u5230\u7F51\u7EDC\uFF0C\u6362\u8BBE\u5907\u524D\u8BF7\u5148\u5BFC\u51FA\u5907\u4EFD\u3002</p></div>`);else if(i==="memory-editor"){t.memory&&(oi=t.memory,Nn=t.memory.image||null);let n=oi;e=De(n?"\u4FEE\u6539\u7167\u7247\u4E0E\u6545\u4E8B":"\u5F80\u51B0\u7BB1\u4E0A\u8D34\u4E00\u5F20\u7167\u7247","\u628A\u4F60\u4EEC\u7684\u7167\u7247\u548C\u7269\u4EF6\u80CC\u540E\u7684\u6545\u4E8B\u7559\u5728\u623F\u95F4\u91CC\u3002",`<form id="memory-form"><div class="memory-form-fields"><label>\u7167\u7247\u6216\u7269\u4EF6\u7684\u540D\u5B57<input name="title" maxlength="120" required placeholder="\u4F8B\u5982\uFF1A\u7B2C\u4E00\u6B21\u4E00\u8D77\u53BB\u770B\u6D77" value="${Ee(n?.title||"")}"></label><label>\u60F3\u8BB0\u4F4F\u7684\u65E5\u5B50<input name="date" type="date" value="${n?.date&&/^\d{4}-\d{2}-\d{2}$/.test(n.date)?n.date:""}"></label><label>\u90A3\u5929\u53D1\u751F\u7684\u5C0F\u4E8B<textarea name="description" maxlength="600" rows="3" required placeholder="\u8BB0\u4E0B\u4E00\u53E5\u8BDD\u3001\u4E00\u4E2A\u5C0F\u7EC6\u8282\uFF0C\u6216\u53EA\u6709\u4F60\u4EEC\u624D\u61C2\u7684\u6697\u53F7\u3002">${Ee(n?.description||"")}</textarea></label><div class="photo-field"><span class="field-label">\u8D34\u4E00\u5F20\u771F\u5B9E\u7167\u7247 <small>${n?"\u9009\u586B":"\u65B0\u7167\u7247\u9700\u8981\u9009\u62E9\u56FE\u7247"}</small></span><label class="photo-upload" for="memory-photo">${Nn?`<img src="${Nn}" width="420" height="260" alt="\u5DF2\u9009\u62E9\u7684\u7167\u7247">`:`${Ut("camera")}<span>\u4ECE\u76F8\u518C\u91CC\u6311\u4E00\u5F20</span>`}<input class="file-input" id="memory-photo" type="file" accept="image/png,image/jpeg,image/webp,image/gif" aria-label="\u4ECE\u76F8\u518C\u91CC\u6311\u4E00\u5F20"></label><span id="upload-status" class="small-text muted" role="status">\u7167\u7247\u53EA\u7559\u5728\u8FD9\u4E2A\u6D4F\u89C8\u5668\u91CC\u3002</span>${Nn?'<button class="text-button" type="button" data-action="remove-photo">\u79FB\u9664\u7167\u7247</button>':""}</div></div><p id="form-error" role="alert" class="form-error"></p><button class="primary-button full-button" type="submit">${Ut("camera")}\u4FDD\u5B58\u7167\u7247\u4E0E\u6545\u4E8B</button></form>`,"editor-modal")}e&&(gl.innerHTML=e,Ye.open||(_l=document.activeElement,Ye.showModal()),i==="memory-editor"&&requestAnimationFrame(()=>Ye.querySelector("input[name=title]")?.focus()),i==="avatar"&&!t.keepDraft&&requestAnimationFrame(()=>document.getElementById("avatar-name")?.focus()))}function Ti(){Ye.close(),ci="",rn?.resume(),_l?.focus?.()}function ul(i){oi=i||null,Nn=i?.image||null,sn("memory-editor")}function Mx(i){ci="reward",gl.innerHTML=De("\u628A\u8FD9\u4E00\u5929\uFF0C\u5E26\u56DE\u5BB6",`\u4ECE${i.name.replace(/^去/,"")}\u56DE\u6765\uFF0C\u53E3\u888B\u91CC\u591A\u4E86\u4E00\u70B9\u56DE\u5FC6\u3002`,`<div class="reward-postcard">${es(i.theme)}<span class="picture-tape"></span><p>${i.photo.name}</p></div><div class="reward-items">${[[i.photo,"camera"],[i.ticket,"ticket"],[i.magnet,"fridge"],[i.plush,"bear"]].filter(([t])=>t).map(([t,e])=>`<span>${Ut(e)}${t.name}</span>`).join("")}</div><p class="muted centered">${i.photo.description}</p><div class="modal-bottom-actions"><button class="text-button" data-action="edit-latest">\u5199\u6210\u6211\u4EEC\u7684\u6545\u4E8B</button><button class="primary-button" data-action="close">\u56DE\u5BB6\u653E\u597D</button></div>`)}function Sx(i){let t=nh().find(n=>n.id===i);if(!t)return;ci="item";let e=t.memoryId||(t.category==="photos"&&_t.memories.some(n=>n.id===t.id)?t.id:null);gl.innerHTML=De(Ee(t.name),t.type,`<div class="item-preview">${t.category==="plushies"?Ut("bear"):t.theme==="flower"?Kr(t.id):t.theme==="world-map"?Gs():t.category==="recipes"?ih(t.id):t.image?`<img src="${Ee(t.image)}" width="420" height="260" alt="${Ee(t.name)}">`:es(t.theme)}</div><p class="item-story">${Ee(t.description)}</p>${e?`<button class="secondary-button full-button" data-memory="${Ee(e)}">\u4FEE\u6539\u7167\u7247\u4E0E\u6545\u4E8B</button>`:'<button class="secondary-button full-button" data-action="close">\u6536\u597D\u8FD9\u4EF6\u6536\u85CF</button>'}`),Ye.open||(_l=document.activeElement,Ye.showModal())}function wx(){if(Vn)Vn=!1,clearInterval(zd),Gn?.suspend();else{Gn||=new(window.AudioContext||window.webkitAudioContext),Gn.resume(),Vn=!0;let i=[261.63,329.63,392,329.63,293.66,349.23,440,349.23,261.63,329.63,392,523.25,440,392,329.63,293.66],t=()=>{if(!Vn)return;let e=Gn.createOscillator(),n=Gn.createGain();e.type="sine",e.frequency.value=i[fx++%i.length],n.gain.setValueAtTime(0,Gn.currentTime),n.gain.linearRampToValueAtTime(.035,Gn.currentTime+.04),n.gain.exponentialRampToValueAtTime(.001,Gn.currentTime+1.7),e.connect(n),n.connect(Gn.destination),e.start(),e.stop(Gn.currentTime+1.8)};t(),zd=setInterval(t,850)}Wn(),ci==="settings"&&sn("settings")}document.addEventListener("click",i=>{let t=i.target.closest("button,[data-hotspot],label[for]");if(!(!t||t.disabled)){if(t.dataset.page){Ln=t.dataset.page==="collection"?"collection":"home",Ti(),Wn(),window.scrollTo({top:0,behavior:"instant"});return}if(t.dataset.avatarTab){Dn=t.dataset.avatarTab,sn("avatar",{keepDraft:!0}),document.getElementById(`avatar-tab-${Dn}`)?.focus();return}if(t.dataset.avatarKey){Ze[t.dataset.avatarKey]=t.dataset.avatarValue,Ye.querySelectorAll(`[data-avatar-key="${t.dataset.avatarKey}"]`).forEach(e=>e.setAttribute("aria-pressed",String(e===t))),eh();return}if(t.dataset.hotspot){rn?.walkToHotspot(t.dataset.hotspot);return}if(t.dataset.explore){let e=t.dataset.explore;Ti(),Ln!=="home"&&(Ln="home",Wn()),rn?.walkToHotspot(e);return}if(t.dataset.modal){t.dataset.modal==="memory-editor"?ul():sn(t.dataset.modal);return}if(t.dataset.game){Ws({type:t.dataset.game},t.dataset.refresh);return}if(t.dataset.outingKind){dl=t.dataset.outingKind,sn("outing");return}if(t.dataset.marketTab){Xr=t.dataset.marketTab,sn("market");return}if(t.dataset.cartridge){fl=t.dataset.cartridge,sn("switch");return}if(t.dataset.buyFlower){Ws({type:"BUY_FLOWER",id:t.dataset.buyFlower},"market");return}if(t.dataset.cook){Ws({type:"COOK",id:t.dataset.cook},"cooking");return}if(t.dataset.destination){let e=Un.find(n=>n.id===t.dataset.destination);Ws({type:"OUTING",destinationId:e.id})&&Mx(e);return}if(t.dataset.collectionFilter){Xs=t.dataset.collectionFilter,Wn();return}if(t.dataset.memory){ul(_t.memories.find(e=>e.id===t.dataset.memory));return}if(t.dataset.item){Sx(t.dataset.item);return}if(t.dataset.piece!==void 0){let e=Number(t.dataset.piece);Zi<0?Zi=e:([Yi[Zi],Yi[e]]=[Yi[e],Yi[Zi]],Zi=-1,Yi.every((n,s)=>n===s)&&Ws({type:"SOLVE_PUZZLE"})),sn("puzzle");return}switch(t.dataset.action){case"close":Ti();break;case"interact":rn?.interact();break;case"retry-scene":Wn();break;case"fullscreen":{document.fullscreenElement?document.exitFullscreen?.().catch(()=>li("\u8BF7\u7528\u6D4F\u89C8\u5668\u7684\u5168\u5C4F\u6309\u94AE\u9000\u51FA\u3002")):document.documentElement.requestFullscreen?document.documentElement.requestFullscreen().catch(()=>li("\u5730\u56FE\u5DF2\u7ECF\u94FA\u6EE1\u7A97\u53E3\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u6D4F\u89C8\u5668\u5168\u5C4F\u3002")):li("\u5730\u56FE\u5DF2\u7ECF\u94FA\u6EE1\u7A97\u53E3\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6D4F\u89C8\u5668\u7684\u5168\u5C4F\u6A21\u5F0F\u3002");break}case"music":wx();break;case"puzzle-reference":pl=!pl,sn("puzzle");break;case"next-day":Ws({type:"NEXT_DAY"}),Ti();break;case"food-market":Xr="food",sn("market");break;case"new-memory":ul();break;case"new-character":Ze={...Yr,name:""},Dn="shape",sn("avatar",{keepDraft:!0}),document.getElementById("avatar-name")?.focus();break;case"edit-latest":ul(_t.memories.at(-1));break;case"remove-photo":{Nn=null,Ye.querySelector(".photo-upload").innerHTML=`${Ut("camera")}<span>\u4ECE\u76F8\u518C\u91CC\u6311\u4E00\u5F20</span><input class="file-input" id="memory-photo" type="file" accept="image/png,image/jpeg,image/webp,image/gif" aria-label="\u4ECE\u76F8\u518C\u91CC\u6311\u4E00\u5F20">`,document.getElementById("upload-status").textContent="\u7167\u7247\u5DF2\u79FB\u9664\uFF0C\u4FDD\u5B58\u540E\u751F\u6548\u3002",t.remove();break}case"export":{let e=new Blob([JSON.stringify(_t,null,2)],{type:"application/json"}),n=document.createElement("a");n.href=URL.createObjectURL(e),n.download=`\u6211\u4EEC\u7684\u623F\u95F4-\u7B2C${_t.day}\u5929.json`,n.click(),setTimeout(()=>URL.revokeObjectURL(n.href),1e3),li("\u4EBA\u7269\u548C\u623F\u95F4\u8FDB\u5EA6\u5DF2\u7ECF\u5B58\u5165\u5907\u4EFD\u3002");break}}}});document.addEventListener("keydown",i=>{let t=i.target.closest("[data-hotspot]");t&&(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),t.dispatchEvent(new MouseEvent("click",{bubbles:!0})))});Ye.addEventListener("click",i=>{if(i.target===Ye){let t=Ye.getBoundingClientRect();(i.clientX<t.left||i.clientX>t.right||i.clientY<t.top||i.clientY>t.bottom)&&Ti()}});Ye.addEventListener("cancel",()=>{ci="",rn?.resume()});Ye.addEventListener("close",()=>{ci="",rn?.resume(),_l?.focus?.()});document.addEventListener("fullscreenchange",()=>{let i=document.querySelector("[data-action=fullscreen]");i&&i.setAttribute("aria-label",document.fullscreenElement?"\u9000\u51FA\u5168\u5C4F":"\u8FDB\u5165\u5168\u5C4F"),rn?.resize()});document.addEventListener("input",i=>{if(ci!=="avatar"||!Ze)return;i.target.id==="avatar-name"&&(Ze.name=i.target.value,document.getElementById("avatar-error").textContent="",eh());let t=i.target.dataset.avatarSlider;t&&(Ze[t]=Number(i.target.value),document.getElementById(`value-${t}`).textContent=i.target.value,eh())});document.addEventListener("keydown",i=>{!i.target.closest("[data-avatar-tab]")||!["ArrowLeft","ArrowRight"].includes(i.key)||(i.preventDefault(),Dn=Dn==="shape"?"face":"shape",sn("avatar",{keepDraft:!0}),document.getElementById(`avatar-tab-${Dn}`)?.focus())});document.addEventListener("submit",i=>{if(i.target.id==="avatar-form"){if(i.preventDefault(),!Ze.name.trim()){document.getElementById("avatar-error").textContent="\u5148\u7ED9\u4EBA\u7269\u8D77\u4E2A\u540D\u5B57\u5427\u3002",document.getElementById("avatar-name").focus();return}let o=vl(_t,{type:"SAVE_CHARACTER",character:Qe(Ze)});o.success&&(_t=o.state,ml(),Ti(),Wn(),li(Ai||`${_t.character.name}\uFF0C\u6B22\u8FCE\u56DE\u5BB6\u3002`));return}if(i.target.id!=="memory-form")return;i.preventDefault();let t=new FormData(i.target),e=t.get("title").trim(),n=t.get("description").trim();if(!e||!n){document.getElementById("form-error").textContent="\u8BF7\u586B\u5199\u540D\u5B57\u548C\u8FD9\u4EF6\u7269\u54C1\u80CC\u540E\u7684\u6545\u4E8B\u3002";return}if(!oi&&!Nn){document.getElementById("form-error").textContent="\u8BF7\u5148\u9009\u62E9\u4E00\u5F20\u7167\u7247\uFF0C\u518D\u4FDD\u5B58\u5230\u51B0\u7BB1\u3002";return}let s={...oi||{},id:oi?.id||`personal-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,title:e,description:n,date:t.get("date"),day:oi?.day||_t.day,kind:oi?.kind||"home",theme:oi?.theme||"home"};Nn?s.image=Nn:delete s.image;let r=_t.memories.findIndex(o=>o.id===s.id);r>=0?_t.memories[r]=s:_t.memories.push(s);let a=Un.find(o=>s.id.startsWith(`outing-${o.id}-day-`));a?(_t.photos=_t.photos.filter(o=>o!==s.id),_t.photos.includes(a.photo.id)||_t.photos.push(a.photo.id)):s.image&&!_t.photos.includes(s.id)?_t.photos.push(s.id):s.image||(_t.photos=_t.photos.filter(o=>o!==s.id)),_t=ts(_t),ml(),Ln="collection",Xs="all",Wn(),Ti(),li(Ai||"\u7167\u7247\u4E0E\u6545\u4E8B\u5DF2\u4FDD\u5B58\uFF0C\u53EF\u4EE5\u5728\u6536\u85CF\u548C\u623F\u95F4\u7269\u4EF6\u4E2D\u67E5\u770B\u3002")});document.addEventListener("change",async i=>{if(i.target.id==="memory-photo"){let t=i.target.files[0];if(!t)return;let e=document.getElementById("upload-status");if(!/^image\/(png|jpeg|webp|gif)$/.test(t.type)){e.textContent="\u8BF7\u9009\u62E9 JPG\u3001PNG\u3001WebP \u6216 GIF \u7167\u7247\u3002";return}if(t.size>15*1024*1024){e.textContent="\u8FD9\u5F20\u7167\u7247\u6709\u70B9\u5927\uFF0C\u8BF7\u9009\u62E9 15MB \u4EE5\u5185\u7684\u7167\u7247\u3002";return}let n=Ye.querySelector("button[type=submit]");n.disabled=!0,e.textContent="\u6B63\u5728\u6574\u7406\u7167\u7247\u2026",document.getElementById("form-error").textContent="";try{let s=await createImageBitmap(t),r=Math.min(1,900/Math.max(s.width,s.height)),a=document.createElement("canvas");a.width=Math.round(s.width*r),a.height=Math.round(s.height*r),a.getContext("2d").drawImage(s,0,0,a.width,a.height),Nn=a.toDataURL("image/jpeg",.76),s.close();let o=document.createElement("img");if(o.src=Nn,o.alt="\u5DF2\u9009\u62E9\u7684\u56DE\u5FC6\u7167\u7247",o.width=420,o.height=260,Ye.querySelector(".photo-upload").replaceChildren(o,i.target),e.textContent="\u7167\u7247\u5DF2\u7ECF\u8D34\u597D\uFF0C\u518D\u5199\u4E00\u70B9\u90A3\u5929\u7684\u5C0F\u4E8B\u5427\u3002",!Ye.querySelector("[data-action=remove-photo]")){let l=document.createElement("button");l.type="button",l.className="text-button",l.dataset.action="remove-photo",l.textContent="\u79FB\u9664\u7167\u7247",e.after(l)}}catch{e.textContent="\u8FD9\u5F20\u7167\u7247\u6682\u65F6\u6CA1\u6709\u6253\u5F00\uFF0C\u8BF7\u6362\u4E00\u5F20\u518D\u8BD5\u8BD5\u3002"}finally{n.disabled=!1}}if(i.target.id==="import-save"){let t=i.target.files[0];if(!t)return;try{if(t.size>16*1024*1024)throw Error();let e=JSON.parse(await t.text());if(e.version!==1||!Number.isInteger(e.day)||!Array.isArray(e.memories))throw Error();let n=ts(e);ci="confirm-import",gl.innerHTML=De("\u6062\u590D\u4E4B\u524D\u7684\u623F\u95F4",`\u5907\u4EFD\u91CC\u662F\u7B2C ${n.day} \u5929\uFF0C${Js(n)} \u4EF6\u6536\u85CF\u3002`,'<p class="item-story">\u5BFC\u5165\u540E\uFF0C\u4F1A\u7528\u8FD9\u4EFD\u5907\u4EFD\u66FF\u6362\u5F53\u524D\u623F\u95F4\u7684\u8FDB\u5EA6\u3002\u5EFA\u8BAE\u5148\u5BFC\u51FA\u5F53\u524D\u5B58\u6863\u3002</p><div class="modal-bottom-actions"><button class="secondary-button" data-modal="settings">\u5148\u4E0D\u5BFC\u5165</button><button class="primary-button" id="confirm-import">\u786E\u8BA4\u6062\u590D\u8FD9\u4EFD\u5907\u4EFD</button></div>'),document.getElementById("confirm-import").addEventListener("click",()=>{_t=n,ml(),Ln="home",Wn(),Ti(),li("\u719F\u6089\u7684\u623F\u95F4\uFF0C\u53C8\u56DE\u6765\u4E86\u3002")},{once:!0})}catch{li("\u8FD9\u4EFD\u5907\u4EFD\u6682\u65F6\u65E0\u6CD5\u8BFB\u53D6\u3002\u8BF7\u9009\u62E9\u4ECE\u623F\u95F4\u8BBE\u7F6E\u4E2D\u5BFC\u51FA\u7684 JSON \u5B58\u6863\u3002")}}});Wn();})();

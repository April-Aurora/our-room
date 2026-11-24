import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { Script } from 'node:vm';
import { build } from 'esbuild';

const root=fileURLToPath(new URL('.',import.meta.url));
const [template,...styles]=await Promise.all([
  readFile(new URL('./index.html',import.meta.url),'utf8'),
  ...['style.css','exploration.css','room3d.css'].map(name=>readFile(new URL(name,import.meta.url),'utf8')),
]);
const result=await build({absWorkingDir:root,entryPoints:['app.js'],bundle:true,write:false,format:'iife',platform:'browser',target:'es2022',minify:true,legalComments:'none',logLevel:'warning'});
const bundle=result.outputFiles[0].text;
new Script(bundle,{filename:'app.bundle.js'});
await writeFile(new URL('./app.bundle.js',import.meta.url),bundle,'utf8');
const safeBundle=bundle.replace(/<\/script/gi,'<\\/script');
const safeStyle=styles.join('\n').replace(/<\/style/gi,'<\\/style');
const standalone=template
  .replace(/<link\s+rel="stylesheet"\s+href="style\.css"\s*\/?>/,()=>`<style>\n${safeStyle}\n</style>`)
  .replace(/[ \t]*<link\s+rel="stylesheet"\s+href="(?:exploration|room3d)\.css"\s*\/?>\r?\n?/g,'')
  .replace(/[ \t]*<script\s+defer\s+src="app\.bundle\.js"><\/script>\r?\n?/,'')
  .replace(/<\/body>/i,()=>`<script>${safeBundle}</script>\n</body>`);
if(/src="app\.bundle\.js"|href="(?:style|exploration|room3d)\.css"/.test(standalone))throw new Error('Standalone file still contains an external application asset.');
const output=new URL('./我们的房间.html',import.meta.url);
await writeFile(output,standalone,'utf8');
await mkdir(new URL('./docs/',import.meta.url),{recursive:true});
await writeFile(new URL('./docs/index.html',import.meta.url),standalone,'utf8');
await writeFile(new URL('./docs/.nojekyll',import.meta.url),'','utf8');
console.log(`Built ${fileURLToPath(output)} (${Math.ceil(Buffer.byteLength(standalone)/1024)} KB).`);
console.log('GitHub Pages entry: docs/index.html');
console.log('Three.js and all application assets are embedded. JavaScript syntax verified.');

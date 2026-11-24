import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, extname, sep } from 'node:path';
const root = fileURLToPath(new URL('.', import.meta.url));
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.md':'text/plain; charset=utf-8'};
http.createServer(async (req,res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    const file = resolve(root, pathname === '/' ? 'index.html' : '.' + pathname);
    if (!file.startsWith(root.endsWith(sep) ? root : root + sep)) { res.writeHead(403); return res.end('Forbidden'); }
    const content = await readFile(file);
    res.writeHead(200,{'Content-Type':mime[extname(file)] || 'application/octet-stream','Cache-Control':'no-cache'});
    res.end(content);
  } catch { res.writeHead(404); res.end('Not found'); }
}).listen(5188,'127.0.0.1',()=>console.log('Little Days is ready at http://127.0.0.1:5188'));

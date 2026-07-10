(async()=>{
  const files=["./app.00.b64", "./app.01.b64", "./app.02.b64", "./app.03.b64", "./app.04.b64", "./app.05.b64", "./app.06.b64"];
  const parts=await Promise.all(files.map(async file=>{const response=await fetch(file);if(!response.ok)throw new Error(`Failed to load ${file}: ${response.status}`);return response.text();}));
  const binary=atob(parts.join(""));
  const bytes=Uint8Array.from(binary,char=>char.charCodeAt(0));
  const code=new TextDecoder().decode(bytes);
  Function(code)();
})().catch(error=>{console.error(error);document.body.innerHTML=`<main style="font-family:system-ui;padding:24px;color:white;background:#0b1018;min-height:100vh"><h1>Move Mission Control could not start</h1><p>${error.message}</p></main>`;});

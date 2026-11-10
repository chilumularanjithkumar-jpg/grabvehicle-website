// Shows the support contact configured in the GrabVehicle admin settings (Supabase gv_app_config: support_email / support_phone).
(async()=>{const U='https://jxvkclkyjbwytctbools.supabase.co',K='sb_publishable_z_khRPoapkU9ceL8tc2FNQ_o9QeROy4';
 try{const r=await fetch(U+'/rest/v1/rpc/gv_public_config',{method:'POST',headers:{apikey:K,'Content-Type':'application/json'},body:'{}'});const c=await r.json();
  document.querySelectorAll('[data-email]').forEach(e=>{if(c.support_email){e.innerHTML='';const a=document.createElement('a');a.href='mailto:'+c.support_email+(e.dataset.email?'?subject='+encodeURIComponent(e.dataset.email):'');a.textContent=c.support_email;e.appendChild(a)}});
  document.querySelectorAll('[data-phone]').forEach(e=>{if(c.support_phone){e.innerHTML='';const a=document.createElement('a');a.href='tel:'+c.support_phone.replace(/\s/g,'');a.textContent=c.support_phone;e.appendChild(a)}});
 }catch(e){}})();

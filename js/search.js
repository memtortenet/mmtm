window.onload=function(){var u=new URLSearchParams(window.location.search),i=u.get("query"),n,r,t;i&&(n=document.getElementById("searchResults"),n.innerHTML="",r=getSearchResult(i)||[],r.length>0?r.forEach(function(t){var u=t.item,r=document.createElement("div"),i;r.className="search-result-item";i=document.createElement("a");i.href=u.url;i.textContent=u.title;r.appendChild(i);n.appendChild(r)}):(t=document.createElement("div"),t.className="no-results-message",t.textContent='Nincs találat erre: "'+i+'"',n.appendChild(t)))}
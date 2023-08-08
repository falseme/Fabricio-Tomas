document.addEventListener("DOMContentLoaded", (e) => {
  const includeHTML = (el, url, replacedef) => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", (e) => {
      if (xhr.readyState !== 4) return;

      if (xhr.status >= 200 && xhr.status < 300) {
        var content = xhr.responseText;
        if (replacedef != "null" && content.includes(replacedef)) {
          var init = content.search(replacedef);
          var end = init + replacedef.length;
          var firstpart = content.substring(0, init);
          var secondpart = content.substring(end);
          content = firstpart + `<b>${replacedef}</b>` + secondpart
        }
        el.outerHTML = content;
      } else {
        let message =
          xhr.statusText ||
          "Error loading the file, verify that you are making the request by http or https";
        el.outerHTML = `<div><p>Error ${xhr.status}: ${message}</p></div>`;
      }
    });

    xhr.open("GET", url);
    xhr.setRequestHeader("Content-type", "text/html; charset=utf-8");
    xhr.send();
  };

  document
    .querySelectorAll("[data-include]")
    .forEach((el) => includeHTML(el, el.getAttribute("data-include"), el.getAttribute("replace-default")));
});

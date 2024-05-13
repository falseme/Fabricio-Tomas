document.addEventListener("DOMContentLoaded", (e) => {

  const include_element = (el, url) => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", (e) => {
      if (xhr.readyState !== 4) return;
      if (xhr.status >= 200 && xhr.status < 300) {
        var content = xhr.responseText;
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

  const include_bold_element = (el, url, bold_text) => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", (e) => {
      if (xhr.readyState !== 4) return;
      if (xhr.status >= 200 && xhr.status < 300) {
        var content = xhr.responseText;
        content = content.replace(bold_text, "<b>"+bold_text+"</b>");
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

  const include_element_replace = (el, url, default_text, replace_text) => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", (e) => {
      if (xhr.readyState !== 4) return;
      if (xhr.status >= 200 && xhr.status < 300) {
        var content = xhr.responseText;
        content = content.replace(default_text, replace_text);
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
    .forEach((el) => include_element(el, el.getAttribute("data-include")));

  document
    .querySelectorAll("[data-include-bold]")
    .forEach((el) => include_bold_element(el, el.getAttribute("data-include-bold"), el.getAttribute("bold")));

  document
    .querySelectorAll("[data-include-replace]")
    .forEach((el) => include_element_replace(el, el.getAttribute("data-include-replace"), el.getAttribute("replace"), el.getAttribute("with")));
});

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ext = [".com", ".net", ".org"];

  // 1 recorrer pronum con un for
  // 2 recorrer adj con un for
  // 3 recorrer noun con un for
  // 4 concatenar los elementos
  // 5 almacenar en algun lado armando unas li

  // renderizar en un elemento html
  /*   let mylist = "";

  function domain() {
    let listfull = "";
    for (let index = 0; index < pronoun.length; index++) {
      const element = pronoun[index];

      for (let index2 = 0; index2 < adj.length; index2++) {
        const element2 = element + adj[index2];

        for (let index3 = 0; index3 < noun.length; index3++) {
          const element3 = element2 + noun[index3];
          for (let index4 = 0; index4 < ext.length; index4++) {
            const element4 = element3 + ext[index4];

            let mytag = `<li class="list-group-item">${element4}</li>`;
            listfull += mytag;
          }
        }
      }
    }
    document.querySelector("#domain").innerHTML = listfull;
  }
  domain(); */
  // let mylist = "";

  function domain() {
    let fulldomain = "";
    for (let index1 = 0; index1 < pronoun.length; index1++) {
      const element1 = pronoun[index1];
      for (let index2 = 0; index2 < adj.length; index2++) {
        const element2 = element1 + adj[index2];
        for (let index3 = 0; index3 < noun.length; index3++) {
          const element3 = element2 + noun[index3];
          for (let index4 = 0; index4 < ext.length; index4++) {
            const element4 = element3 + ext[index4];

            let mytag = `<li class="list-group-item">${element4}</li>`;
            fulldomain += mytag;
          }
        }
      }
    }
    document.querySelector("#domain").innerHTML = fulldomain;
  }
  domain();
};

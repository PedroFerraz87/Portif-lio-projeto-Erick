const body = document.body;
body.style.fontFamily = "Arial, sans-serif";
body.style.backgroundColor = "#f4f4f9";
body.style.margin = "0";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.height = "100vh";

const container = document.createElement("div");
container.style.textAlign = "center";
container.style.background = "#fff";
container.style.padding = "20px";
container.style.borderRadius = "10px";
container.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
body.appendChild(container);

const title = document.createElement("h1");
title.textContent = "Entre em Contato";
title.style.color = "#333";
container.appendChild(title);

function createContactItem(text, href, isExternal = false) {
    const item = document.createElement("div");
    item.style.margin = "10px 0";

    const link = document.createElement("a");
    link.textContent = text;
    link.href = href;
    link.style.textDecoration = "none";
    link.style.color = "#007bff";
    link.style.fontWeight = "bold";

    if (isExternal) {
        link.target = "_blank";
    }

    link.addEventListener("mouseover", () => (link.style.textDecoration = "underline"));
    link.addEventListener("mouseout", () => (link.style.textDecoration = "none"));

    item.appendChild(link);
    container.appendChild(item);
}
createContactItem("Email: pvf@cesar.school", "mailto:pvf@cesar.school");
createContactItem("Celular: +55 81 99844-3116", "tel:+558199844116");
createContactItem("LinkedIn: Seu Perfil", "https://www.linkedin.com/in/pedro-valen%C3%A7a-ferraz/", true);
